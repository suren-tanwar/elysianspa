import React, { Component } from 'react'
import "./SignUp.css"
import {connect} from 'react-redux'
import  {passwordSignUp} from  ".././redux/actions/userLoginAction"
export class CustomerSignUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            password: '',
            mobile:"",
            gender:"",
            confirmPassword: '',
            passwordError: ''
        }
    }

     //-------------->>>>>>>>>> FORM VALIDATION <<<<<<<<<---------------//

    validate = () => {
    let isError = false;
    const error = {
      emailError:null,
       mobileNumberError: null,
       passwordError: null,
    };
    const { email } = this.state;
    if (!/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/.test(email)){
      isError = true
      alert("Please enter a valid email-id");
     
    }
    const {  mobile } = this.state;
    if (mobile.length < 10){
      isError = true
      alert("Please check Mobile Number");
    
    }
    const { password, confirmPassword } = this.state;
    if ( !password || !confirmPassword || password.length < 8
    ) {
      isError = true
      alert("Password should be greater than 8 digits");
    
    }
    if (password !== confirmPassword) {
      isError = true;
      alert("Password and confirm password are not same");
  
    }
    if (!this.state.name) {
        isError = true
        alert("Name Field Is Required");
    }
    if (!this.state.gender) {
        isError = true
        alert("Gender Field Is Required");
    }
    this.setState({
      ...this.state,
      emailError: error.emailError,
      mobileNumberError:error.mobileNumberError,
      passwordError: error.passwordError,});
    return isError;
  };


    //-------------->>>>>>>>>> HANDLE CHANGE FUNCTION <<<<<<<<<---------------//

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

    //-------------->>>>>>>>>> ON SUBMIT FUNCTION <<<<<<<<<---------------//
  onSubmit = (e) => {
    e.preventDefault();
    const err = this.validate();
    if (!err) {
        const form = new FormData();
        form.append("email",this.state.email)
        form.append("password",this.state.password)
        form.append("mobile",this.state.mobile)
        form.append("name",this.state.name)
        form.append("gender",this.state.gender)
         this.props.passwordSignUp(form)
        console.log(...form)
        alert("Succes");
    }
  };
 

    render() {
        console.log(this.props)
        console.log(this.state)
        return (
            <div>
            <div className="signup-heading">
            <div style={{height: 450, width: "100%", display:"flex",  justifyContent:"center", alignItems:"center" }}>
            <text className="service">Register</text>
            </div>
            </div>  
            <div className="signup-form">
            <div style={{display:"flex",flexDirection:"column",padding:"2%"}}>
           <div>
            <input  name="name" placeholder="Name" type="text" className="input-field" value={this.state.name} onChange={(e)=>this.handleChange(e)}/>
            </div>
            <br/>
            <div>
            <input  name="password" placeholder="Password"  type="password" value={this.state.password} className="input-field"  onChange={(e)=>this.handleChange(e)}/>
                 </div>
                 <br/>
                 <div>
                 <input  name="mobile" value={this.state.mobile}  type="text" placeholder="Mobile No." className="input-field"  onChange={(e)=>this.handleChange(e)}/>
                      </div>
                 </div>

                 <div style={{display:"flex",flexDirection:"column",padding:"2%"}}>
                 <div>
                
                  <input  name="email" value={this.state.email}  type="text" placeholder="Email" className="input-field"  onChange={(e)=>this.handleChange(e)}/>
                  </div>
                  <br/>
                  <div>
                  <input  name="confirmPassword"  type="password" value={this.state.confirmPassword} placeholder="Confirm Password" className="input-field"  onChange={(e)=>this.handleChange(e)}/>
                       </div>
                       <br/>
                       <div>
                       <select  name="gender" value={this.state.gender} placeholder="Email" className="input-field"  onChange={(e)=>this.handleChange(e)}>
                       <option> Select Gender</option>
                       <option value="1"> Male</option>
                       <option value="2"> Female </option>
                       <option value="3"> Others </option>
                        </select>
                        </div>
                       </div>
                 </div>
                 <div>
                 <button type="button" onClick={(e)=>this.onSubmit(e)} class="btn btn-success" style={{marginLeft:"13%",marginBottom:"5%"}}>Submit</button>
                 </div> 
            </div>
        )
    }
}
export default connect(null, { passwordSignUp })(CustomerSignUp);
