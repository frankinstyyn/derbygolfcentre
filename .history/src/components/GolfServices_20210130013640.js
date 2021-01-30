import React, { Component } from 'react'

export class GolfServices extends Component {
    render() {
        return (
            <div class="mainServices">
                <div className="servicesBanner">
                    <h1>Our Services</h1>
                    <div class="row">
                        <div class="col-xs-12 col-sm-4 drivingRange">
                            <button>
                              <p>Driving Range</p> 
                        </button>
                        </div>
                        <div class="col-xs-12 col-sm-4 golfShop">
                            <button>
                              <p className="golfBtn">Golf Shop</p> 
                        </button>
                        </div>
                        <div class="col-xs-12 col-sm-4 clubServices"><button>
                              <p>Club Services</p> 
                        </button></div>
                    </div>
                </div>
                </div>
        )
    }
}

export default GolfServices
