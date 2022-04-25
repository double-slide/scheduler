import React, { useState, useEffect } from "react";
import "components/Application.scss";
import DayList from "components/DayList";
import Appointment from "components/Appointment/index.jsx";
import axios from "axios";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";

export default function Application(props) {





  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });
  
  let dailyAppointments = [];
  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`)
    ]).then((results) => {
      console.log(results[0]);
      console.log(results[1]);
      // console.log(results[2]);
      // const appointmentsForDay = getAppointmentsForDay(results[1].data, state.day);
      setState(prev => ({...prev, days: results[0].data, appointments: results[1].data, interviewers: results[2].data}));
      // setDays([...response.data]);
    });
  }, []);
  // console.log("state.interviewers",state.interviewers);
  
  dailyAppointments = state.days.length && getAppointmentsForDay(state, state.day);
  
  const dailyInterviewers = getInterviewersForDay(state, state.day);
  


  
  const listOfAppointments = dailyAppointments.length && dailyAppointments.map((appointment) => {   

    const interview = getInterview(state, appointment.interview);

    return (
      <Appointment
        key={appointment.id}
        id={appointment.id}
        time={appointment.time}
        interviewers={dailyInterviewers}
        interview={interview}
      />);
  });



  // const listOfInterviewers = dailyInterviewers.length && dailyInterviewers.map((interviewer) => {
  //   return (
  //     <Appointment

  //     />);
  // })



  return (
    <main className="layout">
      <section className="sidebar">
        <img
          className="sidebar--centered"
          src="images/logo.png"
          alt="Interview Scheduler"
        />
        <hr className="sidebar__separator sidebar--centered" />
        <nav className="sidebar__menu">
          <DayList
            days={state.days}
            value={state.day}
            onChange={setDay}
          />
        </nav>
        <img
          className="sidebar__lhl sidebar--centered"
          src="images/lhl.png"
          alt="Lighthouse Labs"
        />
      </section>
      <section className="schedule">
        {listOfAppointments}
        <Appointment key="last" time="5pm" />
      </section>
    </main>
  );

};











