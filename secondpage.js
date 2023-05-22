// Get all the card elements
const cards = document.querySelectorAll('.card-group .card');

// Add a click event listener to each card
cards.forEach(card => {
  card.addEventListener('click', function() {
    // Remove the 'selected' class from all cards
    cards.forEach(card => {
      card.classList.remove('selected');
    });

    // Add the 'selected' class to the clicked card
    this.classList.add('selected');
  });
});
