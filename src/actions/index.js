import axios from 'axios';

export const FETCH_COURSES = 'fetch_courses';
export const FETCH_USER = 'fetch_user';
// const ROOTURL = 'https://donaldma-api.herokuapp.com/api'
const ROOTURL = 'http://localhost:9001/api'

export function fetchCourses(id) {
  const request = axios.get(`${ROOTURL}/ical/courses/${id}`);

  return {
    type: FETCH_COURSES,
    payload: request
  };
}

export function fetchUser(id) {
  const request = axios.get(`${ROOTURL}/user/${id}`);

  return {
    type: FETCH_USER,
    payload: request
  };
}
