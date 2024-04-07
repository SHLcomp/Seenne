// navbar scroll effect

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 10) { // Adjust as needed based on scroll position
      navbar.classList.add('box-shadow');
    } else {
      navbar.classList.remove('box-shadow');
    }
  });



// burg icon
const barsBtn = document.querySelector("#bars");
const barsIcon = document.querySelector(".bars");
const sideBar = document.querySelector(".sec-section");

function openMenu() {
  barsIcon.classList.remove("fa-bars");
  barsIcon.classList.add("fa-xmark");
}

function closeMenu() {
  barsIcon.classList.remove("fa-xmark");
  barsIcon.classList.add("fa-bars");
}

barsBtn.addEventListener('click', function() {
  if (barsIcon.classList.contains('fa-bars')) {
    openMenu();
  } else {
    closeMenu();
  }
  console.log("Bars clicked!", barsIcon.classList);
});
