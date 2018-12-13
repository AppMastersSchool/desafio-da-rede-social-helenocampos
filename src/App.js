import React, {Component} from 'react';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import TimeLine from './components/timeLine';
import PostDetails from './components/postDetails';

class App extends Component {

  showNotFound(){
    return (
      <div>
        Página não encontrada.
      </div>
    )
  }

  showAboutPage(){
    const myPage = (
      <div>
        <h1>Sobre o site </h1>
      </div>
    )
    return myPage;
  }

  render(){
    return(
        <div>
          <BrowserRouter>
            <Switch>
              <Route path = '/post/:time' component={PostDetails} />
              <Route exact path = '/' component={TimeLine}/>
              <Route path = '/sobre' component={this.showAboutPage} />
              <Route path = '*' component={this.showNotFound} />
            </Switch>
          </BrowserRouter>
        </div>
    )
  }
}

export default App;
