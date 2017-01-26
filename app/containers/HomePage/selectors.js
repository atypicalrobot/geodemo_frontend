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

const makeSelectPosition = () => createSelector(
  selectHome,
  (homeState) => homeState.get('position')
);

const makeSelectedPoi = () => createSelector(
  selectHome,
  (homeState) => homeState.get('selectedPoi')
);

export {
  selectHome,
  makeSelectGenre,
  makeSelectStory,
  makeSelectedPoi,
  makeSelectPosition,
};
