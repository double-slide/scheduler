import { useState, useEffect } from "react";
import axios from "axios";


export function useApplicationData(initial) {
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
      console.log(results[0]);
      console.log(results[1]);
      setState(prev => ({...prev, days: results[0].data, appointments: results[1].data, interviewers: results[2].data}));
    });
  }, []);

  function cancelInterview(id) { 
    const appointment = {
      ...state.appointments[id],
      interview: null
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };

    return axios.delete(`/api/appointments/${id}`)
    .then(() => {
      setState({
        ...state,
        appointments
      });
    })
  };

  function bookInterview(id, interview) {    
    const appointment = {
      ...state.appointments[id],
      interview: { ...interview }
    };

    const appointments = {
      ...state.appointments,
      [id]: appointment
    };
    
    return axios.put(`/api/appointments/${id}`, {interview})
    .then(function (response) {

      setState({
        ...state,
        appointments
      });
    })
  };
  
  return { 
    state,
    setDay,
    bookInterview,
    cancelInterview
  }
};