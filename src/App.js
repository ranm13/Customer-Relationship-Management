import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import './App.css';
import Landing from './components/Landing';
import Clients from './components/Clients';
import Actions from './components/Actions';
import Analytics from './components/Analytics';

class App extends Component {
  render(){
    return (
      <Router>
        <div className="App">
          <div id="nav-bar">
            <Link to="/" style={{ textDecoration: 'none'}}><div className="nav-bar-tab">Home</div> </Link>
            <Link to="/clients" style={{ textDecoration: 'none'}}> <div className="nav-bar-tab">Clients</div> </Link>
            <Link to="/actions" style={{ textDecoration: 'none'}}>  <div className="nav-bar-tab">Actions</div> </Link>
            <Link to="/analytics" style={{ textDecoration: 'none'}}> <div className="nav-bar-tab"> Analytics</div> </Link>
          </div>
          <Route exact path="/" component={Landing}/>
          <Route exact path="/clients" render={() => <Clients />} />
          <Route exact path="/actions" render={() => <Actions />} />
          <Route exact path="/analytics" render={() => <Analytics />} />
        </div>
      </Router>

    )
  }

}

export default App;
