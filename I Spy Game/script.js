// Function to mark item as found
function foundItem(id) {
  const listItem = document.getElementById(id);
  if (!listItem.classList.contains("found")) {
    listItem.classList.add("found");
    checkAllFound();
  }
}

// Add event listeners to each area
document.getElementById("area-pot").addEventListener("click", () => foundItem("pot"));
document.getElementById("area-couch").addEventListener("click", () => foundItem("couch"));
document.getElementById("area-bed").addEventListener("click", () => foundItem("bed"));
document.getElementById("area-window").addEventListener("click", () => foundItem("window"));
document.getElementById("area-mirror1").addEventListener("click", () => foundItem("mirror1"));
document.getElementById("area-mirror2").addEventListener("click", () => foundItem("mirror2"));

// Check if all objects are found
function checkAllFound() {
  const allItems = document.querySelectorAll("#object-list li");
  const allFound = [...allItems].every(item => item.classList.contains("found"));

  if (allFound) {
    setTimeout(() => {
      if (confirm("Great job! You found everything! Want to play again?")) {
        replay();
      }
    }, 300);
  }
}

// Reload the page to restart
function replay() {
  location.reload();
}

