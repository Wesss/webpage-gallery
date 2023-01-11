import React from "react";
import TaskSequence, {TaskSequenceModel} from "../TaskSequence.js";
import GenUtil from "./GenUtil.js";

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
    yield* TaskParts.danbooruPic();
    return 'Wake up and continue your day~.';
  };
}

class TriggerTasks {
  randomQuestion = function*() {
    return 'random question.';
  };

  danbooruPic = function*() {
    yield* TaskParts.danbooruPic();
    return 'Wake up and continue your day~.';
  };

  testingArea = function*() {
    yield 'This is a place for me to test out new features~ :3';
    return 'This is a place for me to test out new features~ :3 This is a place for me to test out new features~ :3 This is a place for me to test out new features~ :3 This is a place for me to test out new features~ :3 This is a place for me to test out new features~ :3 This is a place for me to test out new features~ :3 This is a place for me to test out new features~ :3 ';
  };
}

class TaskParts {
  static danbooruPic = function*() {
    var linkGen = new DanbooruLink();
    linkGen.animated = false;
    linkGen.ageFilter1 = ">1day";
    linkGen.ageFilter2 = "<=2day";
    yield <span>Go to {GenUtil.createLink(linkGen.getUrl(), 'this link')}.</span>;
    
    yield GenUtil.createList(
      'From the first page of results, choose an image that:',
      ['You relate to the most right now.']
    );
    yield 'Send me the image, in full resolution.';
    yield 'Tell me how you feel right now and why you relate to the image.';
    yield 'Tell me how you feel towards me right now.';
  };
}

class DanbooruLink {
  // bool? tags
  animated = false;
  // string? age filter. ex ">=2day", "<=1 day"
  ageFilter1 = null;
  ageFilter2 = null;
  // sort order
  order = "score";

  getUrl() {
    var tags = [];
    if (this.animated === true) {
      tags.push("animated");
    }
    else if (this.animated === false) {
      tags.push("-animated");
    }
    
    if (typeof(this.ageFilter1) === "string") {
      tags.push("age:" + this.ageFilter1);
    }
    if (typeof(this.ageFilter2) === "string") {
      tags.push("age:" + this.ageFilter2);
    }
    
    if (typeof(this.order) === "string") {
      tags.push("order:" + this.order);
    }

    var res = "https://danbooru.donmai.us/posts";
    if (tags.length > 0) {
      res += "?tags=" + encodeURIComponent(tags.join(' '));
    }
    console.log(res);
    return res;
  }
}