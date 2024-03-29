
# 快速开始
本节将帮助您从零开始构建一个 `Aurora web` 项目
::: tip
本教程也假设您有一定的编程基础，能够大致明白GO语言代码的意思，如果您在阅读Go代码方面遇见问题，可以访问 [golang](https://golang.google.cn/)。
:::

## Go 版本
```text
go1.20.4
```

## 导入依赖
```go
import "gitee.com/aurora-engine/aurora"
```

## 创建服务器
创建一个结构体，嵌套一个 `*aurora.Engine` 实例。
### 第一步 创建Serve
```go
// Server 嵌套Engine定义一个服务 实例
type Server struct {
    *aurora.Engine
}
```

### 第二步 创建实现接口
开始实现 `aurora.Application` 接口中的两个方法,`Server()` 和 `Router()`, `Server()` 函数仅用于加载服务运行期间的依赖组件，`Router()` 函数则负责定义服务的路由部分，他们在某些特定的情况下需要严格区分。
下面的实现中在 `Router()` 中定义了一个 `Get` 请求，请求路径为 `/`。
```go
func (server *Server) Server() {
	// 进行一下初始化操作，比如 控制器实例，全局中间件，全局变量，第三方依赖库等操作
	// 请不要在 Server()函数中进行路由注册，Server()函数 仅负责加载组件依赖
}

func (server *Server) Router() {
	// 添加 web 路由
	// Router() 函数内可以做任何处理，路由分组，路由中间件等

	server.Get("/", func() string {
		return "hello world"
	})
}
```

### 第三步 启动服务器
```go
func main(){
    err := aurora.Run(&Server{aurora.New()})
    if err != nil {
        panic(err)
    }
}
```