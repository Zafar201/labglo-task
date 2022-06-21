import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import thunk from 'redux-thunk';
import { getSingleUserDetailsReducer, getUserDetailsReducer , userSigninReducer } from './reducer/generalReducer';

const initialState = {
    userSignin: {
        userInfo: localStorage.getItem('userInfo')
          ? JSON.parse(localStorage.getItem('userInfo'))
          : null,
      },    
}
const reducer=combineReducers({
    userSignin:userSigninReducer,
    users:getUserDetailsReducer,
    singleUsers:getSingleUserDetailsReducer,
 })
   
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store