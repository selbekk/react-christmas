import React from 'react';
import { Route } from 'react-router-dom';

import PageContainer from './PageContainer';
import OverviewPage from './OverviewPage';
import ArticlePage from './ArticlePage';

const App = () => (
  <PageContainer>
    <Route exact path="/" component={OverviewPage} />
    <Route exact path="/:date" component={ArticlePage} />
  </PageContainer>
);

export default App;