import React, { Component } from 'react'
import OurMoreServices from "./OurMoreServices"
import WrapperCircle from "./WrapperCircle"
import "./FullBodyMassage.css"
export class FullBodyMassage extends Component {
    render() {
        return (
            <div>
            <div className="full-body-heading">
            <div style={{height: 450, width: "100%", display:"flex",  justifyContent:"center", alignItems:"center" }}>
            <text className="full-body">Full Body Massage</text>
            </div>
            </div>
            <div style={{paddingRight:"8%",paddingLeft:"8%",marginTop:"4%"}}>
            <h1 style={{margin:"0 0 10px 0"}}>Full Body Massage</h1>
            <img src="/images/22.jpg" style={{width:"30%" ,float:"right", margin:10}}/>    
          <p style={{textAlign:"justify", fontSize:16}}>As the name suggest, these massages have a Elysian Spa  of giving complete relaxation and refreshment. Elysian Spa promotes relaxation, circulation, and motion and relieves muscle tension. Effleurage or gliding, percussion or tapping, friction, vibration and petrissage or kneading is the various therapies useful in these body massages. Concept of anatomy, pathology and physiology are used to ensure full relaxing.</p>
            
          <p style={{textAlign:"justify", fontSize:16}}>You will forever be draped with the top quality sheet during your massage session and an extra blanket is offered at your request. The etiquette Jan will follow is to just uncover the part of the body they are working on, ensuring that your modesty is respected at every times.</p>
            
            
          <p style={{textAlign:"justify", fontSize:16}}>You can expect a relaxing and comfortable environment during your massage. The massage table is padded and a heating blanket is placed under the sheet, which you can have adjusted to your preference.</p>
            
            
          <p style={{textAlign:"justify", fontSize:16}}>There will be relaxing music playing, if not you request otherwise, and the room will be silence, with no outside distraction.</p>
            
            
          <p style={{textAlign:"justify", fontSize:16}}><b>How Do Massage Therapies Work?</b><br/>
            
            The basic machine by which most of the massage therapies exert their positive effect is by increasing the blood circulation, and flow of other main body fluids. However, different massage type may work by different mechanism. For example, Elysian Spa show calming and relaxing effect on brain by stimulating some specific regions in brain. <a href="<?php echo base_url();?>">Full Body Massage in Delhi</a> increases the flow of energy.</p>
            
          <p style={{textAlign:"justify", fontSize:16}}><b>What Are The Benefits Of Massage Therapy?</b><br/>
            An increasing body of research reveals a positive role of massage therapy in treatment of various pain situation, anxiety, stress and boosting immunity. Some of the health benefits of massage therapy include,<br/><br/>
            <b>1.</b> Restoration of energy flow<br/>
            <b>2.</b> Reduction of muscle pain<br/>
            <b>3.</b> Physical relaxation<br/>
            <b>4.</b> Improved body flexibility<br/>
            <b>5.</b> Mental relaxation<br/>
            <b>6.</b> Boosting Immunity<br/>
            <b>7.</b> Improvement in sleep quality<br/>
            <b>8.</b> Improved joint motion</p>
            
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

export default FullBodyMassage
