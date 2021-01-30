import React, { Component } from 'react'

export class GolfServices extends Component {
    render() {
        return (
            <div class="mainServices">
                <div className="servicesBanner">
                    <h1>Our Services</h1>
                    <div class="row">
                        <div class="col-sm-4 drivingRange">
                            <button>
                                Driving Range
                        </button>
                        </div>
                        <div class="col-sm-4 golfShop">Golf Shop</div>
                        <div class="col-sm-4 clubServices">Club Services</div>
                    </div>
                </div>
                </div>
        )
    }
}

export default GolfServices
