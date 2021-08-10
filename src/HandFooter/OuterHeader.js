import React, { Component } from 'react'
import "./Header.css"
export class OuterHeader extends Component {
    render() {
        return (
            <div>
            <div id="fh5co-header-section">
            <div class="container">
            <div class="nav-header">
            <h1 id="fh5co-logo"><a href="/">El<span>ysian</span></a></h1>  
         
            
            <div id="fh5co-menu-wrap">
            <ul class="sf-menu">
                <li class="active"><a href="/">Home</a></li>
                  <li><a href="/about">About</a></li>
                <li><a href="/services">Services</a></li>
                 <li><a href="/gallery">Gallery</a></li>
                 <li><a href="/contact-us">Contact</a></li>
                   <li><a href="/login">Login</a></li>
                <li><a href="/user-sign-up">Sign Up</a></li>
                <li><a href="tel: 9211200041">+91 9205292646</a></li>
                </ul>
               </div>
            </div>
            </div>
            </div>
          
            </div>
        )
    }
}

export default OuterHeader
