import React from 'react';
import LoginComponent from '../components/LoginComponent';
import UserComponent from '../components/UserComponent';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../redux/reducers/index'
import LayoutContainer from './LayoutContainer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

const store = createStore(reducer);

class AppContainer extends React.Component {
  render(){
    return (
      <Provider store={store}>
        <Router>
          <LayoutContainer>
            <Switch>
              <Route path="/login">
                <LoginComponent/>
              </Route>
              <Route path="/user">
                <UserComponent/>
              </Route>
              <Route path="/">
                <Redirect to="/login" />
              </Route>
            </Switch>
          </LayoutContainer>
        </Router>
      </Provider>
    )
  }
}

export default AppContainer;
