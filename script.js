window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (!preloader) return;

  // little delay for smooth feel
  setTimeout(() => {
    preloader.classList.add("hidden");
  }, 600);
});

