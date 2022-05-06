import { Route, Routes } from 'react-router-dom';

import TheCreatePost from './components/TheCreatePost';
import TheHeader from './components/TheHeader';
import TheMenu from './components/TheMenu';
import ThePostsWall from './components/ThePostsWall';
import TheTitleBar from './components/TheTitleBar';

function App() {
  return (
    <main className='bg-gray'>
      <div className='bg-pattern min-h-screen'>
        <TheHeader />
        <section className='container py-12'>
          <div className='md:grid md:grid-cols-3 md:gap-4'>
            <div className='md:col-span-2 flex flex-col space-y-4'>
              <Routes>
                <Route path='/' element={<ThePostsWall />} />
                <Route
                  path='/createPost'
                  element={
                    <>
                      <TheTitleBar content='張貼動態' />
                      <TheCreatePost />
                    </>
                  }
                />
              </Routes>
            </div>
            <TheMenu />
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
