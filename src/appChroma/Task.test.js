import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Task, { TaskModel } from './Task.js';

Enzyme.configure({ adapter: new Adapter() });

test("renders", () => {
  var model = new TaskModel("Do the task model");
  Enzyme.render(
    <Task model={model} />
  );
});
