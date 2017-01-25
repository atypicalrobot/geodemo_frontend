import { fromJS } from 'immutable';

import {
  selectHome,
  makeSelectGenre,
} from '../selectors';

describe('selectHome', () => {
  it('should select the home state', () => {
    const homeState = fromJS({
      storyData: {},
    });
    const mockedState = fromJS({
      home: homeState,
    });
    expect(selectHome(mockedState)).toEqual(homeState);
  });
});

describe('makeSelectGenre', () => {
  const genreSelector = makeSelectGenre();
  it('should select the genre', () => {
    const genre = 'mxstbr';
    const mockedState = fromJS({
      home: {
        genre,
      },
    });
    expect(genreSelector(mockedState)).toEqual(genre);
  });
});
