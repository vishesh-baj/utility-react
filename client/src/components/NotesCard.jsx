import React from "react";
import ColorBadge from "./ColorBadge";
import { IoTrashBinOutline } from "react-icons/io5";
import { RiEditCircleLine } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import { RxCopy } from "react-icons/rx";
import { useDispatch } from "react-redux";
import { removeNote } from "../redux/AppSlice";
const NotesCard = ({ id, title, info, labelColor }) => {
  const dispatch = useDispatch();
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

  const handleDelete = () => {
    dispatch(removeNote(id));
  };

  return (
    <div
      className={`w-full md:w-1/3 p-6 flex flex-wrap rounded-lg  shadow-sm shadow-base-200 hover:shadow-info mt-5 ${checkColor(
        labelColor
      )}`}
    >
      <div className="w-full flex items-center justify-between">
        <h1 className="text-3xl">{title}</h1>
        <div className="flex gap-2 bg-base-200 px-4 py-2 rounded-full">
          <div className="tooltip" data-tip="primary label">
            <ColorBadge colorType="primary" />
          </div>
          <div className="tooltip" data-tip="secondary label">
            <ColorBadge colorType="secondary" />
          </div>
          <div className="tooltip" data-tip="info label">
            <ColorBadge colorType="info" />
          </div>
          <div className="tooltip" data-tip="warning label">
            <ColorBadge colorType="warning" />
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
            <button className=" btn btn-accent btn-circle">
              <GrFavorite className="text-lg text-white font-bold" />
            </button>
          </div>
          <div className="tooltip" data-tip="copy to clipboard">
            <button className=" btn btn-ghost btn-circle">
              <RxCopy className="text-lg text-white font-bold" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default NotesCard;
