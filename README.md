# Scheduler
Scheduler is a project for the Lighthouse Labs Web Development program. The app uses React to provide an at-a-glance schedule for each day of the week, where each day has 5 interview appointment slots.

## Final Product
!["Example page"](https://github.com/double-slide/scheduler/blob/master/public/images/screen-view1.png "Example page")
!["Example page with new entry"](https://github.com/double-slide/scheduler/blob/master/public/images/screen-view2.png "Example page with new entry")

## Getting Started
1. Install dependencies using the `npm install` command.
2. Start the web server using the `npm start` command. The app will be served at <http://localhost:8000/>.

## Dependencies
- React
- Axios
- Node
- Cypress

## Functionality
- A user can click on a weekday to view interview appointments for that day
- A user can add new interview entries
- Each entry requires a student name, as well as a selected interviewer
- A user can edit existing interview entries in order to change the student name or selected interviewer
- A user can delete existing interview entries, and is prompted with a confirmation before the deletion occurs
- Error messages show if an interview appointment entry submission is attempted without a name or selected interviewer