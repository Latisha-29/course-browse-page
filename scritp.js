document.addEventListener("DOMContentLoaded", () => {
  // ✅ Age filter buttons
  const ageButtons = document.querySelectorAll(".age-buttons button");
  const courseCards = document.querySelectorAll(".course-card");
  const searchInput = document.querySelector(".search-bar input");

  // Filter courses by age group
  ageButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      // Remove active class from all buttons
      ageButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");

      const age = btn.dataset.age;

      // Show/hide cards
      courseCards.forEach(card => {
        if (age === "all" || card.dataset.age === age) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // ✅ Search filter
  searchInput.addEventListener("input", (e) => {
    const query = e.target.value.toLowerCase();
    courseCards.forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      card.style.display = title.includes(query) ? "block" : "none";
    });
  });

  // ✅ Hamburger menu toggle for mobile
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("navMenu");

  hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("show");

    // Toggle hamburger icon to X
    if (hamburger.textContent === "☰") {
      hamburger.textContent = "✖";
    } else {
      hamburger.textContent = "☰";
    }
  });
});
