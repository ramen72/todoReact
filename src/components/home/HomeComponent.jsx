import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { FaPenToSquare } from "react-icons/fa6";
import { GiCheckMark } from "react-icons/gi";
import { FaRegTrashCan } from "react-icons/fa6";
import { TbRestore } from "react-icons/tb";
import { addTodo, completeDeleteTodo, completeTodo, deleteTodo, editTodo, inputValue, restoreTodo, updateTodo } from '../../slices/todo/todoSlice';

const HomeComponent = () => {
    
    const data = useSelector((state) => state.todo.value)
    const inValue = useSelector((state) => state.todo.inputValue)
    const addBtn = useSelector((state) => state.todo.addBtn)
    const completeValues = useSelector((state) => state.todo.completeValue)
    // const updateIndex = useSelector((state) => state.todo.updateIndex)
    


    const dispatch = useDispatch()
    

    return (
        <>
            <section id="todo">
                <main id="main" className="main">
                    <h1 className="heading text-center text-white text-4xl font-bold mb-4">ToDo List</h1>
                    <div className="form-control bg-white rounded-md py-2 pl-2 mb-4">
                        {/* <input onChange={(e)=>setTodoText(e.target.value)} type="text" name="item" id="newItemText" className='border border-[#040b3cdd]' placeholder="Write you task"/> */}
                        <input onChange={(e)=>dispatch(inputValue(e.target.value))} value={inValue} type="text" name="item" id="newItemText" className='border border-[#040b3cdd]' placeholder="Write you task"/>
                        {
                            addBtn ? <button onClick={()=>dispatch(addTodo(inValue))} id="addNewItemBtn" type="submit">Add</button> : <button onClick={()=>dispatch(updateTodo())} id="updateItemBtn" type="submit">Update</button>
                        }

                    </div>
                    <div className="content">
                        <div className="pending">
                            <h2 className="itemHead">Pending Items Details</h2>
                            <ul id="pendingListItemHolder">
                                {
                                    data.map((todo,index)=>(
                                        <li className="statusPending" key={index}>
                                            <span className="taskItem">{todo}</span>
                                            <div  className="buttonsWrapper">
                                                <button onClick={()=>dispatch(editTodo({id:index,newValue:todo}))} className="editBtn">
                                                    <FaPenToSquare/>
                                                </button>
                                                <button onClick={(e)=>dispatch(completeTodo(index))} className="doneBtn">
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
                            <ul id="completedListItemHolder">
                            {
                                    completeValues.map((todo,index)=>(
                                        <li className="statusPending" key={index}>
                                            <span className="taskItem">{todo}</span>
                                            <div  className="buttonsWrapper">
                                                <button onClick={(e)=>dispatch(restoreTodo(index))} className="doneBtn">
                                                    <TbRestore className='text-white transition-all duration-300 hover:text-[#0400fd]'/>
                                                </button>
                                                <button onClick={()=>dispatch(completeDeleteTodo(index))} className="completeDeleteBtn">
                                                    <FaRegTrashCan/>
                                                </button>
                                            </div>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
};

export default HomeComponent;