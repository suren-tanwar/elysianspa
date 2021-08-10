import {
    PASSWORD_REGISTER_START,
    PASSWORD_REGISTER_SUCCESS,
    PASSWORD_REGISTER_FAIL,
    SAVE_PASSWORD_REGISTER,
    AUTH_START,AUTH_SUCCESS,AUTH_FAIL,
    AUTH_LOGOUT,LOGOUT_START,LOGOUT_SUCCESS,LOGOUT_FAIL,
    GET_EMAIL_OTP,
    VALIDATE_EMAIL_OTP,
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
  } from "./types";
  import axios from "axios";
  import url from "./url";

  //------------>>>>SIGN UP ------<<<<<<<---------//
const passwordRegisterStart = () => {
    return {
      type: PASSWORD_REGISTER_START,
    };
  };
  const passwordRegisterSuccess = () => {
    return {
      type: PASSWORD_REGISTER_SUCCESS,
    };
  };
  const passwordRegisterFail = (err) => {
    return {
      type: PASSWORD_REGISTER_FAIL,
      error: err,
    };
  };
  
  const passwordSignUp = (form) => (dispatch) => {
    
    dispatch(passwordRegisterStart());
    axios.post(`${url.apiUrl}/api/register/`, (form))
      .then((res) => {
        dispatch({
          type: SAVE_PASSWORD_REGISTER,
          payload: res.data,
        });
        dispatch(passwordRegisterSuccess());
      })
      .catch((err) => {
        dispatch(passwordRegisterFail(err));
      });
  };
  

  //------------>>>>LOGIN  ------<<<<<<<---------//


const authStart = () => {
  return {
    type: AUTH_START,
  };
};

const authSuccess = (token) => {
  return {
    type: AUTH_SUCCESS,
    token: token,
  };
};

const authFail = (error) => {
  return {
    type: AUTH_FAIL,
    error: error,
  };
};

const authLogin=( { email, password }) =>{
  console.log(email)
  console.log(password)
return(dispatch)=> {
  dispatch(authStart());
  axios.post(`${url.apiUrl}/api/login/`,{ email, password })
  .then(async (res) => {
    console.log(res.data);
    const token=res.data.token;
    const id= res.data.id;
    const expirationDate = new Date(
      new Date().getTime() + 24*7*60*60 *1000 );
      localStorage.setItem("token",token);
      localStorage.setItem("id",id);
      localStorage.setItem("expirationDate",expirationDate);
      dispatch(authSuccess(token));
      dispatch(checkAuthTimeout(3600));
      console.log(res.data)
    }
)      .catch((err)=> {
        dispatch(authFail(err));
        console.log(err.response)
     })}}


//---------LOG OUT-------//
const authLogout = ()=> {

  localStorage.removeItem("token");
  localStorage.removeItem("id");
  localStorage.removeItem("expirationDate")
  
  return{
    type:AUTH_LOGOUT,
  
    }}
  
          
// const logoutStart = () => {
//   return {
//     type: LOGOUT_START,
//   };
// };

// const logoutSuccess = (token) => {
//   return {
//     type: LOGOUT_SUCCESS,
//     token: token,
//   };
// };

// const logoutFail = (error) => {
//   return {
//     type: LOGOUT_FAIL,
//     error: error,
//   };
// };

// const authLogout=( { email, password }) =>{
//   console.log(email)
//   console.log(password)
// return(dispatch)=> {
//   dispatch(logoutStart());
//   axios.post(`${url.apiUrl}/api/logout/`,{ email, password })
//   .then(async (res) => {
//     console.log(res.data);
//     const token=res.data.token;
//     const id= res.data.id;
//     const expirationDate = new Date(
//       new Date().getTime() + 24*7*60*60 *1000 );
//       localStorage.removeItem("token",token);
//       localStorage.removeItem("id",id);
//       localStorage.removeItem("expirationDate",expirationDate);
//       dispatch(logoutSuccess(token));
//       dispatch(checkAuthTimeout(3600));
//       console.log(res.data)
//     }
// )      .catch((err)=> {
//         dispatch(logoutFail(err));
//         console.log(err.response)
//      })}}

  const checkAuthTimeout = (expirationTime) => {
  return(dispatch) => {
    setTimeout(() =>  {
      dispatch(authLogout());
    } , expirationTime * 1000)
  }}
  
  
  // *********************************************************
  // *********************************************************
  
  
  
  const authCheckState = () => {
    return(dispatch) =>{
      const token =localStorage.getItem("token");
      if (token === undefined) {
        dispatch(authLogout());
      }
      else {
        const expirationDate =new Date (localStorage.getItem("expirationDate"));
        if (expirationDate <= new Date () ){
          dispatch(authLogout());
        }
        else{
          dispatch(authSuccess(token));
          dispatch(
            checkAuthTimeout(
              (expirationDate.getTime()-new Date ().getTime())/1000
            )
          )
        }}}};


        export{passwordSignUp ,authLogin,
          authLogout,authCheckState,}

