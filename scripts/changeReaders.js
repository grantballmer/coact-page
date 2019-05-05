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
