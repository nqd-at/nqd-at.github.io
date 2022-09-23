import Modal from './Modal'
import common from './data/common.json'
import DarkmodeSwitch from './DarkmodeSwitch'
import { definitions } from './types/supabase'
import { useSupabase } from './services/useSupabase'
import { useLayoutEffect } from 'react'

type Attachment = definitions['Attachment']
type Expertise = definitions['Expertise']
type Experience = definitions['Experience'] & {
  _experience?: {
    Attachment: Attachment
  }[]
}

type Member = definitions['Member'] & {
  _member?: {
    Attachment: Attachment
  }[]
}

function App() {
  useLayoutEffect(() => {
    window.document.title = "Welcome to 'nqdat' development team"
  })
  const { data: expertises } = useSupabase<Expertise>('Expertise')
  const { data: experiences } = useSupabase<Experience>(
    'Experience',
    '*, _experience(Attachment(*))'
  )
  const { data: members } = useSupabase<Member>(
    'Member',
    '*, _member(Attachment(*))'
  )

  return (
    <div className='p-8 md:p-16 lg:p-24 space-y-8 md:space-y-12 lg:space-y-16 max-w-3xl'>
      <div className='absolute right-8 top-8'>
        <DarkmodeSwitch />
      </div>
      <h1 className='text-6xl font-extrabold !leading-[.6] tracking-tighter md:text-8xl'>
        nqdat
        <br />
        <span className='text-white dark:text-slate-600 text-4xl md:text-6xl lowercase tracking-tight word-spacing-1/2'>
          Development team
        </span>
      </h1>
      <section>
        <h2>What we do</h2>
        <ul>
          {expertises?.map((ex) => (
            <li key={ex.id}>
              <p>{ex.name}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Our team</h2>
        <ul className='space-y-4'>
          {members?.map((member) => (
            <li key={member.name + member.position}>
              <h3>{member.name}</h3>
              <div className='text-slate-500 dark:text-slate-400 text-sm space-x-2'>
                <span>{member.position}</span>
                <span>/</span>
                <span className='text-slate-900 dark:text-slate-200'>
                  {member.yearOfExperiences} yrs.
                </span>{' '}
                of experiences
              </div>
              <div className='space-x-4'>
                {member._member?.map(({ Attachment: attachment }) => (
                  <a href={attachment.url} key={attachment.id}>
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
          {experiences?.map((exp) => {
            return (
              <li key={exp.name}>
                <h3>{exp.name}</h3>
                <p className='text-slate-500 dark:text-slate-400 text-sm'>
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
                      {exp._experience?.map(({ Attachment: screenshot }) => {
                        return (
                          screenshot.type === 'IMAGE' && (
                            <figure key={screenshot.url}>
                              <img
                                src={screenshot.url}
                                alt={screenshot.label || exp.name}
                              />
                              {screenshot.label && (
                                <figcaption>{screenshot.label}</figcaption>
                              )}
                            </figure>
                          )
                        )
                      })}
                      <p>{exp.description}</p>
                      <div className='flex space-x-4'>
                        {/* {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className='text-sm bg-slate-300 font-normal px-2 py-1'>
                            {tech}
                          </span>
                        ))} */}
                      </div>
                    </div>
                  </Modal>
                  {exp.url && <a href={exp.url}>Visit</a>}
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
