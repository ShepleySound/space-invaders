# Space Invaders

## [Live Site](http://shepleysound.com/space-invaders/)

![hello](invader-gh-banner.png)

A web-based recreation of the 1978 Arcade Classic *Space Invaders*. Built using plain HTML, CSS, and JavaScript

## Overview

### **Author**: Robert Shepley

### **Version**: 1.0.0

## Architecture / Description

The game runs fully in the browser and uses localStorage to keep track of high scores, so there is no connection to an external back-end server or database.  
There are no 3rd party libraries or packages used. Features such as collision, animations, and user controls are implemented using built-in JavaScript methods and several Web API's. For example, animation and frame-by-frame logic checks are performed with help from [requestAnimationFrame](https://developer.mozilla.org/en-US/docs/Web/API/window/requestAnimationFrame), which allows us to easily tell the browser that we would like to perform actions before browser repaints. [Canvas Elements](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API) are heavily used to draw elements to the screen.

### Class/Domain Model

```mermaid
classDiagram
  class Score
  class Player
  class Invader
  class Bullet
  class Collider

  Invader : element
  Invader : Collider
  Invader : sourceImg
  Invader : pointsValue
  Invader : updateCanvas()
  Invader : nextSprite()
  Invader : removeInvader()
  Invader *-- Collider
  
  Bullet *-- Collider
  Bullet: element
  Bullet : Collider
  Bullet : animationStart
  Bullet : removeBullet()

  Player *-- Collider
  Player : element
  Player : Collider
  Player : sourceImg
  Player : move()
  Player : updateCanvas()

  Score : initials
  Score : score
  Score : loadScores)
  Score : saveScores()
  Score : clearScores()

  Collider : element
  Collider : deleteCollider()
  Collider : checkCollisions()

```

## Contributors

Thanks to the original team for assisting in crafting the original vision for this project!

### [Robert Shepley :wave:](https://github.com/ShepleySound)

### [Daniel Shiraishi](https://github.com/KaliFox20)

### [Timothee Odushina](https://github.com/timothee2022)

### [Alan Chelko](https://github.com/dtuskippy)
