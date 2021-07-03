import React from 'react'

function SocialItem({ children, href }) {
    return (
        <li>
            <a href={href} target="_blank">
                {children}
            </a>
        </li>
    )
}

export default SocialItem
