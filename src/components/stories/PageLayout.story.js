import React from 'react';
import { storiesOf } from '@storybook/react';
import HeaderComponent from '../HeaderComponent';
import FooterComponent from '../FooterComponent';
import SearchBarComponent from '../SearchBarComponent';
import ResultsComponent from '../ResultsComponent';
import PageLayout from '../PageLayout';

var results = [{ title: 'this is the title', URL: 'www.google.com' }];

storiesOf('PageLayout', module).add('Happy Path', () =>
  <PageLayout>
    <HeaderComponent />
    <SearchBarComponent
      searchGoogle={searchGoogle => console.log(searchGoogle)}
    />
    <ResultsComponent results={results} />
    <FooterComponent />
  </PageLayout>
);
