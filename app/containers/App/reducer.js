/*
 * AppReducer
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
  LOAD_STORIES_SUCCESS,
  LOAD_STORIES,
  LOAD_STORIES_ERROR,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  loading: false,
  error: false,
  currentGenre: false,
  storyData: {
    stories: false,
  },
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_STORIES:
      return state
        .set('loading', true)
        .set('error', false)
        .setIn(['storyData', 'stories'], false);
    case LOAD_STORIES_SUCCESS:
      return state
        .setIn(['storyData', 'stories'], action.stories)
        .set('loading', false)
        .set('currentGenre', action.genre);
    case LOAD_STORIES_ERROR:
      return state
        .set('error', action.error)
        .set('loading', false);
    default:
      return state;
  }
}

export default appReducer;
