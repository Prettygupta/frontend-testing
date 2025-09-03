import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement, incrementByAmount } from './store/counterSlice'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Redux</h1>
      <div className="card">
        <div>
          <button onClick={() => dispatch(increment())}>+</button>
          <span style={{ margin: '0 20px', fontSize: '24px' }}>
            count is {count}
          </span>
          <button onClick={() => dispatch(decrement())}>-</button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <button onClick={() => dispatch(incrementByAmount(5))}>
            Add 5
          </button>
        </div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
