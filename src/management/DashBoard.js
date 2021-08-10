import React, { Component } from 'react'
import PaymentIcon from '@material-ui/icons/Payment';
import AddBoxIcon from '@material-ui/icons/AddBox';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import DirectionsWalkIcon from '@material-ui/icons/DirectionsWalk';
import DoneIcon from '@material-ui/icons/Done';
 class DashBoard extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            pageLoaded:false, 
        }
    }
    componentDidMount(){
        this.setState({pageLoaded:true})
        
    }
    render() {
        return (
            <div style={{backgroundColor:"#D2D6DE",height:"100vh"}}>
            <div style={{height: 150, width: "100%", display:"flex",  justifyContent:"center", alignItems:"center" ,marginTop:"3%"}}>
              <h2> Welcome to Elysian Management Portal</h2>
               </div>
               <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
               <div style={{minWidth:350}}><PaymentIcon style={{fontSize:22,color:""}}/><a href="/user-payment" style={{color:"" ,fontSize:30,marginLeft:10 ,textDecoration:"none"}}>Payments</a></div>
               <div style={{minWidth:350}}><AccountBalanceWalletIcon style={{fontSize:22,color:""}}/><a href="/office-expense" style={{color:"" ,fontSize:30,marginLeft:10,textDecoration:"none"}}>Expense</a></div>
               </div>
               <div style={{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"}}>
               <div style={{minWidth:350}}><DoneIcon style={{fontSize:22,color:""}}/><a href="/user-booking" style={{color:"" ,fontSize:30,marginLeft:10,textDecoration:"none"}}>Booking</a></div>
               <div style={{minWidth:350}}><DirectionsWalkIcon style={{fontSize:22,color:""}}/><a href="/user-visit" style={{color:"" ,fontSize:30,marginLeft:10,textDecoration:"none"}}>Visits</a></div>
               </div>
               <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap"}}>
               <div style={{minWidth:350}}><AddBoxIcon style={{fontSize:22,color:""}}/><a href="/sign-up" style={{color:"" ,fontSize:30,marginLeft:10,textDecoration:"none"}}>Add Users</a></div>
            </div>
            </div>
        )
    }
}

export default DashBoard
