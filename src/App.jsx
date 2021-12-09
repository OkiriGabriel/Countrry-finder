import { BrowserRouter as Router } from 'react-router-dom';
import React, { Fragment, useState } from 'react';



import CardList from './component/pages/CardList'
import SearchBar from './component/pages/SearchBar'
import Header from './component/layouts/Header'


import MovieSource from './api/MovieSource'
import About from './component/pages/About'

import './App.css'


const App =()=> {
  const [state, setState] = useState ({
    results: []
  });
  const onSearch = async(text) => {
    const results = await MovieSource.get("/", {
    params: {s: text, i: "tt3896198", apiKey: "84eceeb4"}
    });
    setState(prevState => {
      return {...prevState, results:results}
    })
  }
  return (
    <Fragment>
      <Router>
  
          <Header />
          <SearchBar onSearch={onSearch} />
          <CardList results={state.results} />
 
      </Router>
      </Fragment>
  );
}

export default App;
