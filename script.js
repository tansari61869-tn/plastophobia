// PRELOADER SYSTEM (supports unique loader per page)
window.addEventListener("load", () => {
  const loader = document.getElementById("preloader");
  if (!loader) return;

  // Trigger fade-out animation
  loader.classList.add("fade-out");

  // Remove from DOM after fade (same duration as CSS)
  setTimeout(() => {
    loader.style.display = "none";
  }, 700);
});
