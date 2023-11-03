import React, { useContext } from "react";
import todo from "../models/todo";
import Todo from "./Todo";
import { TodosContext } from "../store/todos-context";
import classes from "./Todos.module.css";

const Todos: React.FC = () => {
  const todosCtx = useContext(TodosContext);
  return (
    <ul className={classes.todos}>
      {todosCtx.items.map((item) => (
        <Todo key={item.id} item={item} onClick={todosCtx.removeTodo} />
      ))}
    </ul>
  );
};

export default Todos;
