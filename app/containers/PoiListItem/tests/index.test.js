/**
 * Test the poi list item
 */

import React from 'react';
import { shallow, render } from 'enzyme';
import { IntlProvider } from 'react-intl';

import ListItem from 'components/ListItem';
import { PoiListItem } from '../index';

const renderComponent = (props = {}) => render(
  <IntlProvider locale="en">
    <PoiListItem {...props} />
  </IntlProvider>
);

describe('<PoiListItem />', () => {
  let item;

  // Before each test reset the item data for safety
  beforeEach(() => {
    item = {
      owner: {
        login: 'mxstbr',
      },
      html_url: 'https://github.com/react-boilerplate/react-boilerplate',
      name: 'react-boilerplate',
      open_issues_count: 20,
      full_name: 'react-boilerplate/react-boilerplate',
    };
  });

  it('should render a ListItem', () => {
    const renderedComponent = shallow(
      <PoiListItem item={item} />
    );
    expect(renderedComponent.find(ListItem).length).toBe(1);
  });

  it('should not render the current genre', () => {
    const renderedComponent = renderComponent({
      item,
      currentGenre: item.owner.login,
    });
    expect(renderedComponent.text()).not.toContain(item.owner.login);
  });

  it('should render genres that are not the current one', () => {
    const renderedComponent = renderComponent({
      item,
      currentGenre: 'nikgraf',
    });
    expect(renderedComponent.text()).toContain(item.owner.login);
  });

  it('should render the poi name', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.text()).toContain(item.name);
  });

  it('should render the issue count', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.text()).toContain(item.open_issues_count);
  });

  it('should render the IssueIcon', () => {
    const renderedComponent = renderComponent({ item });
    expect(renderedComponent.find('svg').length).toBe(1);
  });
});
