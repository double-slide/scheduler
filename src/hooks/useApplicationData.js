import { useState, useEffect } from "react";
import axios from "axios";


export const useApplicationData = (initial) => {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = (day) => setState({ ...state, day });

  useEffect(() => {
    Promise.all([
      axios.get(`/api/days`),
      axios.get(`/api/appointments`),
      axios.get(`/api/interviewers`)
    ]).then((results) => {
      setState(prev => ({ ...prev, days: results[0].data, appointments: results[1].data, interviewers: results[2].data }));
    });
  }, []);
  
  const spotCountUpdate = (days, appointments) => {

    const updatedDays = days.map((day) => {
      let counter = 0;
      const appointmentArray = day.appointments;
      for (const appointmentNum of appointmentArray) {
        (!appointments[appointmentNum].interview && counter++);
      }
      return { ...day, spots: counter };
    });
    return updatedDays;
  };

  const bookInterview = (id, interview) => {
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = spotCountUpdate(state.days, appointments);

    return axios.put(`/api/appointments/${id}`, { interview })
      .then(function (response) {
        setState({
          ...state,
          appointments,
          days
        });
      });
  };

  const cancelInterview = (id) => {
    const appointment = {
      ...state.appointments[id],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    const days = spotCountUpdate(state.days, appointments);

    return axios.delete(`/api/appointments/${id}`)
      .then(() => {
        setState({
          ...state,
          appointments,
          days
        });
      });
  };

  return {
    state,
    setDay,
    bookInterview,
    cancelInterview
  };
};