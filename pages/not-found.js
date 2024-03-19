import React, {useEffect} from 'react'
import { useRouter } from 'next/router'
export default function NotFound() {
    const location = useRouter();
    useEffect(()=>{
        setTimeout(()=>{
            location.push('/')
        },2000)
    },[])
  return (
    <>Not founewfuihewfiuhewfhweifhwiefhewuhfwiefhd</>
  )
}
