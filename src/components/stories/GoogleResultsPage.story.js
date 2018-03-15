import React from 'react';
import { storiesOf } from '@storybook/react';

import GoogleResultsPage from '../GoogleResultsPage';
import PageLayout from '../PageLayout';
import FooterComponent from '../FooterComponent';
import HeaderComponent from '../HeaderComponent';
import SearchBarComponent from '../SearchBarComponent';
import ResultsComponent from '../ResultsComponent';
var state = { results: [{ title: 'title' }] };
storiesOf('HeaderComponent', module).add('Happy Path', () =>
  <GoogleResultsPage>
    <PageLayout>
      <HeaderComponent />
      <SearchBarComponent />
      <ResultsComponent />
      <FooterComponent />
    </PageLayout>
  </GoogleResultsPage>
);
