import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Sinon from 'sinon';
import Button from './Button.js';

Enzyme.configure({ adapter: new Adapter() });

test("renders", () => {
  var component = Enzyme.render(<Button>Test</Button>);
});

test("triggers onClick when clicked", () => {
  var stub = Sinon.stub();
  var component = Enzyme.shallow(<Button onClick={stub}>Test</Button>);
  component.find("button").simulate('click');
  expect(stub.called).toBe(true);
});
