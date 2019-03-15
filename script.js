$(window).on("scroll",function(){
  var topNv = document.getElementById("topnavbar")
  if($(this).scrollTop() > 120) {
    topNv.classList.add("navbar-bg-scroll");
  }else {
    topNv.classList.remove("navbar-bg-scroll");
  }
})
function openmenu() {
  var menuMb = document.getElementById("navUl");
  if(menuMb.className == "nav-ul") {
    menuMb.classList.add("x");
  }else {
    menuMb.classList.remove("x");
  }
}
$("#dropdown-mn").on("click",function(){
  var dropdownItem = document.getElementById("dropdown-itm");
  if(dropdownItem.className == "dropdown-item") {
    if(window.innerWidth < 780) {
      dropdownItem.classList.add("x");
    }else {
      dropdownItem.classList.add("d");
    }
  }else {
    if(window.innerWidth > 780) {
      dropdownItem.classList.remove("d");
    }else {
      dropdownItem.classList.remove("x");
    }
  }
})