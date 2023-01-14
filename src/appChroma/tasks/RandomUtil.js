
export default class RandomUtil {

  static FromDateSeed() {
    var dateSeed = new Date();
    dateSeed.setHours(0, 0, 0, 0);
    var seed = dateSeed.toLocaleString("en-US", {timeZone: "America/Los_Angeles", year:"numeric", month:"2-digit", day:"2-digit"});
    return new RandomUtil(seed);
  }

  constructor(seed) {
    var seedrandom = require('seedrandom');
    if (seed === undefined) {
      this.random = seedrandom();
    } else {
      this.random = seedrandom(seed);
    }
  }
 
  pickInt(min, max) {
    var r = this.random();
    return Math.floor(r * (max - min + 1)) + min;
  }

  pickItem(items) {
    var idx = this.pickInt(0, items.length - 1);
    return items[idx];
  }
}