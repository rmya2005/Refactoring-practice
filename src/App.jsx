import {useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todos from "./components/Todos.jsx";
import AddTodo from "./components/AddTodo.jsx";

function App() {
    return (
        <>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
            bg-gradient-to-br from-indigo-500 to-blue-600 w-5/12 h-fit p-8 rounded-3xl shadow-xl">
                <h1 className="text-white text-center text-2xl font-bold mb-6">Manage Your Todos</h1>
                <AddTodo />
                <Todos />
            </div>
        </>
    );
}

export default App;
