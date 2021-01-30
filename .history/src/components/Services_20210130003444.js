import React, { Component } from 'react'
import { ImBubbles4 } from "react-icons/im"
import { TiDeviceDesktop } from "react-icons/ti"
import { MdSecurity } from "react-icons/md"
import { FaCashRegister } from "react-icons/fa"
import Title from "./Title"
import { Link } from "react-router-dom"


export default class Services extends Component {
    render() {
        return (
            <>
            <section className="services">
                    <Title title="Our Services" />
                    <div className="services-center">
                    {this.state.services.map((item, index) => {
                        return (
                            <article key={index} className="service">
                                <span>{item.icon}</span>
                                <h6>{item.title}</h6>
                                <p>{item.info}</p>
                            </article>
                        )
                    })}
                    </div>
                    <Link to="/nigelservices" className="btn-services">Learn More</Link>
            </section>
            </>
        )
    }
}
