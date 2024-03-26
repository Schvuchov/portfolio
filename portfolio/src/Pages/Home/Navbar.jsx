import { useState, useEffect } from "react";
import {Link} from "react-scroll"

function Navbar(){
    const [navActive, setNavActive ] = useState(false)

    //abre a nav
    const toggleNav = () => {
        setNavActive(!navActive)
    }

    //fecha a nav
    const closeMenu = () => {
        setNavActive(false)
    }

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 500){
                closeMenu
            }
        }

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    }, [])

    useEffect(() => {
        if(window.innerWidth <= 1200){
            closeMenu
        }
    }, [])

    return(
        <nav className={`navbar ${navActive? "active" : ""}`}>
            <div>
                <img src="./img/logo" alt="Logo" />
            </div>
            <a className={`navHamburguer ${navActive? "active" : ""}`} onClick={toggleNav}>
                <span className="navHamburguerLine"></span>
                <span className="navHamburguerLine"></span>
                <span className="navHamburguerLine"></span>
            </a>
            <div className={`navbarItems ${navActive ? "active" : ""}`}>
                <ul>
                    <li>
                        <Link 
                            onClick={closeMenu} 
                            activeClass="navbarActiveContent"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="startSection"
                            className="navbarContent"
                        >
                            Home
                        </Link> 
                    </li>
                    <li>
                        <Link 
                            onClick={closeMenu} 
                            activeClass="navbarActiveContent"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="aboutMe"
                            className="navbarContent"
                        >
                            Sobre
                        </Link> 
                    </li>
                    <li>
                        <Link 
                            onClick={closeMenu} 
                            activeClass="navbarActiveContent"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            to="myProjects"
                            className="navbarContent"
                        >
                            Meus Projetos
                        </Link> 
                    </li>
                </ul>
            </div>
            <Link 
                onClick={closeMenu} 
                activeClass="navbarActiveContent"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                to="contact"
                className="btn btn-outline-primary"
            >
                Contato
            </Link> 
        </nav>
    )
}

export default Navbar;