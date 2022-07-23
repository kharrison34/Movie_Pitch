import * as React from "react"
import Navbar from './Navbar'
// import Header from "./Header"
// import { GlobalStyle } from "./styles/GlobalStyles"
import "./layout.css"

const Layout = ({ children }) => {

  return (
    <>
      {/* <GlobalStyle /> */}
      {/* <Header  /> */}
      <Navbar />
     
      <main>{children}</main>
      
    </>
  )
}


export default Layout





