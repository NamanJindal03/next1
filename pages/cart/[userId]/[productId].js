import React from 'react'
import { useParams } from 'next/navigation'

export default function ProductId() {
    const params = useParams();
    console.log(params);
  return (
    <>
        <div>{params?.productId}</div>
        <div>{params?.userId}</div>
    </>
  )
}
