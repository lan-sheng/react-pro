import { useEffect } from 'react'
import { create } from 'zustand'
const URL = 'http://geek.itheima.net/v1_0/channels'

const createCounterStore = set => {
  return {
    count: 0,
    inc: () => {
      set(state => ({ count: state.count + 1 }))
    },
  }
}

const createChannelStore = set => {
  return {
    channelList: [],
    fetchGetList: async () => {
      const res = await fetch(URL)
      const jsonRes = await res.json()

      set({
        channelList: jsonRes.data.channels,
      })
    },
  }
}

const useStore = create((...set) => {
  return {
    ...createChannelStore(...set),
    ...createCounterStore(...set),
  }
})

function App() {
  const { count, inc, channelList, fetchGetList } = useStore()
  useEffect(() => {
    fetchGetList()
  }, [fetchGetList])
  return (
    <>
      <button onClick={inc}>{count}</button>
      <ul>
        {channelList.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </>
  )
}

export default App
