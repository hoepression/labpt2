document.addEventListener("DOMContentLoaded", () => {
  const exploreBtn = document.querySelector(".explore-btn");

  exploreBtn.addEventListener("click", () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  });

  const navLinks = document.querySelectorAll(".menu a");

  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(e.target.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});
