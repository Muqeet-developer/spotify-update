// script.js

// Adding a basic click effect or functionality is optional.
// Here we can enhance with future interactive elements (like popups or previews).
document.querySelectorAll('.row-posters img').forEach(poster => {
    poster.addEventListener('click', () => {
        alert('Movie details would appear here.');
    });
});
