import { useState , useEffect} from "react"

const useLocalInfo = (key, initialValue) => {
  const [values, setValues] = useState(() => {
    const localInfo = localStorage.getItem(key)
    return localInfo ? JSON.parse(localInfo) : initialValue;
  })

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(values))
  }, [values])

  return [values, setValues]

}

export { useLocalInfo };