import React from 'react';
import { shallow, render } from 'enzyme';

import PoiLink from '../PoiLink';

describe('<PoiLink />', () => {
  it('should render an <a> tag', () => {
    const renderedComponent = render(<PoiLink />);
    expect(renderedComponent.find('a').length).toEqual(1);
  });

  it('should have a className attribute', () => {
    const renderedComponent = shallow(<PoiLink />);
    expect(renderedComponent.prop('className')).toBeDefined();
  });

  it('should adopt a valid attribute', () => {
    const id = 'test';
    const renderedComponent = shallow(<PoiLink id={id} />);
    expect(renderedComponent.prop('id')).toEqual(id);
  });

  it('should not adopt an invalid attribute', () => {
    const renderedComponent = shallow(<PoiLink attribute={'test'} />);
    expect(renderedComponent.prop('attribute')).toBeUndefined();
  });
});
