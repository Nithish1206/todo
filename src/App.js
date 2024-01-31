import "./App.css";
import Header from "./Header";
import AddItems from "./AddItems";
import Content from "./Content";
import Footer from "./Footer";
import  { useState } from "react";


function App() {

  const [items, setItems] = useState(JSON.parse(localStorage.getItem('todo_list')));
  

  function handleChange(id) {
    const listItem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItem);
    localStorage.setItem("todo_list", JSON.stringify(listItem));
  }

  function deleteList(id) {
    const listItem = items.filter((item) => item.id !== id);
    setItems(listItem);
    localStorage.setItem("todo_list", JSON.stringify(listItem));
  }
  
  return (
    <div className="App">
       <Header title="Todo List"/>

       <AddItems items={items} setItems={setItems}/>

       <Content 
       items={items}
       setItems={setItems}
       handleChange={handleChange}
       deleteList={deleteList}/>

       <Footer 
        items={items}
        setItems={setItems} 
        />
    </div>
  );
}

export default App;
