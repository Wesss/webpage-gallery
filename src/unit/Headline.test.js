import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Headline from './Headline.js';

Enzyme.configure({ adapter: new Adapter() });

test("renders", () => {
  Enzyme.render(<Headline level={1}>Test</Headline>);
});
