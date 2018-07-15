var canvas, ctx, setCanvasSize;

(function() {
  var requestAnimationFrame;
  requestAnimationFrame = void 0;
  requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame;
  window.requestAnimationFrame = requestAnimationFrame;
})();

canvas = document.getElementById('canvas');

ctx = canvas.getContext('2d');

(setCanvasSize = function() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
})();

window.addEventListener('resize', function() {
  setCanvasSize();
});
