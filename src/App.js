import React from 'react';
import axios from 'axios'

import Search from './components/Search'
import Results from './components/Results'
import Popup from './components/Popup

function App() {
  const [state, setState] = useState({
    s: "",
    results: [],
    selected: {}
  });
  const apiurl = "http://www.omdbapi.com/?apikey=d20c1db3";




  return (
    <div className="App">
      <header>
       <h1>Movie Database</h1>
      </header>
    </div>
  );
}

export default App;
