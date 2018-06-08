/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function Language() {
    document.getElementById("myLanguage").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.droplang')) {
// i = kassens indhold
    var dropdown = document.getElementsByClassName("droplang-content");
    var i;
    for (i = 0; i < dropdown.length; i++) {
      var openDropdown = dropdown[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/* Navigation responsive */
function responsiveNav() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

// Program siden popup
// When the user clicks on div, open the popup
function programpopups(a) {
  a.parentNode.getElementsByClassName("popup-info2")[0].classList.toggle("show");
}

// Close the popup if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.popup-info')) {

    var popup = document.getElementsByClassName("popup-info2");
    var i;
    for (i = 0; i < popup.length; i++) {
      var openPopup = popup[i];
      if (openPopup.classList.contains('show')) {
        openPopup.classList.remove('show');
      }
    }
  }
}


function store() {
  // Input from klient.html
  var title = document.querySelector("#Title")
  var description = document.querySelector("#Descrip");

  //storing input from klient.html
  localStorage.setItem("title", title.value);
  localStorage.setItem("descrip", description.value);
}

document.querySelector("#title").innerHTML = localStorage.getItem("title");
document.querySelector("#descrip").innerHTML = localStorage.getItem("descrip");
