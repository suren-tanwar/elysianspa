import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import SideDrawer from "../sideDrawer/sideDrawer"
import Blank from "../sideDrawer/Blank"
import OuterHeader  from "../../HandFooter/OuterHeader"
export class Header extends Component {
    constructor(props) {
        super(props);
        this.state={
            location: ""
        }
    }

    isOnLocation(e){
        if (this.props.location.pathname === "/sign-up" || this.props.location.pathname === "/user-payment" || this.props.location.pathname === "/office-expense" || this.props.location.pathname === "/user-booking" || this.props.location.pathname === "/user-visit" ||this.props.location.pathname === "/user-payment" || this.props.location.pathname === "/office-expense" || this.props.location.pathname === "/user-booking" || this.props.location.pathname === "/dashboard"){
           return true
        } else  {
            return false
        }
    }

    componentDidUpdate(prevProps){
        if(    this.props.location.pathname !== prevProps.location.pathname && this.props.location.pathname !== null && this.props.location.pathname !== undefined || localStorage.getItem("token")) {
            this.setState({location: this.props.location.pathname})
            this.isOnLocation()

        }
      
    }
        render() {
            return this.isOnLocation() ? <SideDrawer /> : this.props.location.pathname === "/login" ? <Blank/> : <OuterHeader />
      
          
          }
}

export default withRouter(Header);
