import common from './data/common.json'
import DarkmodeSwitch from './components/DarkmodeSwitch'
import { lazy, Suspense, useLayoutEffect } from 'react'
import Skeleton from './components/Skeleton'
import Button from './components/Button'
import { EmailIcon } from './components/icons/EmailIcon'
import { GithubIcon } from './components/icons/GithubIcon'

const Services = lazy(() => import('./components/Services'))
const Projects = lazy(() => import('./components/Projects'))
const Team = lazy(() => import('./components/Team'))

function App() {
  useLayoutEffect(() => {
    window.document.title = "Welcome to 'nqdat' development team"
  })

  return (
    <div className='p-8 md:p-16 lg:p-24 space-y-8 md:space-y-12 lg:space-y-16 max-w-3xl'>
      <div className='fixed right-8 top-8'>
        <div className='flex space-x-2 items-center'>
          <a
            href='mailto:nguyenquocdat.vn@gmail.com'
            target='_blank'
            className='before:content-none'
            title='Email us'>
            <Button>
              <EmailIcon className='w-4 h-4' />
            </Button>
          </a>
          <a
            href='https://github.com/nqd-at'
            target='_blank'
            className='before:content-none'
            title='nqd-at Github'>
            <Button>
              <GithubIcon className='w-4 h-4' />
            </Button>
          </a>
          <DarkmodeSwitch />
        </div>
      </div>
      <h1 className='text-6xl font-extrabold !leading-[.6] tracking-tighter md:text-8xl'>
        nqdat
        <br />
        <span className='text-white dark:text-slate-600 text-4xl md:text-6xl lowercase tracking-tight word-spacing-1/2 transition-colors'>
          Development team
        </span>
      </h1>
      <section>
        <h2>What we do</h2>

        <Suspense
          fallback={
            <ul className='space-y-1'>
              <Skeleton
                totalLines={3}
                element='li'
                widthUnit='px'
                minWidth={150}
                maxWidth={200}
              />
            </ul>
          }>
          <Services />
        </Suspense>
      </section>
      <section>
        <h2>Our team</h2>
        <Suspense
          fallback={
            <ul className='space-y-4'>
              {Array.from(Array(2).keys()).map((i) => (
                <li className='space-y-1' key={i}>
                  <Skeleton
                    leading={1.2}
                    minWidth={100}
                    maxWidth={120}
                    widthUnit='px'
                    element='div'
                  />
                  <Skeleton
                    minWidth={300}
                    maxWidth={350}
                    widthUnit='px'
                    element='div'
                  />
                  <div className='space-x-2'>
                    <Skeleton
                      minWidth={50}
                      maxWidth={50}
                      widthUnit='px'
                      element='span'
                      className='inline-block'
                    />
                    <Skeleton
                      minWidth={50}
                      maxWidth={50}
                      widthUnit='px'
                      element='span'
                      className='inline-block'
                    />
                  </div>
                </li>
              ))}
            </ul>
          }>
          <Team />
        </Suspense>
      </section>
      <section>
        <h2>Experiences</h2>
        <Suspense
          fallback={
            <ul className='space-y-4'>
              {Array.from(Array(2).keys()).map((i) => (
                <li className='space-y-1' key={i}>
                  <Skeleton
                    leading={1.2}
                    minWidth={100}
                    maxWidth={120}
                    widthUnit='px'
                    element='div'
                  />
                  <Skeleton
                    minWidth={300}
                    maxWidth={320}
                    widthUnit='px'
                    element='div'
                  />
                  <Skeleton
                    minWidth={30}
                    maxWidth={30}
                    widthUnit='px'
                    element='div'
                  />
                </li>
              ))}
            </ul>
          }>
          <Projects />
        </Suspense>
      </section>
      <section>
        <h2>Give a try</h2>
        <div>
          <a href={common.email}>Email us</a>
        </div>
      </section>
    </div>
  )
}

export default App
