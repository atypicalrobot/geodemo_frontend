import { fromJS } from 'immutable';

import homeReducer from '../reducer';
import {
  changeGenre,
} from '../actions';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      genre: '',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(homeReducer(undefined, {})).toEqual(expectedResult);
  });

  it('should handle the changeGenre action correctly', () => {
    const fixture = 'mxstbr';
    const expectedResult = state.set('genre', fixture);

    expect(homeReducer(state, changeGenre(fixture))).toEqual(expectedResult);
  });
});
