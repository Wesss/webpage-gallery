import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button.js';

Enzyme.configure({ adapter: new Adapter() });

test("renders", () => {
  var component = Enzyme.render(<Button>Test</Button>);
});
