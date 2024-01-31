import React, { useState } from 'react'
import { MdOutlineAddCircle } from "react-icons/md";
import "./App.css"

function AddItems({items,setItems}) {

    const handleSubmit=(e)=>{
      e.preventDefault()
    }
    const [newItem,setNewItem]=useState("")
    function handleChange(e){
       setNewItem(e.target.value)
    }
    const addItem=()=>{
        if(newItem==='')return
        let newlist;
        if(items.length===0){
            newlist=[{id:1,checked:false,item:newItem}].concat(items) 
        }
        else{
            newlist=[{id:items[0].id+1,checked:false,item:newItem}].concat(items)
        }
        setItems(newlist)
        localStorage.setItem("todo_list", JSON.stringify(newlist));
        setNewItem('')
    }
    
  return (
    <form className='inputForm' onSubmit={handleSubmit}>
        <label htmlFor="inputbox">Add Item</label>
        <input type="text" id="inputbox" name='inputbox' className='inputBox' onChange={(e)=>handleChange(e)} placeholder='Add Item' value={newItem} required />
        <MdOutlineAddCircle 
        className='addbtn'
        type='Submit'
        onClick={addItem}
        />
    </form>
  )
}

export default AddItems