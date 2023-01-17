import React, { useRef, useState } from "react";
import { DashboardLayout } from "../layout";
import { IoAdd } from "react-icons/io5";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux/AppSlice";
import { TodoCard } from "../components";

const TodoPage = () => {
  const [newTodo, setNewTodo] = useState("");
  const modalRef = useRef();
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.app.todo);
  const toggleModal = () => {
    modalRef.current.checked = !modalRef.current.checked;
    console.log(modalRef.current.checked);
  };
  const handleChange = (e) => {
    setNewTodo(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo({ id: Math.random() * 10000, title: newTodo }));
    setNewTodo("");
    toggleModal();
  };

  return (
    <DashboardLayout>
      <div className="flex flex-col items-center bg-base-200 w-screen h-screen">
        <div className="p-5 flex flex-col justify-center">
          <h1 className="text-5xl text-white">TODOS</h1>
        </div>
        <div className="flex flex-col bg-base-200 w-full h-full justify-start items-center p-4">
          <div
            onClick={toggleModal}
            className="flex justify-center items-center border-4 border-base-100 rounded-xl w-96 h-48 cursor-pointer hover:bg-base-100 transition-all ease-in-out duration-400"
          >
            <IoAdd className="text-8xl text-base-300" />
          </div>
          <div className=" overflow-scroll h-auto mt-4 rounded-xl">
            <div className="flex flex-1  justify-center flex-col p-4 gap-4">
              {todos.map((todo, idx) => (
                <TodoCard
                  id={todo.id}
                  index={idx}
                  key={todo.id}
                  title={todo.title}
                />
              ))}
            </div>
          </div>
        </div>

        {/* const input ref is directally provided for the controllable ocmponet and therefore there are so many tihngsi n yih */}
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
              ✕
            </label>
            <h3 className="text-lg font-bold">Add Todo</h3>
            <form
              onSubmit={(e) => handleSubmit(e)}
              className="py-4 flex flex-col gap-4"
            >
              <div className="form-control">
                <input
                  onChange={(e) => handleChange(e)}
                  value={newTodo}
                  type="text"
                  name="todo-name"
                  id="todo-name"
                  className="input input-primary"
                  placeholder="enter todo task"
                />
              </div>
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

export default TodoPage;
