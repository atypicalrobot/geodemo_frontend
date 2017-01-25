import { shallow, mount } from 'enzyme';
import React from 'react';
import { IntlProvider } from 'react-intl';

import StoryListItem from 'containers/StoryListItem';
import List from 'components/List';
import LoadingIndicator from 'components/LoadingIndicator';
import StoriesList from '../index';

describe('<StoriesList />', () => {
  it('should render the loading indicator when its loading', () => {
    const renderedComponent = shallow(
      <StoriesList loading />
    );
    expect(renderedComponent.contains(<List component={LoadingIndicator} />)).toEqual(true);
  });

  it('should render an error if loading failed', () => {
    const renderedComponent = mount(
      <IntlProvider locale="en">
        <StoriesList
          loading={false}
          error={{ message: 'Loading failed!' }}
        />
      </IntlProvider>
    );
    expect(renderedComponent.text()).toMatch(/Something went wrong/);
  });

  it('should render the stories if loading was successful', () => {
    const stories = [{
      owner: {
        login: 'mxstbr',
      },
      html_url: 'https://github.com/react-boilerplate/react-boilerplate',
      name: 'react-boilerplate',
      open_issues_count: 20,
      full_name: 'react-boilerplate/react-boilerplate',
    }];
    const renderedComponent = shallow(
      <StoriesList
        stories={stories}
        error={false}
      />
    );

    expect(renderedComponent.contains(<List items={stories} component={StoryListItem} />)).toEqual(true);
  });

  it('should not render anything if nothing interesting is provided', () => {
    const renderedComponent = shallow(
      <StoriesList
        stories={false}
        error={false}
        loading={false}
      />
    );

    expect(renderedComponent.html()).toEqual(null);
  });
});
