import './App.css';
import Nav from './components/navbar/Nav.jsx';
import ItemListContainer from './components/item-list-container/ItemListContainer';

function App() {
  return (
    <div className="App">

      <Nav />
      <ItemListContainer greeting="Unagi Tienda Online" />
    </div>
  );
}

export default App;