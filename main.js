"use strict";
(function() {
  window.addEventListener("load", init);

  function init() { 
    let firstNext = id("firstNext");
    let firstPage = id("firstPage");
    let secondNext = id("secondNext");
    let secondPage = id("secondPage");
    firstNext.addEventListener("click", () => {
        firstPage.classList.add("move-left");
    });
    secondNext.addEventListener("click", () => {
        console.log("working");
        secondPage.classList.add("move-left");
        console.log(secondPage);
    });
  }


  function qsa(elementName) {
    return document.querySelectorAll(elementName);
  }

  function qs(elementName) {
    return document.querySelector(elementName);
  }

  function id(idName) {
    return document.getElementById(idName);
  }
})();