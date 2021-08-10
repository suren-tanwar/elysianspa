import React, { Component } from 'react'
import "./Footer.css"
export class Footer extends Component {
    render() {
        return (
            <div>
        
            <div id="footer">
            <div className="container">
            <div className="row">
            <div className="col-md-4 animate-box">
            <h3 className="section-title">About Us</h3>
            
            <p style={{color:"white"}}>The Elysian Spa in Delhi, India is spread across more than 1000 sq. ft of comfortable space. Here is a Boutique Spa where the slight tones and textures embrace you and the warmth of the decoration sets the mood for your journey towards physical and spiritual well being.</p>
            
            <p style={{color:"white"}}>Borrowing its name from the traditional Thai greeting, this magical escape will improve your well-being to a complete new level.</p>
            <a href="/">Read More</a></div>
            
            <div className="col-md-4 animate-box">
            <h3 className="section-title">Our Address</h3>
            
            <ul className="contact-info">
                 <li style={{color:"white"}}>Elysian Spa,
            42- Jethabhai Zaveri building, Basant Lok, Vasant Vihar, New Delhi 110057</li>
                <li><a href="tel:011- 46046333">+91 011- 46046333</a><br />
                    <a href="tel:9211200041">+91 9211200041</a><br />
                <a href="tel:9205292646">+91 9205292646</a></li>
                <li><a href="mailto:info@lispa.in">elysianspavv@gmail.com</a></li>
            </ul>
            </div>
            
            <div className="col-md-4 animate-box">
            <h3 className="section-title">Drop us a line</h3>
            
            <form action="" className="contact-form" method="post">
            <div className="form-group"><label className="sr-only" for="name">Name</label> <input className="form-control" id="name" name="name" placeholder="Name" type="name" /></div>
            
            <div className="form-group"><label className="sr-only" for="email">Email</label> <input className="form-control" id="email" name="email" placeholder="Email" type="email" /></div>
            
            <div className="form-group"><label className="sr-only" for="name">Mobile No.</label> <input className="form-control" id="name" name="mob" placeholder="Mobile No." type="name" /></div>
            
            <div className="form-group"><label className="sr-only" for="message">Message</label><textarea className="form-control" id="message" name="msg" placeholder="Message" style={{height:50}}></textarea></div>
            
            <div className="form-group"><input className="btn btn-send-message btn-md" id="btn-submit" type="submit" value="Send Message" /></div>
            </form>
            </div>
            </div>
            
            <div className="row copy-right">
            <div className="col-md-6 col-md-offset-3" style={{textAlign:"center"}}>
            <p className="fh5co-social-icons"></p>
            
            <p>Copyright 2021 Elysian. All Rights Reserved.</p>
            </div>
            </div>
            </div>
            </div>
      
            
            </div>
      
    
         
        )
    }
}

export default Footer
