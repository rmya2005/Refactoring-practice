import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {addTodo} from "../features/todoSlice.js";


function AddTodo() {
    const [input, setInput] = useState();
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        if (!input?.trim()) return;
        dispatch(addTodo(input.trim()));
        setInput('');
    };

    return (
        <form
            onSubmit={addTodoHandler}
            className="flex gap-3 mb-6 bg-white p-3 rounded-lg shadow-md"
        >
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 outline-none"
                placeholder="Add a new todo..."
            />
            <button
                type="submit"
                className="bg-blue-500 px-5 py-2 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
            >
                Add
            </button>
        </form>
    );
}

export default AddTodo;