import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import TaskManager, {TaskManagerModel} from "./TaskManager.js";

Enzyme.configure({ adapter: new Adapter() });

test("renders", () => {
  var model = TaskManagerModel.GetModel("testStart");
  Enzyme.render(
    <TaskManager model={model}/>
  );
});
