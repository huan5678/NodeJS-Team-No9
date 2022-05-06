import React, { useState } from 'react';

import avatarImage from '../assets/images/avatar.png';
import fakeImage from '../assets/images/image.png';
import avatar6Image from '../assets/images/user6.png';

function ThePostsWall() {
  const [selected, setSelected] = useState('');
  const [inputed, setInputed] = useState('');
  console.log(inputed);
  console.log(selected);
  return (
    <>
      <div className='flex justify-between'>
        <select
          className='basis-1/3 border-2 border-black mr-2'
          name='posts-filter'
          onChange={(e) => setSelected(e.target.value)}
          value={selected}
        >
          <option defaultValue='最新'>最新貼文</option>
          <option value='最舊'>最舊貼文</option>
        </select>
        <div className='flex basis-2/3 items-center border-2 border-black'>
          <input
            className='h-11 placeholder:pl-4 flex-auto w-68'
            type='text'
            placeholder='搜尋貼文'
            onChange={(e) => setInputed(e.target.value)}
          />
          <button
            type='submit'
            className='flex justify-center items-center p-1 w-11 h-11 focus:outline-none focus:shadow-outline bg-primary border-l-2 border-black'
          >
            <i className='bi bi-search text-white' />
          </button>
        </div>
      </div>
      <div className='card p-6 flex-col'>
        <div className='flex'>
          <img src={avatarImage} alt='avatar' />
          <div className='flex flex-col ml-4'>
            <p className='font-medium'>邊緣小杰</p>
            <p className='font-light text-gray-base font-num text-xs'>
              2022/1/10 12:00
            </p>
          </div>
        </div>
        <p className='mt-5 mb-5'>
          外面看起來就超冷.... <br />
          我決定回被窩繼續睡....{'>.<'}
        </p>
        <img src={fakeImage} alt='' />
      </div>
      <div className='card p-6 flex-col'>
        <div className='flex'>
          <img src={avatar6Image} alt='avatar' />
          <div className='flex flex-col ml-4'>
            <p className='font-medium'>波吉</p>
            <p className='font-light text-gray-base font-num text-xs'>
              2022/1/10 12:00
            </p>
          </div>
        </div>
        <p className='mt-5 mb-5'>我一定要成為很棒棒的國王！</p>
      </div>
      <div className='card p-6 flex-col'>
        <div className='flex'>
          <img src={avatar6Image} alt='avatar' />
          <div className='flex flex-col ml-4'>
            <p className='font-medium'>阿爾敏</p>
            <p className='font-light text-gray-base font-num text-xs'>
              2022/1/10 12:00
            </p>
          </div>
        </div>
        <p className='mt-5 mb-5'>各位我有一個作戰計畫</p>
      </div>
    </>
  );
}

export default ThePostsWall;
