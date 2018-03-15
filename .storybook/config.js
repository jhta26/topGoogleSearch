import { configure } from '@storybook/react';

function loadStories() {
	require('../src/index.css');
    require('../src/components/stories/HeaderComponent.story');
    require('../src/components/stories/FooterComponent.story');
    require('../src/components/stories/SearchBarComponent.story');
    require('../src/components/stories/PageLayout.story');
    require('../src/components/stories/ResultsComponent.story');
    // require('../src/components/stories/GoogleResultsPage.story');
}
configure(loadStories, module);