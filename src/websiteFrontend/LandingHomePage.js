import React, { Component } from 'react'
import "./LandingHomePage.css"
import Carousel from "react-bootstrap/Carousel";
export class LandingHomePage extends Component {
    render() {
        return (
            <div>
            <div style={{position:"relative"}}>
            <Carousel autoPlay={true} controls={false} indicators={false}  interval={1000}>
             <Carousel.Item>
            <img className="d-block w-100" src="/images/slide-1.jpg" alt="First slide" />
           </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src="/images/slide-2.jpg" alt="First slide" />
             </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src="/images/slide-3.jpg" alt="First slide" />
            </Carousel.Item>
            <Carousel.Item>
            <img className="d-block w-100" src="/images/slide-4.jpg" alt="First slide" />
            </Carousel.Item>
            </Carousel>
            </div>
          
            <div style={{position:"absolute",left:"7%",top:"40%" ,width: window.screen.width ? 480 : "display:none"}}>
            <h2 style={{color:"white" ,fontSize:60}} className="landing-css">Welcome to<br />
            <b style={{color:"white"}} className="landing-css">ELYSIAN SPA</b></h2>
            <p className="landing-css" style={{fontSize:30,color:"white"}}>Best Massage Parlour in Delhi<br />
             Come experience the secrets of relaxation <br/>with ELYSIAN SPA.</p>
            </div>

{/*****------PERFECT MASSAGE AND TREATMENNT DIVE */}
          <div style={{backgroundColor:"#F5F5F5" ,paddingBottom:"7%"}}>
            <div style={{textAlign:"center",padding:"4%"}}>
            <h2 style={{fontSize:28}}>PERFECT MASSAGE & BEAUTY TREATMENTS FOR YOU</h2>
           </div>
            <div style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly"}}>
            <div className="hover-box">
           <div>
           <img src="/images/top-2.jpg" style={{height:220,width:315,margin:"2%"}} />
           </div>
           <div style={{textAlign:"center"}}>
           <text style={{fontSize:21,marginTop:"",marginLeft:""}}>Skin Care with Hot Tub</text> <br/>
           <text style={{marginLeft:"",fontSize:16}}>Cure your skin with hot<br/>
               tub treatment</text>
           </div>
           </div>
           {/******* */}
           <div className="hover-box">
           <div>
           <img src="/images/top-3.jpg"  style={{height:220,width:315,margin:"2%"}} />
           </div>
           <div style={{textAlign:"center"}}>
           <text style={{fontSize:21,marginTop:"",marginLeft:""}}>Winter Special</text><br/>
           <text style={{marginLeft:"",fontSize:16}}>Get prepare for your winter <br/>spa treatment</text>
           </div>
           </div>
           {/******* */}
           <div className="hover-box">
           <div>
           <img src="/images/top-4.jpg"style={{height:220,width:315,margin:"2%"}} />
           </div>
           <div style={{textAlign:"center"}}>
           <text style={{fontSize:21,marginTop:"",marginLeft:""}}>Body Massage</text><br/>
           <text style={{marginLeft:"",fontSize:16}}>     Cure your body through <br/>
           massage</text>
           </div>
           </div>
           </div>
           </div>
{/*********-------spa info */}
<div className="spa-info">
<div style={{textAlign:"center",paddingLeft:"5%",paddingRight:"5%"}}>
<p style={{fontSize:22,color:"white",padding:"13%"}}>
At ELYSIAN SPA , New Delhi. 
We Provide Luxurious full body massage parlor in Delhi to Our clients at very 
reasonable Price so that it won't hamper their pockets and repeatedly they can visit and 
avail the Services. 
Female Staff is well trained provides good massage.</p>
</div>
</div>

{/*********-------OUR SERVCES DIV */}
<div style={{textAlign:"center",padding:"2%"}}>
<h2 style={{fontSize:28}}>OUR SERVICES</h2>
</div>
<div>
<div style={{paddingLeft:"15%",paddingRight:"12%"}}>
<text style={{color:"grey",fontSize:17}}>We provide full body massage services in Delhi, 
we have outstanding and world-class full body massage center in Delhi.
 We at ELYSIAN SPA is totally equipped with latest modern facilities you will have high-quality ambiance,
  well maintained room with ac, clean rooms. 
  We have 100% repeat client just because of our Excellency in the services.
   In Delhi there are lots of spa available but if you are top full body massage in Delhi then you need to contact us on +91- 9205292646,
    you can book appointment try once our spa services then you will not visit again any other spa center,
 we give 100% satisfaction guarantee with our services.</text>
</div>
</div>
{/*********-------MASSAGES TYPES DIV one*/}
<div style={{display:"flex", flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",marginTop:"3%"}}>
<div style={{width:230,height:330}}>
<div style={{textAlign:"center"}}>
<img src="/images/icon/1-icon.png" />
</div>
<div style={{textAlign:"center"}}>
<text style={{fontSize:22,}}>Swedish Massage</text>
</div>
<div style={{padding:"2%"}}>
<text style={{fontSize:17,}} >Swedish massage is equal to the word relaxation and uses special techniques to relax and calm down the stressed strength of the body.
</text>
<div style={{textAlign:"center"}}>
<a href="/swedish-massage" style={{textDecoration:"none", color:"#86CE84"}}><text> Read More </text> </a>
</div>

</div>
<div>
<button type="button" class="btn btn-success" style={{width:228}}>SIGN UP & BOOK NOW</button>
</div>
</div>
{/********** 2*/}
<div style={{width:230,height:330}}>
<div style={{textAlign:"center"}}>
<img src="/images/icon/2-icon.png" />
</div>
<div style={{textAlign:"center"}}>
<text style={{fontSize:22,}}>Full Body Massage</text>
</div>
<div style={{padding:"2%"}}>
<text style={{fontSize:17,}} >
As the name suggest, these massages have a Lespa of giving complete relaxation and refreshment. Lespa promotes relaxation,...
</text>
<div style={{textAlign:"center"}}>
<a href="/full-body-massage" style={{textDecoration:"none", color:"#86CE84"}}><text> Read More </text> </a>
</div>

</div>
<div>
<button type="button" class="btn btn-success" style={{width:228}}>SIGN UP & BOOK NOW</button>
</div>
</div>
{/**********3 */}
<div style={{width:230,height:330}}>
<div style={{textAlign:"center"}}>
<img src="/images/icon/4-icon.png" />
</div>
<div style={{textAlign:"center"}}>
<text style={{fontSize:21,}}>Aroma Therapy Massage</text>
</div>
<div style={{padding:"2%"}}>
<text style={{fontSize:17,}} >Everyone may know that a great massage can do wonderful things for your brain and body when you're impression stressed.
</text>
<div style={{textAlign:"center"}}>
<a href="/aroma-therapy-massage" style={{textDecoration:"none", color:"#86CE84"}}><text> Read More </text> </a>
</div>

</div>
<div>
<button type="button" class="btn btn-success" style={{width:228}}>SIGN UP & BOOK NOW</button>
</div>
</div>
{/**********4 */}
<div style={{width:230,height:330}}>
<div style={{textAlign:"center"}}>
<img src="/images/icon/6-icon.png" />
</div>
<div style={{textAlign:"center"}}>
<text style={{fontSize:22,}}>Deep Tissue Massage</text>
</div>
<div style={{padding:"1.7%"}}>
<text style={{fontSize:17,}}>Deep tissues massage therapy objectives further levels of muscles and connective cells. This extreme and extremely helpful....
</text>
<div style={{textAlign:"center"}}>
<a href="/deep-tissue-massage" style={{textDecoration:"none", color:"#86CE84"}}><text> Read More </text> </a>
</div>

</div>
<div>
<button type="button" class="btn btn-success" style={{width:228}}>SIGN UP & BOOK NOW</button>
</div>
</div>
</div>
{/********** */}
{/*********-------MASSAGES TYPES DIV TWO */}
<div style={{display:"flex", flexDirection:"row",flexWrap:"wrap",justifyContent:"space-evenly",marginTop:"5%",marginBottom:"5%"}}>
<div style={{width:230,height:330}}>
<div style={{textAlign:"center"}}>
<img src="/images/icon/11-icon.png" />
</div>
<div style={{textAlign:"center"}}>
<text style={{fontSize:22,}}>Thai Massage</text>
</div>
<div style={{padding:"2%"}}>
<text style={{fontSize:17,}} >Thai massage, also simply called yoga massage. It is a 2,500-year-old Ayurvedic-based body science developed massage.

</text>
<div style={{textAlign:"center"}}>
<a href="/thai-massage" style={{textDecoration:"none", color:"#86CE84"}}><text> Read More </text> </a>
</div>

</div>
<div>
<button type="button" class="btn btn-success" style={{width:228}}>SIGN UP & BOOK NOW</button>
</div>
</div>
{/********** 2*/}
<div style={{width:230,height:330}}>
<div style={{textAlign:"center"}}>
<img src="/images/icon/12-icon.png" />
</div>
<div style={{textAlign:"center"}}>
<text style={{fontSize:22,}}>Couple Massage</text>
</div>
<div style={{padding:"1.7%"}}>
<text style={{fontSize:17,}} >
You know about the many and different benefits of massage. A partners massage can help you get in touch. When you have a enjoy.....
</text>
<div style={{textAlign:"center"}}>
<a href="/couple-massage" style={{textDecoration:"none", color:"#86CE84"}}><text> Read More </text> </a>
</div>

</div>
<div>
<button type="button" class="btn btn-success" style={{width:228}}>SIGN UP & BOOK NOW</button>
</div>
</div>
{/**********3 */}
<div style={{width:230,height:330}}>
<div style={{textAlign:"center"}}>
<img src="/images/icon/15-icon.png" />
</div>
<div style={{textAlign:"center"}}>
<text style={{fontSize:22,}}>Foot Reflexology</text>
</div>
<div style={{padding:"2%"}}>
<text style={{fontSize:17,}} >We all know that a foot massage therapy every now and then can really help us rest, particularly after a long day of standing....
</text>
<div style={{textAlign:"center"}}>
<a href="/foot-reflexology" style={{textDecoration:"none", color:"#86CE84"}}><text> Read More </text> </a>
</div>

</div>
<div>
<button type="button" class="btn btn-success" style={{width:228}}>SIGN UP & BOOK NOW</button>
</div>
</div>
{/**********4 */}
<div style={{width:230,height:330}}>
<div style={{textAlign:"center"}}>
<img src="/images/icon/9-icon.png" />
</div>
<div style={{textAlign:"center"}}>
<text style={{fontSize:22,}}>Balinese Massage</text>
</div>
<div style={{padding:"1.7%"}}>
<text style={{fontSize:17,}}>A Balinese massage treatments are an historical treatment related to worry release. It is an excellent technique....
</text>
<div style={{textAlign:"center"}}>
<a href="/balinese-massage" style={{textDecoration:"none", color:"#86CE84"}}><text> Read More </text> </a>
</div>

</div>
<div>
<button type="button" class="btn btn-success" style={{width:228}}>SIGN UP & BOOK NOW</button>
</div>
</div>
</div>
{/************ */}
<div className="last-box-landing-page">
<div className="become-a-member">
<div style={{marginTop:"10%"}}><text style={{color:"white",fontSize:70,lineHeight:1}}>Get Our All Services</text></div>
<div><text style={{color:"white",fontSize:20,}}>Pay 50% Amount V/A Paytm , UPI , Phonepay , googlePay And Bank Transfer Pay now and get Instent 30% Discount</text></div>
<br/>
<div><button type="button" className="btn-success" style={{width:"50%"}}>BECOME A MEMBER</button></div>
</div>
{/***********2 */}
<div className="become-a-member-b">
<div style={{marginTop:"10%"}}><text style={{color:"white",fontSize:70,lineHeight:1}}>Get Our All Services</text></div>
<div><text style={{color:"white",fontSize:20,}}>Pay 50% Amount V/A Paytm , UPI , Phonepay , googlePay And Bank Transfer Pay now and get Instent 30% Discount</text></div>
<br/>
<div><button type="button" className="btn-success" style={{width:"50%"}}>BECOME A MEMBER</button></div>
</div>
</div>

</div>
          
        )
    }
}

export default LandingHomePage
