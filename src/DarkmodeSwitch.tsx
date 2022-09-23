import { useEffect, useState } from 'react'

const defaultDarkmode = window.matchMedia(
  '(prefers-color-scheme: dark)'
).matches

if (!window.localStorage.getItem('color-scheme')) {
  window.localStorage.setItem(
    'color-scheme',
    defaultDarkmode ? 'dark' : 'light'
  )
}

export default function DarkmodeSwitch() {
  const [darkmode, setDarkmode] = useState(
    window.localStorage.getItem('color-scheme') === 'dark'
  )

  const setLocalDarkmode = (darkmode: boolean) => {
    window.localStorage.setItem('color-scheme', darkmode ? 'dark' : 'light')
    setDarkmode(darkmode)
  }

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkmode])
  return (
    <div className='flex space-x-2 items-center'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
        className='w-5 h-5 text-slate-500 dark:text-slate-400'>
        <path
          d='M256 128c-70.58 0-127.1 57.42-127.1 127.1S185.4 383.1 256 383.1s127.1-57.42 127.1-127.1S326.6 128 256 128zM256 351.1c-53.02 0-95.1-42.98-95.1-95.1C160 202.1 202.1 159.1 256 159.1s95.1 42.98 95.1 95.1C351.1 309 309 351.1 256 351.1zM453.7 256l52.87-76.18c5.922-8.529 7.062-19.34 3.094-28.9c-3.969-9.561-12.42-16.37-22.61-18.22l-91.26-16.5l-16.48-91.24c-1.859-10.22-8.672-18.65-18.25-22.62c-9.531-3.969-20.34-2.781-28.88 3.094L256 58.33L179.8 5.455c-8.5-5.906-19.25-7.125-28.84-3.125C141.4 6.299 134.5 14.73 132.7 24.95L116.2 116.2l-91.25 16.5C14.75 134.5 6.301 141.4 2.332 150.9C-1.637 160.5-.4961 171.3 5.426 179.8L58.3 256l-52.87 76.18c-5.922 8.531-7.062 19.34-3.094 28.9s12.42 16.37 22.61 18.22l91.26 16.5l16.48 91.24c1.859 10.22 8.688 18.65 18.27 22.62c3.75 1.562 7.688 2.312 11.59 2.312c6.078 0 12.08-1.844 17.25-5.406L256 453.7l76.2 52.87c8.5 5.906 19.25 7.125 28.84 3.125c9.578-3.969 16.41-12.41 18.27-22.62l16.48-91.24l91.25-16.5c10.2-1.844 18.66-8.654 22.62-18.22s2.828-20.37-3.094-28.9L453.7 256zM379.2 366.3c-6.578 1.188-11.72 6.344-12.91 12.9l-15.83 101.1l-85.33-59.21c-5.5-3.812-12.75-3.812-18.25 0l-82.69 60.31L145.7 379.2c-1.188-6.561-6.328-11.72-12.91-12.9l-101.1-15.84l59.2-85.31c3.812-5.498 3.812-12.75 0-18.25l-60.28-82.68l102.2-18.47C139.4 144.5 144.5 139.4 145.7 132.8l15.83-101.1l85.33 59.21c5.5 3.811 12.75 3.811 18.25 0l82.69-60.31l18.47 102.2c1.188 6.562 6.328 11.72 12.91 12.91l101.1 15.84l-59.2 85.31c-3.812 5.5-3.812 12.75 0 18.25l57.7 83.15L379.2 366.3z'
          fill='currentColor'
        />
      </svg>
      <label
        htmlFor='default-toggle'
        className='inline-flex relative items-center cursor-pointer'>
        <input
          type='checkbox'
          id='default-toggle'
          className='sr-only peer'
          onChange={(e) => {
            const { checked } = e.target
            setLocalDarkmode(checked)
          }}
        />
        <div className="w-9 h-5 bg-slate-400 peer-focus:outline-none rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
        className='w-5 h-5 text-slate-500 dark:text-slate-400'>
        <path
          d='M428.3 367.5c-5.609-9.312-16.08-13.91-26.75-11.97c-42.39 8.188-85.83-2.938-119.2-30.5C248.4 297 228.9 255.5 228.9 211.3c0-52.75 28.2-101.8 73.59-127.8c9.453-5.406 14.38-15.88 12.55-26.66c-1.812-10.75-9.891-19-20.61-21C283.1 33.66 265.3 32 253.9 32C131.5 32 32 132.5 32 256s99.55 224 221.9 224c67.19 0 130-30.25 172.4-83C433.1 388.4 433.9 376.9 428.3 367.5zM253.9 448C149.2 448 64 361.9 64 256s85.19-192 189.9-192c4.891 0 11.53 .4062 18.09 1.031C225.3 98.34 196.9 152.9 196.9 211.3c0 53.84 23.7 104.3 65.05 138.5c36.25 29.94 82.17 43.88 128.5 39.69C354.8 426.8 305.8 448 253.9 448z'
          fill='currentColor'
        />
      </svg>
    </div>
  )
}
