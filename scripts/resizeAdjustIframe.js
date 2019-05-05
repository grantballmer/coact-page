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
