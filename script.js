function checkPassword() {
    const password = document.getElementById('password').value;
    const message = document.getElementById('message');
    const correctPassword = '0106'; // Set your password here

    if (password === correctPassword) {
        message.style.color = 'green';
        message.textContent = 'Unlocked!';
        window.location.href = './pos.html';
    } else {
        message.style.color = 'red';
        message.textContent = 'Incorrect password. Try again.';
    }
}

// Trigger checkPassword() on Enter key press
document.getElementById('password').addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        checkPassword();
    }
});
