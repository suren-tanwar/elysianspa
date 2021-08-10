import {GET_USER_SEARCH} from "./types"
import axios from "axios"
import url from "./url"

const getUserData = (search) => (dispatch) =>{
    console.log(search)
    axios.get(`${url.apiUrl}/api/search-user?search=${search}`,)
     .then((resp)=>{
         dispatch({
             type: GET_USER_SEARCH,
             payload: resp.data,
         })
     })
     .catch((err) =>  {
         console.log(err.response)
         alert(err.response)
         })
 }

 export {getUserData}