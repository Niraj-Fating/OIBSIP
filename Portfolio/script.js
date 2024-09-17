document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from refreshing the page

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Thanks, ${name}! Your message has been sent.`);
    
    // Clear form after submission
    document.getElementById('contact-form').reset();
});
