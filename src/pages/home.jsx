import React from 'react'
import { useLocalInfo } from '../hooks/useLocalInfo'

function home() {

  const [info, setInfo] = useLocalInfo("ali", "hello");

  console.log(info)

  return (
    <div></div>
  )
}

export default home