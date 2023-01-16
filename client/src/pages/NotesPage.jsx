import React from "react";
import { DashboardLayout } from "../layout";
import { NotesCard } from "../components";
const NotesPage = () => {
  return (
    <DashboardLayout>
      <div className="flex flex-col items-center bg-base-200 w-screen h-auto">
        <h1 className="text-6xl py-4">Notes</h1>
        <div className="block md:flex md:flex-wrap justify-center gap-4 p-4">
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
          <NotesCard />
        </div>
      </div>
    </DashboardLayout>
  );
};
export default NotesPage;
