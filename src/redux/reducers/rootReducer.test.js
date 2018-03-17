import rootReducer from './rootReducer';
import deepFreeze from 'deep-freeze';

const new_results = { URL: "https://www.sfgate.com/", title: "SFGATE: San Francisco Bay Area - News, Bay Area news, Sports ..." }


describe('rootReducer tests', () => {
    it('set message works', () => {
        const action = { type: 'SET_RESULTS', results: results };

        const currentState = {
            results: null
        };

        deepFreeze(currentState);

        const nextState = {
            results: new_results,
        };

        expect(rootReducer(currentState, action)).toEqual(nextState);
    });


});