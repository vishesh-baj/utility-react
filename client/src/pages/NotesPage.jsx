import React, { useRef, useState } from "react";
import { DashboardLayout } from "../layout";
import { NotesCard } from "../components";
import { useSelector, useDispatch } from "react-redux";
import { GrAdd } from "react-icons/gr";
import { addNote } from "../redux/AppSlice";
import { AiOutlineHeart } from "react-icons/ai";

// notes page
const NotesPage = () => {
  const [newNote, setNewNote] = useState({
    title: "",
    info: "",
    labelColor: "",
  });
  const modalRef = useRef();
  const notesList = useSelector((state) => state.app.notes.sessionNotes);
  const dispatch = useDispatch();
  const handleModalToggle = () => {
    modalRef.current.checked = !modalRef.current.checked;
    console.log("MODAL TOGGLE FOR NOTES");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addNote({
        id: Math.trunc(Math.random() * 10000),
        title: newNote.title,
        info: newNote.info,
        labelColor: newNote.labelColor,
      })
    );

    setNewNote({ title: "", info: "", labelColor: "" });
    handleModalToggle();
    console.log("SUBMIT TRIGGERED");
  };

  const handleChange = (e) => {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
    console.log(newNote);
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col items-center bg-base-200 w-screen h-auto">
        <AiOutlineHeart className="text-4xl text-rose-600 cursor-pointer fixed top-24 right-4" />
        <h1 className="text-6xl py-4 text-white">Notes</h1>
        <div className="w-full block md:flex md:flex-wrap justify-center gap-4 p-4">
          <div
            onClick={handleModalToggle}
            className="w-full rounded-lg p-4 bg-base-200 border-4 border-base-300 h-[150px] flex justify-center items-center"
          >
            <GrAdd className="bg-base-200 text-4xl" />
          </div>
          {notesList.map(({ id, title, info, labelColor }) => (
            <NotesCard
              key={id}
              id={id}
              title={title}
              info={info}
              labelColor={labelColor}
            />
          ))}
        </div>

        <input
          ref={modalRef}
          type="checkbox"
          id="my-modal-3"
          className="modal-toggle"
        />
        <div className="modal">
          <div className="modal-box relative">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-4"
            >
              x
            </label>

            <h3 className="text-lg font-bold">Add Notes</h3>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="py-4 flex flex-col gap-4"
            >
              <div className="form-control">
                <input
                  onChange={(e) => handleChange(e)}
                  value={newNote.title}
                  className="input input-primary"
                  placeholder="enter note title"
                  type="text"
                  name="title"
                />
              </div>
              <div className="form-control">
                <textarea
                  onChange={(e) => handleChange(e)}
                  value={newNote.info}
                  className="textarea textarea-bordered"
                  placeholder="Note Info"
                  name="info"
                />
              </div>

              <select
                name="labelColor"
                onChange={(e) => handleChange(e)}
                value={newNote.labelColor}
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
    </DashboardLayout>
  );
};

export default NotesPage;
