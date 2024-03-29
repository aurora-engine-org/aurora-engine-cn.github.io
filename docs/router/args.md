# 路由解析

## 参数解析规则
`aurora` 中**任何请求的参数解析规则,都是按照传递参数的顺序自动一一对应解析的**,就如同函数调用一般,
参数的顺序规则是 `RESTFul参数 > get请求参数 > post 请求参数`(按顺序从左到右排序的优先级),
当一个请求中同时带有多个类型的参数时候, 需要更具,优先级定义参数的入参位置(内置的系统参数排除在外规则之外)

## Get 请求
### 基础解析
Get请求参数的获取,和处理器定义的参数名无关,只与处理器的如参顺序和类型有关,下面的解析会把对应的,
`age=20`赋值给第一个入参`age int`,`name=saber`对应赋值给`name string`,如果顺序反了,将会发生解析错误的提示
```go
// GET http://localhost:8080/get?age=20&name=saber
a.Get("/get", func(age int, name string) {
    fmt.Printf("age: %d, name: %s", age, name)
})
```

### map 解析
通过map可以 k/v 形式的参数,使用map解析请求需要注意的一点,如上述的参数类型存在多种则只能通过 `map[string]interface{}` 或者 `map[string]string` 这样的形式来处理否则参数解析将失败.
```go
// GET http://localhost:8080/get?age=20&name=saber
a.Get("/get", func(data map[string]string) {
    fmt.Println(data)
}) 
```
### struct 解析
Get也可以通过自定义结构体来接收参数,结构体的字段必须为可导出,即大写字母开头
```go
type Get struct {
    Name string
    Age  int
}
// GET http://localhost:8080/get?age=20&name=saber
a.Get("/get", func(data Get) {
    fmt.Println(data)
})
```

### Get 切片解析
Get请求的数组或者切片接收参数只能通过 `map`或者 `starcut` 来进行解析
```go
type Arg struct {
	Id   []string  // Id 和 入参 id保持一直
}
// GET http://localhost:8080/get?id=20&id=21
a.Get("/get", func(data Arg) {
    fmt.Println(data)
})
```
## Post 请求
Post 请求的参数解析对应更加简单，大多是以`struct`或者`map`的方式进行接收，我们先准备一个请求体作为测试的例子
```json
{
    "name": "test",
    "age": 16,
    "gender": "男",
    "address":["aa","bb"],
    "report":{
    	"a":11,
    	"b":12
    }
}
```
开始对应的进行一个结构体封装
```go
//对应结构体
type Post struct {
    Name    string
    Age     int
    Gender  string
    Address []string
    Report  map[string]interface{}
}
```
`Report` 并不是一定要用 `map` 接收，您也可以换成对应的结构体.
### struct,pointer 以及 map
```go
a.Post("/post1", func(post Post) {
    fmt.Println(post)
})
    
a.Post("/post2", func(post *Post) {
    fmt.Println(post)
})
    
a.Post("/post3", func(post map[string]interface{}) {
    fmt.Println(post)
})
```
::: danger
注意 : 在处理器的函数参为结构体或结构体指针解析请求，必须使用可导出的字段，否则无法解析参数 , `map[string]string` 在Get中适用而在Post中并不适用于复杂结构体 。
:::

## File 上传
文件上传,提供了一个内部变量`*web.MultipartFile`作为支持,通过它可以很轻松的拿到上传的文件
### MultipartFile
通过系统参数 `*web.MultipartFile` 可以获取到上传的文件信息
```go
server.Post("/upload", func(file *web.MultipartFile) {
    for _, headers := range file.File {
        err := file.SaveUploadedFile(headers[0],path+headers[0].Filename)
        if err != nil {
            panic(err)
        }
    }
})
```

### Body & File
文件混合请求体上传方式
```go
// data 可以是任何定义被接收表单数据的 类型
server.Post("/upload", func(data any, file *web.MultipartFile) {
    for _, headers := range file.File {
        err := file.SaveUploadedFile(headers[0], path+headers[0].Filename)
        if err != nil {
            panic(err)
        }
    }
})
```

## Group 
通过调用 `Group(url string, interceptor ...web.Interceptor)` 方法来进行接口分组，在分组中使用中间件和全局使用中间件是隔离开的，分组会触发全局中间件到每个用分组创建的接口中。
`Group` 的 `Use()` 方法仅仅用于当前分组的全局中间件
```go
func (a *Aurora) Group(url string, interceptor ...web.Interceptor) *Group
func (g *Group) Group(url string, interceptor ...web.Interceptor) *Group
```


## 拦截器
中间件的功能在`v1.3.17`中和拦截器进行合并。需要实现 `web.Interceptor`接口。和中间件参数相差不大，多了一个参数 `handler` 记录了
处理器的基础信息。
```go
type Interceptor interface {
    // 处理器执行之前 执行Before，Before执行返回true，err为空将会放行执行处理器或者下一个拦截器
	Before(ctx Context, handler any) (bool, error)
	// 处理器执行完毕后调用 Complete 
	Complete(ctx Context, handler any) error
	// 响应结果写入给客户端之后调用 After
	After(ctx Context, handler any) error
}
```
### 全局拦截器
直接调用 `Engine.Interceptors(Before{})` (Before{}是一个实现 `web.Interceptor`的结构体)方法即可,任何接口执行之前都会被 `Before` 拦截器优先处理。

### 分组拦截器
和全局的注册方式一致 `Group.Interceptors(...)` 方法即可

### 局部中间件
在注册函数的最后一个参数是一个可变参数，能给一个接口配置多个拦截器 (Before{}是一个实现 `web.Interceptor`的结构体)
```go
a.Get("/", func() {}, Before{})
```
### 拦截器处理中断
某个拦截器如果逻辑处理失败，我们需要正常的对客户端做出响应，通过 `web.Context` 的 `func (c Context) Return(value ...any)` 来完成。
::: danger
注意 : 中断处理应该在Before中使用，在After中使用中断处理并没有任何效果
:::

## 跨域
`aurora`提供一个默认的跨域处理工具，开发者也可以自定义，自定义跨域只需要一个函数即可。通过函数返回一个 `bool`值来处理跨域检测。
```go
type CorsHandle func(r *http.Request, w http.ResponseWriter) bool
```
默认提供的跨域处理使用例子:
```go
func Cors() web.CorsHandle {
	corsOpt := web.NewDefaultCors()
	corsOpt.Domain(http.MethodPost, "/*")
	corsOpt.Domain(http.MethodGet, "/*")
	corsOpt.Domain(http.MethodDelete, "/*")
	corsOpt.Domain(http.MethodPut, "/*")
	return corsOpt.Handle()
}
```
应用配置
```go
Engine.Use(Cors())
```
