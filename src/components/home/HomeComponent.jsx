import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FaPenToSquare } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { FaRegTrashCan } from "react-icons/fa6";
import { addTodo, deleteTodo } from '../../slices/todo/todoSlice';

const HomeComponent = () => {

    let [todoText,setTodoText] = useState("")
    
    const data = useSelector((state) => state.todo.value)
    const dispatch = useDispatch()
    console.log(data);
    

    return (
        <>
            <section id="todo">
                <main id="main" className="main">
                    <h1 className="heading text-center text-white text-4xl font-bold mb-4">ToDo List</h1>
                    <div className="form-control bg-white rounded-md py-2 pl-2 mb-4">
                        <input onChange={(e)=>setTodoText(e.target.value)} type="text" name="item" id="newItemText" className='border border-[#040b3cdd]' placeholder="Write you task"/>
                        <button onClick={()=>dispatch(addTodo(todoText))} id="addNewItemBtn" type="submit">Add</button>
                        <button id="updateItemBtn" type="submit">Update</button>
                    </div>
                    <div className="content">
                        <div className="pending">
                            <h2 className="itemHead">Pending Items Details</h2>
                            <ul id="pendingListItemHolder">
                                {
                                    data.map((todo,index)=>(
                                        <li className="statusPending" key={index}>
                                            <span className="taskItem">{todo}</span>
                                            <div className="buttonsWrapper">
                                                <button className="editBtn">
                                                    <FaPenToSquare/>
                                                </button>
                                                <button className="doneBtn">
                                                    <GiCheckMark />
                                                </button>
                                                <button onClick={()=>dispatch(deleteTodo(index))} className="pendingDeleteBtn">
                                                    <FaRegTrashCan/>
                                                </button>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                        <div className="done">
                            <h2 className="itemHead">Completed Items Details</h2>
                            <ul id="completedListItemHolder"></ul>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};

export default HomeComponent;