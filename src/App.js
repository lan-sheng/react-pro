// Class API

import { Component, useState } from 'react'

class Son extends Component {
  render() {
    return (
      <div>
        Son {this.props.msg}
        <button onClick={() => this.props.onGetSonMsg('我是son组件中的数据')}>dianji</button>
      </div>
    )
  }
}
class Parent extends Component {
  state = {
    msg: 'parent',
  }
  getSonMsg = msg => {
    console.log('msg: ', msg)
  }
  render() {
    return (
      <div>
        Parent <Son msg={this.state.msg} onGetSonMsg={this.getSonMsg} />
      </div>
    )
  }
}

function App() {
  return <>{<Parent></Parent>}</>
}

export default App
