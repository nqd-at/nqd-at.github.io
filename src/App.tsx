function App() {
  return (
    <div className='p-24 space-y-16 max-w-3xl'>
      <h1 className='text-8xl font-extrabold leading-[.6] tracking-tighter'>
        &lt;nqdat /&gt;
        <br />
        <span className='text-white text-6xl lowercase word-spacing-1/2'>Development team</span>
      </h1>
      <section>
        <h2>What we do</h2>
        <ul>
          <li>
            <p>System Design</p>
          </li>
          <li>
            <p>Project Management</p>
          </li>
          <li>
            <p>Web Development</p>
          </li>
          <li>
            <p>Continuous Integration &amp; Deployment</p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Our team</h2>
        <ul className='space-y-4'>
          <li>
            <h3>Joey Nguyen</h3>
            <p className='text-slate-500 text-sm'>
              Technical Architect/Team lead
            </p>
            <p>
              <a href='https://'>LinkedIn</a>
            </p>
          </li>
          <li>
            <h3>Nhan Huynh</h3>
            <p className='text-slate-500 text-sm'>Senior Developer</p>
            <p>
              <a href='https://'>LinkedIn</a>
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Experiences</h2>
        <ul className='space-y-4'>
          <li>
            <h3>Deloitte Levvia</h3>
            <p className='text-slate-500 text-sm'>Deloitte TTL's Very Small Auditing tool</p>
            <div className="space-x-4">
              <a href='https://'>Info</a>
              <a href='https://'>Visit</a>
            </div>
          </li>
          <li>
            <h3>Avitrip</h3>
            <p className='text-slate-500 text-sm'>Online booking service for Travel Agencies</p>
            <p>
              <a href='https://'>LinkedIn</a>
            </p>
          </li>
        </ul>
      </section>
      <section>
        <h2>Give a try</h2>
        <div>
          <a href='https://'>Email us</a>
        </div>
      </section>
    </div>
  )
}

export default App
