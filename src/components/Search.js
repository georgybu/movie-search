import React from 'react';
import {MoviesContext} from '../context/MoviesContext';

const Search = () => {
  const initialFormValue = {title: '', year: ''};

  const {clearMovies, searchMovies} = React.useContext(MoviesContext);
  const [formValue, setFormValue] = React.useState(initialFormValue);

  const clear = () => setFormValue(initialFormValue) && clearMovies();
  const search = () => searchMovies(formValue);

  return (
    <div className="search">
      <input type="text" value={formValue.title}
             onChange={e => setFormValue({...formValue, title: e.target.value})} placeholder="title"/>

      <input type="text" value={formValue.year}
             onChange={e => setFormValue({...formValue, year: e.target.value})} placeholder="year"/>

      <button onClick={() => search()}>search</button>
      <button onClick={() => clear()}>clear</button>
    </div>
  );
};

export default Search;
