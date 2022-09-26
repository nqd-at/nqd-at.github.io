import { useEffect, useState } from 'react'
import Button from './Button'
import { DarkIcon } from './icons/DarkIcon'
import { LightIcon } from './icons/LightIcon'

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
    <Button
      onClick={() => setLocalDarkmode(!darkmode)}
      title={`Turn ${darkmode ? 'off' : 'on'} darkmode`}>
      {darkmode ? (
        <DarkIcon className='w-4 h-4' />
      ) : (
        <LightIcon className='w-4 h-4' />
      )}
    </Button>
  )
}
