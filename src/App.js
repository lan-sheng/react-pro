import { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'INC':
      return state + 1
    case 'DEC':
      return state - 1
    case 'SET':
      return action.payload
    default:
      return state
  }
}
function App() {
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <>
      <button onClick={() => dispatch({ type: 'INC' })}>+</button>
      {state}
      <button onClick={() => dispatch({ type: 'DEC' })}>-</button>
      <button onClick={() => dispatch({ type: 'SET', payload: 100 })}>100</button>
    </>
  )
}

export default App
