// Show alert when clicking on Wishlist, Profile or Bag
document.querySelectorAll('.action_container').forEach((item) => {
    item.addEventListener('click', () => {
        alert("This feature will be available soon!");
    });
});

// Search input enter functionality
const searchInput = document.querySelector('.SEARCH_INPUT');
searchInput.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        alert(`Searching for "${searchInput.value}"...`);
    }
});

// Highlight nav links on click
const navLinks = document.querySelectorAll('.nav_bar a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.forEach(el => el.classList.remove('active-nav'));
        link.classList.add('active-nav');
    });
});
