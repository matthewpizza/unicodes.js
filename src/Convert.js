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
