import {
  LOAD_STORIES,
  LOAD_STORIES_SUCCESS,
  LOAD_STORIES_ERROR,
} from '../constants';

import {
  loadStories,
  storiesLoaded,
  storyLoadingError,
} from '../actions';

describe('App Actions', () => {
  describe('loadStories', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_STORIES,
      };

      expect(loadStories()).toEqual(expectedResult);
    });
  });

  describe('storiesLoaded', () => {
    it('should return the correct type and the passed stories', () => {
      const fixture = ['Test'];
      const genre = 'test';
      const expectedResult = {
        type: LOAD_STORIES_SUCCESS,
        stories: fixture,
        genre,
      };

      expect(storiesLoaded(fixture, genre)).toEqual(expectedResult);
    });
  });

  describe('storyLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_STORIES_ERROR,
        error: fixture,
      };

      expect(storyLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
