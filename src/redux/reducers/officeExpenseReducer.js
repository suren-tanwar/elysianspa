import {GET_OFFICE_EXPENSE,GET_USER_BOOKING,GET_USER_PAYMENT,
    GET_USER_VISIT} from "../actions/types"


    
//--------OFFICE EXPENSE----------
const officeExpense = {

    officeExp:[]
    
}
function getofficeExpense(state = officeExpense , action) {
    console.log(action);
    switch (action.type) {
       
            case GET_OFFICE_EXPENSE:
                return {
                    ...state,
                    officeExp : action.payload
                }
        default:
            return {
                ...state
            }
    }
}


//-------- USER PAYMENT----------
const userPayment = {

    payment:[]
    
}
function getuserPayment(state = userPayment , action) {
    console.log(action);
    switch (action.type) {
       
            case GET_USER_PAYMENT:
                return {
                    ...state,
                    payment : action.payload
                }
        default:
            return {
                ...state
            }
    }
}
//--------USER BOOOKING----------
const userBooking = {

    booking:[]
    
}
function getUserBooking(state = userBooking , action) {
    console.log(action);
    switch (action.type) {
       
            case GET_USER_BOOKING:
                return {
                    ...state,
                    booking : action.payload
                }
        default:
            return {
                ...state
            }
    }
}
//--------USER VISIT----------
const userVisit = {

    visit:[]
    
}
function getUserVisit(state = userVisit , action) {
    console.log(action);
    switch (action.type) {
       
            case GET_USER_VISIT:
                return {
                    ...state,
                    visit : action.payload
                }
        default:
            return {
                ...state
            }
    }
}

export {getofficeExpense,getUserBooking,getuserPayment,getUserVisit}