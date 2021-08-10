import React, { Component } from 'react'
import OurMoreServices from "./OurMoreServices"
import WrapperCircle from "./WrapperCircle"
import "./SwedishMassage.css"
export class SwedishMassage extends Component {
    render() {
        return (
            <div>
            <div className="swedish-heading">
            <div style={{height: 450, width: "100%", display:"flex",  justifyContent:"center", alignItems:"center" }}>
            <text className="swedish">Swedish Massage</text>
            </div>
            </div>
            <div style={{paddingRight:"8%",paddingLeft:"8%",marginTop:"4%"}}>
            <h1 style={{margin:"0 0 10px 0"}}>Swedish Massage</h1>
            <img src="/images/sm.jpg" style={{width:"30%" ,float:"right", margin:10}}/>
            
          <p style={{textAlign:"justify", fontSize:16}}>Swedish massage is equal to the word relaxation and uses special techniques to relax and calm down the stressed strength of the body. The massage is performing by applying a cream or oil on the body and softly the therapist stroke the strength from the lowly force to the great one.</p>
            
          <p style={{textAlign:"justify", fontSize:16}}>Healing the tension, your brain and body departing through is one of the most important areas of concern of the Swedish massage and it has been assert that just an hour of the massage can lower the stress by decreasing the heart rate and cutting the insulin and the cholesterol in the body. The <a href="<?php echo base_url('swedish-massage-in-delhi-ncr');?>">Swedish massage</a> is also known to get better the blood circulation in the body as the different techniques and strokes used through the session help facilitate the blood pressure through the congested area and allow the new blood to flow in the body. The psychotherapist releases the tension from the strength and the body by the special techniques that are well-known only to them and lots of have report that post the massage session, they think as if they have undergone a full transformation therapy.</p>
            
          <p style={{textAlign:"justify", fontSize:16}}>Daily travel in metros, hastening to office through crowded spaces, and sitting in frontage of the computer the full day! Almost all working professional in Delhi is aware of ill effects of such hectic lifestyle. Tension is really body&#39;s natural response to threat and danger, and can assist one to perform better by causing some exact biochemical changes in the body. However, being constantly stressed out or under pressure cannot motivate you to do perform improved.</p>
            
          <p style={{textAlign:"justify", fontSize:16}}>Managing your stress levels is vital to keep up a healthy lifestyle and prevent health problems that are trigger by stress.</p>
            
          <p style={{textAlign:"justify", fontSize:16}}>If you are on a lookout for some healthy ways to manage your stress, body massage in Delhi at Four Elysian Spa could be your answer. To book appointment calls us @ 9211200041 for appointment at any spa location in Delhi, India.</p>
            
          <p style={{textAlign:"justify", fontSize:16}}>Considered among the Top 10 SPAs in India, Elysian Spa is a favorite among many Delhi people and businessman. As one of the top Spas in Delhi we have the best therapist in India. If you need to relax, de-stress, pamper yourself, or just looking for the top massage or the top couples massage in Delhi, you couldn&#39;t go wrong with Elysian Spa, one of the top spas in Delhi. Book your appointment today!</p>
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

export default SwedishMassage
