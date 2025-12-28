
import React from 'react'
import AddTodo from './component/AddTodo'
import Todos from './component/Todos'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-blue-200 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">
        Redux Toolkit Todo App
      </h1>
      <div className="bg-white shadow-lg rounded-2xl p-6 w-full max-w-md">
        <AddTodo />
        <Todos />
      </div>
    </div>
  );
}

export default App;

