import React from "react";
import Header from "./components/Header";
import AddTask from "./components/AddTask";
import { Route, Routes } from "react-router";

function App() {
  return (
    <main className="bg-gray-950 w-full h-screen text-gray-50 relative">
      <div className="container mx-auto p-5">
        <Header />
        {/* add task from  */}
        <Routes>
          <Route path="/create" element={<AddTask />} />
        </Routes>
      </div>
    </main>
  );
}

export default App;
