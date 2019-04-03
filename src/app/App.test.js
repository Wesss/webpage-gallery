import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import App from './App.js';

Enzyme.configure({ adapter: new Adapter() });

test("renders", () => {
  Enzyme.render(<App />);
});
