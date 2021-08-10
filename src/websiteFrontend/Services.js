import React, { Component } from 'react'
import "./Services.css"
export class Services extends Component {
    render() {
        return (
            <div>
                <div className="services-heading">
                <div style={{height: 450, width: "100%", display:"flex",  justifyContent:"center", alignItems:"center" }}>
                <text className="service">Services</text>
                </div>
                </div>
                {/*********-------MASSAGES TYPES DIV one*/}
<div style={{display:"flex", flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",marginTop:"6%"}}>
<div style={{width:230,height:330}}>
<div style={{textAlign:"center"}}>
<img src="/images/home-image-4.jpg" style={{width:200,height:130}} />
</div>
<div style={{textAlign:"center"}}>
<a href="/swedish-massage" style={{textDecoration:"none",color:"black"}}><text style={{fontSize:22,}}><b>Swedish</b> Massage</text></a>
</div>
<div style={{padding:"2%"}}>
<text style={{fontSize:17,}} >Swedish massage is equal to the word relaxation and uses special techniques to relax and calm down the stressed strength of the body.
</text>


</div>

</div>
{/********** 2*/}
<div style={{width:230,height:330}}>
<div style={{textAlign:"center"}}>
<img src="/images/22.jpg" style={{width:200,height:130}} />
</div>
<div style={{textAlign:"center"}}>
<a href="/full-body-massage" style={{textDecoration:"none",color:"black"}}><text style={{fontSize:22,}}><b>Full Body</b> Massage</text></a>
</div>
<div style={{padding:"2%"}}>
<text style={{fontSize:17,}} >
As the name suggest, these massages have a Lespa of giving complete relaxation and refreshment. Lespa promotes relaxation,...
</text>


</div>

</div>
{/**********3 */}
<div style={{width:230,height:330}}>
<div style={{textAlign:"center"}}>
<img src="/images/44.jpg" style={{width:220,height:130}} />
</div>
<div style={{textAlign:"center"}}>
<a href="/aroma-therapy-massage" style={{textDecoration:"none",color:"black"}}><text style={{fontSize:20,}}><b>Aroma Therapy</b> Massage</text></a>
</div>
<div style={{padding:"2%"}}>
<text style={{fontSize:17,}} >Everyone may know that a great massage can do wonderful things for your brain and body when you're impression stressed.
</text>


</div>

</div>
{/**********4 */}
<div style={{width:230,height:330}}>
<div style={{textAlign:"center"}}>
<img src="/images/66.jpg" style={{width:220,height:130}} />
</div>
<div style={{textAlign:"center"}}>
<a href="/deep-tissue-massage" style={{textDecoration:"none",color:"black"}}><text style={{fontSize:22,}}><b>Deep Tissue</b> Massage</text></a>
</div>
<div style={{padding:"1.7%"}}>
<text style={{fontSize:17,}}>Deep tissues massage therapy objectives further levels of muscles and connective cells. This extreme and extremely helpful....
</text>
</div>
</div>
</div>
{/********** */}
{/*********-------MASSAGES TYPES DIV TWO */}
<div style={{display:"flex", flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",marginTop:"5%",marginBottom:"5%"}}>
<div style={{width:230,height:330}}>
<div style={{textAlign:"center"}}>
<img src="/images/012.jpg" style={{width:220,height:130}} />
</div>
<div style={{textAlign:"center"}}>
<a href="/thai-massage" style={{textDecoration:"none",color:"black"}}><text style={{fontSize:22,}}><b>Thai</b> Massage</text></a>
</div>
<div style={{padding:"2%"}}>
<text style={{fontSize:17,}} >Thai massage, also simply called yoga massage. It is a 2,500-year-old Ayurvedic-based body science developed massage.

</text>


</div>

</div>
{/********** 2*/}
<div style={{width:230,height:330}}>
<div style={{textAlign:"center"}}>
<img src="/images/013.jpg" style={{width:220,height:130}} />
</div>
<div style={{textAlign:"center"}}>
<a href="/couple-massage" style={{textDecoration:"none",color:"black"}}><text style={{fontSize:22,}}><b>Couple</b> Massage</text></a>
</div>
<div style={{padding:"1.7%"}}>
<text style={{fontSize:17,}} >
You know about the many and different benefits of massage. A partners massage can help you get in touch. When you have a enjoy.....
</text>


</div>

</div>
{/**********3 */}
<div style={{width:230,height:330}}>
<div style={{textAlign:"center"}}>
<img src="/images/016.jpg" style={{width:220,height:130}} />
</div>
<div style={{textAlign:"center"}}>
<a href="/foot-reflexology" style={{textDecoration:"none",color:"black"}}><text style={{fontSize:22,}}><b>Foot</b> Reflexology</text></a>
</div>
<div style={{padding:"2%"}}>
<text style={{fontSize:17,}} >We all know that a foot massage therapy every now and then can really help us rest, particularly after a long day of standing....
</text>


</div>

</div>
{/**********4 */}
<div style={{width:230,height:330}}>
<div style={{textAlign:"center"}}>
<img src="/images/99.jpg" style={{width:220,height:130}} />
</div>
<div style={{textAlign:"center"}}>
<a href="/balienese-massage" style={{textDecoration:"none",color:"black"}}><text style={{fontSize:22,}}><b>Balinese</b> Massage</text></a>
</div>
<div style={{padding:"1.7%"}}>
<text style={{fontSize:17,}}>A Balinese massage treatments are an historical treatment related to worry release. It is an excellent technique....
</text>


</div>

</div>
</div>
            </div>
        )
    }
}

export default Services
