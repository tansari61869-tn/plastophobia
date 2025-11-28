// PRELOADER FADE OUT
window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  if (!loader) return;

  // smooth fade-out
  loader.classList.add("fade-out");

  // completely remove after fade animation
  setTimeout(() => {
    loader.style.display = "none";
  }, 700); // should match fadeOut duration
});
