(() => {
  const mobileMobileToggle = () => {
    const menuToggle = document.querySelector(".menu");
    menuToggle.addEventListener("click", () => {
      const mobileNavigation = document.querySelector(".navigation");
      mobileNavigation.classList.toggle("navigation-open");
    })
  }
  mobileMobileToggle();
})();