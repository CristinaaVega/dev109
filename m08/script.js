function addItem() {
    var input = document.getElementById('newItem');
    var itemText = input.value.trim();
    
    if (itemText === "") {
        return; // Prevent adding empty items
    }
    
    var newEl = document.createElement('li');
    newEl.textContent = itemText;
    
    document.getElementById('todo').appendChild(newEl);
    
    input.value = ""; // Clear the input after adding
}

document.getElementById('newItem').addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addItem();
    }
});
