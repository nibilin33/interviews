const script = document.createElement('script')

script.type = 'text/javascript'

script.src = `https://www.gogoing.site/api/auth?username=user&callback=authCallback`

document.body.appendChild(script)

function authCallback(data) {
  console.log(data)
}
/*
通过该链接请求服务器返回回来的内容的script脚本，如以下示例内容：

authCallback({code: 200, data: {...}})
浏览器在加载该脚本后将会执行authCallback方法，从而实现跨域。

缺点：该方法只支持GET请求且需要服务器配合
*/