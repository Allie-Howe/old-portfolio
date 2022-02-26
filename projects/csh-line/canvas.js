/**
 * User: chris
 * Date: 02/10/12
 * Time: 9:53 AM
 */
// todo: tool switching, path recording

var ctx = document.getElementById('canvas').getContext('2d'),
  Mouse = window.Mouse,
  cw = window.cw,
  ch = window.ch,
  cMin = window.cMin,
  cMax = window.cMax,
  time = 0;

function imageSmoothing(a) {
  ctx.imageSmoothingEnabled = a;
  ctx.mozImageSmoothingEnabled = a;
  ctx.webkitImageSmoothingEnabled = a;
}

window.requestAnimFrame = (function () {
  return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function (callback, element) {
      window.setTimeout(callback, 1000 / 60);
    };
})();

function timer() {
  time += 1;
}

function hsla(h, s, l, a) {
  var hue = h === undefined ? 1 : h,
    sat = s === undefined ? 1 : s,
    light = l === undefined ? 1 : l,
    alpha = a === undefined ? 1 : a;
  return `hsla(${hue}, ${sat}%, ${light}%, ${alpha})`;
}

function hypotenuse(a, b) {
  return Math.sqrt((a * a) + (b * b || a * a)) / 2;
};

function clearCanvas(a) {
  ctx.fillStyle = hsla(0, 0, 0, a);
  ctx.fillRect(0, 0, cw, ch);
}

var aRandomNumber = Math.random() * 360 + 1;

function decay(hor,ver, spread, rotate){
    var h = hor,
    v = ver,
    s = spread||2;
  ctx.save();
  ctx.translate(cw/2 + h,ch/2 + v);
  ctx.rotate(rotate||0);
  ctx.drawImage(canvas, -s/2 - cw/2, -s/2 - ch/2, cw + s, ch + s);
  ctx.restore();
}
