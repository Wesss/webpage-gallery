import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { BrowserRouter } from "react-router-dom";
import Gallery from './Gallery.js';

Enzyme.configure({ adapter: new Adapter() });

test("renders", () => {
  Enzyme.render(
    <BrowserRouter>
      <Gallery/>
    </BrowserRouter>
  );
});
