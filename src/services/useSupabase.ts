import { useEffect, useState } from 'react'
import { definitions } from '../types/supabase'
import { supabase } from './supabase'

export type TableName = keyof definitions

export const useSupabase = <T>(tableName: TableName, select: string = '*') => {
  const [data, setData] = useState<T[]>()
  const [error, setError] = useState<string>()

  useEffect(() => {
    if (!data && !error) {
      supabase
        .from<T>(tableName)
        .select(select)
        .then((response) => {
          if (response.error) {
            setError(response.error.message)
          } else {
            setData(response.data || undefined)
          }
        })
    }
  }, [data, error])

  return { data, error }
}
