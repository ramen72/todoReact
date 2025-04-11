import React from 'react';
import { useSelector, useDispatch } from 'react-redux'

const HomeComponent = () => {
    
    const data = useSelector((todo) => todo)
    // const dispatch = useDispatch()
    console.log(data);
    

    return (
        <>
            <section id="todo">
                <main id="main" className="main">
                    <h1 className="heading text-center text-white text-4xl font-bold mb-4">ToDo List</h1>
                    <div className="form-control bg-white rounded-md py-2 pl-2 mb-4">
                        <input type="text" name="item" id="newItemText" className='border border-[#040b3cdd]' placeholder="Write you task"/>
                        <button id="addNewItemBtn" type="submit">Add</button>
                        <button id="updateItemBtn" type="submit">Update</button>
                    </div>
                    <div className="content">
                        <div className="pending">
                            <h2 className="itemHead">Pending Items Details</h2>
                            <ul id="pendingListItemHolder">

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