import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import "./App.css";

const Content = ({items,handleChange,deleteList}) => {
 
  return (
    <div className="content">
      {(items.length)?(
      <ul className="ul">
        {items.map((item) => (
          <li className="list" key={item.id}>
            <input
              className="checkb"
              type="checkbox"
              onChange={() => handleChange(item.id)}
              checked={item.checked}
            />
            <label
              style={item.checked ? { textDecoration: "line-through" } : null}
            >
              {item.item}
            </label>

            <FaTrashAlt
              className="deletebtn"
              role="button"
              onClick={() => deleteList(item.id)}
            />
          </li>
        ))}
      </ul>
      ):(
       <h1 className="ifEmpty">Your list is empty</h1>
      )
    }
    </div>
  );
};

export default Content;
