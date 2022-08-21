'use strict';
class PlayerShip {
  constructor() {
    this.element = PlayerShip.create();
    this.collider = new Collider(this.element);
    this.sourceImg = document.getElementById('playerSource');
    this.ctx = this.element.getContext('2d');
  }

  move(direction) {
    const velocity = 300; // pixels / second
    const playerRect = this.element.getBoundingClientRect();
    const gameScreenCollider = gameScreen.element.getBoundingClientRect();

    let distance;
    let seconds;
    if (direction === 'left' && playerRect.left > gameScreenCollider.left) {
      distance = playerRect.left - gameScreenCollider.left;
      seconds = distance / velocity;

      this.position = 0;

    } else if (direction === 'right' && playerRect.right < gameScreenCollider.right){
      distance = gameScreenCollider.right - playerRect.right;
      seconds = distance / velocity;


      this.position = gameScreenCollider.width - playerRect.width;

    } else {
      console.log('Boundary Reached');
    }
    // Use CSS transitions to move the ship. May update this to use a similar logic to the bullet animations.
    this.element.style.transition = `transform ${seconds}s linear`;
    this.element.style.transform = (`translateX(${this.position}px)`);
  }

  updateCanvas() {
    this.ctx.clearRect(0, 0, 44, 40);
    this.ctx.drawImage(this.sourceImg, 0, 0, 44, 40, 0, 0, 44, 40);
  }

  static create() {
    const canvas = document.createElement('canvas');
    canvas.width = 44;
    canvas.height = 40;
    canvas.classList.add('player');

    gameScreen.element.append(canvas);
    return canvas;
  }

}
