import Modal from './Modal'
import common from './data/common.json'
import experiences from './data/experiences.json'
import team from './data/team.json'
import expertise from './data/expertise.json'

function App() {
  return (
    <div className='p-8 md:p-16 lg:p-24 space-y-8 md:space-y-12 lg:space-y-16 max-w-3xl'>
      <h1 className='text-6xl font-extrabold !leading-[.67] tracking-tighter md:text-8xl'>
        nqdat
        <br />
        <span className='text-white text-4xl md:text-6xl lowercase word-spacing-1/2'>
          Development team
        </span>
      </h1>
      <section>
        <h2>What we do</h2>
        <ul>
          {expertise.map((skill) => (
            <li key={skill}>
              <p>{skill}</p>
            </li>
          ))}
        </ul>
      </section>
      <section>
        <h2>Our team</h2>
        <ul className='space-y-4'>
          {team.map((member) => (
            <li key={member.name + member.position}>
              <h3>{member.name}</h3>
              <div className='text-slate-500 text-sm flex space-x-2'>
                <span>{member.position}</span>
                <span>/</span>
                <span className='text-slate-900'>
                  {member.yearOfExperiences}
                </span>{' '}
                of experiences
              </div>
              <div className='space-x-4'>
                {member.url.map((u) => (
                  <a href={u.uri} key={u.name}>
                    {u.name}
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
          {experiences.map((exp) => {
            return (
              <li key={exp.name}>
                <h3>{exp.name}</h3>
                <p className='text-slate-500 text-sm'>{exp.shortDescription}</p>
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
                      {exp.screenshots.map((img) => {
                        return (
                          <figure key={img.url}>
                            <img src={img.url} alt={img.caption || exp.name} />
                            {img.caption && (
                              <figcaption>{img.caption}</figcaption>
                            )}
                          </figure>
                        )
                      })}
                      <p>{exp.description}</p>
                      <div className='flex space-x-4'>
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className='text-sm bg-slate-300 font-normal px-2 py-1'>
                            {tech}
                          </span>
                        ))}
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
