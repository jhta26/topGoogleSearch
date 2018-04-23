import React from 'react';
import PageLayout from './PageLayout';
import HeaderComponent from './HeaderComponent';
import SearchBarComponent from './SearchBarComponent';
import ResultsComponent from './ResultsComponent';

export default function GoogleResultsPage({
  searchGoogle,
  results,
  showResults
}) {
  return (
    <div className="GoogleResultsPage">
      <PageLayout>
        <HeaderComponent />
        <SearchBarComponent searchGoogle={searchGoogle} />
        {showResults ? <ResultsComponent results={results} /> : null}
        
      </PageLayout>
    </div>
  );
}
