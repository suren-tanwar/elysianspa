import React, { Component } from 'react'
import "./OurMoreServices.css"
export class OurMoreServices extends Component {
    render() {
        return (
            <div>
            <div style={{marginTop:20,textAlign:"center"}}>
            <h3 className="aana-or">Our More<strong> Services</strong> </h3>
            </div>
            <div style={{paddingLeft:"10%",paddingRight:"10%"}}>
            <ul class="subpage-rul">
            <li><a href="/swedish-massage" title="Static Website Designing"><i class="samweb-icon"><img alt="static-website-designing" src="/images/services/1.jpg" /></i> Swedish Massage</a></li>
              
             <li><a href="/full-body-massage" title="Responsive Web Design"><i class="samweb-icon"><img alt="responsive-website-design" src="/images/services/2.jpg" /></i> Full Body Massage</a></li>
             
             <li><a href="/aroma-therapy-massage" title="Mobile Web Designing"><i class="samweb-icon"><img alt="mobile-web-designing" src="/images/services/4.jpg" /></i> Aroma Therapy Massage</a></li>
             
            
             
             <li><a href="/deep-tissue-massage" title="Dynamic Web Designing"><i class="samweb-icon"><img alt="dynamic-web-designing" src="/images/services/6.jpg" /></i> Deep Tissue Massage</a></li>
            
             
             <li><a href="/balienese-massage" title="Corporate Web Design"><i class="samweb-icon"><img alt="corporate-web-design" src="/images/services/9.jpg" /></i> Balinese Massage</a></li>
             
            
        
             <li><a href="/thai-massage" title="Corporate Web Design"><i class="samweb-icon"><img alt="corporate-web-design" src="/images/services/12.jpg" /></i> Thai Massage</a></li>
             
             <li><a href="/couple-massage" title="Corporate Web Design"><i class="samweb-icon"><img alt="corporate-web-design" src="/images/services/14.jpg" /></i> Couples Massage</a></li>
             
           
          
              <li><a href="/foot-reflexology" title="Corporate Web Design"><i class="samweb-icon"><img alt="corporate-web-design" src="/images/services/16.jpg" /></i> Foot Reflexology</a></li>      </ul>
         </div>  
            </div>
        )
    }
}

export default OurMoreServices
