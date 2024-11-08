// Initialize AOS
AOS.init({
    duration: 1000, // Animation duration in ms
    easing: 'ease-in-out', // Animation easing
    once: true, // Animation happens only once when scrolling down
  });
  
  // Handle Contact Form Submission
  document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Your message has been sent! We will get back to you soon.');
  });
// Smooth Scroll for Navbar Links
document.querySelectorAll('.navbar a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
// Dark Mode Toggle Functionality
document.getElementById('dark-mode-toggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  this.textContent = document.body.classList.contains('dark-mode') ? '🌞' : '🌙';
});
// Handle Newsletter Form Submission
document.getElementById('newsletter-form').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent the form from reloading the page
  
  // Simulate email subscription success (You can replace this with actual form submission logic)
  const emailInput = document.querySelector('.newsletter input');
  const confirmationMessage = document.getElementById('confirmation-message');
  
  if (emailInput.value) {
    confirmationMessage.textContent = 'Thank you for subscribing!';
    confirmationMessage.classList.remove('hidden');
    emailInput.value = ''; // Clear the input field after successful submission
  }
});
if (!emailInput.value.match(/^[^@]+@[^@]+\.[^@]+$/)) {
  alert('Please enter a valid email address');
  return;
}
// Show Toast Notification
function showToast(message) {
  const toast = document.getElementById('toast');
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}
  