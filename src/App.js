import { memo, useMemo, useState } from 'react'

function Son(params) {
  console.log('Son重新渲染了')
  return <div>son</div>
}
const MemoSon = memo(Son)
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Son />
      <MemoSon />
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}
    </div>
  )
}

export default App
