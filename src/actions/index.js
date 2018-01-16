import axios from 'axios';

export const FETCH_COURSES = 'fetch_courses';
const ROOTURL = 'https://donaldma-api.herokuapp.com/api'

export function fetchCourses(id) {
  const request = axios.get(`${ROOTURL}/ical/courses/${id}`);

  return {
    type: FETCH_COURSES,
    payload: request
  };
}
