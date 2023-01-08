import TaskSequence, {TaskSequenceModel} from "../TaskSequence.js";

export default class TaskFactory {

  /*
    returns an dictionary<category, tasknames[]> of all valid task sequence names.
  */
  static getTasks() {
    var res = {};
    res.schedules = Object.keys(new ScheduleTasks());
    res.triggers = Object.keys(new TriggerTasks());
    return res;
  }

  /*
    returns a TaskSequenceModel matching the given name.
  */
  static getModel(task) {
    var dict = TaskFactory.getTasks();

    var factory = null;
    if (dict.schedules.includes(task)) {
      factory = new ScheduleTasks();
    } else if (dict.triggers.includes(task)) {
      factory = new TriggerTasks();
    } else {
      throw "Task Squence is not present: " + task;
    }

    var generator = factory[task]();
    return new TaskSequenceModel(generator);
  }
}

class ScheduleTasks {
  dailyWakeUp = function*() {
    yield 'do one thing';
    yield 'do another thing';
    return 'wake up!';
  };
}

class TriggerTasks {
  randomQuestion = function*() {
    return 'random question';
  };

  danbooruPic = function*() {
    return 'danbooru pic';
  };
}
