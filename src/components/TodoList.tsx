import React from "react";
import Todo from "./Todo";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { TodoType } from "../types/Types";

const TodoList = () => {
  const { todos } = useSelector((state: RootState) => state.todo);
  return (
    <>
      {todos && todos.map((todo: TodoType) => (
        <Todo key={todo.id} todoProps={ todo} />
      ))}
      
    </>
  );
};

export default TodoList;
