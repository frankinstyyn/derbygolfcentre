import React from 'react'

export default function Banner({children,title,subtitle}) {
    return (
        <div className="banner">
            <h1 id="i6">{title}</h1>
            <h2 id="i3">{subtitle}</h2>
        </div>
    )
}
