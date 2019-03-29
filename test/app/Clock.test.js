import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Clock from '../../src/app/Clock.js';

Enzyme.configure({ adapter: new Adapter() });

test("renders", () => {
  var component = Enzyme.render(<Clock />);
});
