/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function Language() {
    document.getElementById("myLanguage").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.droplang')) {

    var dropdowns = document.getElementsByClassName("droplang-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
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

function check() {
  //stored data
  localStorage.userName = "admin";
  localStorage.userPw = "admin";
  var storedName = localStorage.getItem('userName');
  var storedPassword = localStorage.getItem('userPw');

  //entered data from login
  var userName = document.querySelector('#userName');
  var userPassword = document.querySelector('#userPw');

  //check if stored data from signup is equal to data from loginbutton
  if(userName.value == storedName && userPw.value == storedPassword) {
    window.location = window.location.href.replace("login.html","klient.html");
    alert();
  }else {
    alert('Incorrect email or password');
  }
}


function store() {
  // Input from klient.html
  var title = document.querySelector('#Title')
  var description = document.querySelector('#Descrip');
  var content = document.querySelector('#Content');
  var time = document.querySelector('#Time');
  //storing input from klient.html
  localStorage.setItem('title', title.value);
  localStorage.setItem('descrip', description.value);
  localStorage.setItem('content', content.value);
  localStorage.setItem('time', time.value);
}
