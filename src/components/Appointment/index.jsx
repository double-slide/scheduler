import React from "react";
import "components/Appointment/styles.scss";
import Header from "components/Appointment/Header.jsx";
import Show from "components/Appointment/Show.jsx";
import Empty from "components/Appointment/Empty.jsx";
import Form from "components/Appointment/Form.jsx";
import { useVisualMode } from "hooks/useVisualMode";

export default function Appointment(props) {

  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";


  const { mode, transition, back } = useVisualMode(
    props.interview ? SHOW : EMPTY
  );

  return (
    <article className="appointment">
      <Header time={props.time}/>
      {mode === CREATE && <Form 
        onCancel={() => back(EMPTY)}
        interviewers={[]}
      />}
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          />
      )}
    </article>
  );
};

// {props.interview ? <Show student={props.interview.student} interviewer={props.interview.interviewer} /> : <Empty />}