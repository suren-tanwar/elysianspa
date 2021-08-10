import React, { Component } from 'react'

export class Testing extends Component {
  render() {
    return (
      <div>
      <div class="content-wrapper">
     
     <h1>
         Management panel
        </h1>
     
    
        <div class="row">
          <div class="col-lg-3 col-xs-6">
         <div class="small-box bg-aqua">
              <div class="inner">
                <p>Tasks</p>
              </div>
              <div class="icon">
                <i class="fa fa-tasks"></i>
              </div>
              <a href="/" class="small-box-footer">See all
                <i class="fa fa-arrow-circle-right"></i>
              </a>
            </div>
          </div>
    
          <div class="col-lg-3 col-xs-6">
    
            <div class="small-box bg-green">
              <div class="inner">
 
                <p>Finished Tasks</p>
              </div>
              <div class="icon">
                <i class="ion ion-pie-graph"></i>
              </div>
              <a href="/" class="small-box-footer">More information
                <i class="fa fa-arrow-circle-right"></i>
              </a>
            </div>
      
          <div class="col-lg-3 col-xs-6">
         
            <div class="small-box bg-yellow">
              <div class="inner">
            
                <p>User</p>
              </div>
              <div class="icon">
                <i class="ion ion-person"></i>
              </div>
              <a href="" class="small-box-footer">
    More information
                <i class="fa fa-arrow-circle-right"></i>
              </a>
            </div>
      
          <div class="col-lg-3 col-xs-6">
         
            <div class="small-box bg-red">
              <div class="inner">
               
                <p>Log</p>
              </div>
              <div class="icon">
                <i class="fa fa-archive"></i>
              </div>
              <a href="" class="small-box-footer">More information
                <i class="fa fa-arrow-circle-right"></i>
              </a>
            </div>
      
        </div>
  
        </div>
        
        </div>
        
        </div>
    </div>   
      </div>
    )
  }
}

export default Testing
