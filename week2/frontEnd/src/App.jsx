import { useState } from 'react'
import logo from './logo.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="bg-gray">
      <div className="bg-pattern">
        <header className="min-h-screen flex flex-col justify-center items-center
        text-[calc(10px+2vmin)] space-y-2">
          <img src={logo} className="animate-[spin_20s_linear_infinite] h-[40vmin]" alt="logo" />
          <p className="text-4xl">Hello Vite + React!</p>
          <p>
            <button className="btn px-8 bg-white" type="button" onClick={() => setCount((count) => count + 1)}>
              count is: {count}
            </button>
          </p>
          <p>
            Edit <code>App.jsx</code> and save to test HMR updates.
          </p>
          <p>
            <a
              className="text-[#61dafb]"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            {' | '}
            <a
              className="text-[#61dafb]"
              href="https://vitejs.dev/guide/features.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Vite Docs
            </a>
          </p>
        </header>
      </div>
    </main>
  )
}

export default App
