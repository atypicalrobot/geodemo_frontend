/**
 * Tests for HomePage sagas
 */

import { cancel, take, put, takeLatest } from 'redux-saga/effects';
import { createMockTask } from 'redux-saga/lib/utils';

import { LOCATION_CHANGE } from 'react-router-redux';

import { LOAD_STORIES } from 'containers/App/constants';
import { storiesLoaded, storyLoadingError } from 'containers/App/actions';

import { getStories, githubData } from '../sagas';

const genre = 'mxstbr';

/* eslint-disable redux-saga/yield-effects */
describe('getStories Saga', () => {
  let getStoriesGenerator;

  // We have to test twice, once for a successful load and once for an unsuccessful one
  // so we do all the stuff that happens beforehand automatically in the beforeEach
  beforeEach(() => {
    getStoriesGenerator = getStories();

    const selectDescriptor = getStoriesGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();

    const callDescriptor = getStoriesGenerator.next(genre).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  it('should dispatch the storiesLoaded action if it requests the data successfully', () => {
    const response = [{
      name: 'First story',
    }, {
      name: 'Second story',
    }];
    const putDescriptor = getStoriesGenerator.next(response).value;
    expect(putDescriptor).toEqual(put(storiesLoaded(response, genre)));
  });

  it('should call the storyLoadingError action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = getStoriesGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(storyLoadingError(response)));
  });
});

describe('githubDataSaga Saga', () => {
  const githubDataSaga = githubData();
  const mockedTask = createMockTask();

  it('should start task to watch for LOAD_STORIES action', () => {
    const takeLatestDescriptor = githubDataSaga.next().value;
    expect(takeLatestDescriptor).toEqual(takeLatest(LOAD_STORIES, getStories));
  });

  it('should yield until LOCATION_CHANGE action', () => {
    const takeDescriptor = githubDataSaga.next(mockedTask).value;
    expect(takeDescriptor).toEqual(take(LOCATION_CHANGE));
  });

  it('should cancel the forked task when LOCATION_CHANGE happens', () => {
    const cancelDescriptor = githubDataSaga.next().value;
    expect(cancelDescriptor).toEqual(cancel(mockedTask));
  });
});
