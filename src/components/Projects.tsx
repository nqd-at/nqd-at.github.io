import { createSupabaseSuspender } from '../services/createSuspender'
import { Experience } from '../services/types'
import Modal from './Modal'

const resource = createSupabaseSuspender<Experience>(
  'Experience',
  '*, _experience(Attachment(*))'
)

export default function Projects() {
  const data = resource.read() as Experience[]
  return (
    <ul className='space-y-4'>
      {data.map((exp) => {
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
                <div className='space-y-8 pt-4 md:pt-8 prose dark:prose-invert overflow-auto'>
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
                    {exp.technologies?.map((tech) => (
                      <span
                        key={tech}
                        className='text-sm bg-slate-300 dark:bg-slate-700 font-normal px-2 py-1'>
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
  )
}
