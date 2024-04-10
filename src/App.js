import { memo, useMemo, useState } from 'react'

function Son({ count }) {
  console.log('Son重新渲染了')
  return <div>son{count}</div>
}
const MemoSon = memo(Son)
function App() {
  console.log('App重新渲染了')
  const [count, setCount] = useState(0)
  const num = 100
  const arr = [1, 2, 3]
  const newArr = useMemo(() => arr, [])
  return (
    <div className="App">
      {/* <Son /> */}
      {/* <MemoSon count={count} /> */}
      {/* <MemoSon count={num} /> */}
      {/* <MemoSon count={arr} /> */}
      <MemoSon count={newArr} />
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
    </div>
  )
}

export default App
