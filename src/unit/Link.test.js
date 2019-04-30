import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter, Route, Link as RouteLink } from "react-router-dom";
import Sinon from 'sinon';
import Link from './Link.js';

Enzyme.configure({ adapter: new Adapter() });

test("renders", () => {
  Enzyme.render(
    <BrowserRouter>
      <Link href="/">Test</Link>
    </BrowserRouter>
  );
});

test("renders an anchor if given an absolute url", () => {
  var component = Enzyme.shallow(
    <Link href="www.my-site.com">Test</Link>
  );

  expect(component.find("a").length).toBe(1);
  expect(component.find("a").props().href).toBe("www.my-site.com");
});

test("renders a span if given a realtive url to the currently active route", () => {
  var component = Enzyme.shallow(
    <Link href="/dashboard">Test</Link>
  );
  var matchJSX = component.find(Route).props().children({match: true});
  var matchComponent = Enzyme.shallow(<div>{matchJSX}</div>);
  expect(matchComponent.find("span").length).toBe(1);
});

test("renders a Router Link if given a relative url to a different route", () => {
  var component = Enzyme.shallow(
    <Link href="/dashboard">Test</Link>
  );
  var noMatchJSX = component.find(Route).props().children({match: false});
  var noMatchComponent = Enzyme.shallow(<div>{noMatchJSX}</div>);
  expect(noMatchComponent.find(RouteLink).length).toBe(1);
  expect(noMatchComponent.find(RouteLink).props().to).toBe("/dashboard");
});
