import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home } from './components/Home';
import { Apple } from './components/Apple';
import { Google } from './components/Google';
import { NoMatch } from './components/NoMatch';
import { Amazon } from './components/Amazon';
import './App.css';
import { Layout } from './components/Layout';
import { NavigationBar} from './components/Navbar';

class App extends Component {
  render() {
    return (
      <>
        <NavigationBar/>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/apple" component={Apple}/>
              <Route path="/amazon" component={Amazon}/>
              <Route path="/google" component={Google}/>
              <Route component={NoMatch}/>
            </Switch>
          </Router>  
        </Layout>
      </>
    );
  }
}

export default App;
