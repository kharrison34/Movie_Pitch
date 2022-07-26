import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {
    MobileIcon,
    Nav,
    NavbarContainer,
    NavIcon,
    NavItem,
    NavLinks,
    NavLogo,
    NavMenu,
} from './NavbarElements'

const Navbar = () => {
    const [click, setClick] = useState(false)
    const [scroll, setScroll] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScroll(true)
        } else {
            setScroll(false)
        }
    }

    useEffect(() => {
        changeNav()
        window.addEventListener("scroll", changeNav)
    }, [])

    return (
        <>
        <IconContext.Provider value={{ color: `#131313`}}>
            <Nav active={scroll} click={click}>
                <NavLogo to="/" onClick={closeMobileMenu}>
                    Movie Pitch Podcast
                    <NavIcon />
                </NavLogo>
                <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </MobileIcon>
                <NavMenu onClick={handleClick} click={click}>
                    <NavItem>
                        <NavLinks to="/">Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/about">About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/store">Merchandise</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="/Sponsors">Sponsors</NavLinks>
                    </NavItem>
                </NavMenu>

            </Nav>
        </IconContext.Provider>
        </>
    )
 }

export default Navbar