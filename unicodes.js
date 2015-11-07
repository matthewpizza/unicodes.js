(function () {
  // <3 https://github.com/substack/fraktur/blob/master/data.json
  var FRAKTUR = {
    A: '𝔄', B: '𝔅', C: '𝕮', D: '𝔇', E: '𝔈', F: '𝔉', G: '𝔊', H: '𝕳', I: '𝕴', J: '𝔍', K: '𝔎', L: '𝔏', M: '𝔐', N: '𝔑', O: '𝔒', P: '𝔓', Q: '𝔔', R: '𝕽', S: '𝔖', T: '𝔗', U: '𝔘', V: '𝔙', W: '𝔚', X: '𝔛', Y: '𝔜', Z: '𝖅', a: '𝔞', b: '𝔟', c: '𝔠', d: '𝔡', e: '𝔢', f: '𝔣', g: '𝔤', h: '𝔥', i: '𝔦', j: '𝔧', k: '𝔨', l: '𝔩', m: '𝔪', n: '𝔫', o: '𝔬', p: '𝔭', q: '𝔮', r: '𝔯', s: '𝔰', t: '𝔱', u: '𝔲', v: '𝔳', w: '𝔴', x: '𝔵', y: '𝔶', z: '𝔷'
  };

  // <3 https://github.com/panicsteve/cloud-to-butt/blob/master/Source/content_script.js
  function walk(node) {
    var child, next;

    switch (node.nodeType) {
      case 1:  // Element
      case 9:  // Document
      case 11: // Document fragment
        child = node.firstChild;
        while (child) {
          next = child.nextSibling;
          walk(child);
          child = next;
        }
        break;

      case 3: // Text node
        convertToWeirdUnicode(node, FRAKTUR);
        break;
    }
  }

  function convertToWeirdUnicode(textNode, set) {
    var nodeValue = textNode.nodeValue;

    Object.keys(set).forEach(function (character) {
      nodeValue = nodeValue.replace(new RegExp(character, 'g'), set[character]);
    });

    textNode.nodeValue = nodeValue;
  }

  walk(document.body)

})();
