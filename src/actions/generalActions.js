import axios from "axios";
import { BASEURL, SINGLE_USER_DETAILS_FAIL, SINGLE_USER_DETAILS_REQUEST, SINGLE_USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/generalConstant";

export const signIn =(email,password)=>async(dispatch)=>{
    dispatch({type:USER_SIGNIN_REQUEST,payload:{email,password}});
    try{
      const {data}= await axios.post(`${BASEURL}/api/login`,{email,password})
      dispatch({type:USER_SIGNIN_SUCCESS,payload:data});
      localStorage.setItem('userInfo', JSON.stringify(data));
    }catch(error){
      const message = error.message;
       dispatch({ type: USER_SIGNIN_FAIL, payload: message })
    }
  }
  

  export const signout = () => (dispatch) => {
    localStorage.removeItem('userInfo');
    dispatch({ type: USER_SIGNOUT });

  };

  export const listUser= () => async(dispatch)=>{
    dispatch({type:USER_DETAILS_REQUEST});
    try{
       const {data} = await axios.get(`${BASEURL}/api/users?page=2`)
       dispatch({type:USER_DETAILS_SUCCESS,payload:data})
   
    }catch(error){
        const message = error.message;
         dispatch({ type: USER_DETAILS_FAIL, payload: message });
        }
    }

    export const singleUserDetails = (id) => async (dispatch,getState) => {
      dispatch({ type: SINGLE_USER_DETAILS_REQUEST});
      try {
        const { data } = await axios.get(`${BASEURL}/api/users/${id}`);
        dispatch({ type: SINGLE_USER_DETAILS_SUCCESS, payload: data });
      }catch(error){
        const message = error.message;
         dispatch({ type: SINGLE_USER_DETAILS_FAIL, payload: message });
        }
    }; 