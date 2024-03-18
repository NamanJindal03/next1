import React from 'react'
import { useParams } from 'next/navigation'

export default function SingleCategoryProduct() {
    const params = useParams();
    console.log(params)
  return (
    <> 
        {params?.categoryId}
    </>
  )
}

/* 
  :id -> react router dom
  while defining the pages -> we create a file by the name of [id]
*/
