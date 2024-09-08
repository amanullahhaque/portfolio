document.addEventListener('DOMContentLoaded', () => {
  const $dropdowns = Array.from(document.querySelectorAll('.dropdown'));

  if ($dropdowns.length > 0) {
      $dropdowns.forEach($el => {
          const $trigger = $el.querySelector('.dropdown-trigger');
          const $menu = $el.querySelector('.dropdown-menu');

          $trigger.addEventListener('click', () => {
              $el.classList.toggle('is-active');
          });

          document.addEventListener('click', (event) => {
              if (!$el.contains(event.target)) {
                  $el.classList.remove('is-active');
              }
          });
      });
  }
});


// Select the buttons and sidebar element
var myOpenButton = document.querySelector('.open-btn');
var myCloseButton = document.querySelector('.close_btn');
var sidebar = document.querySelector('.sidebar');

// Add click event listener to open button
myOpenButton.addEventListener('click', function() {
  // Toggle sidebar visibility by changing its left position
  sidebar.style.left = "0"; // Display sidebar by setting left position to 0
});

// Add click event listener to close button
myCloseButton.addEventListener('click', function() {
  // Hide sidebar by moving it off-screen to the left
  sidebar.style.left = "-100%"; // Move sidebar off-screen to the left
});



document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach(el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});

function openTab(evt, tabName) {
  var i, x, tablinks;
  x = document.getElementsByClassName("content-tab");
  for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tab");
  for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" is-active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " is-active";
}

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    40: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    40: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    400: {
      slidesPerView: 2,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


document.addEventListener('DOMContentLoaded', function () {
  const accordions = document.querySelectorAll('.accordion-item');

  accordions.forEach(function (accordion) {
      const header = accordion.querySelector('.accordion-header');
      const toggle = header.querySelector('.accordion-toggle');
      const content = accordion.querySelector('.accordion-content');

      header.addEventListener('click', function () {
          const isOpen = accordion.classList.contains('is-active');

          // Close all accordions
          accordions.forEach(function (item) {
              item.classList.remove('is-active');
              item.querySelector('.accordion-content').style.maxHeight = null;
          });

          // Open the clicked accordion if it's not already open
          if (!isOpen) {
              accordion.classList.add('is-active');
              content.style.maxHeight = content.scrollHeight + "px";
          }
      });
  });
});

