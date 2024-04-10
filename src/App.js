// Class API

import { Component, useState } from 'react'

class Son extends Component {
  componentDidMount() {
    console.log('组件渲染完毕了，请求发送起来')
    this.timer = setInterval(() => {
      console.log('定时器运行中')
    }, 1000)
  }

  componentWillUnmount() {
    console.log('组件son被卸载了')
    clearInterval(this.timer)
  }
  render() {
    return <div>Son</div>
  }
}

function App() {
  const [son, setSon] = useState(true)
  return (
    <>
      {son && <Son></Son>}
      <button onClick={() => setSon(false)}></button>
    </>
  )
}

export default App
