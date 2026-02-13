const menuIcon = document.getElementById("menu-icon");
const navMenu = document.querySelector(".nav-menu");

let menuOpen = false;

menuIcon.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuOpen = !menuOpen;
    menuIcon.src = menuOpen ? "/assets/icons/close.png" : "/assets/icons/menu.png";
});

// web3forms implementation for contact
const form = document.getElementById("form");
const result = document.getElementById("result");

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    result.style.display = "block";
    result.innerHTML = "Please wait...";

    fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    })
      .then(async (response) => {
        let data = await response.json();
        result.innerHTML = data.message;
      })
      .catch(() => {
        result.innerHTML = "Something went wrong!";
      })
      .finally(() => {
        form.reset();
        setTimeout(() => {
          result.style.display = "none";
        }, 3000);
      });
  });
}



