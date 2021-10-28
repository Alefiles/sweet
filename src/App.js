import './App.css';

//Components
import AppRouter from './AppRouter/AppRouter';
import CartContext from "../src/context/CartContext"

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
