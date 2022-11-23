import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UpTodo from "./UpTodo";
import {
  faTrashCan,
  faPen,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

const MenuList = (props) => {
  const { id, title, completed } = props.todos;
  return (
    <div className="card-list">
      <h2 className="title">{title}</h2>
      <div className="icon__wrapper">
        {completed ? (
          <span
            title="completed / Not Completed"
            className="task"
            onClick={props.onMark.bind(this, id)}
          >
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
        ) : (
          <span
            title="completed / Not Completed"
            onClick={props.onMark.bind(this, id)}
          >
            <FontAwesomeIcon icon={faCircleCheck} />
          </span>
        )}
        <span title="update"
        onClick={props.onUpdate.bind(this,"changed", id)}
        >
          <FontAwesomeIcon icon={faPen} />
        </span>
        <span title="Delete" onClick={props.onHandle.bind(this, id)}>
          <FontAwesomeIcon icon={faTrashCan} />
        </span>
      </div>
    </div>
  );
};

export default MenuList;
