import React from 'react'

function Dropdown({ children, props }) {
    const { isOpen, setIsOpen } = props;
    console.log(isOpen)
    return (
        <div className={`dropdown ${isOpen ? 'expand' : 'wait-a-second'}`}>
            {children}
            <span className="close" onClick={() => setIsOpen(false)}>close</span>
        </div>
    )
}

export default Dropdown
