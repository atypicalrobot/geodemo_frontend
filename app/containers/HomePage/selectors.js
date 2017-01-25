/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectGenre = () => createSelector(
  selectHome,
  (homeState) => homeState.get('genre')
);

export {
  selectHome,
  makeSelectGenre,
};
