// Clear button
const clearBtn = document.getElementById("clear");

clearBtn.addEventListener("click", function(event) {
  // Remove all dots
  const dots = document.querySelectorAll(".dot");
  dots.forEach(dot => dot.remove());

  // Stop click event from placing a dot
  event.stopPropagation();
});

// Handle clicks on the body
document.body.addEventListener("click", function(event) {
  // Get user-selected color and size
  const color = document.getElementById("color").value;
  const size = parseInt(document.getElementById("size").value);

  // Create the dot
  const dot = document.createElement("div");
  dot.classList.add("dot");

  // Style it
  dot.style.backgroundColor = color;
  dot.style.width = size + "px";
  dot.style.height = size + "px";
  dot.style.left = (event.pageX - size / 2) + "px";
  dot.style.top = (event.pageY - size / 2) + "px";

  document.body.appendChild(dot);
});

