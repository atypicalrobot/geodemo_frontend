/*
 * App Actions
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
  LOAD_STORIES,
  LOAD_STORIES_SUCCESS,
  LOAD_STORIES_ERROR,
} from './constants';

/**
 * Load the stories, this action starts the request saga
 *
 * @return {object} An action object with a type of LOAD_STORIES
 */
export function loadStories() {
  return {
    type: LOAD_STORIES,
  };
}

/**
 * Dispatched when the stories are loaded by the request saga
 *
 * @param  {array} stories The story data
 * @param  {string} genre The current genre
 *
 * @return {object}      An action object with a type of LOAD_STORIES_SUCCESS passing the stories
 */
export function storiesLoaded(stories, genre) {
  return {
    type: LOAD_STORIES_SUCCESS,
    stories,
    genre,
  };
}

/**
 * Dispatched when loading the stories fails
 *
 * @param  {object} error The error
 *
 * @return {object}       An action object with a type of LOAD_STORIES_ERROR passing the error
 */
export function storyLoadingError(error) {
  return {
    type: LOAD_STORIES_ERROR,
    error,
  };
}
