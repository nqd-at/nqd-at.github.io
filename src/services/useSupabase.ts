import { useEffect, useState } from 'react'
import { supabase } from './supabase'
import { Tables } from './types'

export const useSupabase = <T>(
  tableName: keyof Tables,
  select: string = '*'
) => {
  const [data, setData] = useState<T[]>()
  const [error, setError] = useState<string>()
  const [loading, setLoading] = useState<boolean>(true)

  const fetcher = async () => {
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

  useEffect(() => {
    if (!data && !error) {
      setTimeout(
        () =>
          fetcher().finally(() => {
            setLoading(false)
          }),
        1000
      )
    }
  }, [data, error, loading])

  return { data, error, loading }
}
