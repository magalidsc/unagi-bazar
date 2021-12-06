import './App.css';
import Nav from './components/navbar/Nav.jsx';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import ItemDetailContainer from './components/item-detail-container/ItemDetailContainer';

function App() {
  return (
    <div className="App">

      <Nav />
      <ItemListContainer greeting="Unagi Tienda Online" />
      <ItemDetailContainer />
    </div>
  );
}

export default App;