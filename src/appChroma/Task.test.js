import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Task from './Task.js';

Enzyme.configure({ adapter: new Adapter() });

test("renders", () => {
  Enzyme.render(
    <Task>
      Do the thing.
    </Task>
  );
});
