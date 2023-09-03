import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import { useRouter } from 'next/router'

const Layout = ({children}) => {
    const router=useRouter()
  return (
    <main style={{position:"fixed"}}>
    {router.pathname !== "/" && <Sidebar/>}
    {router.pathname !== "/" && <Navbar/>}
    {router.pathname!=="/" ? <div style={{marginTop:"70px",marginLeft:"250px",position: "relative"}}>{children}</div>: <div>{children}</div>}
    </main>
  )
}

export default Layout;