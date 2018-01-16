import { FETCH_COURSES } from '../actions';
import _ from 'lodash';


export default function(state = [], action) {
  switch(action.type) {
    case FETCH_COURSES:
      return [...state, action.payload.data]
    default:
      return [];
  }
}