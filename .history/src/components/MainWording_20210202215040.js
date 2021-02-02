import React from 'react'

export default function MainWording({children,paragraph,subtitle}) {
    return (
        <div className="mainWording">
            <p className="shopWording">{paragraph}</p>
        </div>
    )
}
