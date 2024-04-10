// Class API

import { Component } from 'react'

class Counter extends Component {
  state = {
    count: 0,
  }
  setCount = () => {
    // 修改状态数据
    this.setState({
      count: this.state.count + 1,
    })
  }
  render() {
    return <button onClick={this.setCount}>{this.state.count}</button>
  }
}

function App() {
  return (
    <>
      <Counter></Counter>
    </>
  )
}

export default App
