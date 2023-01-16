import React from "react";
import ColorBadge from "./ColorBadge";
import { IoTrashBinOutline } from "react-icons/io5";
import { RiEditCircleLine } from "react-icons/ri";
import { GrFavorite } from "react-icons/gr";
import { RxCopy } from "react-icons/rx";

const NotesCard = () => {
  return (
    <div className="w-full md:w-1/3 p-6 flex flex-wrap rounded-lg bg-base-100 shadow-sm shadow-base-200 hover:shadow-info mt-5">
      <div className="w-full flex items-center justify-between">
        <h1 className="text-3xl">Note 1</h1>
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
      <p className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum
        reprehenderit est impedit non deleniti unde, natus libero sint corporis
        ullam voluptatem blanditiis optio, tempora neque sit vel quos dolorem
        voluptate quo beatae, velit veniam repudiandae ratione saepe. Nisi illo
        quisquam alias accusantium. Dignissimos reiciendis doloremque quo est
        velit illum consequatur.
      </p>
      <div className="w-full flex justify-center">
        <div className="flex w-auto p-2 gap-4 mt-4 bg-base-200  rounded-full">
          <div className="tooltip" data-tip="delete">
            <button className="btn btn-error btn-circle">
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
