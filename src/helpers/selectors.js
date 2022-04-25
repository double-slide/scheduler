export function getAppointmentsForDay(state, day) {
  // state is object
  // day is string "Monday" or "Tuesday"
  // console.log("state:", state);
  // don't change state, so copy to new array
  const stateObject = state;

  // define empty array
  let appointmentsForDay = [];

  // check if (day === "" || undefined) & return empty array
  if (day === "" || day === undefined) {
    return appointmentsForDay;
  }

  // for loop over stateObject.days, if stateObject.days[i].name === day ---> add ...stateObject.days[i].appoints to array
  const numOfDays = stateObject.days.length;
  for (let i = 0; i < numOfDays; i++) {
    if (stateObject.days[i].name === day) {
      const numOfAppointmentsOnDay = stateObject.days[i].appointments.length;
      const numOfAppointmentsTotal = Object.keys(stateObject.appointments).length;
      for (let j = 0; j < numOfAppointmentsOnDay; j++) {
        for (let k = 1; k <= numOfAppointmentsTotal; k++) {
          if (stateObject.days[i].appointments[j] === stateObject.appointments[k].id) {
            appointmentsForDay.push(stateObject.appointments[k]);
          }
        }
      }
    }
  }
  
  // const foundDay = state.days.find((selectedDayObj) => selectedDayObj.name ==== day)
  // const finalArray = foundDay.appointments.map((id) => state.appointments[id])

  // return array with appointment numbers for given day
  return appointmentsForDay;

};


export function getInterview(state, interview) {

  // don't modify state so copy to new obj
  const stateObj = state;

  // init new interview result obj
  let interviewObj = {};

  // if passed object doesn't contain interview, return null
  if (interview === null || interview === undefined) {
    return null;
  };

  // if passed object contains interview,
  const interviewerNum = interview.interviewer; // gives interviewer number
  const interviewerFullInfo = stateObj.interviewers[interviewerNum];
  interviewObj = { ...interview, interviewer: interviewerFullInfo}

  return interviewObj;
};


export function getInterviewersForDay(state, day) {
  // state is object
  // day is string "Monday" or "Tuesday"
  // console.log("state:", state);
  // don't change state, so copy to new array
  const stateObject = state;

  // define empty array
  let interviewersForDay = [];

  // check if (day === "" || undefined) & return empty array
  if (day === "" || day === undefined) {
    return interviewersForDay;
  }

  // for loop over stateObject.days, if stateObject.days[i].name === day ---> add ...stateObject.days[i].appoints to array
  const numOfDays = stateObject.days.length;

  for (let i = 0; i < numOfDays; i++) {
    if (stateObject.days[i].name === day) {
      const numOfAppointmentsOnDay = stateObject.days[i].appointments.length;
      const numOfAppointmentsTotal = Object.keys(stateObject.appointments).length;
      for (let j = 0; j < numOfAppointmentsOnDay; j++) {
        for (let k = 1; k <= numOfAppointmentsTotal; k++) {
          if (stateObject.days[i].appointments[j] === stateObject.appointments[k].id) {
            interviewersForDay.push(stateObject.appointments[k]);
          }
        }
      }
    }
  }
  
  // const foundDay = state.days.find((selectedDayObj) => selectedDayObj.name ==== day)
  // const finalArray = foundDay.appointments.map((id) => state.appointments[id])

  // return array with appointment numbers for given day
  return interviewersForDay;

};

