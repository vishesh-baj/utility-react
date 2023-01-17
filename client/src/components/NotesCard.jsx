import React, { useEffect, useState } from "react";
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
} from "../redux/AppSlice";

// notes card for  the notes page component page
const NotesCard = ({ id, title, info, labelColor }) => {
  const [isCoppied, setIsCoppied] = useState(false);
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
        title: title,
        info: info,
        labelColor,
      })
    );
    console.log("SAVED TO NOTES FAVOURITE");
  };

  // resets the copy state to default so that toats can hide
  const resetIsCoppiedState = () => {
    if (isCoppied) {
      setTimeout(() => {
        setIsCoppied(false);
      }, 3000);
    }
  };
  useEffect(() => {
    resetIsCoppiedState();
  }, [isCoppied]);

  return (
    <div
      className={`w-full md:w-1/3 p-6 flex flex-wrap rounded-lg  shadow-sm shadow-base-200 mt-5 ${checkColor(
        labelColor
      )}`}
    >
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl">{title}</h1>
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

      <p className="mt-4">{info}</p>
      <div className="w-full flex justify-center">
        <div className="flex w-auto p-2 gap-4 mt-4 bg-base-200  rounded-full">
          <div className="tooltip" data-tip="delete">
            <button onClick={handleDelete} className="btn btn-error btn-circle">
              <IoTrashBinOutline className="text-lg text-white font-bold" />
            </button>
          </div>
          <div className="tooltip" data-tip="edit">
            <button className="btn btn-success btn-circle">
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
    </div>
  );
};
export default NotesCard;
