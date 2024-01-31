import React from 'react'
import "./App.css"

const Footer = ({items,setItems}) => {
const year = new Date();
const deleteAll=()=>{
  setItems('')
}
  return (
    <footer className='footer'>
        
        <p>Copyrights &copy; {year.getFullYear()}</p>
        <p>There are {items.length} {(items.length>1)? "items":"item"} in the list.</p>
        <button className='deleteAll' onClick={deleteAll} >Delete all</button>
    </footer>
  )
}

export default Footer