import {
  CHANGE_GENRE,
} from '../constants';

import {
  changeGenre,
} from '../actions';

describe('Home Actions', () => {
  describe('changeGenre', () => {
    it('should return the correct type and the passed name', () => {
      const fixture = 'Max';
      const expectedResult = {
        type: CHANGE_GENRE,
        name: fixture,
      };

      expect(changeGenre(fixture)).toEqual(expectedResult);
    });
  });
});
