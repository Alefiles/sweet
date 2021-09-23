import './App.css';
//import React, {useState, useEffect} from "react"
//Components
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
//import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";



function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting="Aloha!, Bienvenidos!"/>
      
    </div>
  );
}

export default App;
