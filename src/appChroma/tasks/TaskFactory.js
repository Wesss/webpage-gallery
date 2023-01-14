import React from "react";
import {TaskSequenceModel} from "../TaskSequence.js";
import GenUtil from "./GenUtil.js";
import RandomUtil from "./RandomUtil.js";

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

    var random = RandomUtil.FromDateSeed();
    var generator = factory[task](random);
    return new TaskSequenceModel(generator);
  }
}

class ScheduleTasks {
  dailyWakeUp = function*(random) {
    yield 'Tell me "I am doing my daily tasks now mommy".';
    var randomTasks = [
      TaskParts.danbooruPic(),
      TaskParts.hypnohubPic(),
      TaskParts.bunnyVideo(),
    ]
    yield* random.pickItem(randomTasks);

    yield 'Starting with right now, tell me how long you have free and how much privacy you have.';
    yield 'Next give your best guess on when you will have breaks/rests throughout the day.';
    yield 'Finally, tell me if you think you will have the energy to complete tasks at the end of the day.';

    return 'Wake up and continue your day~.';
  };
}

class TriggerTasks {
  // randomQuestion = function*() {
  //   return 'random question.';
  // };

  bunnyVideo = function*() {
    yield* TaskParts.danbooruPic();
    return 'Wake up and go back to discord.';
  };

  danbooruPic = function*() {
    yield* TaskParts.danbooruPic();
    return 'Wake up and go back to discord.';
  };

  hypnohubPic = function*() {
    yield* TaskParts.hypnohubPic();
    return 'Wake up and go back to discord.';
  };

  testingArea = function*() {
    yield 'This is a place for me to test out new features~ :3';
    return 'This is a place for me to test out new features~ :3 This is a place for me to test out new features~ :3 This is a place for me to test out new features~ :3 This is a place for me to test out new features~ :3 This is a place for me to test out new features~ :3 This is a place for me to test out new features~ :3 This is a place for me to test out new features~ :3 ';
  };
}

class TaskParts {
  static bunnyVideo = function*() {
    yield 'Tell me "I am watching the bunny video now".';
    yield <span>Watch {GenUtil.createLink('https://drive.google.com/file/d/1P5SS4cQyRKb9uVsQwrOExwEWzg85Y1jn/view?usp=share_link', 'this video')}.</span>;
    yield 'Tell me 10 sentences describing how you feel right now.';	
  }

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

  static hypnohubPic = function*() {
    var linkGen = new HypnoHubLink();
    linkGen.video = false;
    linkGen.text = false;
    yield <span>Go to {GenUtil.createLink(linkGen.getUrl(), 'this link')}.</span>;
    
    yield GenUtil.createList(
      'From the first page of results, choose an image that:',
      [
        'Features a hypnotized female.',
        'Looks the most attractive to you'
      ]
    );
    yield 'Send me the image, in full resolution.';
    yield 'Now, fantasize about being the girl in the image and come up with suggestions you would follow as them.';
    yield 'Set a timer for 2 minutes, and masturbate to your idea.';
    yield 'Tell me about the fatasy you have come up with, and tell me how truned on it makes you feel.';
    yield 'Tell me how you feel towards me right now.';
  };
}

class DanbooruLink {
  // bool? tags
  animated = null;
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
    return res;
  }
}

class HypnoHubLink {
  // bool? tags
  furry = false;
  animals_only = false;
  video = null;
  comic = null;
  text = null;

  getUrl() {
    var tags = [];
    if (this.furry === true) {
      tags.push("furry");
    }
    else if (this.furry === false) {
      tags.push("-furry");
    }
    if (this.animals_only === true) {
      tags.push("animals_only");
    }
    else if (this.animals_only === false) {
      tags.push("-animals_only");
    }
    if (this.video === true) {
      tags.push("video");
    }
    else if (this.video === false) {
      tags.push("-video");
    }
    if (this.comic === true) {
      tags.push("comic");
    }
    else if (this.comic === false) {
      tags.push("-comic");
    }
    if (this.text === true) {
      tags.push("text");
    }
    else if (this.text === false) {
      tags.push("-text");
    }
    
    var res = "https://hypnohub.net/index.php?page=post&s=list";
    if (tags.length > 0) {
      res += "&tags=" + encodeURIComponent(tags.join(' '));
    }
    return res;
  }
}