const menuBarEl = document.querySelector("#menuBar");
const menuMobileEl = document.querySelector(".menu-mobile");

const onClose = () => {
  menuMobileEl.classList.toggle("show-menu");

  if (menuMobileEl.classList.contains("show-menu")) {
    document.body.style.height = "100vh";
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.height = "auto";
    document.body.style.overflow = "visible";
  }
};
const body = document.querySelector("body");
const overlay = document.createElement("div");
overlay.classList.add("overlay");
body.appendChild(overlay);

menuBarEl.addEventListener("click", () => {
  onClose();

  const icon = menuBarEl.querySelector("i");
  if (icon.classList.contains("bx-menu")) {
    overlay.style.display = "block";
  } else {
    overlay.style.display = "none";
  }
});

function removeOverlay() {
  overlay.style.display = "none";
}

menuMobileEl.querySelector(".bx-x").addEventListener("click", () => {
  removeOverlay();
});

//* removing the overlay and closing the menu when click on the overlay.

overlay.addEventListener("click", () => {
  if (overlay.style.display === "block") {
    overlay.style.display = "none";
    onClose();
  }
});

//* removing the overlay and closing the menu when click on the links.

const menuLinks = document.querySelectorAll(".links");
menuLinks.forEach((link) => {
  link.addEventListener("click", () => {
    if (overlay.style.display === "block") {
      overlay.style.display = "none";
    }
  });
});
