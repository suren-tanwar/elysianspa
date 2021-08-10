import {
    PASSWORD_REGISTER_START,
    PASSWORD_REGISTER_SUCCESS,
    PASSWORD_REGISTER_FAIL,
    AUTH_START,AUTH_SUCCESS,AUTH_FAIL,AUTH_LOGOUT,
    GET_EMAIL_OTP,
    EMAIL_OTP_FAIL,
    EMAIL_OTP_START,
    EMAIL_OTP_SUCCESS,
    UPDATE_PASSWORD,
    UPDATE_PASSWORD_FAIL,
     FORGOT_PASSWORD_OTP_FAIL,
    FORGOT_PASSWORD_OTP,
    EMAIL_OTP_STATUS_RESET,
    EMAIL_OTP_VARIFY_STATUS_RESET,
    EMAIL_FORGOT_OTP_STATUS_RESET,
    VALIDATE_EMAIL_OTP, SAVE_PASSWORD_REGISTER
  } from "../actions/types";

  
   ///--------------SIGN UP reducers--//////////
   const pris = {
    loading: false,
    status: "",
    error: null,
  };
  
  function passwordRegisterReducer(state = pris, action) {
    console.log(action);
  
    switch (action.type) {
      case PASSWORD_REGISTER_START:
        return {
          ...state,
          loading: true,
        };
      case PASSWORD_REGISTER_SUCCESS:
        return {
          ...state,
          loading: false,
          status: true,
        };
      case PASSWORD_REGISTER_FAIL:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
        case SAVE_PASSWORD_REGISTER:
          return {
            ...state,
            loading: false,
            error: action.error,
          };
      default:
        return state;
    }
  }
  
  /////----------------- GET OTP REDUCERS ---------------////////////////////
//   const initialState = {
//     loading: false,
//     error: null,
//     status: "",
//     otpVerified: false,
//     validateEmail:""
//   };
  
//   function emailOtpReducer(state = initialState, action) {
//     switch (action.type) {
//       case EMAIL_OTP_STATUS_RESET:
//         return {
//           ...state,
//           status: "",
//         };
//       case EMAIL_OTP_START:
//         return {
//           ...state,
//           loading: true,
//           status: "",
//           otpVerified: ""
//         };
//       case EMAIL_OTP_VARIFY_STATUS_RESET:
//         return {
//           ...state,
//           otpVerified: "",
//         };
//       // FOR OTP VERIFY STATUS
//       case EMAIL_OTP_SUCCESS:
//         return {
//           ...state,
//           loading: false,
//           otpVerified: action.status,
//         };
//       case EMAIL_OTP_FAIL:
//         return {
//           ...state,
//           loading: false,
//           error: action.error,
//         };
//       case GET_EMAIL_OTP:
//         return {
//           ...state,
//           status: action.payload.status,
//         };
//         case VALIDATE_EMAIL_OTP:
//           return {
//             ...state,
//             validateEmail: action.payload,
//           };
//       default:
//         return state;
//     }
//   }
  
  
  
 
  //------------>>>>LOGIN  ------<<<<<<<---------//
  const iState ={
    token:null,
    error:null,
    loading:false
  }
  
  const authReducer = (state = iState, action) => {
    console.log(action);
  
    switch (action.type) {
      case AUTH_START:
        return {
          ...state,
          loading: true,
          error:null
        };
      case AUTH_SUCCESS:
        return {
          ...state,
          token:action.token,
          loading: false,
        error:null
        };
      case AUTH_FAIL:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
        case AUTH_LOGOUT:
        return{...state,
        token:null}
      default:
        return state;
    }
  }
  
  //----------->>>> FORGOT PASSWORD <<<<-------------//
  
//   const fpe = {
//     otp: [],
//     otpError: "",
//     status: "",
//     passwordError: [],
//     loading: false,
//     error: null,
    
//   };
  
//   const forgotPasswordReducer = (state = fpe, action) => {
//     switch (action.type) {
//       case EMAIL_FORGOT_OTP_STATUS_RESET:
//         return {
//           ...state,
//           status: "",
//         };
//       case UPDATE_PASSWORD:
//         return {
//           ...state,
//           status: action.payload.status,
//           loading: false,
//           error: action.error,
//         };
//       case UPDATE_PASSWORD_FAIL:
//         return {
//           ...state,
//           passwordError: action.payload,
//         };
//       case FORGOT_PASSWORD_OTP:
//         return {
//           ...state,
//           otp: action.payload.status,
//         };
//       case FORGOT_PASSWORD_OTP_FAIL:
//         return {
//           ...state,
//           otpError: action.payload,
//         };
//       default:
//         return state;
//     }
//   };
  
  
  
  
  
  
  export { passwordRegisterReducer , authReducer};
  