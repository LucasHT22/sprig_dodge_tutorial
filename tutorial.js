/*
@title: sprig_dodging
@author: sam liu and lucas

Instructions:

Welcome to Sprig!!!

Hit "run" to execute the code and
start the game (you can also press shift+enter).

To beat each level you'll have to edit the code.

The code for this game starts below this comment.

Made based on this workshop https://workshops.hackclub.com/sprig_dodge/

The goal is to dodge the fireballs.

Click the "open help" to discover your toolkit.

--------
Level 1
--------

create a square map the size you prefer and add the player in the middle of the map.

--------
Level 2
--------

Add controls to right, use "d" as input

--------
Level 3
--------

Complete the checkHit variables

--------
Level 4
--------

Add all functions in gameLoop

--------
END
--------

Make your own game! Try
 - adding two players
 - adding powerups
 - come up with your own mechanic!
*/

const player = "p";
const obstacle = "o";

setLegend(
  [obstacle, bitmap`
.......66.......
........6.......
.....66.6.6.....
....66.66.66....
....666666.6....
...6699999966...
...69999999966..
..669999999996..
..669933339996..
..699333333996..
..699333333996..
...69333333996..
...69333333996..
...6993333996...
....66999996....
.....666666.....`],
  [player, bitmap`
................
................
................
.....00000......
....0.....0.....
....0.0.0.0.....
....0.....0.....
....0.000.0.....
....0.....0.....
.....00000......
.......0........
.....00000......
.......0........
.......0........
......0.0.......
.....0...0......`]
)

// Map
setMap(map`.`)

// Create a variable that shows when the game is running
var gameRunning = true; 

// START - PLAYER MOVEMENT CONTROLS

onInput("a", () => {
  if (gameRunning) {
    getFirst(player).x -= 1;
  }
});

// END - PLAYER MOVEMENT CONTROLS

// Put obstacle in a random position
function spawnObstacle() {
  let x = Math.floor(Math.random() * /* put the number of tiles that make up your map width */);
  let y = 0; 
  addSprite(x, y, obstacle);
}

// Make obstacles move
function moveObstacles() {
  let obstacles = getAll(obstacle);

  for (let i = 0; i < obstacles.length; i++) {
    obstacles[i].y += 1;
  }
}

// Make obstacles disappear
function despawnObstacles() {
  let obstacles = getAll(obstacle);

  for (let i = 0; i < obstacles.length; i++) {
   if (obstacles[i].y == /* put the number of tiles that make up your map height */) {
     obstacles[i].remove();
   }
  }
}

// see if the player was hit
function checkHit() {
  let obstacles = /* complete here */;
  let p = /* complete here */;

  for (let i = 0; i < obstacles.length; i++) {
    if (obstacles[i].x == p.x && obstacles[i].y == p.y) {
      return true;
    }
  }

  return false;
}

var gameLoop = setInterval(() => {
  // Add all functions here

  if (checkHit()) {
    clearInterval(gameLoop);
    gameRunning = false;
    addText("Game Over!", {
      x: 5,
      y: 6,
      color: color`3`
    });
  }

}, 1000);
