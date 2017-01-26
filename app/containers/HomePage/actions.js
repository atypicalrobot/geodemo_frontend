/*
 * Home Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  CHANGE_GENRE,
  CHANGE_STORY,
  CHANGE_POI,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of CHANGE_GENRE
 */
export function changeGenre(genre) {
  return {
    type: CHANGE_GENRE,
    genre,
  };
}

export function changeStory(story) {
  return {
    type: CHANGE_STORY,
    story,
  };
}

export function changePoi(poi) {
  return {
    type: CHANGE_POI,
    poi,
  };
}
