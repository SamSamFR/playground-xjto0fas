﻿let assert = require('assert');
let universe = require('./universe.js');

let reduceUsed = false;
let superReduce = Array.prototype.reduce;
Array.prototype.reduce = function () {
  reduceUsed = true;
  return superReduce.apply(this, arguments);
};


it('should sum stars (2)', function () {
  try {
    let galaxies;
    galaxies = [1, 2, 3]; assert.equal(countAllStarsAnswer(galaxies), universe.countAllStars(galaxies));
    galaxies = [20, 20, 2]; assert.equal(countAllStarsAnswer(galaxies), universe.countAllStars(galaxies));
    galaxies = [100, 30, 12, 15]; assert.equal(countAllStarsAnswer(galaxies), universe.countAllStars(galaxies));
  } catch (error) { 
    printMessage('Hint 💡', 'Did you properly accumulate all stars into \'totalStars\'? 🤔');
    throw error;
  }
});

it('should sum stars', function () {
  try {
    let galaxies;
    galaxies = [1, 2, 3]; assert.equal(countAllStarsAnswer(galaxies), universe.countAllStars(galaxies));
    galaxies = [20, 20, 2]; assert.equal(countAllStarsAnswer(galaxies), universe.countAllStars(galaxies));
    galaxies = [10, 3, 2, 1]; assert.equal(countAllStarsAnswer(galaxies), universe.countAllStars(galaxies));

    if (reduceUsed) {
      printMessage('My personal Yoda, you are. 🙏', '* ● ¸ .　¸. :° ☾ ° 　¸. ● ¸ .　　¸.　:. • ');
      printMessage('My personal Yoda, you are. 🙏', '           　★ °  ☆ ¸. ¸ 　★　 :.　 .   ');
      printMessage('My personal Yoda, you are. 🙏', '__.-._     ° . .　　　　.　☾ ° 　. *   ¸ .');
      printMessage('My personal Yoda, you are. 🙏', '\'-._\\7\'      .　　° ☾  ° 　¸.☆  ● .　　　');
      printMessage('My personal Yoda, you are. 🙏', ' /\'.-c    　   * ●  ¸.　　°     ° 　¸.    ');
      printMessage('My personal Yoda, you are. 🙏', ' |  /T      　　°     ° 　¸.     ¸ .　　  ');
      printMessage('My personal Yoda, you are. 🙏', '_)_/LI');
    } else {
      printMessage('Hint 💡', 'Do you know the reduce function in JavaScript? 🤔');
    }
  } catch (error) {
    printMessage('Hint 💡', 'Did you properly accumulate all stars into \'totalStars\'? 🤔');
    throw error;
  }
});

function countAllStarsAnswer(galaxies){
  let totalStars = 0;
  galaxies.forEach(function(stars) {
    totalStars += stars; 
  }, this);
  return totalStars;
}

function printMessage(channel, message) {
  console.log('\nTECHIO> message --channel "' + channel + '" "' + message + '"');
}
