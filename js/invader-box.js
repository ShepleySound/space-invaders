'use strict';
class InvaderBox {
  constructor() {
    this.element = InvaderBox.create();
    this.rowCount = 4;
    this.columnCount = 6;
    this.horizontalSteps = 2;
    this.verticalSteps = 0;
    this.stepDirection = constants.RIGHT;
    InvaderBox.instances.push(this)
  }

  layoutInvaders() {
    this.element.style.left = `${gameState.invaderStepSize * 2}px`
    for (let i = 0; i < Invader.instances.length; i++) {
      const invader = Invader.instances[i];
      invader.element.style.top = `${52 * invader.position[0]}px`;
      invader.element.style.left = `${68 * invader.position[1]}px`;
    }
  }

  stepInvaders() {
    const gameScreenBound = gameScreen.element.getBoundingClientRect();
    const boxBound = this.element.getBoundingClientRect();
    if (((boxBound.left - gameState.invaderStepSize) - (gameScreenBound.left)) <= 0) {
      this.stepDirection = constants.RIGHT;
      this.verticalSteps++;
    }
    if ((gameScreenBound.right) - (boxBound.right + gameState.invaderStepSize) <= 0) {
      this.stepDirection = constants.LEFT;
      this.verticalSteps++;
    }
    if (this.stepDirection === constants.RIGHT) {
      this.horizontalSteps++;
    }
    if (this.stepDirection === constants.LEFT) {
      this.horizontalSteps--;
    }
  
    this.element.style.left = `${this.horizontalSteps * gameState.invaderStepSize}px`
    this.element.style.top = `${52 + this.verticalSteps * (gameState.invaderStepSize * 2)}px`
    // console.log(this.horizontalSteps)
  }

  removeInvaderBox() {
    for (let i = 0; i < InvaderBox.instances.length; i++) {
      const checkBox = InvaderBox.instances[i];
      if (this.element === checkBox.element) {
        this.element.remove();
        InvaderBox.instances.splice(i, 1);
      }
    }
  }
  
  static create() {
    const box = document.createElement('div');
    box.classList.add('invader-box');
    box.style.width = '384px';
    box.style.height = '188px';
    box.style.position = 'absolute';

    gameScreen.element.append(box);
    return box;
  }

  static instances = [];
}
