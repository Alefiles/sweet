import './App.css';
import CartContext from "../src/context/CartContext"

//Components
import AppRouter from './AppRouter/AppRouter';


//fase de montaje --> UseEffect

function App() {


  return (
    
    <div className="App">
      <CartContext.Provider value={[]}>
      <AppRouter/>
      </CartContext.Provider>
    </div>
    
  );
}

export default App;
