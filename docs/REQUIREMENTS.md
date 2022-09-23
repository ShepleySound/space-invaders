# Vision

The vision of this product is to create a semi-faithful clone of the beloved game _Space Invaders_.

## Scope

### FEATURES

- The player will be able to move a ship across the bottom of the page and shoot at enemies that move towards them.
- The player will be able to track their score across a list of hi-scores.
- The player will be able to view a page that displays the information for each of the members of the team.
- Hi-scores will be tracked across browser refresh/page move.

### LIMITS

- Our software will not run outside of a browser or without a keyboard input.
- The game will not have graphics settings.

## Minimum Viable Product 

- Create a dedicated game screen within the browser page.
- Draw the player's ship to the screen. Allow the player to move left and right and fire the ship's weapon.
- Create enemies as instances of a constructor.
- Draw enemies to the screen and move them across the screen/down towards the player.
- Track the locations of the player, enemies, and bullets within the game screen to calculate collision.
- Give the player a way to earn points.

## Stretch Goals

- Have a separate history page, that outlines a short history of _Space Invaders_ (or other arcade games)
- Add difficulty levels (Increasing speed, enemy types, etc.)
- SOUND
- Color themes

## Functional Requirements

- The player will start on a home screen.
- The player will be able to choose to play, view hi-scores, or navigate to an "About Us" page.
- While playing, the player will be able to move the ship horizontally and shoot bullets towards the enemies.
- While playing, the player will be able to watch their score update.

## Data Flow

The bulk of the action will happen inside of a "main loop", which is ran with help from the built-in Window.requestAnimationFrame() function. This loop will happen once every frame (At a typical target rate of 60FPS), and will call other functions that handle drawing objects to the screen and checking for collisions.
