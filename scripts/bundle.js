(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
// pull in data objects about each card reader from readerData.js file
const readerData = require("./readerData");

// pull in thumbnail and iframe dom elements from videoPlayer.js file
const { thumbnail, iframe } = require("./videoPlayer");

// buttons in top border to control changing banner details
const leftBtn = document.querySelector(".btn-510OC");
const rightBtn = document.querySelector(".btn-510L");

// select banner elements
const banner = document.querySelector(".banner");
const textCard = banner.querySelector(".card__text");

// changes banner styles to reflect correct reader data
function changeStyles(obj) {
  // change classes depending on which card reader data is active
  if (obj.name === "510OC") {
    banner.classList.remove("solid-510L");
    banner.classList.add("solid-510OC");
  } else if (obj.name === "510L") {
    banner.classList.remove("solid-510OC");
    banner.classList.add("solid-510OL");
  }

  // replace h1 and p text inside element with class "card__text"
  textCard.querySelector("h1").textContent = obj.headerText;
  textCard.querySelector("p").textContent = obj.paragraphText;

  // when user clicks thumbnail, it is hidden to reveal iframe underneath
  // this removes that class and shows the thumbnail again because the user has chosen the other card reader
  thumbnail.classList.remove("hide");

  // change iframe src
  iframe.src = obj.videoSrc;
}

// function to call when one of the top buttons are clicked
function handleClick(clickedBtn, oppositeBtn) {
  if (clickedBtn.classList.contains("btn__active")) return;

  // change which top button for card readers has active class
  clickedBtn.classList.add("btn__active");
  oppositeBtn.classList.remove("btn__active");

  let dataObj;

  // if leftBtn (510OC button) was clicked, set variable dataObj to 510 OC data,
  // else right button was clicked so set variable dataObj to 510L data
  clickedBtn === leftBtn
    ? (dataObj = readerData["510OC"])
    : (dataObj = readerData["510L"]);

  // change banner styles, passing in object containing 510OC or 510L data
  changeStyles(dataObj);
}

leftBtn.addEventListener("click", function() {
  handleClick(this, rightBtn);
});

rightBtn.addEventListener("click", function() {
  handleClick(this, leftBtn);
});

},{"./readerData":3,"./videoPlayer":5}],2:[function(require,module,exports){
const videoPlayer = require("./videoPlayer");
const changeReaders = require("./changeReaders");

const resizescrollAdjustIframe = require("./resizeAdjustIframe");

},{"./changeReaders":1,"./resizeAdjustIframe":4,"./videoPlayer":5}],3:[function(require,module,exports){
const readerData = {
  "510OC": {
    name: "510OC",
    headerText: "Find out why over 180 casinos love the IPD Solid-510 OC",
    paragraphText:
      "The Solid-510 OC is the only player card printer manufactured exclusively fro the casino industry.",
    videoSrc: "https://www.youtube.com/embed/PavX9pS4VNw?enablejsapi=1"
  },
  "510L": {
    name: "510L",
    headerText: "The #1 choice for tribal community identification cards.",
    paragraphText: "Check out the laminating id card printer solid-510L",
    videoSrc: "https://www.youtube.com/embed/21FtL-9h_Jw?enablejsapi=1"
  }
};

module.exports = readerData;

},{}],4:[function(require,module,exports){
const { iframe } = require("./videoPlayer");

let throttled = false;

const handleResize = () => {
  const windowWidth = window.innerWidth;

  switch (true) {
    case windowWidth > 1024:
      iframe.height = "280";
      break;
    case windowWidth > 812:
      iframe.height = "220";
      break;
    case windowWidth > 550:
      iframe.height = "233.33";
      break;
    default:
      iframe.height = "200";
  }

  // if (windowWidth > 1024) {
  //   iframe.height = "280";
  // } else if (windowWidth > 812) {
  //   iframe.height = "200";
  // } else if (windowWidth > 550) {
  //   iframe.height = "233.33";
  // } else {
  //   iframe.height = "200";
  // }
};

window.addEventListener("resize", function() {
  // check if throttled
  if (!throttled) {
    // if not throttled, call handleResize function
    handleResize();
    throttled = true;

    // set timeout to un-throttle after 100 milliseconds
    setTimeout(function() {
      throttled = false;
    }, 100);
  }
});

},{"./videoPlayer":5}],5:[function(require,module,exports){
const thumbnail = document.querySelector(".thumbnail");
const watchBtn = document.querySelector(".btn-watch");
const iframe = document.querySelector(".card iframe");

//resize iframe height based on window/device width
function resizeIframe() {
  const windowWidth = window.innerWidth;
  if (windowWidth > 1024) return;

  if (windowWidth > 812) {
    iframe.height = "220";
  } else if (windowWidth > 550) {
    iframe.height = "233.33";
  } else {
    iframe.height = "200";
  }
}

// play video when thumbnail or "watch video" button are clicked
function playVideo() {
  resizeIframe();
  thumbnail.classList.add("hide");
  iframe.classList.add("iframe-display");
  iframe.src += "&autoplay=1";
}

thumbnail.addEventListener("click", playVideo);
watchBtn.addEventListener("click", playVideo);

module.exports = { thumbnail, iframe };

},{}]},{},[2]);
