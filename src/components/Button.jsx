import React from "react";
import classNames from "classnames";

import "components/Button.scss";

export default function Button(props) {
  
  let buttonClass = "button";
  
  // add classes to button depending on utilization
  buttonClass += classNames(
    { " button--confirm": props.confirm },
    { " button--danger": props.danger },
  );

  return (
   <>
    <button
      className={buttonClass}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
   </>
  );
}
