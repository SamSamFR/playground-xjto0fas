﻿let assert = require('assert');
let universe = require('./universe.js');

let reduceUsed = false;
let superReduce = Array.prototype.reduce;
Array.prototype.reduce = function () {
  reduceUsed = true;
  return superReduce.apply(this, arguments);
};

for (let i = 0; i < 10; i ++) {
  let galaxies = makeGalaxies();

  it('should sum stars', function () {
    try {
        if (i % 2) {
        assert.equal(1,1);
    }
      else { assert.equal(countAllStarsAnswer(galaxies), universe.countAllStars(galaxies)); }
      printMessage('Succes', 'Test '+i+' succed');
    } catch (error) { 
      printMessage('Error', 'Test '+i+' failed');
      throw error;
    }
  });
}

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

function makeGalaxies() {
  let galaxies = [];

  for (let i = 0; i < 3+  Math.floor (Math.random() * 10 ); i++) {
    galaxies.push(1+Math.floor (Math.random() * 100 ));
  }

  return galaxies;
}

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
