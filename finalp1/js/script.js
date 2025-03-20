document.addEventListener("DOMContentLoaded", () => {
  const facts = [
    "I once hiked a volcano and didn’t break a sweat!",
    "I can bake a cake with no recipe. 🍰",
    "I’ve taught over 100 students through my tutoring business!",
    "Gardening is my therapy. 🌱",
    "I hit 1 million followers while wearing pajamas!"
  ];

  const button = document.getElementById("funFactBtn");
  const display = document.getElementById("funFactDisplay");

  button.addEventListener("click", () => {
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    display.textContent = randomFact;
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const comment = document.getElementById("comment").value.trim();

    if (!name || !email || !phone || !comment) {
      alert("Please fill in all fields ✨");
      e.preventDefault();
    } else {
      alert("Thank you for your message! 🎉 Redirecting to thank you page...");
      // optional confetti here later if you want!
    }
  });
});

