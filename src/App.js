import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import List from './List'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from './Home';
import About from './About';

function App() {
  const [list,setList] = useState("")
  const [item,setItem] = useState([])
  const change=(e)=>{
   setList(e.target.value)
  }
  const listAdd =()=>{

setItem((oldData)=>{
return [...oldData,list] 
})
setList("")
  }
  const del=(id)=>{
  //  console.log("deleted") 
   setItem((oldItem)=>{
return oldItem.filter((arrEl,index)=>{
return index !== id
})
   })
  }

  return (
    

    <>
    <div className="main">
    <h1>
      <Link to="/about">
      about
      </Link>
      
      </h1>
    <h1>
      <Link to="/home">
      home
      </Link>
      </h1>
      <div className="center">
        <h1>Todo List</h1>
        <div className="input">
          <input type="text"
          onChange={change} id="plus" 
            value={list} placeholder='add Items' />
          <button onClick={listAdd}>+</button>
        </div>

       
       
        {
          item.map((curr,index)=>{
            return (
              <div key={index} className="list">
              <button onClick={()=>{
                del(index)
              }} className='btn-can'>x</button>
            <ol><li>{curr}</li></ol>
            
          </div>
            )
            
          })
        }
      
      
      </div>
     
     <List/>
      
      </div>
      <Routes>
        <Route exact path='/home' element={<Home/>}/>
        <Route exact path='/about' element={<About/>}/>
      </Routes>
      </>
  );
}

export default App;
