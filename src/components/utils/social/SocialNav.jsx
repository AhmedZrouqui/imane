import React from 'react'

function SocialNav({ children }) {
    return (
        <nav className="social-nav">
            <ul>
                {children}
            </ul>
        </nav>
    )
}

export default SocialNav
