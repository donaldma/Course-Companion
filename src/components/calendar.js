import React  from "react";
import FullCalendar from 'fullcalendar-reactwrapper';
// import 'fullcalendar-reactwrapper/dist/css/fullcalendar.min.css';
import '../styles/fullcalendar.css';
import '../styles/materialFullCalendar.css';




export default class Calendar extends React.Component {
  render() {
    return (
      <div>
        <FullCalendar />
      </div>
    );
  }
}
