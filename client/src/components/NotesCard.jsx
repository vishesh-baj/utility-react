import React, { useEffect, useState, useRef } from "react";
import ColorBadge from "./ColorBadge";
import { IoTrashBinOutline } from "react-icons/io5";
import { RiEditCircleLine } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import { RxCopy } from "react-icons/rx";
import { useDispatch } from "react-redux";
import {
  removeNote,
  changeLabelColor,
  addNoteToFavourite,
  editNote,
} from "../redux/AppSlice";

// notes card for  the notes page component page
const NotesCard = ({ id, title, info, labelColor }) => {
  const [isCoppied, setIsCoppied] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [notesObj, setNotesObj] = useState({
    id: id,
    title: title,
    info: info,
    labelColor: labelColor,
  });
  const modalRef = useRef();
  // dispatch the function to the store
  const dispatch = useDispatch();
  // check color
  const checkColor = (color) => {
    switch (color) {
      case "primary":
        return "bg-primary";
      case "secondary":
        return "bg-secondary";
      case "info":
        return "bg-info";
      case "warning":
        return "bg-warning";
      case "none":
        return "bg-base-100";
      default:
        return "bg-base-100";
    }
  };

  // delete the note
  const handleDelete = () => {
    dispatch(removeNote(id));
  };

  // changes the colorand dispatch
  const handleColorChange = (color) => {
    dispatch(changeLabelColor({ id: id, labelColor: color }));
  };

  // function to copy the data to clipboard
  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(title.concat(info));
      setIsCoppied((prevState) => !prevState);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // function to add note to favourites
  const handleSaveToFavourite = () => {
    dispatch(
      addNoteToFavourite({
        id: Math.trunc(Math.random() * 1000),
        title: notesObj.title,
        info: notesObj.info,
        labelColor: notesObj.labelColor,
      })
    );
    console.log("SAVED TO NOTES FAVOURITE");
  };

  const handleEdit = () => {
    console.log("EDIT ENABLED");
    setEditMode((prevState) => !prevState);
    modalRef.current.checked = !modalRef.current.checked;
  };

  const handleChange = (e) => {
    console.log("CHANGE");
    setNotesObj({ ...notesObj, [e.target.name]: e.target.value });
  };
  // resets the copy state to default so that toats can hide
  const resetIsCoppiedState = () => {
    if (isCoppied) {
      setTimeout(() => {
        setIsCoppied(false);
      }, 3000);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      editNote({
        id: notesObj.id,
        title: notesObj.title,
        info: notesObj.info,
        labelColor: notesObj.labelColor,
      })
    );
    modalRef.current.checked = !modalRef.current.checked;
  };

  useEffect(() => {
    resetIsCoppiedState();
  }, [isCoppied]);
  // returned jsx
  return (
    <div
      className={`w-full md:w-1/3 p-6 flex flex-wrap rounded-lg  shadow-sm shadow-base-200 mt-5 ${checkColor(
        labelColor
      )}`}
    >
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl text-white">{title}</h1>
        <div className="flex gap-2 bg-base-200 px-4 py-2 rounded-full">
          <div className="tooltip" data-tip="primary label">
            <ColorBadge
              onClick={() => handleColorChange("primary")}
              colorType="primary"
            />
          </div>
          <div className="tooltip" data-tip="secondary label">
            <ColorBadge
              onClick={() => handleColorChange("secondary")}
              colorType="secondary"
            />
          </div>
          <div className="tooltip" data-tip="info label">
            <ColorBadge
              onClick={() => handleColorChange("info")}
              colorType="info"
            />
          </div>
          <div className="tooltip" data-tip="warning label">
            <ColorBadge
              onClick={() => handleColorChange("warning")}
              colorType="warning"
            />
          </div>
        </div>
      </div>

      <p className="mt-4 text-white">{info}</p>
      <div className="w-full flex flex-col items-center justify-center">
        {editMode && <button className="btn btn-ghost">Save</button>}
        <div className="flex w-auto p-2 gap-4 mt-4 bg-base-200  rounded-full">
          <div className="tooltip" data-tip="delete">
            <button onClick={handleDelete} className="btn btn-error btn-circle">
              <IoTrashBinOutline className="text-lg text-white font-bold" />
            </button>
          </div>
          <div className="tooltip" data-tip="edit">
            <button onClick={handleEdit} className="btn btn-success btn-circle">
              <RiEditCircleLine className="text-lg text-white font-bold" />
            </button>
          </div>
          <div className="tooltip" data-tip="add to favourites">
            <button
              onClick={handleSaveToFavourite}
              className=" btn btn-accent btn-circle"
            >
              <GrFavorite className="text-lg text-white font-bold" />
            </button>
          </div>
          <div className="tooltip" data-tip="copy to clipboard">
            <button
              onClick={handleCopyClick}
              className=" btn btn-ghost btn-circle"
            >
              <RxCopy className="text-lg text-white font-bold" />
            </button>
          </div>
        </div>
      </div>
      {/* toast */}
      {isCoppied && (
        <div className="toast toast-top toast-start">
          <div className="alert alert-info">
            <div>
              <span>Note copied</span>
            </div>
          </div>
        </div>
      )}

      <input
        ref={modalRef}
        type="checkbox"
        id="edit-modal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="edit-modal"
            className="btn btn-sm btn-circle absolute right-2 top-4"
          >
            x
          </label>

          <h3 className="text-lg font-bold">Edit Note</h3>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="py-4 flex flex-col gap-4"
          >
            <div className="form-control">
              <input
                onChange={(e) => handleChange(e)}
                value={notesObj.title}
                className="input input-primary"
                placeholder="enter note title"
                type="text"
                name="title"
              />
            </div>
            <div className="form-control">
              <textarea
                onChange={(e) => handleChange(e)}
                value={notesObj.info}
                className="textarea textarea-bordered"
                placeholder="Note Info"
                name="info"
              />
            </div>

            <select
              name="labelColor"
              onChange={(e) => handleChange(e)}
              value={notesObj.labelColor}
              className="select select-ghost w-full max-w-xs"
            >
              <option disabled>Pick a label</option>
              <option value="primary">Primary</option>
              <option value="secondary">Secondary</option>
              <option value="info">Info</option>
              <option value="warning">Warning</option>
              <option value="none">None</option>
            </select>
            <button type="submit" className="btn btn-info w-1/4">
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default NotesCard;
