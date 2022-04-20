window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("xyz").classList.add("scrolled");
    // console.log("hoile valo");
  } else {
    document.getElementById("xyz").classList.remove("scrolled");
    // console.log("na hoile aro valo");
  }
}
