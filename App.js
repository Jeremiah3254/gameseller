import logo from './logo.svg';
import './App.css';
import Store from './Store'
import Cart from './Cart'
import StoreItem from './StoreItem'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        My Store
        <Store />
        <Cart />
      </header>
    </div>
  );
}

export default App;