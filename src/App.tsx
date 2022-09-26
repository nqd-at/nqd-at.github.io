import Modal from './components/Modal'
import common from './data/common.json'
import DarkmodeSwitch from './components/DarkmodeSwitch'
import { useSupabase } from './services/useSupabase'
import { useLayoutEffect } from 'react'
import { Experience, Expertise, Member } from './services/types'
import Skeleton from './components/Skeleton'
import Button from './components/Button'

function App() {
  useLayoutEffect(() => {
    window.document.title = "Welcome to 'nqdat' development team"
  })
  const { data: expertises, loading: expertiseLoading } =
    useSupabase<Expertise>('Expertise')
  const { data: experiences, loading: experienceLoading } =
    useSupabase<Experience>('Experience', '*, _experience(Attachment(*))')
  const { data: members, loading: memberLoading } = useSupabase<Member>(
    'Member',
    '*, _member(Attachment(*))'
  )

  return (
    <div className='p-8 md:p-16 lg:p-24 space-y-8 md:space-y-12 lg:space-y-16 max-w-3xl'>
      <div className='absolute right-8 top-8'>
        <div className='flex space-x-2 items-center'>
          <a href='https://github.com/nqd-at' target='_blank' className='before:content-none' title='nqd-at Github'>
            <Button>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 496 512'
                className='w-4 h-4'>
                <path
                  d='M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z'
                  fill='currentColor'
                />
              </svg>
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
        <ul className='space-y-1'>
          {expertiseLoading ? (
            <Skeleton
              totalLines={3}
              element='li'
              widthUnit='px'
              minWidth={150}
              maxWidth={200}
            />
          ) : (
            expertises?.map((ex) => (
              <li key={ex.id}>
                <p>{ex.name}</p>
              </li>
            ))
          )}
        </ul>
      </section>
      <section>
        <h2>Our team</h2>
        <ul className='space-y-4'>
          {memberLoading
            ? Array.from(Array(2).keys()).map((i) => (
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
              ))
            : members?.map((member) => (
                <li key={member.name + member.position}>
                  <h3>{member.name}</h3>
                  <div className='text-slate-500 dark:text-slate-400 text-sm space-x-2 transition-colors'>
                    <span>{member.position}</span>
                    <span>/</span>
                    <span className='text-slate-900 dark:text-slate-200 transition-colors'>
                      {member.yearOfExperiences} yrs.
                    </span>{' '}
                    of experiences
                  </div>
                  <div className='space-x-4'>
                    {member._member?.map(({ Attachment: attachment }) => (
                      <a
                        href={attachment.url}
                        key={attachment.id}
                        target='_blank'>
                        {attachment.label}
                      </a>
                    ))}
                  </div>
                </li>
              ))}
        </ul>
      </section>
      <section>
        <h2>Experiences</h2>
        <ul className='space-y-4'>
          {experienceLoading
            ? Array.from(Array(2).keys()).map((i) => (
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
              ))
            : experiences?.map((exp) => {
                return (
                  <li key={exp.name}>
                    <h3>{exp.name}</h3>
                    <p className='text-slate-500 dark:text-slate-400 text-sm transition-colors'>
                      {exp.shortDescription}
                    </p>
                    <div className='space-x-4'>
                      <Modal
                        trigger={(toggle) => {
                          return (
                            <a
                              href='#'
                              onClick={(e) => {
                                e.preventDefault()
                                toggle()
                              }}>
                              Info
                            </a>
                          )
                        }}>
                        <div className='space-y-8 pt-4 md:pt-8 prose overflow-auto'>
                          <h1>{exp.name}</h1>
                          {exp._experience?.map(
                            ({ Attachment: screenshot }) => {
                              return (
                                screenshot.type === 'IMAGE' && (
                                  <figure key={screenshot.url}>
                                    <img
                                      src={screenshot.url}
                                      alt={screenshot.label || exp.name}
                                    />
                                    {screenshot.label && (
                                      <figcaption>
                                        {screenshot.label}
                                      </figcaption>
                                    )}
                                  </figure>
                                )
                              )
                            }
                          )}
                          <p>{exp.description}</p>
                          <div className='flex space-x-4'>
                            {exp.technologies?.map((tech) => (
                              <span
                                key={tech}
                                className='text-sm bg-slate-300 font-normal px-2 py-1'>
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </Modal>
                      {exp.url && (
                        <a href={exp.url} target='_blank'>
                          Visit
                        </a>
                      )}
                    </div>
                  </li>
                )
              })}
        </ul>
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
