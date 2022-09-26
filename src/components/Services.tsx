import { createSupabaseSuspender } from '../services/createSuspender'
import { Expertise } from '../services/types'

const resource = createSupabaseSuspender<Expertise>('Expertise')

export default function Services() {
  const data = resource.read() as Expertise[]
  return (
    <ul>
      {data.map((ex) => (
        <li key={ex.id}>
          <p>{ex.name}</p>
        </li>
      ))}
    </ul>
  )
}
