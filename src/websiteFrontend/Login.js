import React, { Component } from 'react'
import { Card, TextField, Button, Snackbar } from "@material-ui/core";
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LockIcon from '@material-ui/icons/Lock';
import {connect} from 'react-redux'
import  {authLogin} from  ".././redux/actions/userLoginAction"
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
          email: "",
          password: "",
          emailError:"",
          passwordError:"",
        alertShow:false
        };
      }  
    
     //-------------->>>>>>>>>> FORM VALIDATION <<<<<<<<<---------------//
    
    validate =() => {
    let isError =false 
    const error ={
      emailError:"null",
      passwordError:"null"
    }
    if (!/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(this.state.email)){
      isError = true
      error.emailError = "Email is not correct"
    }
    if (!this.state.password || this.state.password.length < 8) {
      isError = true
      error.passwordError =  'Password must be 8 characters long!'
    }
    
    this.setState({
     ...this.state,
      emailError: error.emailError,
      passwordError: error.passwordError
    })
    return isError
    }
     //-------------->>>>>>>>>> ON SUBMIT FUNCTION <<<<<<<<<---------------//
onSubmit = e => {
    e.preventDefault()
    const err = this.validate();
    if (!err) {
      this.setState({
          email: "",
          password: "",
          emailError: "",
          passwordError: ""
      })
     var email = this.state.email
             var password = this.state.password
            this.props.authLogin({ email, password })
             console.log(email)
             console.log(password)
    }
    }
          //-------------->>>>>>>>>> HANDLE CHANGE FUNCTION <<<<<<<<<---------------//
    handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    };
        //-------------->>>>>>>>>>  LIFE CYCLES <<<<<<<<<---------------//
componentDidMount() {
    if (localStorage.getItem('token')) {
      this.props.history.push("/dashboard")
    }
    }
    /// DID updates
    componentDidUpdate(prevProps) {
    if (localStorage.getItem('token')) {
       this.props.history.push("/dashboard")
    }
    // if (this.props.error !== prevProps.error && this.props.error !== null && this.props.error !== undefined) {
    //   this.setState({ alertShow: true })
    // }
      
  }  
    render() {
        console.log(this.state);
console.log(this.props);
        return (
            <div style={{backgroundColor:"#D2D6DE",height:"100vh"}}>
           
            <div style={{textAlign:"center",}}>
            <div style={{height: 150, width: "100%", display:"flex",  justifyContent:"center", alignItems:"center" }}>
            <text style={{fontSize:35,}}><b>Elysianspa</b><br/>
            Management panel</text>
            </div>
      
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", marginBottom: 20 ,backgroundColor:"#D2D6DE"}}>
           
            <Card elevation={2} style={{ width: 350,padding: 5,height:280 }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            <text style={{ fontSize:20, marginTop: 15 }}>Login</text>
            </div> 
            <div style={{position:"relative",marginLeft:"5%",marginTop:"5%"}}>
            <input type="text"  onChange={(e)=>this.handleChange(e)} name="email" value={this.state.email} style={{display:"block",height:35,outline:"none",paddingLeft:10,paddingRight:10, width: 300,}}
            placeholder="Email"/>
            <MailOutlineIcon  style={{height:15,width:30,position:"absolute",top:10,right:35}} />
            </div>
            <br/>
            <div style={{position:"relative",marginLeft:"5%"}}>
            <input type="password" onChange={(e)=>this.handleChange(e)} value={this.state.password} name="password"  style={{display:"block",height:35,outline:"none",paddingLeft:10,paddingRight:10, width: 300,}}
            placeholder="Password"/>
            <LockIcon  style={{height:15,width:30,position:"absolute",top:10,right:35}} />
            </div>
               
                <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", }}>
                    <Button type="submit" variant="contained"  color="primary" onClick={(e)=>this.onSubmit(e)}
                        style={{ marginTop: 15,marginLeft:"60%" }}> Login </Button>
                </div>
                {/***** 
                <div style={{ display: "flex", justifyItems: "center", marginTop: 15 ,marginLeft:"5%"}} >
                    <a href="/forgot-password" style={{ textDecoration: "none", color: "blue", flex: 3 }} > I Forgot My Password? </a>
              </div>
              */}
            </Card>
            
            </div>    
            </div>
        )
    }
}
const mapStateToProps = state => {
    return {
        token: state.auth.token,
        error: state.auth.error,
        status: state.auth.error
    }
  }
  export default connect(mapStateToProps, { authLogin })(Login);