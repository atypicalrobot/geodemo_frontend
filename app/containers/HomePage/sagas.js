/**
 * Gets the stories of the user from Github
 */

import { take, call, put, select, cancel, takeLatest } from 'redux-saga/effects';
import { LOCATION_CHANGE } from 'react-router-redux';
import { LOAD_STORIES } from 'containers/App/constants';
import { storiesLoaded, storyLoadingError } from 'containers/App/actions';

import request from 'utils/request';
import { makeSelectGenre } from 'containers/HomePage/selectors';

/**
 * Github stories request/response handler
 */
export function* getStories() {
  // Select genre from store
  const genre = yield select(makeSelectGenre());
  const requestURL = `https://api.github.com/users/${genre}/stories?type=all&sort=updated`;

  try {
    // Call our request helper (see 'utils/request')
    const stories = yield call(request, requestURL);
    yield put(storiesLoaded(stories, genre));
  } catch (err) {
    yield put(storyLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export function* githubData() {
  // Watches for LOAD_STORIES actions and calls getStories when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  const watcher = yield takeLatest(LOAD_STORIES, getStories);

  // Suspend execution until location changes
  yield take(LOCATION_CHANGE);
  yield cancel(watcher);
}

// Bootstrap sagas
export default [
  githubData,
];
