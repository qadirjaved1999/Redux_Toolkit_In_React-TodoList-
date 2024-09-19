import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTods } from '../Functionality/Todo/TodoSlice';

export const Addtodos = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTods(input));
        console.log("todo add or not =>", input)
        setInput("");
    }
    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <div className='w-full flex justify-center items-center'>
                <div className='w-[340px] mb-5 p-8 bg-purple-200 text-black text-4xl font-extrabold rounded-lg'>My Notes List</div>
            </div>
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    )
}
