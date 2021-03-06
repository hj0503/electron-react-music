import { Fragment } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from '@/layout';
import routes from '@/router';
import store from '@/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            {routes.map((route, i) => {
              return (
                <Route key={i} path={route.path}>
                  <Fragment>
                    <route.component {...route} />
                  </Fragment>
                </Route>
              );
            })}
            <Redirect to="/recommend" />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
