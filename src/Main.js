var Convert = require('./Convert');
var Walker  = require('./Walker');
var Fraktur = require('../fonts/Fraktur');

// Make text Fraktur.
Walker(document.body, function (textNode) {
  Convert(textNode, Fraktur)
});
