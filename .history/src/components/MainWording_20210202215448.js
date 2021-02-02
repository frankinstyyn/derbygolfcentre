import React from 'react'

export default function MainWording({children,paragraph, paragraph2}) {
    return (
        <div className="mainWording">
            <p className="shopWording">{paragraph}</p>
            <p className="shopWording">{paragraph2}</p>
        </div>
    )
}
