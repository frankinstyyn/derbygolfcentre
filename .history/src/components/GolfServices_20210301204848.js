import React, { Component } from 'react'

export class GolfServices extends Component {
    render() {
        return (
            <div class="servicesContainer">
            <div class="mainServices">
                <div className="servicesBanner">
                    <h1>Our Services</h1>
                    <div class="row">
                        <div class="col-xs-12 col-sm-4 drivingRange">
                            <button onClick="location.href='/drivingrange'" type="button">
                              Driving Range 
                        </button>
                        </div>
                        <div class="col-xs-12 col-sm-4 golfShop">
                            <button id="golfBtn">
                              <p>Golf Shop</p> 
                        </button>
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
