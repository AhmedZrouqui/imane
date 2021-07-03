import React, { useEffect } from 'react'
import Cursor from '../../components/utils/custom/Cursor'

function Header({ props }) {


    return (
        <div className="page_header">
            <div className="page_header_logo">
                <span className="element">Imane.</span>
            </div>

            <div className="page_header_menu">
                <span className="element" onClick={() => props.setIsOpen(!props.isOpen)}>menu</span>
            </div>
        </div>
    )
}

export default Header
