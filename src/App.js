import './App.css';
import ListAlbum from './features/components/albumImage/listAlbum';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import Todos from './features/components/Todos/page';
import NotFound from './components/notFound';
import { useEffect } from 'react';
import categoriesApi from './api/categoriesApi';
import Counter from './features/components/counter';

function App() {
  // useEffect(() => {
  //   const fetchedProduct = categoriesApi.get(3);
  //   console.log(fetchedProduct);
  // }, []);
  return (
    <div className="App">
      <p>
        <Link to="/todos">Todos</Link>
      </p>
      <p>
        <Link to="/albums">Albums</Link>
      </p>
      <p>
        <NavLink activeClassName="nav_active" to="/todos">
          Todos
        </NavLink>
      </p>
      <p>
        <NavLink activeClassName="nav_active" to="/albums">
          Albums
        </NavLink>
      </p>
      <Counter />
      <Switch>
        <Route path="/todos" component={Todos} />
        <Route path="/albums" component={ListAlbum} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
