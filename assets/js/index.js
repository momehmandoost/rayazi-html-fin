const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId);
  const nav = document.getElementById(navId); // Declare nav variable using const or let

  toggle.addEventListener("click", () => {
    console.log("click");
    // Add show-menu class to nav menu
    nav.classList.toggle("hidden2");
  });
};

//showMenu("hamburger", "menu-show");
showMenu("notif", "show-notif");
showMenu("setting", "show-setting");
