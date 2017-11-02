// ==UserScript==
// @name           Trending Censor
// @namespace      Censor
// @description    Censorship on the web.
// @include        *
// ==/UserScript==


(function() {
   var textnodes, node, s;
   textnodes = document.evaluate( "//body//text()", document, null, XPathResult.UNORDERED_NODE_SNAPSHOT_TYPE, null);
   for (var i = 0; i < textnodes.snapshotLength; i++) {
      node = textnodes.snapshotItem(i);
      s = node.data;
      s = s.replace(/trending/gi, "");
      node.data = s;
   }
})();
