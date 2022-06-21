import { SINGLE_USER_DETAILS_FAIL, SINGLE_USER_DETAILS_REQUEST, SINGLE_USER_DETAILS_SUCCESS, USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_SIGNIN_FAIL, USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNOUT } from "../constants/generalConstant";

export const userSigninReducer = (state = {}, action) => {
    switch (action.type) {
      case USER_SIGNIN_REQUEST:
        return { loading: true };
      case USER_SIGNIN_SUCCESS:
        return { loading: false, userInfo: action.payload };
      case USER_SIGNIN_FAIL:
        return { loading: false, error: action.payload };
      case USER_SIGNOUT:
        return {};
      default:
        return state;
    }
  };

  export const getUserDetailsReducer =(state={loading:true,users:[]},action)=>{
    switch(action.type){
      case USER_DETAILS_REQUEST:
        return {loading:true}
      case USER_DETAILS_SUCCESS:
        return {loading:false,users:action.payload}
      case USER_DETAILS_FAIL:
        return {loading:false, error:action.payload}
      default:
        return state;      
    }
  }
  

  export const getSingleUserDetailsReducer =(state={loading:true,users:[]},action)=>{
    switch(action.type){
      case SINGLE_USER_DETAILS_REQUEST:
        return {loading:true}
      case SINGLE_USER_DETAILS_SUCCESS:
        return {loading:false,users:action.payload}
      case SINGLE_USER_DETAILS_FAIL:
        return {loading:false, error:action.payload}
      default:
        return state;      
    }
  }
  