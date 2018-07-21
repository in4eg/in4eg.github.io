var angle, canvas, ctx, getRandomColor, height, math, setCanvasSize, width, x, y;

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

ctx.translate(0, height / 2);

ctx.scale(1, -1);

angle = 0;

while (angle < Math.PI * 2) {
  x = angle * 200;
  y = Math.sin(angle) * 200;
  ctx.fillRect(x, y, 5, 5);
  angle += .01;
}

window.addEventListener('resize', function() {
  setCanvasSize();
});
