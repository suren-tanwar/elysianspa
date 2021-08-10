import { combineReducers } from 'redux'
import { passwordRegisterReducer,authReducer } from "./userLoginReducer";
import {getUserSearch} from './searchUserReducer'
import {getofficeExpense,getUserBooking,getuserPayment,getUserVisit} from './officeExpenseReducer'
// PRODUCT RELATED

export default combineReducers({
   //login
   passwordRegister: passwordRegisterReducer, 
   auth:authReducer, 
   userSearchList:getUserSearch,
   officeExpense:getofficeExpense,
   userBooking: getUserBooking,
   userPayment:getuserPayment,
   userVisit:getUserVisit,
   
})