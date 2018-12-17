import React, {Component} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import TimeLine from './components/timeLine';
import PostDetails from './components/postDetails';
import UserDetails from './components/userDetails';
import About from './components/about';

class App extends Component {

  showNotFound(){
    return (
      <div>
        Página não encontrada.
      </div>
    )
  }

  render(){
    return(
        <div>
          <BrowserRouter>
            <Switch>
              <Route path = '/post/:id' component={PostDetails} />
              <Route path = '/user/:id' component={UserDetails} />
              <Route exact path = '/' component={TimeLine}/>
              <Route path = '/sobre' component={About} />
              <Route path = '*' component={this.showNotFound} />
            </Switch>
          </BrowserRouter>
        </div>
    )
  }
}

export default App;
