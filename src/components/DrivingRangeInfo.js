import React, { Component } from 'react'

export class DrivingRangeInfo extends Component {
    render() {
        return (
            <div className="">
                <div class="row">
                    <div class="col-sm-12 col-md-6 rangeContainer">
                        <p>
                            At Derby Golf Centre you'll find 25 professional floodlit driving bays for left and right handed golfers. All supplied with ball holders and multi-height tees to ensure you can hit every club in your bag to improve your game.
                        </p>
                    </div>
                    <div class="col-sm-12 col-md-6 rangeContainer">
                        <h1>Ball Prices</h1>
                        <ul>
                            <li>100 Balls - £6.50</li>
                            <li>60 Balls - £4.50</li>
                            <li>30 Balls - £3.00</li>
                        </ul>
                        <h1>Special Offers</h1>
                        <ul>
                            <li>5 x 100 Ball Tokens - £25.00</li>
                            <li>5 x 60 Ball Tokens - £17.50</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default DrivingRangeInfo
