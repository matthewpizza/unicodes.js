(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
module.exports={
  "A": "𝔄",
  "B": "𝔅",
  "C": "𝕮",
  "D": "𝔇",
  "E": "𝔈",
  "F": "𝔉",
  "G": "𝔊",
  "H": "𝕳",
  "I": "𝕴",
  "J": "𝔍",
  "K": "𝔎",
  "L": "𝔏",
  "M": "𝔐",
  "N": "𝔑",
  "O": "𝔒",
  "P": "𝔓",
  "Q": "𝔔",
  "R": "𝕽",
  "S": "𝔖",
  "T": "𝔗",
  "U": "𝔘",
  "V": "𝔙",
  "W": "𝔚",
  "X": "𝔛",
  "Y": "𝔜",
  "Z": "𝖅",
  "a": "𝔞",
  "b": "𝔟",
  "c": "𝔠",
  "d": "𝔡",
  "e": "𝔢",
  "f": "𝔣",
  "g": "𝔤",
  "h": "𝔥",
  "i": "𝔦",
  "j": "𝔧",
  "k": "𝔨",
  "l": "𝔩",
  "m": "𝔪",
  "n": "𝔫",
  "o": "𝔬",
  "p": "𝔭",
  "q": "𝔮",
  "r": "𝔯",
  "s": "𝔰",
  "t": "𝔱",
  "u": "𝔲",
  "v": "𝔳",
  "w": "𝔴",
  "x": "𝔵",
  "y": "𝔶",
  "z": "𝔷"
}

},{}],2:[function(require,module,exports){
// Convert text to weird unicode font.
function Convert(textNode, fontSet) {
  var nodeValue = textNode.nodeValue;

  // Probably should batch replace characters instead
  // of looping through each.
  Object.keys(fontSet).forEach(function (character) {
    nodeValue = nodeValue.replace(new RegExp(character, 'g'), fontSet[character]);
  });

  textNode.nodeValue = nodeValue;
}

module.exports = Convert;

},{}],3:[function(require,module,exports){
var Convert = require('./Convert');
var Walker  = require('./Walker');
var Fraktur = require('../fonts/Fraktur');

// Make text Fraktur.
Walker(document.body, function (textNode) {
  Convert(textNode, Fraktur)
});

},{"../fonts/Fraktur":1,"./Convert":2,"./Walker":4}],4:[function(require,module,exports){
// Walk the DOM and find text nodes.
//
// Borrowed from https://github.com/panicsteve/cloud-to-butt/
function Walker(node, callback) {
  var child, next;

  switch (node.nodeType) {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while (child) {
        next = child.nextSibling;
        Walker(child, callback);
        child = next;
      }
      break;

    case 3: // Text node
      callback(node);
      break;
  }
}

module.exports = Walker;

},{}]},{},[3]);
