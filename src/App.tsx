import { BrowserRouter as Router } from 'react-router-dom';

import Layout from '@/lib/layout';
import Routings from '@/lib/router/Routings';

import BASENAME from './PROJECT_BASE';

const App = () => (
  <Router basename={BASENAME}>
    <Layout>
      <Routings />
    </Layout>
  </Router>
);

export default App;
