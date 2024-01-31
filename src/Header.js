import React from 'react'
import "./App.css"

const Header=({title="Todo List"})=>{
  return (
    <header className='header'>
        <h1>{title}</h1>
    </header>
  )
}

export default Header