import React from 'react';
import {MoviesStore} from './context/MoviesStore';
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import Home from './pages/Home';
import Movie from './pages/Movie';

function App() {
  return (
    <MoviesStore>
      <BrowserRouter>
        <Switch>
          <Route path={'/'} exact component={Home}/>
          <Route path={'/movie/:id'} exact component={Movie}/>
        </Switch>
      </BrowserRouter>
    </MoviesStore>
  );
}

export default App;
