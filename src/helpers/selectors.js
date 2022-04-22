export function getAppointmentsForDay(state, day) {
  //state is object
  // day is string "Monday" or "Tuesday"

  // don't change state, so copy to new array
  const stateArray = state;

  // define empty array
  let appointmentsForDay = [];

  // check if (day === "" || undefined) & return empty array
  if (day === "" || day === undefined) {
    return appointmentsForDay;
  }

  // for loop over stateArray.days, if stateArray.days[i].name === day ---> add ...stateArray.days[i].appoints to array
  const numOfDays = stateArray.days.length;
  for (let i = 0; i < numOfDays; i++) {
    if (stateArray.days[i].name === day) {
      const numOfAppointmentsOnDay = stateArray.days[i].appointments.length;
      const numOfAppointmentsTotal = Object.keys(stateArray.appointments).length;
      for (let j = 0; j < numOfAppointmentsOnDay; j++) {
        for (let k = 1; k <= numOfAppointmentsTotal; k++) {
          if (stateArray.days[i].appointments[j] === stateArray.appointments[k].id) {
            appointmentsForDay.push(stateArray.appointments[k]);
          }
        }
      }
    }
  }

  // return array with appointment numbers for given day
  return appointmentsForDay;

};


