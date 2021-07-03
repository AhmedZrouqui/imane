import React from 'react'

function Nav({ children }) {
    return (
        <div className="nav">
            <ul>
                {children}
            </ul>
        </div>
    )
}

export default Nav
