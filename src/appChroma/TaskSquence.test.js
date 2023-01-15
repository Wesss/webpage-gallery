import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TaskSequence, {TaskSequenceModel} from "./TaskSequence.js";
import TaskFactory from './tasks/TaskFactory.js';

Enzyme.configure({ adapter: new Adapter() });

test("renders", () => {
  var model = TaskFactory.getModel("dailyTasks");
  Enzyme.render(
    <TaskSequence model={model}/>
  );
});
