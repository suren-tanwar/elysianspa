import React, { Component } from 'react'
import SearchIcon from '@material-ui/icons/Search';
import Pagination from '@material-ui/lab/Pagination';
import {Table,TableBody,TableCell,TableContainer,TableHead,TableRow,Paper,Button,Dialog,Card,Modal, Input} from "@material-ui/core/";
import {getUserData} from '../redux/actions/searchUserAction'
import {addUserVisit,getUserVisit} from "../redux/actions/officeExpenseAction"
import { connect } from 'react-redux';

export class UserVisit extends Component {

    constructor(props) {
      super(props);
        this.state = {
          open:false,
          dateFrom:"",
          dateTo:"",
          modal:false,
          search:'',
          query:"",
          userSearch:[],
          user:"",
          user_id:"",
          time:"",
          user_subscription:"",
          visits:"",
          pending_visit:"",
          pages:"",
          pageIndex:"",
          toVisit:[]
         
        };
        
      }
      onFilterPress = () => {
        const dateFrom = this.state.dateFrom
        const dateTo = this.state.dateTo
        const query = this.state.query
        const token = localStorage.getItem('token')
        this.props.getUserVisit({ dateFrom, dateTo, query ,token});
      }
      onUserSearch = e => {
        e.preventDefault();
        const search = this.state.search
        this.props.getUserData(search)
        }
  
      modalOpen = () => {
        this.setState({ modal: true })
      }
    
    
      
      modalClose = () => {
        this.setState({ modal: false })
      } 
      openBox=()=>{
        this.setState({
          open:true,
        })
      }
      closeBox=(e)=>{
        this.setState({
          open:false,
        })
      }

    onValueChangeDateFrom = (e)=>{
      this.setState({ dateFrom: e.target.value});
      console.log(this.state)
    }
    onValueChangeDateTo = (e)=>{
      this.setState({ dateTo: e.target.value});
      console.log(this.state)
    }
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value, });
      console.log(this.state);
    }

    componentDidMount(){
 
      const dateFrom = this.state.dateFrom
      const dateTo = this.state.dateTo
      const query = this.state.query
      const token = localStorage.getItem('token')
      this.props.getUserVisit({ dateFrom, dateTo, query ,token });
    }
    
  componentDidUpdate (prevProps,prevState){
    if (this.state.userSearch !== prevState.userSearch && this.state.userSearch!==null && this.state.userSearch !==undefined){
      this.setState({user_id:this.state.userSearch[0].id})
    }
    if (this.props.userSearch !== prevProps.userSearch && this.props.userSearch !== null && this.props.userSearch !==undefined){
      this.setState({userSearch:this.props.userSearch})
  }
    if (this.props.toVisit !== prevProps.toVisit && this.props.toVisit !== null && this.props.toVisit !==undefined){
      this.setState({toVisit:this.props.toVisit,pages:Math.ceil(this.props.toVisit.count/15)})
  }
}

    //-------------->>>>>>>>>> FORM VALIDATION <<<<<<<<<---------------//

    validate = () => {
      let isError = false;
      if (!this.state.user_id) {
        isError = true
        alert("Name Field Is Required");
    }
      if (!this.state.time) {
          isError = true
          alert("Date Field Is Required");
      }
 
    if (!this.state.user_subscription) {
        isError = true
        alert("Select field Is Required");
    }
    if (!this.state.visits) {
        isError = true
        alert("Visit Field Is Required");
    }

  if (!this.state.pending_visit) {
      isError = true
      alert("Pending visit Field Is Required");
  }


      return isError;
    };
  
onSubmit = e => {
  e.preventDefault()
  const err = this.validate();
  if (!err) {
       const form = new FormData();
       form.append("time",this.state.time)
       form.append("visits",this.state.visits)
       form.append("pending_visit",this.state.pending_visit)
       form.append("user_subscription",this.state.user_subscription)
       form.append("user",this.state.user_id)
       console.log(...form)
       const token = localStorage.getItem('token')
       this.props.addUserVisit({form, token})
       this.setState({modal:false})
}
}
handlePage = ({ e, page }) => {
  this.setState({ pageIndex: page })
//this.props.history.push(`/product-filtered/${page}`, { sub_category: this.state.sub_category })
}
    render() {
      console.log(this.props)
      console.log(this.state)
        return (
            <div>
              
            <div style={{marginLeft:"5%",marginTop:"10%"}}>
            <Button style={{backgroundColor:"#4CB648 ",}}  onClick={this.modalOpen}>
           <text style={{color:"white"}}> + Add User Visit</text>
            </Button>
            </div>
      <div>
      <Modal open={this.state.modal}    style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.6)" }}>
      <Paper style={{ width: "23%", height:"90%", marginTop: "2%", marginLeft: "18%"}}>
      <br/>
     <div style={{marginLeft:"10%"}}>
   <text style={{fontSize:20,fontStyle:"oblique",marginLeft:30}}>Name:</text>
     <div style={{position:"relative",}}>
     <input type="text" placeholder="Enter Email/Phone" name="search" value={this.state.search} onChange={(e)=>this.handleChange(e)}
       style={{ border: "1px solid gray", borderRadius:10,outline:"none",padding:8,paddingRight:31,display:"block",}} 
       />
         <SearchIcon onClick={(e)=>this.onUserSearch(e)} style={{height:30,width:30,position:"absolute",top:6,right:"16%"}} />
         </div>

         {(this.state.userSearch.length !==0 && this.state.userSearch !== null && this.state.userSearch !== undefined)
           &&
          this.state.userSearch[0].name 
          }
      <br/>
      <text style={{fontSize:20,fontStyle:"oblique",marginLeft:30}}>Date:</text>
      <input type="datetime-local" placeholder="Enter Date" name="time" value = {this.state.time} onChange={(e)=>this.handleChange(e)}
      style={{ border: "1px solid gray", borderRadius:10,outline:"none",padding:8,width:"83%",marginBottom:"2%"}} 
      />
    <br/>
                    {/* ************************************ */}
                    <text style={{fontSize:20,fontStyle:"oblique",marginLeft:30}}> User Subscribe:</text>
                    <select  name="user_subscription" value={this.state.user_subscription} placeholder="Email"  style={{ border: "1px solid gray", borderRadius:10,outline:"none",padding:8,width:"83%"}}  onChange={(e)=>this.handleChange(e)}>
                    <option> Select Service Type</option>
                    <option value="1"> 2000</option>
                    <option value="2"> 5000 </option>
                    <option value="3"> 10000 </option>
                     </select>
          
    
      <br/> 
      <text style={{fontSize:20,fontStyle:"oblique",marginLeft:30}}>Visits:</text>
      <input  name="visits" value={this.state.visits} type="text" placeholder="Email"  style={{ border: "1px solid gray", borderRadius:10,outline:"none",padding:8,width:"83%"}}  onChange={(e)=>this.handleChange(e)}/>
    
      <br/>  
      <text style={{fontSize:20,fontStyle:"oblique",marginLeft:30}}>pending Visit:</text>
      <input type="text" placeholder="Enter pending visit" name="pending_visit" value = {this.state.pending_visit} onChange={(e)=>this.handleChange(e)}
      style={{ border: "1px solid gray", borderRadius:10,outline:"none",padding:8,width:"83%",marginBottom:"2%"}} 
      />
      </div>
      <br/>
      <Button style={{backgroundColor:"#4CB648 " ,height:35,width:90,marginLeft:"10%"}} onClick={(e)=>this.onSubmit(e)}>
      <text style={{color:"white"}}>Submit</text> </Button>
      <Button style={{backgroundColor:"#367FA9 " ,height:35,width:90,marginLeft:"10%"}} onClick={this.modalClose}>
      <text style={{color:"white"}}>Cancel</text> </Button>
     </Paper>
      </Modal>
      </div>
            <div style={{display:"flex",paddingRight:"10%",paddingLeft:"10%",justifyContent:"space-evenly",marginTop:"3%"}}>
            <div style={{position:"relative",}}>
            <input type="text" placeholder="Enter..." name="query" value={this.state.query} onChange={(e)=>this.handleChange(e)}
              style={{ border: "1px solid gray", borderRadius:10,outline:"none",padding:8,display:"block"}} 
              />
                <SearchIcon onClick={(e)=>this.onFilterPress(e)} style={{height:30,width:30,position:"absolute",top:6,right:5}} />
                </div>
            <div style={{ marginLeft: "5%",}}>
            <Button onClick={this.openBox}
               style={{ backgroundColor:"#367FA9 ", marginLeft: "1%", padding: "3px 20px", }}>
               <text style={{color:"white"}}>Filter</text>
             </Button>
             </div>
             </div>
             <Dialog open={this.state.open}>
               <Card elevation={2} style={{width:350,padding:20}}>
                 <h2>Filter By:</h2>
          
                 <div style={{}}>
                   <text style={{fontSize:20}}>Date: </text><br/>
                   <input type="date" name="dateFrom" onChange={this.onValueChangeDateFrom} style={{padding:5}}/><br/>
                   <br/>
                   <input type="date" name="dateTo" onChange={this.onValueChangeDateTo} style={{padding:5}}/>
                 </div>
               
<br/>
<Button onClick={(e)=>this.onFilterPress(e)}
style={{ backgroundColor:"#367FA9 ", marginLeft: "1%", padding: "3px 20px", }}>
<text style={{color:"white"}}>Done</text>
</Button>
<Button onClick={(e)=>this.closeBox(e)}
style={{ backgroundColor:"#367FA9 ", marginLeft: "1%", padding: "3px 20px", }}>
<text style={{color:"white"}}>close</text>
</Button>
           
               </Card>
             </Dialog>
          
               {/* table------------------------------------ */}
               <TableContainer  style={{marginTop: "2%",paddingLeft:"5%",paddingRight:"5%"}}>
               <Table aria-label="simple table">
                 <TableHead>
                   <TableRow>

                   <TableCell   align="center"
                   style={{ fontSize:15,  color: "gray", backgroundColor: "#F3F7ED"}}>
                  Visits
                     </TableCell>
                     <TableCell   align="center"
                     style={{ fontSize:15,  color: "gray", backgroundColor: "#F3F7ED"}}>
           Pending Visits
                     </TableCell>
                     <TableCell    align="center"
                     style={{ fontSize:15,  color: "gray", backgroundColor: "#F3F7ED",}}>
           Date
                     </TableCell>
                  
                   </TableRow>
                 </TableHead>
  
                 <TableBody>
                   {(this.state.toVisit !== null && this.state.toVisit !== undefined && this.state.toVisit.length !== 0) &&
                   this.props.toVisit.results.map((toVisit)=>
                   <TableRow>
                  <TableCell style={{ fontSize:15 }} align="center">
                       {toVisit.visits}
                     </TableCell>
                     <TableCell style={{ fontSize:15 }} align="center">
                       {toVisit.pending_visit}
                     </TableCell>
                     <TableCell style={{ fontSize:15 }} align="center">
                       {toVisit.time}
                     </TableCell>
                       </TableRow>
                   )}
                 </TableBody>
              
               </Table>
             </TableContainer>
            <div style={{marginLeft:"40%",marginTop:"3%",marginBottom:"3%"}}>
             <Pagination onChange={({e,page}) => {this.handlePage({e,page})}} count={this.state.pages} page={parseInt(this.state.pageIndex)}  variant="outlined" color="primary" />
             </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
  return{
userSearch: state.userSearchList.userList,
toVisit:state.userVisit.visit
  }
}

export default connect(mapStateToProps,{getUserData,addUserVisit,getUserVisit})(UserVisit)