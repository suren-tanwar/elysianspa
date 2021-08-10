import React, { Component } from 'react'
import OurMoreServices from "./OurMoreServices"
import WrapperCircle from "./WrapperCircle"
import "./BalieneseMassage.css"
export class BalieneseMassage extends Component {
    render() {
        return (
            <div>
            <div className="balinese-heading">
            <div style={{height: 450, width: "100%", display:"flex",  justifyContent:"center", alignItems:"center" }}>
            <text className="balinese">Balinese Massage</text>
            </div>
            </div>
            <div style={{paddingRight:"8%",paddingLeft:"8%",marginTop:"4%"}}>
            <h1 style={{margin:"0 0 10px 0"}}>Balinese Massage</h1>
            <img src="/images/99.jpg" style={{width:"30%" ,float:"right", margin:10}}/>
            
           <p style={{textAlign:"justify", fontSize:16}}>A Balinese massage treatments are an historical treatment related to worry release. It is an excellent technique that helps and pampers the body. It also makes use of homeopathy techniques The circulation to the heart and the lymph are triggers. The essential oils activate the space for storage power and provide convenience from muscle damage. Anyone can benefit from it, but Balinese massage treatment can help with many issues and diseases, such as complications, muscular and pain, mixed illness, sleep issue, bronchial bronchial asthma, stress, depressive issues.</p>
            
            
            
           <p style={{textAlign:"justify", fontSize:16}}>Balinese massage is a full-body, deep-tissue, holistic treatment. Balinese massage uses a combination of gentle stretches, acupressure, reflexology, and aromatherapy to stimulate the blood circulation, oxygen and "qi" (energy) around your physique system, and bring a sense of wellbeing, calm and strong relaxation. Balinese massage uses a variety of techniques including skin rolling, kneading and patting, and pressure-point stimulation, combined with the aromas of essential oils.</p>
            
            
           <p style={{textAlign:"justify", fontSize:16}}>Balinese massage is a good therapy to choose if you want to experience a wide range of massage methods, need some help to rest, or if you're feeling a bit low. A pleasure massage with mind-set, this therapy will help you feel relaxed, but it will increase your flow and focus on target knotted to deal with physical problems as well.</p>
            
           <p style={{textAlign:"justify", fontSize:16}}>Balinese massage is usually conducted on a massage couch, but can also conducted on a floor mattress. Aromatherapy forms a significant part of a Balinese massage. The use of scented massage oil can be very therapeutic, with the aroma of the essential oils soothing your mind. The massage oil also helps massage swings become fluid and free of friction, which makes for a more comfortable treatment.</p>
            
           <p style={{textAlign:"justify", fontSize:16}}>Expect the specialist to use quite strong stress during the massage, in order to work on strong, knotted tissue and muscle damage. our specialist will also use long, soothing swings and kneading to reduce stress and improve circulation in the muscles nearer to the skin. Sessions usually last about an hour.</p>
            
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

export default BalieneseMassage
