import { createSupabaseSuspender } from '../services/createSuspender'
import { Member } from '../services/types'

const resource = createSupabaseSuspender<Member>(
  'Member',
  '*, _member(Attachment(*))'
)

export default function Team() {
  const data = resource.read() as Member[]
  return (
    <ul className='space-y-4'>
      {data.map((member) => (
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
              <a href={attachment.url} key={attachment.id} target='_blank'>
                {attachment.label}
              </a>
            ))}
          </div>
        </li>
      ))}
    </ul>
  )
}
