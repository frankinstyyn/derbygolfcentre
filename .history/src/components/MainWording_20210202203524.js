import React from 'react'

export default function MainWording({children,title,subtitle}) {
    return (
        <div className="mainWording">
            <p id="shopWording">{title}</p>
        </div>
    )
}
