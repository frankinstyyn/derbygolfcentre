import React from 'react'

export default function MainWording({children,paragraph,subtitle}) {
    return (
        <div className="mainWording">
            <p id="shopWording">{paragraph}</p>
        </div>
    )
}
