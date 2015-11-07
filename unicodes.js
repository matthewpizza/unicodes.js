(function () {
  // <3 https://github.com/substack/fraktur/blob/master/data.json
  var FRAKTUR = {
    A: '𝔄', B: '𝔅', C: '𝕮', D: '𝔇', E: '𝔈', F: '𝔉', G: '𝔊', H: '𝕳', I: '𝕴', J: '𝔍', K: '𝔎', L: '𝔏', M: '𝔐', N: '𝔑', O: '𝔒', P: '𝔓', Q: '𝔔', R: '𝕽', S: '𝔖', T: '𝔗', U: '𝔘', V: '𝔙', W: '𝔚', X: '𝔛', Y: '𝔜', Z: '𝖅', a: '𝔞', b: '𝔟', c: '𝔠', d: '𝔡', e: '𝔢', f: '𝔣', g: '𝔤', h: '𝔥', i: '𝔦', j: '𝔧', k: '𝔨', l: '𝔩', m: '𝔪', n: '𝔫', o: '𝔬', p: '𝔭', q: '𝔮', r: '𝔯', s: '𝔰', t: '𝔱', u: '𝔲', v: '𝔳', w: '𝔴', x: '𝔵', y: '𝔶', z: '𝔷'
  };

  var FRAKTUR_BOLD = {
    A: '𝕬', B: '𝕭', C: '𝕮', D: '𝕯', E: '𝕰', F: '𝕱', G: '𝕲', H: '𝕳', I: '𝕴', J: '𝕵', K: '𝕶', L: '𝕷', M: '𝕸', N: '𝕹', O: '𝕺', P: '𝕻', Q: '𝕼', R: '𝕽', S: '𝕾', T: '𝕿', U: '𝖀', V: '𝖁', W: '𝖂', X: '𝖃', Y: '𝖄', Z: '𝖅', a: '𝖆', b: '𝖇', c: '𝖈', d: '𝖉', e: '𝖊', f: '𝖋', g: '𝖌', h: '𝖍', i: '𝖎', j: '𝖏', k: '𝖐', l: '𝖑', m: '𝖒', n: '𝖓', o: '𝖔', p: '𝖕', q: '𝖖', r: '𝖗', s: '𝖘', t: '𝖙', u: '𝖚', v: '𝖛', w: '𝖜', x: '𝖝', y: '𝖞', z: '𝖟'
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
