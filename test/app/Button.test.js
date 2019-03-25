import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });
import { shallow, render } from 'enzyme';
import Button from '../../src/app/Button.js';

test("renders", () => {
  var component = render(<Button>Test</Button>);
});
