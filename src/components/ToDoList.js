import React, { useState } from 'react'

export const ToDoList = () => {
   const [task,setTask] = useState('') 
   const [toDoItems,setTodoItems] = useState([]) 

   function clickhandler(){
    setTodoItems([...toDoItems,task])
    setTask('')
   }

   function deleteItem(id) {
      
            const updatedItems =  toDoItems.filter((arrEle,idx)=>{
            return idx !== id;
        })
        setTodoItems(updatedItems)
   }
  return (
    <div className='main-div'>
        <div className='child-div'>
            <h1>Todo List</h1>
            <input type='text' placeholder='Add Items' value={task} 
            onChange={(e) => setTask(e.target.value)}/>

            <button className='btn' onClick={clickhandler}>+</button>

            <ul>
                {toDoItems.map((items,idx)=>{
                    return (
                        <div className='list-item-div'>
                            <li className='item-list' key={idx}>{items}</li>
                        
                            <i className="fa-solid fa-trash trash" onClick={()=>{deleteItem(idx)}}></i>
                        </div>
                    )
                })}
            </ul>
            <button className='remove-btn' onClick={()=>{
                setTodoItems([])
            }}>Remove All</button>
        </div>


    </div>
  )
}
