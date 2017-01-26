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
} from './constants';

// The initial state of the App
const initialState = fromJS({
  genre: '',
  story: false,
  pois: false,
});

function homeReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_GENRE:
      // Delete prefixed '@' from the github genre
      return state
        .set('genre', action.genre);
    case CHANGE_STORY:
      return state
        .set('story', action.story)
        // .set('pois', action.story.pois);
    default:
      return state;
  }
}

export default homeReducer;
