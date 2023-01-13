
export default class RandomUtil {
  // TODO WESD seed the random, perhaps http://davidbau.com/archives/2010/01/30/random_seeds_coded_hints_and_quintillions.html
  static randomInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static randomFromItems(items) {
    var idx = RandomUtil.randomInteger(0, items.length - 1);
    return items[idx];
  }
}