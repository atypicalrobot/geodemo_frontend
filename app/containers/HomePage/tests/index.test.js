/**
 * Test the HomePage
 */

import React from 'react';
import { shallow, mount } from 'enzyme';
import { IntlProvider } from 'react-intl';

import StoriesList from 'components/StoriesList';
import { HomePage, mapDispatchToProps } from '../index';
import { changeGenre } from '../actions';
import { loadStories } from '../../App/actions';

describe('<HomePage />', () => {
  it('should render the stories list', () => {
    const renderedComponent = shallow(
      <HomePage loading error={false} stories={[]} />
    );
    expect(renderedComponent.contains(<StoriesList loading error={false} stories={[]} />)).toEqual(true);
  });

  it('should render fetch the stories on mount if a genre exists', () => {
    const submitSpy = jest.fn();
    mount(
      <IntlProvider locale="en">
        <HomePage
          genre="Not Empty"
          onChangeGenre={() => {}}
          onSubmitForm={submitSpy}
        />
      </IntlProvider>
    );
    expect(submitSpy).toHaveBeenCalled();
  });

  describe('mapDispatchToProps', () => {
    describe('onChangeGenre', () => {
      it('should be injected', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        expect(result.onChangeGenre).toBeDefined();
      });

      it('should dispatch changeGenre when called', () => {
        const dispatch = jest.fn();
        const result = mapDispatchToProps(dispatch);
        const genre = 'mxstbr';
        result.onChangeGenre({ target: { value: genre } });
        expect(dispatch).toHaveBeenCalledWith(changeGenre(genre));
      });
    });
  });

  describe('onSubmitForm', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onSubmitForm).toBeDefined();
    });

    it('should dispatch loadStories when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      result.onSubmitForm();
      expect(dispatch).toHaveBeenCalledWith(loadStories());
    });

    it('should preventDefault if called with event', () => {
      const preventDefault = jest.fn();
      const result = mapDispatchToProps(() => {});
      const evt = { preventDefault };
      result.onSubmitForm(evt);
      expect(preventDefault).toHaveBeenCalledWith();
    });
  });
});
