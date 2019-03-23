import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, render } from 'enzyme';
import Headline from '../../src/app/Headline.js';

test("renders", () => {
  var component = render(<Headline headline="Testing"/>);
});
