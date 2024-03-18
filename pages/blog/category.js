import React from 'react'
import BlogLayout from '../../components/Layouts/BlogLayout'
import { useRouter } from 'next/router'
//as query param
export default function category() {
    const {query} = useRouter();
    // console.log(path);//query -> 

  return (
    <BlogLayout>
        <div>category {query?.search} {query?.demo}</div>
    </BlogLayout>
  )
}
