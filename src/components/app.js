import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { browserHistory } from 'react-router';

import Home from './home';

const App = () => (
  <MuiThemeProvider>
    <Router history={browserHistory}>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </MuiThemeProvider>
)

export default App;