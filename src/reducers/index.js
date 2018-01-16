import { combineReducers } from 'redux';
import courseReducer from './courseReducer';
import userReducer from './userReducer';


const rootReducer = combineReducers({
  courses: courseReducer,
  user: userReducer
});

export default rootReducer;
