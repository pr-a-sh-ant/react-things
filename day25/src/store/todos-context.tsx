import React, { useState } from "react";
import todo from "../models/todo";

type TodoContextObj = {
  items: todo[];
  addTodo: (todo: String) => void;
  removeTodo: (id: String) => void;
};

interface MyProps {
  children?: React.ReactNode;
}

export const TodosContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: (todo: String) => {},
  removeTodo: (id: String) => {},
});

const TodosContextProvider: React.FC<MyProps> = (props) => {
  const [todos, setTodos] = useState<todo[]>([]);

  const addTodoHandler = (todoText: String) => {
    const newTodo = new todo(todoText);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };
  const onItemClick = (id: String) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((item) => item.id !== id);
    });
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: onItemClick,
  };
  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export default TodosContextProvider;
