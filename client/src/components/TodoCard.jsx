import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo } from "../redux/AppSlice";

const TodoCard = ({ id, title, index }) => {
  const [cardTitle, setCardTitle] = useState(title);
  const [editedCardTitle, setEditedCardTitle] = useState(title);
  const [editMode, setEditMode] = useState(false);
  const dispatch = useDispatch();

  const handleComplete = () => {
    dispatch(removeTodo(id));
  };

  const handleDelete = () => {};
  const handleEdit = () => {
    setEditMode((prevState) => !prevState);
  };
  const handleChange = (e) => {
    setEditedCardTitle(e.target.value);
  };

  return (
    <div className="card w-96 h-48 bg-base-100 shadow-xl">
      <div className="card-body">
        {editMode ? (
          <input
            onChange={(e) => handleChange(e)}
            value={editedCardTitle}
            className="input input-primary"
            type="text"
            name=""
            id=""
          />
        ) : (
          <h2 className="card-title">
            {index + 1}: {editedCardTitle}
          </h2>
        )}
        <div className="flex flex-1 justify-center items-center">
          <div className="flex gap-5">
            <button onClick={handleComplete} className="btn btn-primary w-1/3">
              Completed
            </button>
            <button onClick={handleEdit} className="btn btn-success">
              {editMode ? "Save" : "Edit"}
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
