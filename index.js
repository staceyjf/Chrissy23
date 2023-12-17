const card = document.querySelector('.card');

// Function to check if touch events are supported
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

// Function to handle click or touch event based on device type
function handleCardInteraction() {
    // Check if it's a touch device
    if (isTouchDevice()) {
        // Toggle the show-right-card class
        card.classList.toggle('show-right-card');
        
        // Toggle the open class based on the current state of show-right-card
        card.classList.toggle('open', card.classList.contains('show-right-card'));
    } else {
        // Toggle the open class
        card.classList.toggle('open');
        
        // Toggle the show-right-card class based on the current state of open
        card.classList.toggle('show-right-card', card.classList.contains('open'));
        console.log('I am a desktop');
    }
}

// Add click or touch event listener based on device type
if (isTouchDevice()) {      
    card.addEventListener('touchstart', handleCardInteraction);
} else {
    card.addEventListener('click', handleCardInteraction);
    console.log('yes i clciked')
}
