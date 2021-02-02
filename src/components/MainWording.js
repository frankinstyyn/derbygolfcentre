import React from 'react'

export default function MainWording({paragraph, paragraph2}) {
    return (
        <div className="mainWording">
            <p className="shopWording">{paragraph}</p>
            <p className="shopWording">{paragraph2}</p>
            <button className="shopButton">See Our Club Services</button>
        </div>
    )
}
