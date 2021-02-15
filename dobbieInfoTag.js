(function () {
    window._uxa = window._uxa || [];
    
    //Set PII selectors
    var dataSelectors =  {
      PIISelectors: [".footer, #snowTitle"],
      Attributes: [
        {
          selector: ".col-md-7", // CSS selectors
          attrName: ["testAtt","testAtt3"] // Attribute name you want to mask
      }
      ]
     };

     //document.querySelectorAll(dataSelectors.PIISelectors).forEach((el) => el.textContent = el.textContent.replace(/./g,'-'));

     window._uxa.push(['setPIISelectors',  dataSelectors ]);

    //Set Datalayer
    try {
      if (pageType != null){
        window._uxa.push(['setCustomVariable', 1, 'pageName', pageType, 3]);
      }
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