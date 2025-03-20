document.addEventListener("DOMContentLoaded", () => {
  // 🌟 Fun Facts for About Page
  const facts = [
    "I once hiked a volcano and didn’t break a sweat!",
    "I can bake a cake with no recipe. 🍰",
    "I’ve taught over 100 students through my tutoring business!",
    "Gardening is my therapy. 🌱",
    "I hit 1 million followers while wearing pajamas!"
  ];

  const button = document.getElementById("funFactBtn");
  const display = document.getElementById("funFactDisplay");

  if (button && display) {
    button.addEventListener("click", () => {
      const randomFact = facts[Math.floor(Math.random() * facts.length)];
      display.textContent = randomFact;
    });
  }

  // 📬 Contact Form Validation
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", function (e) {
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const phone = document.getElementById("phone").value.trim();
      const comment = document.getElementById("comment").value.trim();

      if (!name || !email || !phone || !comment) {
        alert("Please fill in all fields ✨");
        e.preventDefault(); // stops form submission
      } else {
        alert("Thank you for your message! 🎉 Redirecting...");
        // Optional: trigger confetti or sound here
      }
    });
  }
});

