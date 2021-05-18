window.onload = function () {
  (function () {
    var navbar = document.getElementById("navbar");
    var sticky = navbar.offsetTop;
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky");
    } else {
      navbar.classList.remove("sticky");
    }

    var check_btn = document.getElementById("check_btn");

    var about_nav = document.getElementById("about_nav");
    var skill_nav = document.getElementById("skill_nav");
    var pro_nav = document.getElementById("pro_nav");
    var con_nav = document.getElementById("con_nav");

    check_btn.addEventListener("click", function () {
      if (navbar.className == "sticky") {
        navbar.classList.add("close");
        navbar.classList.remove("sticky");
      } else {
        navbar.classList.remove("close");
        navbar.classList.add("sticky");
      }
    });

    about_nav.addEventListener("click", function () {
      if (navbar.className == "close") {
        navbar.classList.remove("close");
        navbar.classList.add("sticky");
      }
    });

    skill_nav.addEventListener("click", function () {
      if (navbar.className == "close") {
        navbar.classList.remove("close");
        navbar.classList.add("sticky");
      }
    });

    pro_nav.addEventListener("click", function () {
      if (navbar.className == "close") {
        navbar.classList.remove("close");
        navbar.classList.add("sticky");
      }
    });

    con_nav.addEventListener("click", function () {
      if (navbar.className == "close") {
        navbar.classList.remove("close");
        navbar.classList.add("sticky");
      }
    });
  })();
};
