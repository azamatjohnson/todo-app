import { useEffect, useState } from 'react'

const UseLocalStorage = (key, initialValue) => {
  const [value, setValue] = useState(() => {
    try {
      const localValue = window.localStorage.getItem(key)
      return localValue ? JSON.parse(localValue) : initialValue
    } catch (err) {
      console.log(err)
      return initialValue
    }
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(value))
    return () => {}
  }, [key, value])

  return [value, setValue]
}

export default UseLocalStorage
