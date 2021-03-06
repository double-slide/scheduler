import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header.jsx";
import Show from "components/Appointment/Show.jsx";
import Empty from "components/Appointment/Empty.jsx";
import Form from "components/Appointment/Form.jsx";
import Status from "components/Appointment/Status.jsx";
import Confirm from "components/Appointment/Confirm.jsx";
import Error from "components/Appointment/Error.jsx";
import { useVisualMode } from "hooks/useVisualMode";

export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";

  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };

    transition(SAVING);
    console.log("props.interview:", props.interview);

    props
      .bookInterview(props.id, interview)
      .then(() => {
        transition(SHOW);
      })
      .catch(error => {
        transition(ERROR_SAVE, true);
      });
  };

  const destroy = (id) => {
    transition(DELETING, true);

    props
      .cancelInterview(props.id)
      .then(() => transition(EMPTY))
      .catch(() => transition(ERROR_DELETE, true));
  };

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === ERROR_DELETE && <Error message={"Delete was not successful--close this window to go back to the schedule view"} onClose={() => back(SHOW)} />}
      {mode === ERROR_SAVE && <Error message={"Save was not successful--close this window to go back to the edit view"} onClose={() => back(CREATE)} />}
      {mode === CONFIRM && <Confirm message={"Are you sure you would like to delete?"} onCancel={() => back(SHOW)} onConfirm={destroy} />}
      {mode === SAVING && <Status message={"Saving..."} />}
      {mode === DELETING && <Status message={"Deleting..."} />}
      {mode === EDIT && <Form student={props.interview.student} interviewer={props.interview.interviewer.id} interviewers={props.interviewers} onCancel={() => back(SHOW)} onSave={save} />}
      {mode === CREATE && <Form onCancel={() => back(EMPTY)} interviewers={props.interviewers} onSave={save} />}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && <Show student={props.interview.student} interviewer={props.interview.interviewer} onDelete={() => transition(CONFIRM)} onEdit={() => transition(EDIT)} />}
    </article>
  );
};