import React,{Component,Fragment} from 'react';
import './App.css';
import Home from '../Home';
import Login from '../Login';
import Profil from '../Profil';
import Supplier from '../Supplier';

import {BrowserRouter as Router, Route,Link} from 'react-router-dom';
import {store} from '../../redux';
import { Provider} from 'react-redux';



function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <div>
            <nav>
              <ul>
                <li>
                <Link to="/">Home</Link>
                </li>
                <li>
                <Link to="/login">login</Link>
                </li>
                <li>
                <Link to="/profil">Profil</Link>
                </li>
                <li>
                <Link to="/supplier">Supplier</Link>
                </li>
              </ul>
            </nav>
                <Route exact path="/"  component={Home} />
                <Route path="/login" component={Login} />
                <Route exact path="/supplier"  component={Supplier} />
            </div>
          </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
