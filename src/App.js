import { create } from 'zustand'

const useStore = create(set => {
  return {
    count: 0,
    inc: () => {
      set(state => ({ count: state.count + 1 }))
    },
  }
})

function App () {
  const {count,inc}=useStore()
  return <><button onClick={inc}>{ count}</button></>
}

export default App
