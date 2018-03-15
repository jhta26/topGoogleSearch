import React from 'react';
import { storiesOf } from '@storybook/react';

import SearchBarComponent from '../SearchBarComponent';

storiesOf('SearchBarComponent', module).add('Happy Path', () =>
  <SearchBarComponent
    searchGoogle={searchGoogle => console.log(searchGoogle)}
  />
);
