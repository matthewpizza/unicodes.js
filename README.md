# 𝔲𝔫𝔦𝔠𝔬𝔡𝔢𝔰.𝔧𝔰

Convert text to Fraktur bookmarklet style:

```
javascript:(function()%7B!function()%7B%22use%20strict%22%3Bfunction%20Walker(node%2Ccallback)%7Bvar%20child%2Cnext%3Bswitch(node.nodeType)%7Bcase%201%3Acase%209%3Acase%2011%3Afor(child%3Dnode.firstChild%3Bchild%3B)next%3Dchild.nextSibling%2CWalker(child%2Ccallback)%2Cchild%3Dnext%3Bbreak%3Bcase%203%3Acallback(node)%7D%7Dfunction%20Convert(textNode%2CfontSet)%7Bvar%20nodeValue%3DtextNode.nodeValue%3BObject.keys(fontSet).forEach(function(character)%7BnodeValue%3DnodeValue.replace(new%20RegExp(character%2C%22g%22)%2CfontSet%5Bcharacter%5D)%7D)%2CtextNode.nodeValue%3DnodeValue%7Dvar%20Fraktur%3D%7BA%3A%22%F0%9D%94%84%22%2CB%3A%22%F0%9D%94%85%22%2CC%3A%22%F0%9D%95%AE%22%2CD%3A%22%F0%9D%94%87%22%2CE%3A%22%F0%9D%94%88%22%2CF%3A%22%F0%9D%94%89%22%2CG%3A%22%F0%9D%94%8A%22%2CH%3A%22%F0%9D%95%B3%22%2CI%3A%22%F0%9D%95%B4%22%2CJ%3A%22%F0%9D%94%8D%22%2CK%3A%22%F0%9D%94%8E%22%2CL%3A%22%F0%9D%94%8F%22%2CM%3A%22%F0%9D%94%90%22%2CN%3A%22%F0%9D%94%91%22%2CO%3A%22%F0%9D%94%92%22%2CP%3A%22%F0%9D%94%93%22%2CQ%3A%22%F0%9D%94%94%22%2CR%3A%22%F0%9D%95%BD%22%2CS%3A%22%F0%9D%94%96%22%2CT%3A%22%F0%9D%94%97%22%2CU%3A%22%F0%9D%94%98%22%2CV%3A%22%F0%9D%94%99%22%2CW%3A%22%F0%9D%94%9A%22%2CX%3A%22%F0%9D%94%9B%22%2CY%3A%22%F0%9D%94%9C%22%2CZ%3A%22%F0%9D%96%85%22%2Ca%3A%22%F0%9D%94%9E%22%2Cb%3A%22%F0%9D%94%9F%22%2Cc%3A%22%F0%9D%94%A0%22%2Cd%3A%22%F0%9D%94%A1%22%2Ce%3A%22%F0%9D%94%A2%22%2Cf%3A%22%F0%9D%94%A3%22%2Cg%3A%22%F0%9D%94%A4%22%2Ch%3A%22%F0%9D%94%A5%22%2Ci%3A%22%F0%9D%94%A6%22%2Cj%3A%22%F0%9D%94%A7%22%2Ck%3A%22%F0%9D%94%A8%22%2Cl%3A%22%F0%9D%94%A9%22%2Cm%3A%22%F0%9D%94%AA%22%2Cn%3A%22%F0%9D%94%AB%22%2Co%3A%22%F0%9D%94%AC%22%2Cp%3A%22%F0%9D%94%AD%22%2Cq%3A%22%F0%9D%94%AE%22%2Cr%3A%22%F0%9D%94%AF%22%2Cs%3A%22%F0%9D%94%B0%22%2Ct%3A%22%F0%9D%94%B1%22%2Cu%3A%22%F0%9D%94%B2%22%2Cv%3A%22%F0%9D%94%B3%22%2Cw%3A%22%F0%9D%94%B4%22%2Cx%3A%22%F0%9D%94%B5%22%2Cy%3A%22%F0%9D%94%B6%22%2Cz%3A%22%F0%9D%94%B7%22%7D%3BWalker(document.body%2Cfunction(textNode)%7BConvert(textNode%2CFraktur)%7D)%7D()%7D)()
```
