
// burg icon
const barsBtn = document.querySelector("#bars");
const barsIcon = document.querySelector(".bars");

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
