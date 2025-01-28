import React from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {addTodo, removeTodo} from "../features/todoSlice.js";

function Todos() {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch()

    return (
        <div className="bg-white rounded-lg shadow-md p-4">
            {todos.length === 0 ? (
                <p className="text-gray-500 text-center">No todos yet. Add one above!</p>
            ) : (
                todos.map((todo) => (
                    <div
                        className="border border-gray-200 rounded-lg p-3 mb-2 text-gray-800 flex justify-between items-center"
                        key={todo.id}
                    >
                        <span>{todo.text}</span>
                        <button
                            className="text-red-500 hover:text-red-600 transition duration-200"
                            onClick={() => dispatch(removeTodo(todo.id))}
                        >
                            ❌
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default Todos;