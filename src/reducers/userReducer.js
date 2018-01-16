import { FETCH_USER } from '../actions';
import _ from 'lodash';


export default function(state = null, action) {
  switch(action.type) {
    case FETCH_USER:
      return action.payload.data
    default:
      return state;
  }
}