import { Database } from '../types/schema'

export type Tables = Database['public']['Tables']
export type Enums = Database['public']['Enums']

export type Attachment = Tables['Attachment']['Row']
export type Expertise = Tables['Expertise']['Row']
export type Experience = Tables['Experience']['Row'] & {
  _experience?: {
    Attachment: Attachment
  }[]
}

export type Member = Tables['Member']['Row'] & {
  _member?: {
    Attachment: Attachment
  }[]
}
