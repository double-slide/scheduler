export const getAppointmentsForDay = (state, day) => {
  let appointmentsForDay = [];

  if (day === "" || day === undefined) {
    return appointmentsForDay;
  }

  const foundDay = state.days.find((selectedDayObj) => selectedDayObj.name === day);

  if (foundDay) {
    appointmentsForDay = foundDay.appointments.map((id) => state.appointments[id]);
  }

  return appointmentsForDay;
};


export const getInterview = (state, interview) => {
  let interviewObj = {};

  if (interview === null || interview === undefined) {
    return null;
  }

  const interviewerNum = interview.interviewer;
  const interviewerFullInfo = state.interviewers[interviewerNum];
  interviewObj = { ...interview, interviewer: interviewerFullInfo };

  return interviewObj;
};


export const getInterviewersForDay = (state, day) => {
  let interviewersForDay = [];

  if (day === "" || day === undefined) {
    return interviewersForDay;
  }

  const foundDay = state.days.find((selectedDayObj) => selectedDayObj.name === day);

  if (foundDay) {
    interviewersForDay = foundDay.interviewers.map((id) => state.interviewers[id]);
  }

  return interviewersForDay;

};