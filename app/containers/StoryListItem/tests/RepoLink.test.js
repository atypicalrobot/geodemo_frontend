import React from 'react';
import { shallow, render } from 'enzyme';

import StoryLink from '../StoryLink';

describe('<StoryLink />', () => {
  it('should render an <a> tag', () => {
    const renderedComponent = render(<StoryLink />);
    expect(renderedComponent.find('a').length).toEqual(1);
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<StoryLink />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<StoryLink id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<StoryLink attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
