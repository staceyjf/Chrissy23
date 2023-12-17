const card = document.querySelector('.card');

// Function to check if touch events are supported
function isTouchDevice() {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}

// Function to handle click or touch event based on device type
function handleCardInteraction() {

    // Check if it's a touch device and toggle the show-right-card class accordingly
    if (isTouchDevice()) {
        card.classList.toggle('show-right-card');
        card.classList.remove('open');
    } else {
        card.classList.toggle('open');
        card.classList.remove('show-right-card');
    }
}

// Add click or touch event listener based on device type
if (isTouchDevice()) {      
    card.addEventListener('touchstart', handleCardInteraction);
} else {
    card.addEventListener('click', handleCardInteraction);
    console.log('yes i clciked')
}
