import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export class GolfServices extends Component {
    render() {
        return (
            <div class="servicesContainer">
            <div class="mainServices">
                <div className="servicesBanner">
                    <h1>Our Services</h1>
                    <div class="row">
                            <div class="col-xs-12 col-sm-4 drivingRange">
                                <Link to="/driving-range" className="linkButton">Driving Range</Link>
                        </div>
                            <div class="col-xs-12 col-sm-4 golfShop">
                                <Link to="/golf-shop" className="linkButton">Golf Shop</Link>
                            {/* <button id="golfBtn">
                              <p>Golf Shop</p> 
                        </button> */}
                        </div>
                        <div class="col-xs-12 col-sm-4 clubServices"><button>
                              <p>Club Services</p> 
                        </button></div>
                        </div>
                        </div>
                </div>
                </div>
        )
    }
}

export default GolfServices
