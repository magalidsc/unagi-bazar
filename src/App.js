import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Nav from './components/navbar/Nav.jsx';
import ItemListContainer from './components/item-list-container/ItemListContainer';
import ItemDetailContainer from './components/item-detail-container/ItemDetailContainer';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="Unagi Tienda Online" />
          </Route>
          <Route path="/category/:categoryId">
            <ItemDetailContainer />
          </Route>
          <Route path="/item/:paramId">
            <ItemDetailContainer />
          </Route>





        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;