import React from 'react'
import Link from 'next/link'

const PageNotFound = () => {
  return (
    <main style={{width: "100vw",height:"100vh",
    backgroundColor:"#000",
    color:"white",
    position:"fixed",
    top:0,
    left:0,
    textAlign: "center",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    zIndex:9999}}>

    <h1>Page Not Found</h1>
    <h2>Please check the entered URL</h2>
    <h3>Click <Link href="/">here</Link> to go to home</h3>
    </main>
  )
}

export default PageNotFound;