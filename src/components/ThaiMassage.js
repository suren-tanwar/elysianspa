import React, { Component } from 'react'
import OurMoreServices from "./OurMoreServices"
import WrapperCircle from "./WrapperCircle"
import "./ThaiMassage.css"
export class ThaiMassage extends Component {
    render() {
        return (
            <div>
            <div className="thai-heading">
            <div style={{height: 450, width: "100%", display:"flex",  justifyContent:"center", alignItems:"center" }}>
            <text className="thai">Thai Massage</text>
            </div>
            </div>
            <div style={{paddingRight:"8%",paddingLeft:"8%",marginTop:"4%"}}>
                  <h1 style={{margin:"0 0 10px 0"}}>Thai Massage</h1>
                  <img src="/images/012.jpg" style={{width:"30%" ,float:"right", margin:10}}/>
                  
                <p style={{textAlign:"justify", fontSize:16}}>Thai  massage, also simply called yoga massage. It is a 2,500-year-old Ayurvedic-based body science developed massage. A Thai massage is the go-to option for preventing and treating back conditions. It is more powerful and extensive than your usual massage, divisions and joints are controlled in a string of movements, motivated by yogic extending. Its helps Reduces Muscle Stress & Muscle spasms, Improves blood Flow, Balances and Increases Energy also Improved Circulation.</p>
            
          <p style={{textAlign:"justify", fontSize:16}}>Thai massage draws significant influence from India's ancient Ayurvedic customs of medical exercise. Ayurvedic medicine, also an alternative form of treatment, performs an important role in the concept of both Hinduism and Therevada Buddhism. Priests and similar practitioners of treatment passed on Ayurvedic techniques to Thailand some 2,500 years ago, thus having a baby to the wonderful trend that is Thai massage. </p>
            
          <p style={{textAlign:"justify", fontSize:16}}>Unlike Western massage styles, the Thai edition concentrates on circulation and stress points, promoting inner health as well as muscle versatility. Treatment often starts with you and progressively goes up-wards towards the head. The body is carefully organized into four roles (face-down, face-up, side, and seated position), which allows the masseur to perform a variety of workouts that would be otherwise unworkable.</p>
            
          <p style={{textAlign:"justify", fontSize:16}}>In both Eastern and Western treatment systems, the concept of maintaining balance or equilibrium is regarded crucial to great wellness. 'Sen' are regarded passages for power, and correspond with veins in our bodies. Traditional Chinese treatment practices suggest that when the 'Sen' become obstructed, power grows flat and our bodies drops its stability, leading to a range of ailments. Thai massage acts as an external stimulant to produce specific internal effects within our bodies, both freeing energy from obstruction and preserving wellness insurance harmony.</p>
            
          <p style={{textAlign:"justify", fontSize:16}}>Because of its emphasis on body work, joint release, and relaxation, Thai massage is often considered comparable to yoga exercises. Modern yoga exercises practice often includes traditional components implicit in Eastern religion, including spiritual viewpoint, spiritual philosophy to keep our bodies fit, and varying facets of relaxation. These components are sometimes tailored to meet the needs of non-religious practitioners, who may be interested in yoga exercises by its utility as a relaxation technique or as a way to keep in top shape. </p>
            
            </div> 
            <div style={{marginTop:"4%"}}>
<OurMoreServices/>
</div>
<div style={{marginTop:"15%",marginBottom:"4%"}}>
<WrapperCircle/>
</div> 
            </div>
        )
    }
}

export default ThaiMassage
