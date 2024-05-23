document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch('../contact.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert('Message sent successfully!');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred while sending the message.');
    });
});
