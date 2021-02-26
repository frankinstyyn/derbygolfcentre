import React, { Component } from 'react'

export class ProLessons extends Component {
    render() {
        return (
            <div className="">
                <div class="row">
                    <div class="col-sm-12 col-md-6 danImageContainer">
                        <button>
                            <a href="mailto:ddelaney@gmail.com?subject=Golf Lesson">
                                Book A Lesson
                            </a>
                        </button>
                    </div>
                    <div class="col-sm-12 col-md-6 lessonsContainer">
                        <h1>Daniel Delaney - PGA Professional</h1>
                        <p>Whether you're new to golf or a seasoned  player, I'll work with you so we can improve your golf game and lower your scores.</p>
                        <p>I work in a way you'll understand and ensure you go into your next range session feeling motivated, confident and excited.</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col-sm-12 col-md-6">
                        <img src="" alt="">
                    </div>
                </div>
            </div>
        )
    }
}

export default ProLessons
