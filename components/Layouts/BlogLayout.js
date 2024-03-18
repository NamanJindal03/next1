import React from 'react'
export default function BlogLayout({children}) {
  return (
    <>
        <header>This is my blog head</header>    
            {children}
        <footer>this is my blog foot</footer>
    </>
  )
}
