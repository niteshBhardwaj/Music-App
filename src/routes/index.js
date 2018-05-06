import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import Home from '../pages/home'
import AlbumSongs from '../pages/albumSongs'
import NotFound from '../pages/notFound'

class RouteList extends Component {
  render() {
    return (
    <div>
    <Switch>
     	<Route exact path="/" component={Home}/>
      <Route exact path="/album/:id" component={AlbumSongs}/>
      <Route component={NotFound} />
      </Switch>
     </div>
    );
  }
}

export default RouteList;
