import React, { Component } from 'react'
import "./WrapperCircle.css"
export class WrapperCircle extends Component {
    render() {
        return (
            <div>
            <div style={{marginTop:20,textAlign:"center"}}>
            <h3 className="aana-or">How We<strong> Work</strong> </h3>
            <text>Made with love by the fine folks at</text>
            </div>
            <div className="wrapper-circle">

            <div className="wrapper-circle-offers style-offers-three">
            <a href="#">
            
            <div className="img" >
            <img style={{opacity:1}}  src='/images/assets/011.jpg' data-no-retina alt="" className="img-responsive" /></div>
            <div className="step-txt">01</div>
            <div className="info-offers">
            <div className="text-information">
            <div className="title">Reception</div>
            </div>
            </div>
            </a>
            </div>
            
            <div className="wrapper-circle-offers style-offers-three">
            <a href="#"><div className="img" >
            <img style={{opacity:1}}  src='/images/assets/022.jpg' data-no-retina alt="" className="img-responsive" /></div>
            <div className="step-txt">02</div>
            <div className="info-offers">
            <div className="text-information">
            <div className="title">Preparation</div>
            </div></div></a></div>
            
            <div className="wrapper-circle-offers style-offers-three">
            <a href="#"><div className="img" >
            <img style={{opacity:1}}  src='/images/assets/033.jpg' data-at2x='http://relish.creaws.com/wp-content/uploads/2016/08/blog_13_8c3205ddba0b4015e9a3b0398f74942d@2x.jpg' alt="" className="img-responsive"/></div>
            <div className="step-txt">03</div><div className="info-offers">
            <div className="text-information"><div className="title">Procedures</div>
            </div></div></a></div>
            
            <div className="wrapper-circle-offers style-offers-three">
            <a href="#"><div className="img" >
            <img style={{opacity:1}} src='/images/assets/044.jpg' 
            data-at2x='http://relish.creaws.com/wp-content/uploads/2016/08/blog_11_632ecde6e9e0c06cbe7f9c90c96f5456@2x.jpg' 
            alt="" className="img-responsive"/></div>
            <div className="step-txt">04</div>
            <div className="info-offers"><div className="text-information">
            <div className="title">Satisfaction</div></div></div></a></div></div>
                 
            </div>
        )
    }
}

export default WrapperCircle
