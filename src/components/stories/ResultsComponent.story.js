import React from 'react';
import { storiesOf } from '@storybook/react';

import ResultsComponent from '../ResultsComponent';

var results = [{ title: 'this is the title', URL: 'www.google.com' }];

storiesOf('ResultsComponent', module).add('Happy Path', () =>
  <ResultsComponent results={results} />
);
