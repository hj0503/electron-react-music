import { BrowserRouter, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import Layout from '@/layout';
import routes from '@/router';
import store from '@/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          {renderRoutes(routes)}
          <Redirect to="/recommend" />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
