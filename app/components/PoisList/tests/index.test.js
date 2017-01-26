import { shallow, mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';

import PoiListItem from 'containers/PoiListItem';
import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import PoisList from '../index';

describe('<PoisList />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <PoisList loading />
    );
    expect(renderedComponent.contains(<List component={LoadingIndicator} />)).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <PoisList
          loading={false}
          error={{ message: 'Loading failed!' }}
        />
      </IntlProvider>
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });

  it('should render the poisitories if loading was successful', () => {
    const pois = [{
      owner: {
        login: 'mxstbr',
      },
      html_url: 'https://github.com/react-boilerplate/react-boilerplate',
      name: 'react-boilerplate',
      open_issues_count: 20,
      full_name: 'react-boilerplate/react-boilerplate',
    }];
    const renderedComponent = shallow(
      <PoisList
        pois={pois}
        error={false}
      />
    );

    expect(renderedComponent.contains(<List items={pois} component={PoiListItem} />)).toEqual(true);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <PoisList
        pois={false}
        error={false}
        loading={false}
      />
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
