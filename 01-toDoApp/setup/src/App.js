import React, { useState } from "react";
import "./App.css";
// import TodoForm from "./components/TodoForm";

function App() {

  const [newItem, setNewItem] = useState("");
  const [item, setItem] = useState([]);

  function addItem(){
    console.log(newItem);

    if (!newItem) {
      alert("Enter an item.")
      return
      
    }
    const item ={
      id: Math.floor(Math.random()*1000),
      value:newItem
    };

    setItem(oldList =>[...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray= item.filter(i => i.id !== id);
    setItem(newArray);
  }

  return (
    <div className="todo-app">
      <h1>ToDoList App</h1>
      <input
      type="text"
      placeholder="Add item ..."
      value={newItem}
      onChange={e=> setNewItem(e.target.value)}
      />
      <button onClick={()=>addItem()}>Add</button>

      <ul>
       {item.map(item=>{
         return(
           <li key={item.id}> 
           {item.value}
           <button onClick={()=> deleteItem(item.id)}>X</button></li>
         )
       })}
      </ul>

      {/* <TodoForm/> */}
    </div>
  );
}

export default App;
