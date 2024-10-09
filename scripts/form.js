// Function to update the rating display dynamically
function updateRatingDisplay(value) {
    document.getElementById('ratingDisplay').textContent = value;
}

// Form validation for matching passwords
document.getElementById('signupForm').addEventListener('submit', function (event) {
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        event.preventDefault(); // Prevent form submission
        document.getElementById('password').value = ''; // Clear passwords
        document.getElementById('confirmPassword').value = '';
        document.getElementById('password').focus(); // Focus on the password field
    }
});
