import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/AppSlice";

const TodoCard = ({ id, title, index }) => {
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(removeTodo(id));
  };

  const handleDelete = () => {};
  const handleEdit = () => {};

  
  return (
    <div className="card w-96 h-48 bg-base-100 shadow-xl">
      <div className="card-body">
        <h2 className="card-title">
          {index + 1}: {title}
        </h2>
        <div className="flex flex-1 justify-center items-center">
          <div className="flex gap-5">
            <button onClick={handleComplete} className="btn btn-primary w-1/3">
              Completed
            </button>
            <button onClick={handleEdit} className="btn btn-success">
              Edit
            </button>
            <button onClick={handleComplete} className="btn btn-error w-1/3">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
