import React from 'react'
import { motion } from 'framer-motion'
import { useSpring, animated } from 'react-spring'

function NavItem({ children, href, props }) {

    const { isOpen, setIsOpen } = props;

    return (


        <li className={`${isOpen ? 'expand_link' : 'close-immediately'}`} >
            <a href={href}>
                {children}
            </a>
        </li>
    )
}

export default NavItem
