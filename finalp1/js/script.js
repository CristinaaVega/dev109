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

