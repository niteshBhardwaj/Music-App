import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore} from 'redux'
import RouteList from './routes'
import AudioPlayer from './pages/audioPlayer'
import reducers from './store/reducers'

let store = createStore(reducers);

class App extends Component {
  render() {
    return (
      <Provider store={store}>	
        <div className="App">
  	      <Router>
  	        <RouteList />
  	      </Router>
  	      <AudioPlayer />
        </div>
      </Provider>
    );
  }
}

export default App;
