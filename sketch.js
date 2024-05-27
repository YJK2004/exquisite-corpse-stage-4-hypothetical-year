let gameState = "start";
let images = [];
let flowerImages = [];
let numberOfImages = 26;
let numberOfFlowerImages = 12;
let imageWidth, imageHeight;
let currentImageIndex = 0; 
let flowerData;

function preload() {
  flowerData = loadTable('flowers.csv', 'csv', 'header');
  for (let i = 1; i <= numberOfImages; i++) {
    images.push(loadImage('images/h' + i + '.jpg'));
  }
  for (let i = 1; i <= numberOfFlowerImages; i++) {
    flowerImages.push(loadImage('images/f' + i + '.png'));
  }
}

function setup() {
  
  createCanvas(windowWidth, windowHeight);
  imageWidth = images[0].width;
  imageHeight = images[0].height;
  textSize(20);
  textAlign(CENTER, CENTER);
}

function draw() {
  background(0);
  fill(255);
  
  switch(gameState) {
    case "start":
      drawStartScreen();
      break;
    case "forest":
      drawForestScene();
      break;
    case "meadow":
      drawMeadowScene();
      break;
    case "garden":
      drawGardenScene();
      break;
    case "forestPath":
      drawForestPath();
      break;
    case "meadowPath":
      drawMeadowPath();
      break;
    case "gardenPath":
      drawGardenPath();
      break;
    case "end":
      drawEndScreen();
      break;
  }
}

function drawStartScreen() {
  text("Welcome to the Flower Adventure!", width / 2, height / 3);
  text("Press 'a' to start in the Forest", width / 2, height / 3 + 40);
  text("Press 'b' to start in the Meadow", width / 2, height / 3 + 80);
  text("Press 'c' to start in the Garden", width / 2, height / 3 + 120);
}

function drawForestScene() {
  image(images[0], width / 2 - imageWidth / 2, height / 2 - imageHeight / 2);
  image(flowerImages[9], width/2, height/2);
  text("You enter a dense forest, you found sunflowers!.", width / 2, height / 3);
  text("Press 'a' to pick some sunflowers", width / 2, height / 3 + 40);
  text("Press 'b' to search for other flowers", width / 2, height / 3 + 80);
} 

function drawMeadowScene() {
  image(images[1], width / 2 - imageWidth / 2, height / 2 - imageHeight / 2);
  image(flowerImages[3], width/2, height/2);
  image(flowerImages[4], width/3, height/2);
  text("You arrive at a sunny meadow. WOW you just found 'White Stock' and 'Oragne Ranunculus'", width / 2, height / 3);
  text("Press 'a' to pick up the Orange Ranunculus", width / 2, height / 3 + 40);
  text("Press 'b' to pick up the White Stock", width / 2, height / 3 + 80);
}

function drawGardenScene() {
  image(images[17], width / 2 - imageWidth / 2, height / 2 - imageHeight / 2);
  text("You find yourself in a beautiful garden. Oh NO! no flowers in garden??", width / 2, height / 3);
  text("Press 'a' to search Forest", width / 2, height / 3 + 40);
  text("Press 'b' to visit Meadow", width / 2, height / 3 + 80);
}

function drawForestPath() {
  image(images[21], width / 2 - imageWidth / 2, height / 2 - imageHeight / 2);
  text("Now you found the place where everything is dead.", width / 2, height / 3);
  text("Press 'a' for more flower adventure", width / 2, height / 3 + 40);
  text("Press 'b' to leave this adventure", width / 2, height / 3 + 80);
}

function drawMeadowPath() {
  image(images[4], width / 2 - imageWidth / 2, height / 2 - imageHeight / 2);
  text("You already found two different types of flowers.", width / 2, height / 3);
  text("Press 'a' to take a photo and leave", width / 2, height / 3 + 40);
  text("Press 'b' to just leave this adventure", width / 2, height / 3 + 80);
}

function drawGardenPath() {
  image(images[9], width / 2 - imageWidth / 2, height / 2 - imageHeight / 2);
  text("You find the place where everything is snow. What would you say?", width / 2, height / 3);
  text("Press a: It's weird, why is it snowing here?", width / 2, height / 3 + 40);
  text("Press b: HEHEHE I love snow!!", width / 2, height / 3 + 80);
}

function drawEndScreen() {
  text("Congratulations on your Flower Adventure!", width / 2, height / 3);
  text("Press '1' to restart the adventure", width / 2, height / 3 + 40);
}

function keyPressed() {
  if (gameState === "start") {
    if (key === 'a') {
      gameState = "forest";
    } else if (key === 'b') {
      gameState = "meadow";
    } else if (key === 'c') {
      gameState = "garden";
    }
  } else if (gameState === "forest") {
    if (key === 'a') {
      gameState = "forestPath";
    } else if (key === 'b') {
      gameState = "forestPath"; // Change this to a different path if needed
    }
  } else if (gameState === "meadow") {
    if (key === 'a') {
      gameState = "meadowPath";
    } else if (key === 'b') {
      gameState = "meadowPath"; // Change this to a different path if needed
    }
  } else if (gameState === "garden") {
    if (key === 'a') {
      gameState = "gardenPath";
    } else if (key === 'b') {
      gameState = "gardenPath"; // Change this to a different path if needed
    }
  } else if (gameState === "forestPath" || gameState === "meadowPath" || gameState === "gardenPath") {
    if (key === 'a' || key === 'b') {
      gameState = "end";
    }
  } else if (gameState === "end" && key === '1') {
    gameState = "start";
  }
}
