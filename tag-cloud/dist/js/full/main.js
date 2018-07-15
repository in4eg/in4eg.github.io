var canvas, centerX, centerY, ctx, drawCircle, getRandomColor, height, math, radius, setCanvasSize, tags, width, writeText;

(function() {
  var requestAnimationFrame;
  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

math = {
  random: function(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }
};

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

tags = {
  'ruby': '#',
  'html': '#',
  'javascript': '#',
  'angular': '#',
  'requestAnimationFrame': '#',
  'framework': '#',
  'summary': '#',
  'figcaption': '#',
  'time': '#',
  'dialog': '#',
  'tag': '#',
  'other': '#',
  'canvas': '#',
  'getContext': '#',
  'radius': '#',
  'false': '#',
  'floor': '#',
  'random': '#',
  'height': '#',
  'getRandomColor': '#',
  'getElementById': '#',
  'div': '#',
  'math': '#',
  'true': '#',
  'typescript': '#',
  'coffeescript': '#',
  'vue': '#'
};

radius = canvas.width / 15;

centerX = canvas.width / 2;

centerY = canvas.height / 2;

drawCircle = function() {
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
  ctx.fillStyle = '#fff';
  ctx.fill();
};

drawCircle();

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

writeText = function() {
  var finalX, finalY, i, link, n, startX, startY, tag, tagWidth, totalHeight, totalWidth, word;
  startX = centerX - centerX / 4;
  startY = centerY - centerY / 2;
  finalX = startX + radius * 2;
  finalY = startY + radius * 2;
  totalWidth = startX;
  totalHeight = startY;
  i = 0;
  for (tag in tags) {
    link = tags[tag];
    i += 20;
    n = 0;
    ctx.font = math.random(10, 30) + 'px Arial';
    ctx.fillStyle = getRandomColor();
    word = ctx.measureText(tag);
    tagWidth = word.width;
    ctx.fillText(tag, totalWidth + i, totalHeight);
    totalWidth += tagWidth;
    if (totalWidth + tagWidth >= finalX) {
      n += 30;
      totalHeight += n;
      totalWidth = startX - i;
      console.log(totalHeight);
      console.log(finalY);
      if (totalHeight >= finalY) {
        console.log(tag);
      }
    }
  }
};

writeText();

window.addEventListener('resize', function() {
  setCanvasSize();
  drawCircle();
});
