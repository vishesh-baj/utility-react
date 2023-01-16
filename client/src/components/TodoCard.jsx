import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, editTodo } from "../redux/AppSlice";

const TodoCard = ({ id, title, index }) => {
  const [editedCardTitle, setEditedCardTitle] = useState(title);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(removeTodo(id));
  };
  const handleDelete = () => {
    dispatch(removeTodo(id));
  };
  const handleEdit = () => {
    setEditMode((prevState) => !prevState);
  };
  const handleChange = (e) => {
    setEditedCardTitle(e.target.value);
  };
  const handleSubmit = () => {
    dispatch(editTodo({ id, title: editedCardTitle }));
    setEditMode((prevState) => !prevState);
    console.log("SUBMITTED");
  };

  return (
    <div className="card w-96 h-48 bg-base-100 shadow-xl">
      <div className="card-body">
        {editMode ? (
          <div className="flex justify-between">
            <input
              onChange={(e) => handleChange(e)}
              value={editedCardTitle}
              className="input input-success"
              type="text"
              name=""
              id=""
            />
            <button
              onClick={handleSubmit}
              className="btn btn-success btn-circle text-4xl"
            >
              +
            </button>
          </div>
        ) : (
          <h2 className="card-title">
            {index + 1}: {editedCardTitle}
          </h2>
        )}
        <div className="flex flex-1 justify-center items-center">
          <div className="flex justify-between gap-5">
            <button onClick={handleComplete} className="btn btn-primary ">
              Completed
            </button>
            {!editMode && (
              <button onClick={handleEdit} className={`btn btn-success`}>
                Edit
              </button>
            )}
            <button onClick={handleDelete} className="btn btn-error">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
