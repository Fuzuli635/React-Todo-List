import React, { useState } from "react";
import { IoIosRemoveCircleOutline } from "react-icons/io";
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { TodoType } from "../types/Types";
import { useDispatch } from "react-redux";
import { removeTodoById, uptadeTodo } from "../redux/todoSlice";

interface todoProps {
  todoProps: TodoType;
}
const Todo = ({ todoProps }: todoProps) => {
  const { id, content } = todoProps;
  const [newTodo, setNewTodo] = useState<string>(content);
  const [editable, setEditable] = useState<boolean>(false);
  const dispatch = useDispatch();
  const handleRemoveTodo = () => {
    dispatch(removeTodoById(id));
  };
  const handleUpdateTodo = () => {
    const payload : TodoType = {
      id: id,
      content: newTodo,
    } 
    dispatch(uptadeTodo(payload))
  setEditable(false)  
  }
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        border: "1px solid lightGray",
        padding: "16px",
        marginTop: "15px",
        borderRadius: "5px",
      }}
    >
      {editable ? (
        <input
          type="text"
          value={newTodo}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setNewTodo(e.target.value)
          }
          style={{width:"400px",border:"none",outline:"none",borderBottom:"1px solid lightGray"}}
        />
      ) : (
        <div>{content}</div>
      )}
      <div>
        <IoIosRemoveCircleOutline
          onClick={handleRemoveTodo}
          style={{ width: "50px", height: "20px", cursor: "pointer" }}
        />
        {editable ? (
          <FaCheck style={{cursor:"pointer"}} onClick={handleUpdateTodo} />
        ) : (
          <FaEdit
            onClick={() => setEditable(!editable)}
            style={{ width: "50px", height: "20px", cursor: "pointer" }}
          />
        )}
      </div>
    </div>
  );
};

export default Todo;
