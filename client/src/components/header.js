import * as React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
// import { NavLink } from "reactstrap"
import {FaBars} from  'react-icons/fa'
// import styles from '../components/styles/styles.css'

const Header = ({  }) => {
  return (
    <Nav>
      <Link to="/">Movie Pitch</Link>
      <Link to='/about'>About</Link>
      <Link to='/store'>Store</Link>

      <FaBars />
    </Nav>
  )
}


export default Header


const Nav = styled.nav`
  background-color: purple;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1300px) / 2);
  z-index: 100;
  position: relative;
`

const NavLink = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;  
`

const Bars = styled(FaBars)`
  display: none;
  color: #fff'

  @media screen abd (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8 rem;
    cursor: pointer;
  }

`