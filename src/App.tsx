import React, { Suspense } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Spin } from 'antd';
import Layout from '@/layout';
import routes from '@/router';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Suspense fallback={<Spin className="main__loading" style={{ position: 'absolute' }} />}>
          <Switch>
            {routes.map((route, i) => {
              return (
                <Route key={i} path={route.path}>
                  <React.Fragment>
                    <route.component {...route} />
                    {route.routes &&
                      route.routes.map(r => {
                        return (
                          <Route key={r.path} path={r.path}>
                            <route.component {...route} />
                          </Route>
                        );
                      })}
                  </React.Fragment>
                </Route>
              );
            })}
            <Redirect to="/recommend" />
          </Switch>
        </Suspense>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
