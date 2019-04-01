import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter as Router } from "react-router-dom";
import Landing from './Landing.js';

Enzyme.configure({ adapter: new Adapter() });

test("renders", () => {
  var component = Enzyme.render(
    <Router>
      <Landing/>
    </Router>
  );
});
