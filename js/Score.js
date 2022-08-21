'use strict';

class Score {
  constructor(initials, score) {
    this.initials = initials;
    this.score = score;
    if (Score.instances.length < 10) {
      Score.instances.push(this);
    } else if (score > Score.instances.at(-1).score) {
      Score.instances.pop();
      Score.instances.push(this);
    }
    Score.sortScores();
  }

  static instances = [];

  static loadScores() {
    let parsedStorage = JSON.parse(localStorage.getItem('scores')) || [];
    if (!parsedStorage.length){
      defaultScores();
      Score.saveScores();
      parsedStorage = JSON.parse(localStorage.getItem('scores'));
    }
    Score.instances = [];
    for (let i = 0; i < parsedStorage.length; i++) {
      new Score(parsedStorage[i].initials, parsedStorage[i].score);
    }
  };

  static saveScores() {
    localStorage.setItem('scores', JSON.stringify(Score.instances));
  }

  static clearScores() {
    Score.instances = [];
    Score.saveScores();
  }

  static sortScores() {
    Score.instances.sort((a, b) => {
      if (a.score > b.score) {
        return -1;
      }
      if (a.score < b.score) {
        return 1;
      }
      return 0;
    });
  }
}

function defaultScores() {
  new Score('AXC', 1150);
  new Score('TOO', 1120);
  new Score('RCS', 1100);
  new Score('DJS', 1060);
  new Score('ARC', 890);
  new Score('COM', 880);
  new Score('PRO', 600);
  new Score('URL', 590);
  new Score('UFO', 550);
  new Score('AXC', 100);
}

function incrementScore(invader) {
  gameState.score += invader.pointsValue;
  updateBannerScores();
}

function updateBannerScores() {
  if(gameState.score >= Score.instances[0].score){
    hiScoreBanner.innerText = `${gameState.score}`.padStart(6, '0');
  } else {
    hiScoreBanner.innerText = `${Score.instances[0].score}`.padStart(6, '0');
  }
  currentScoreBanner.innerText = `${gameState.score}`.padStart(6, '0');
}
