import React from 'react'
import { motion } from 'framer-motion'
import {Link} from 'react-scroll'

function NavItem({ children, href, props }) {

    const { isOpen, setIsOpen } = props;
    return (


        <li className={`${isOpen ? 'expand_link' : 'close-immediately'}`} >
            <Link to={href} spy={true}
                smooth={true}
                offset={-70}
                duration={800}
                onClick={() => setIsOpen(!isOpen)}
                >
                {children}
                
            </Link>
        </li>
    )
}

export default NavItem
