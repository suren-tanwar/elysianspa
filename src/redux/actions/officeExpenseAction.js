import {ADD_OFFICE_EXPENSE,GET_OFFICE_EXPENSE,ADD_USER_BOOKING,GET_USER_BOOKING,
    ADD_USER_PAYMENT,GET_USER_PAYMENT,
    GET_USER_VISIT,ADD_USER_VISIT,OFFICE_EXPENSE_FILTER,USER_BOOKING_FILTER,USER_PAYMENT_FILTER,USER_VISIT_FILTER} from "./types"
import axios from "axios"
import url from "./url"
//--------OFFICE EXPENSE----------
const addOfficeExpense = ({form, token}) => (dispatch) =>{
    axios.post(`${url.apiUrl}/api/office-expense/`,form,{ headers: { Authorization: `Token ${token}` }})
     .then((resp)=>{
         dispatch({
             type: ADD_OFFICE_EXPENSE,
             payload: resp.data,
         })
     })
     .catch((err) =>  {
         console.log(err.response)
         alert(err.response)
         })
 }

//  const getOfficeExpense = ( token ) => (dispatch) =>{
//     axios.get(`${url.apiUrl}/api/office-expense/`,{ headers: { Authorization: `Token ${token}` }})
//      .then((resp)=>{
//          dispatch({
//              type: GET_OFFICE_EXPENSE,
//              payload: resp.data,
//          })
//      })
//      .catch((err) =>  {
//          console.log(err.response)
//          alert(err.response)
//          })
//  }
//-------- USER PAYMENT----------
 const addUserPayment = ({form, token}) => (dispatch) =>{
    axios.post(`${url.apiUrl}/api/user-payments/`,form,{ headers: { Authorization: `Token ${token}` }})
     .then((resp)=>{
         dispatch({
             type: ADD_USER_PAYMENT,
             payload: resp.data,
         })
     })
     .catch((err) =>  {
         console.log(err.response)
         alert(err.response)
         })
 }

//  const getUserPayment = ( token ) => (dispatch) =>{
//     axios.get(`${url.apiUrl}/api/office-expense/`,{ headers: { Authorization: `Token ${token}` }})
//      .then((resp)=>{
//          dispatch({
//              type: GET_USER_PAYMENT,
//              payload: resp.data,
//          })
//      })
//      .catch((err) =>  {
//          console.log(err.response)
//          alert(err.response)
//          })
//  }
//--------USER BOOOKING----------
 const addUserBooking = ({form, token}) => (dispatch) =>{
    axios.post(`${url.apiUrl}/api/user-booking/`,form,{ headers: { Authorization: `Token ${token}` }})
     .then((resp)=>{
         dispatch({
             type: ADD_USER_BOOKING,
             payload: resp.data,
         })
     })
     .catch((err) =>  {
         console.log(err.response)
         alert(err.response)
         })
 }

//  const getUserBooking = ( token ) => (dispatch) =>{
//     axios.get(`${url.apiUrl}/api/user-booking/`,{ headers: { Authorization: `Token ${token}` }})
//      .then((resp)=>{
//          dispatch({
//              type: GET_USER_BOOKING,
//              payload: resp.data,
//          })
//      })
//      .catch((err) =>  {
//          console.log(err.response)
//          alert(err.response)
//          })
//  }

//--------USER VISIT----------
 const addUserVisit = ({form, token}) => (dispatch) =>{
    axios.post(`${url.apiUrl}/api/user-visits/`,form,{ headers: { Authorization: `Token ${token}` }})
     .then((resp)=>{
         dispatch({
             type: ADD_USER_VISIT,
             payload: resp.data,
         })
     })
     .catch((err) =>  {
         console.log(err.response)
         alert(err.response)
         })
 }

//  const getUserVisit = ( token ) => (dispatch) =>{
//     axios.get(`${url.apiUrl}/api/office-expense/`,{ headers: { Authorization: `Token ${token}` }})
//      .then((resp)=>{
//          dispatch({
//              type: GET_USER_VISIT,
//              payload: resp.data,
//          })
//      })
//      .catch((err) =>  {
//          console.log(err.response)
//          alert(err.response)
//          })
//  }
////------------- OFFICE DATE FILTER ACTION----------------

    const officeExpenseFilter = ({ dateFrom, dateTo, query,token }) => {
        
        return dispatch => {
            const myUrl = new URL(`${url.apiUrl}/api/office-expense/`)
            if (dateFrom) { myUrl.searchParams.set("expense_date_gte", dateFrom) }
            if (dateTo) { myUrl.searchParams.set("expense_date_lte", dateTo) }
            if (query) { myUrl.searchParams.set("search", query) }
            console.log(myUrl.toString())
            axios.get(myUrl.toString(),{ headers: { Authorization: `Token ${token}` }})
                .then(res => {
                    dispatch({
                        type: GET_OFFICE_EXPENSE,
                        payload: res.data
                    })
                })
        }
    }
////------------- BOOOKING DATE FILTER ACTION----------------

const getUserBooking = ({ dateFrom, dateTo, query,token }) => {
    return dispatch => {
        const myUrl = new URL(`${url.apiUrl}/api/user-booking/`)
        if (dateFrom) { myUrl.searchParams.set("booking_date_gte", dateFrom) }
        if (dateTo) { myUrl.searchParams.set("booking_date_lte", dateTo) }
        if (query) { myUrl.searchParams.set("booking_id", query) }
        console.log(myUrl.toString())
        axios.get(myUrl.toString(),{ headers: { Authorization: `Token ${token}` }})
            .then(res => {
                dispatch({
                    type: GET_USER_BOOKING,
                    payload: res.data
                })
            })
    }
}
////------------- PAYMENT DATE FILTER ACTION----------------

const getUserPayment = ({ dateFrom, dateTo, query,token }) => {
    return dispatch => {
        const myUrl = new URL(`${url.apiUrl}/api/user-payments/`)
        if (dateFrom) { myUrl.searchParams.set("payment_date_gte", dateFrom) }
        if (dateTo) { myUrl.searchParams.set("payment_date_lte", dateTo) }
        if (query) { myUrl.searchParams.set("payment_id", query) }
        console.log(myUrl.toString())
        axios.get(myUrl.toString(),{ headers: { Authorization: `Token ${token}` }})
            .then(res => {
                dispatch({
                    type: GET_USER_PAYMENT,
                    payload: res.data
                })
            })
    }
}

////------------- USER VISIT DATE FILTER ACTION----------------

const getUserVisit = ({ dateFrom, dateTo, query,token }) => {
    return dispatch => {
        const myUrl = new URL(`${url.apiUrl}/api/user-visits/`)
        if (dateFrom) { myUrl.searchParams.set("visit_date_gte", dateFrom) }
        if (dateTo) { myUrl.searchParams.set("visit_date_lte", dateTo) }
        if (query) { myUrl.searchParams.set("pending_visit", query) }
        console.log(myUrl.toString())
        axios.get(myUrl.toString(),{ headers: { Authorization: `Token ${token}` }})
            .then(res => {
                dispatch({
                    type: GET_USER_VISIT,
                    payload: res.data
                })
            })
    }
}

 export {officeExpenseFilter,addOfficeExpense,addUserBooking,getUserBooking,
    addUserVisit,getUserVisit,addUserPayment,getUserPayment}