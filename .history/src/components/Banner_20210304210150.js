import React from 'react'

export default function Banner({children,title,subtitle1,subtitle2}) {
    return (
        <div className="banner">
            <h1 id="title1">{title}</h1>
            <h2 id="sub1">{subtitle1}</h2>
            <h2 id="isub2">{subtitle2}</h2>
        </div>
    )
}
