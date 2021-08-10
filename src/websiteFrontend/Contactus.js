import React, { Component } from 'react'
import "./ContactUs.css"
export class Contactus extends Component {
    render() {
        return (
            <div>
            <div className="contactus-heading">
              <div style={{height: 450, width: "100%", display:"flex",  justifyContent:"center", alignItems:"center" }}>
            <text className="contact">Contact Us</text>
            </div>
            </div> 
          
            <div className="contact-section" style={{display: "flex",flexDirection: "row",flexWrap: "wrap",marginBottom:"5%"}}   >
         
            <div style={{  padding: "5vw", display: "flex",flexDirection: "column", flex: 1,}}>
              <h3 style={{fontSize: 30,fontWeight: "bold",textTransform: "uppercase",  }}   >
              OUR ADDRESS
              </h3>
              <p  style={{   color: "gray", fontSize: 25, }}  >
              Elysian Spa, 42- Jethabhai Zaveri building, Basant Lok, Vasant Vihar, New Delhi 110057
              </p>
              <div  style={{display: "flex",flexDirection: "column",marginLeft: 15,color: "gray", }}>
                  <text style={{fontSize: 20,}}>+91 011- 46046333</text>
                  <text style={{fontSize: 20,}}>+91 9205292646</text>
                  <text style={{fontSize: 20,}}>+91 9211200041</text>
                  <br/>
                  <text style={{fontSize: 20,}}>elysianspavv@gmail.com</text>
                  <br/><br/>
                  <text style={{fontSize: 22,}}><b>Call for Booking:-</b> +91 9211200041</text>
                </div>
          
  
  </div>
     {/*********88input box */}       
  <div
              className="contact-india-box"
              style={{
                display: "flex",
                flexDirection: "column",
                flex: 1,
             //   padding: 30,
              }}
            >
              <div style={{ marginTop:"3%"}}>
                <h3 style={{ fontWeight: "bold" }}>Send a message</h3>
              </div>
  
              <div style={{   display: "flex",   flexDirection: "row",   flexWrap: "wrap",}}>
              <input  name="name" placeholder="Name" style={{height: 50,width: 230,outline: 0,padding: 10,margin: 6 ,borderWidth:1  }}/>
                <input  name="email" placeholder="Email" style={{height: 50,width: 230,outline: 0,padding: 10,margin: 6   }}/>
                   </div>
              {/* <br /> */}
              <div style={{   display: "flex",   flexDirection: "row",   flexWrap: "wrap",}}>
                  <input  name="name" placeholder="Mobile Number" style={{height: 50,width: 230,outline: 0,padding: 10,margin: 6 ,borderWidth:1  }}/>
              <select  name="email" placeholder="Email" style={{height: 50,width: 230,outline: 0,padding: 10,margin: 6}}>
              <option> Select service</option>
              <option> Swedish Massage</option>
              <option> Full Body Massage </option>
              <option> Aroma Therapy Massage</option>
              <option> Deep Tissue Massage </option>
              <option> Thai Massage</option>
              <option> Couples Massage</option>
              <option> Foot Reflexology</option>
            
              </select>
                 </div>
              <br />
             <div>
                <textarea name="message" placeholder="Message" required="" rows="10"
                  style={{minHeight: 200,minWidth: 450,outline: 0,padding: 10 }} ></textarea>
              </div>
              <br />
              <div>
              <button type="button" class="btn btn-success" style={{width:228}}>SEND MESSAGE</button>
              </div>
            </div>
          </div>
            
            </div>
       
            
            
          
          
        )
    }
}

export default Contactus
