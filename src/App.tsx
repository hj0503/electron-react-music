import { BrowserRouter, useRoutes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Layout from '@/layout';
import store from '@/store';
import routes from './router';

const Routes = () => {
  return useRoutes(routes.map(route => ({ ...route, element: <route.element /> })));
};

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Routes />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
