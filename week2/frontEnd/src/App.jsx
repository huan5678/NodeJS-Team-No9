import { useState } from 'react';

import TheCreatePost from './components/TheCreatePost';
import TheHeader from './components/TheHeader';
import TheMenu from './components/TheMenu';
import TheTitleBar from './components/TheTitleBar';
import logo from './logo.svg';

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="bg-gray">
      <div className="bg-pattern">
        <TheHeader />
        <section className="container py-12">
          <div className="md:grid md:grid-cols-3 md:gap-4">
            <div className="md:col-span-2 flex flex-col space-y-4">
              <TheTitleBar content="張貼動態" />
              <TheCreatePost />
            </div>
            <TheMenu />
          </div>
        </section>
        <header className="min-h-screen flex flex-col justify-center items-center
        text-[calc(10px+2vmin)] space-y-2"
        >
          <img src={logo} className="animate-[spin_20s_linear_infinite] h-[40vmin]" alt="logo" />
          <p className="text-4xl">Hello Vite + React!</p>
          <p>
            <button className="btn px-8 bg-white" type="button" onClick={() => setCount(count + 1)}>
              count is:
              {count}
            </button>
          </p>
          <p>
            Edit
            {' '}
            <code>App.jsx</code>
            {' '}
            and save to test HMR updates.
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
  );
}

export default App;
