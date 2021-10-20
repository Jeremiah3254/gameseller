import logo from './logo.svg';
import './App.css';
import Store from './Store'
import Cart from './Cart'
import StoreItem from './StoreItem'
import FriendList from './FriendList'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Unknown Members:
        <FriendList />
        <br></br>
        My Store
        <Store />
        
      </header>
    </div>
  );
}

export default App;
