import React from 'react'
import { useParams } from 'next/navigation'

export default function UserId() {
    const params = useParams()
  return (
    <div>USer id {params?.userId}</div>
  )
}
