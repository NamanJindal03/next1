import React from 'react'
// import { useParams } from 'next/navigation'
import { useRouter } from 'next/router'

export default function SingleCategoryProduct() {
  /* use Param usage */
    // const params = useParams();
    // console.log(params)

    /* useRouter usage */
    const {query} = useRouter();
  return (
    <> 
        {/* {params?.categoryId} */}
        {query?.categoryId}
    </>
  )
}

/* 
  :id -> react router dom
  while defining the pages -> we create a file by the name of [id]
*/
