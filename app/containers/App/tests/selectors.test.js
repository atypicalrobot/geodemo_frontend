import { fromJS } from 'immutable';

import {
  selectGlobal,
  makeSelectCurrentGenre,
  makeSelectLoading,
  makeSelectError,
  makeSelectStories,
  makeSelectLocationState,
} from '../selectors';

describe('selectGlobal', () => {
  it('should select the global state', () => {
    const globalState = fromJS({});
    const mockedState = fromJS({
      global: globalState,
    });
    expect(selectGlobal(mockedState)).toEqual(globalState);
  });
});

describe('makeSelectCurrentGenre', () => {
  const currentGenreSelector = makeSelectCurrentGenre();
  it('should select the current user', () => {
    const genre = 'mxstbr';
    const mockedState = fromJS({
      global: {
        currentGenre: genre,
      },
    });
    expect(currentGenreSelector(mockedState)).toEqual(genre);
  });
});

describe('makeSelectLoading', () => {
  const loadingSelector = makeSelectLoading();
  it('should select the loading', () => {
    const loading = false;
    const mockedState = fromJS({
      global: {
        loading,
      },
    });
    expect(loadingSelector(mockedState)).toEqual(loading);
  });
});

describe('makeSelectError', () => {
  const errorSelector = makeSelectError();
  it('should select the error', () => {
    const error = 404;
    const mockedState = fromJS({
      global: {
        error,
      },
    });
    expect(errorSelector(mockedState)).toEqual(error);
  });
});

describe('makeSelectStories', () => {
  const storiesSelector = makeSelectStories();
  it('should select the stories', () => {
    const stories = fromJS([]);
    const mockedState = fromJS({
      global: {
        storyData: {
          stories,
        },
      },
    });
    expect(storiesSelector(mockedState)).toEqual(stories);
  });
});

describe('makeSelectLocationState', () => {
  const locationStateSelector = makeSelectLocationState();
  it('should select the route as a plain JS object', () => {
    const route = fromJS({
      locationBeforeTransitions: null,
    });
    const mockedState = fromJS({
      route,
    });
    expect(locationStateSelector(mockedState)).toEqual(route.toJS());
  });
});
