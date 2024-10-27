/******/ (() => { // webpackBootstrap
/******/ 	"use strict";

console.log('Текст в консоль');
var decorations = document.querySelectorAll('.decorations img');
decorations.forEach(function (decoration) {
  decoration.dataset.offsetMultiplier = Math.random() * 0.4 + 0.1; // от 0.1 до 0.5
});
document.addEventListener('mousemove', function (e) {
  var mouseX = e.clientX,
    mouseY = e.clientY;
  decorations.forEach(function (decoration) {
    var _decoration$getBoundi = decoration.getBoundingClientRect(),
      left = _decoration$getBoundi.left,
      top = _decoration$getBoundi.top,
      width = _decoration$getBoundi.width,
      height = _decoration$getBoundi.height;
    var offsetMultiplier = parseFloat(decoration.dataset.offsetMultiplier);
    var offsetX = (mouseX - (left + width / 2)) / window.innerWidth * 20 * offsetMultiplier;
    var offsetY = (mouseY - (top + height / 2)) / window.innerHeight * 20 * offsetMultiplier;
    decoration.style.transform = 'translate(' + offsetX + 'px, ' + offsetY + 'px)';
  });
});
/******/ })()
;