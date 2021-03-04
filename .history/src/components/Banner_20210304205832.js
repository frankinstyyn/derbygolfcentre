import React from 'react'

export default function Banner({children,title,subtitle}) {
    return (
        <div className="banner">
            <h1 id="i6">{title}</h1>
            <h3 id="i3">{subtitle}</h3>
        </div>
    )
}
