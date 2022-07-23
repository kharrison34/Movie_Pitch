import { Link } from 'gatsby'
import { BiCameraMovie } from 'react-icons/bi'
import styled from 'styled-components'

export const Nav = styled.nav`
  background: purple;
  height: 80px;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }

`

export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
`

export const NavLogo = styled(Link)`
  color: #fff;
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  font-weight: 600;
  margin-left: 2rem;
  padding-right: 10rem;

`

export const NavIcon = styled(BiCameraMovie)`
  margin: 0 0.5rem;
  font-size: 1.6rem;
`

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 2rem;
    cursor: pointer;
  }
`

export const NavMenu = styled.ul`
  display: flex; 
  align-items: center;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 960px) {
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    top: ${({ click }) => (click ? "100%" : "-1000px")};
    opacity: 1;
    transition: all 0.2s ease;
    background: purple;


  }
` 

export const NavItem = styled.li`
  height: auto;
  font-weight: 600;
  @media screen and (max-width: 960px) {
    width: 100%;
  }
`

export const NavLinks = styled(Link)`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%:
  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;
    &:hover{
      color: #ff4040;
      transition: all 0.3s ease;
    }

  }
`











// export default function Navbar() {
//   return (
//     <nav>
//         <h1>Movie Pitch Podcast</h1>
//         <div className='links'>
//             <Link to='/'>Home</Link>
//             <Link to='/about'>About</Link>
//             <Link to='/store'>Store</Link>


//         </div>
//     </nav>
//   )
// }
