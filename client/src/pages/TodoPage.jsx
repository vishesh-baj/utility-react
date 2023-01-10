import React from "react";
import { DashboardLayout } from "../layout";

const TodoPage = () => {
  return (
    <DashboardLayout>
      <div className="flex justify-center items-center bg-teal-400">
        <h1 className="p-5 text-2xl">Todo Page</h1>
        <div className="p-5">
          <div className="card">
            <input
              className="input input-ghost"
              type="text"
              name="todo"
              id=""
            />
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default TodoPage;
