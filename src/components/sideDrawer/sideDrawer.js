import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, Typography, Drawer, Divider, Menu, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu';
// import LockOpenIcon from '@material-ui/icons/LockOpen';
import './sideDrawer.css'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import SearchIcon from '@material-ui/icons/Search';
// import { getLocationData, getLocation } from '../../redux/actions/locationAction'
import { connect } from 'react-redux';
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {authLogout} from "../../redux/actions/userLoginAction"
// import Cart from '../../views/cart/cart'

class SideDrawer extends Component {
    constructor() {
        super();
        this.toggleDrawer = this.toggleDrawer.bind(this)
        this.state = {
            open: false,
            openCart: false,
            staff: false,
            admin: false,
        }
    }

    toggleDrawer(e) {
        this.setState({ open: !this.state.open })
    }

    handleClick(e) {
        this.setState({ anchorE1: e.currentTarget })
    }

    handleClose() {
        this.setState({ anchorE1: null })
    }

    // handleLogin() {
    //     this.props.history.push("/login")
    //     this.handleClose()
    // }

    // handleUser() {
    //     this.props.history.push('/user-profile')
    //     this.handleClose()
    // }

    // handleWishlist() {
    //     this.props.history.push('/product-wishlist')
    //     this.handleClose()
    // }

    handleLogout = (e) => {
        this.props.authLogout()
        // this.handleClose()
        this.props.history.push("/")
    }


    render() {
        return (
            <div>
                {/* --------->> Top Navbar <<------------------ */}
                <AppBar position='static' className="appbar" style={{ position: "fixed", top: 0, margin: 0, left: 0 ,backgroundColor:"#ACB7BE" }}>
                    <Toolbar className="navbar-main-area">
                        <IconButton className="navbar-menu-icon" color="inherit" aria-label="menu" onClick={() => { this.toggleDrawer() }}>
                            <MenuIcon />
                        </IconButton>
                        <a href="/" style={{ textDecoration: "none", color: "white" }}>
                            <Typography variant="h6" className="navbar-menu-typography">
                                Elysian
                            </Typography>
                        </a>
                    </Toolbar>
                </AppBar>

                {/* -------->> FOR SIDE DRAWER <---------------- */}

                <Drawer anchor="left" open={this.state.open} onClose={() => this.toggleDrawer()} variant="temporary" elevation={16}>
                    <div className="app-drawer-base">
                        <a color="primary" className="sidebar-button" href='/dashboard'>
                            <text className="sidebar-button-font">Home</text>
                        </a>
                        <Divider />
                        <a color="primary" className="sidebar-button" href='/user-payment'>
                        <text className="sidebar-button-font">Payments</text>
                    </a>
                    <Divider />        
                    <a color="primary" className="sidebar-button" href='/office-expense'>
                    <text className="sidebar-button-font">Expenses</text>
                </a>
                <Divider />
                <a color="primary" className="sidebar-button" href='/user-booking'>
                <text className="sidebar-button-font">Bookings</text>
            </a>
            <Divider />
            <a color="primary" className="sidebar-button" href='/user-visit'>
            <text className="sidebar-button-font">Visits</text>
        </a>
        <Divider />
        <a color="primary" className="sidebar-button" href='/sign-up'>
        <text className="sidebar-button-font">Add User</text>
    </a>
    <Divider />
    
    <text className="sidebar-button-font" onClick={(e)=>this.handleLogout(e)}>Log Out</text>


                        {/* {localStorage.getItem('token') &&
                            <a color="primary" className="sidebar-button" href="/user-profile" >
                                <text className="sidebar-button-font">My Profile</text></a>} */}
                      
                    </div>
                </Drawer>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {

    }
}


export default compose(
    withRouter,
    connect(mapStateToProps,{authLogout})
)(SideDrawer);
