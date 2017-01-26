/*
 * HomeReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  CHANGE_GENRE,
  CHANGE_STORY,
  CHANGE_POI,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  genre: '',
  story: false,
  pois: false,
  position: [51.628611, -0.748229],
  selectedPoi: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_GENRE:
      // Delete prefixed '@' from the github genre
      return state
        .set('genre', action.genre)
        .set('story', false);
    case CHANGE_STORY:
      return state
        .set('story', action.story)
        // .set('pois', action.story.pois);
    case CHANGE_POI:
      return state
        .set('selectedPoi', action.poi)
        .set('position', fromJS([action.poi.mpoint.coordinates[1], action.poi.mpoint.coordinates[0]]))
    default:
      return state;
  }
}

export default homeReducer;
