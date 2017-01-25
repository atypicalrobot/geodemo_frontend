import { fromJS } from 'immutable';

import appReducer from '../reducer';
import {
  loadStories,
  storiesLoaded,
  storyLoadingError,
} from '../actions';

describe('appReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      loading: false,
      error: false,
      currentGenre: false,
      storyData: fromJS({
        stories: false,
      }),
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(appReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the loadStories action correctly', () => {
    const expectedResult = state
      .set('loading', true)
      .set('error', false)
      .setIn(['storyData', 'stories'], false);

    expect(appReducer(state, loadStories())).toEqual(expectedResult);
  });

  it('should handle the storiesLoaded action correctly', () => {
    const fixture = [{
      name: 'My Story',
    }];
    const genre = 'test';
    const expectedResult = state
      .setIn(['storyData', 'stories'], fixture)
      .set('loading', false)
      .set('currentGenre', genre);

    expect(appReducer(state, storiesLoaded(fixture, genre))).toEqual(expectedResult);
  });

  it('should handle the storyLoadingError action correctly', () => {
    const fixture = {
      msg: 'Not found',
    };
    const expectedResult = state
      .set('error', fixture)
      .set('loading', false);

    expect(appReducer(state, storyLoadingError(fixture))).toEqual(expectedResult);
  });
});
