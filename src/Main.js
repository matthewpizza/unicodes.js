import Convert from './Convert.js';
import Walker  from './Walker.js';
import Fraktur from './fonts/Fraktur.js';

// Make text Fraktur.
Walker(document.body, function (textNode) {
  Convert(textNode, Fraktur)
});
