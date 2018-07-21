var canvas, ctx, getRandomColor, height, i, math, setCanvasSize, width;

getRandomColor = function() {
  var color, i, letters;
  letters = '0123456789ABCDEF';
  color = '#';
  i = 0;
  while (i < 6) {
    color += letters[Math.floor(Math.random() * 16)];
    i++;
  }
  return color;
};

math = {
  random: function(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
};

(function() {
  var requestAnimationFrame;
  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

canvas = document.getElementById('canvas');

width = 0;

height = 0;

(setCanvasSize = function() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
})();

ctx = canvas.getContext('2d');

i = 0;

while (i <= 100) {
  ctx.beginPath();
  ctx.moveTo(Math.random() * width, Math.random() * height);
  ctx.lineTo(Math.random() * width, Math.random() * height);
  ctx.stroke();
  i++;
}

window.addEventListener('resize', function() {
  setCanvasSize();
});
