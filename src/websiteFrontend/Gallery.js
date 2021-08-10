import React, { Component } from 'react'
import "./Gallery.css"
export class Gallery extends Component {
    render() {
        return (
            <div>
            <div className="gallery-heading">
            <div style={{height: 450, width: "100%", display:"flex",  justifyContent:"center", alignItems:"center" }}>
                <text className="gallery">Gallery</text>
                </div>
            </div> 
            <div id="vlightbox1">
            <a className="vlightbox1" href="/images/gallery/1.jpg" title="1"><img src="/images/gallery/1.jpg" alt="1" className="gallery-image"/></a>
            
            <a className="vlightbox1" href="/images/gallery/2.jpg" title="2"><img src="/images/gallery/2.jpg" alt="2" className="gallery-image"/></a>
            
            <a className="vlightbox1" href="/images/gallery/3.jpg" title="3"><img src="/images/gallery/3.jpg" alt="3" className="gallery-image"/></a>
            
            <a className="vlightbox1" href="/images/gallery/4.jpg" title="4"><img src="/images/gallery/4.jpg" alt="4" className="gallery-image"/></a>
            
            <a className="vlightbox1" href="/images/gallery/5.jpg" title="5"><img src="/images/gallery/5.jpg" alt="5" className="gallery-image"/></a>
            
            <a className="vlightbox1" href="/images/gallery/6.jpg" title="6"><img src="/images/gallery/6.jpg" alt="6" className="gallery-image"/></a>
            
            <a className="vlightbox1" href="/images/gallery/7.jpg" title="7"><img src="/images/gallery/7.jpg" alt="7" className="gallery-image"/></a>
            
            <a className="vlightbox1" href="/images/gallery/8.jpg" title="8"><img src="/images/gallery/8.jpg" alt="8" className="gallery-image"/></a>
            
            <a className="vlightbox1" href="/images/gallery/9.jpg" title="9"><img src="/images/gallery/9.jpg" alt="9" className="gallery-image"/></a>
            
            <a className="vlightbox1" href="/images/gallery/10.jpg" title="10"><img src="/images/gallery/10.jpg" alt="10" className="gallery-image"/></a>
            
            <a className="vlightbox1" href="/images/gallery/11.jpg" title="11"><img src="/images/gallery/11.jpg" alt="11" className="gallery-image"/></a>
            
            <a className="vlightbox1"  href="/images/gallery/12.jpg" title="12"><img src="/images/gallery/12.jpg" alt="12" className="gallery-image"/></a>
            
            <a className="vlightbox1" href="/images/gallery/13.jpg" title="13"><img src="/images/gallery/13.jpg" alt="13" className="gallery-image"/></a>
            <a className="vlightbox1" href="/images/gallery/14.jpg" title="14"><img src="/images/gallery/14.jpg" alt="14" className="gallery-image"/></a>
            
            <a className="vlightbox1" href="/images/gallery/15.jpg" title="15"><img src="/images/gallery/15.jpg" alt="15" className="gallery-image"/></a>
            <a className="vlightbox1" href="/images/gallery/16.jpg" title="16"><img src="/images/gallery/16.jpg" alt="16" className="gallery-image"/></a>
            
            <a className="vlightbox1" href="/images/gallery/17.jpg" title="17"><img src="/images/gallery/17.jpg" alt="17" className="gallery-image"/></a>
            
            <a className="vlightbox1" href="/images/gallery/18.jpg" title="18"><img src="/images/gallery/18.jpg" alt="18" className="gallery-image"/></a>
            <a className="vlightbox1" href="/images/gallery/19.jpg" title="19"><img src="/images/gallery/19.jpg" alt="19" className="gallery-image"/></a>
            
            <a className="vlightbox1" href="/images/gallery/20.jpg" title="20"><img src="/images/gallery/20.jpg" alt="20" className="gallery-image"/></a> 
            </div>             
            </div>
        )
    }
}

export default Gallery
