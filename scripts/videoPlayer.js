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
