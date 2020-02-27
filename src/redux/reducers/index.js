import user from './userReducer';
import product from './productReducer';
import { combineReducers } from 'redux'

export default combineReducers({user,product});