/**
 * Homepage selectors
 */

import { createSelector } from 'reselect';

const selectHome = (state) => state.get('home');

const makeSelectGenre = () => createSelector(
  selectHome,
  (homeState) => homeState.get('genre')
);

const makeSelectStory = () => createSelector(
  selectHome,
  (homeState) => homeState.get('story')
);

const makeSelectPois = () => createSelector(
  selectHome,
  (homeState) => homeState.get('pois')
);

export {
  selectHome,
  makeSelectGenre,
  makeSelectStory,
  makeSelectPois,
};
