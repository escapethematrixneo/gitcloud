document.addEventListener("DOMContentLoaded", () => {
  const scrollWatcher = document.querySelector(".scroll-watcher");

  window.addEventListener("scroll", () => {
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollTop = window.scrollY;
    const scrollPercentage = scrollTop / scrollHeight;

    // Scale the scroll-watcher based on scroll percentage
    scrollWatcher.style.transform = `scaleX(${scrollPercentage})`;
  });

  const fadeIns = document.querySelectorAll(".fade-in");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); // Stop observing once visible
        }
      });
    },
    { threshold: 0.1 } // Trigger when 10% of the element is visible
  );

  fadeIns.forEach((fadeIn) => observer.observe(fadeIn));
});