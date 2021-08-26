import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from '@/router';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((route, i) => (
          <Route key={i} path={route.path}>
            <route.component {...route} />
          </Route>
        ))}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
