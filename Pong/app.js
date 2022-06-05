const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1500;
canvas.height = 720;
// --------------------------------------------------------------------

let RIScore = new Audio();
let AIScore = new Audio();
let hit = new Audio();
let wall = new Audio();
RIScore.src = './sounds/RIScore.mp3';
AIScore.src = './sounds/AIScore.mp3';
hit.src = './sounds/hit.mp3';
wall.src = './sounds/wall.mp3';

// The RI Player Paddle

const playerPaddleRI = {
  xP: 0,
  yP: canvas.height / 2 - 100 / 2,
  height: 100,
  width: 10,
  color: '#222',
  score: 0,
};
const playerPaddleAI = {
  xP: canvas.width - 10,
  yP: canvas.height / 2 - 100 / 2,
  height: 100,
  width: 10,
  color: 'orange',
  score: 0,
};

//Creating ball
const ball = {
  xP: canvas.width / 2,
  yP: canvas.height / 2,
  radius: 10,
  speed: 7,
  xV: 5,
  yV: 5,
  color: 'white',
};

//Create the net

const net = {
  xP: canvas.width / 2 - 1,
  yP: 0,
  width: 2,
  height: 10,
  color: 'white',
};

//Drawing the canvas

function drawingRect(xP, yP, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(xP, yP, width, height);
}

//Drawing a circle
function drawCircle(xP, yP, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(xP, yP, radius, 0, Math.PI * 2);
  ctx.fill();
}

//Create Text
function drawText(content, xP, yP, color) {
  ctx.fillStyle = color;
  ctx.font = '35px sans-serif';
  ctx.fillText(content, xP, yP);
}

//Dranwing the net line
function drawNetLine() {
  for (let i = 0; i < canvas.height; i += 15) {
    console.log(net);
    drawingRect(net.xP, net.yP + i, net.width, net.height, net.color);
  }
}
