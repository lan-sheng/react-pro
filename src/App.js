import { forwardRef, useRef, useImperativeHandle } from 'react'

const Son = forwardRef((props, ref) => {
  const inputRef = useRef(null)
  const focusHandler = () => {
    console.log(inputRef.current)
    inputRef.current.focus()
  }
  useImperativeHandle(ref, () => {
    return {
      focusHandler,
    }
  })
  return <input type="text" ref={inputRef} />
})

// 父组件
function App() {
  const sonRef = useRef(null)
  const showRef = () => {
    console.log(sonRef.current)
    sonRef.current.focusHandler()
  }
  return (
    <>
      <Son ref={sonRef} />
      <button onClick={showRef}>focus</button>
    </>
  )
}

export default App
