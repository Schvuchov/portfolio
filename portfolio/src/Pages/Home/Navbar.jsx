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
            <div></div>
        </nav>
    )
}

export default Navbar;