import React from "react";
import classes from "./Todo.module.css";
import todo from "../models/todo";

const Todo: React.FC<{ item: todo; onClick: (id: String) => void }> = (
  props
) => {
  const removeItem = () => {
    props.onClick(props.item.id);
  };

  return (
    <li onClick={removeItem} className={classes.item}>
      {props.item.text}
    </li>
  );
};

export default Todo;
