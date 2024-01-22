window.onscroll = function() {stickyInfoSocials()};

var infoSocials = document.querySelector(".info-socials");
var infoSocials2 = document.querySelector(".info-socials2");
var sticky = infoSocials.offsetTop;

function stickyInfoSocials() {
  if (window.pageYOffset > sticky - 1) {
    infoSocials2.style.display = "flex";
    infoSocials.style.visibility = "hidden";
  } else {
    infoSocials2.style.display = "none";
    infoSocials.style.visibility = "visible";
  }
}