import React from 'react'

class Base extends React.Component {
  log(message) {
    console.log('[LOG][' + new Date().toLocaleString() + '] : ' + message)
  }
}

class MyComponent extends Base {
  render() {
    this.log('这里调用了Base基类的log方法，打印日志')
    return (
      <div>
        <h4>这里是myComponent组件的标题</h4>
        <p>这里是myComponent组件的内容</p>
      </div>
    )
  }
}

React.render(<MyComponent />, document.getElementById('result'))
