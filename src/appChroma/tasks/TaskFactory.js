import TaskSequence, {TaskSequenceModel} from "../TaskSequence.js";

export default class TaskFactory {

  /*
    returns an array of all valid task sequence names.
  */
  static getTasks() {
    return Object.keys(new TaskFactory());
  }

  /*
    returns a TaskSequenceModel matching the given name.
  */
  static getModel(task) {
    var validTasks = TaskFactory.getTasks();
    if (!validTasks.includes(task)) {
      throw new Exception("Task Squence is not present on factory: " + task);
    }

    var factory = new TaskFactory();
    var generator = factory[task]();
    return new TaskSequenceModel(generator);
  }

  testStub = function*() {
    yield 'do one thing';
    yield 'do another thing';
    return 'wake up!';
  };

  testStub2 = function*() {
    yield 'do 2 thing';
    yield 'do another thing 2';
    return 'wake up!';
  };
}
