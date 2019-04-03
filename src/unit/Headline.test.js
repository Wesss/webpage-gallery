import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Headline from './Headline.js';

Enzyme.configure({ adapter: new Adapter() });

test("renders", () => {
  Enzyme.render(<Headline level={1}>Test</Headline>);
});

test("renders the apropriate h tag", () => {
  var component = Enzyme.shallow(
    <Headline level={1}>Test</Headline>
  );

  expect(component.find("h1").length).toBe(1);
});

test("attaches the inverted class if inverted", () => {
  var component = Enzyme.shallow(
    <Headline level={1} inverted={true}>Test</Headline>
  );

  expect(component.find(".Headline--inverted").length).toBe(1);
});
