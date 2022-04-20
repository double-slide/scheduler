import React from "react";
import classNames from "classnames";
import "components/DayListItem.scss";


export default function DayListItem(props) {
  
  let DayListItemClass = "day-list__item";

  DayListItemClass += classNames(
    { "--selected": props.selected},
    { "--full": (props.spots) < 1}
  )
  
  
  
  return (
    <li
      className={DayListItemClass}
      onClick={() => props.setDay(props.name)}
    >
      <h2 className="text--regular">{props.name}</h2> 
      <h3 className="text--light">{props.spots} spots remaining</h3>
    </li>
  );
};