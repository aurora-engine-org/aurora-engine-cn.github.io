# 日志
## 自定义日志替换
`aurora.Log`日志接口
```go
type Log interface {
	Info(...interface{})
	Error(...interface{})
	Debug(...interface{})
	Panic(...interface{})
	Warn(...interface{})
}
```
使用自定义的 `logrus`
```go
a.Use(logrus.New())
aurora.Run(a)
```