(function () {
    window._uxa = window._uxa || [];
    
    //Set PII selectors
    var dataSelectors =  {
      PIISelectors: [".footer, #serviceAddressCardEdit"]
     };

     window._uxa.push(['setPIISelectors',  dataSelectors ]);

    //Set Datalayer
    try {
        
    } catch (e){}
    if (typeof CS_CONF === 'undefined') {
      window._uxa.push(['setPath', window.location.pathname+window.location.hash.replace('#','?__')]);
      var mt = document.createElement("script"); mt.type = "text/javascript"; mt.async = true;
      mt.src = "//t.contentsquare.net/uxa/a30908616073b.js";
      document.getElementsByTagName("head")[0].appendChild(mt);
    }
    else {
      window._uxa.push(['trackPageview', window.location.pathname+window.location.hash.replace('#','?__')]);
    }
  })();