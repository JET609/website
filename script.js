// Show an alert when the page loads
window.onload = function () {
  console.log("Welcome to my website!");
};

// Change the background color when a button is clicked
function changeTheme() {
  const body = document.body;
  body.style.backgroundColor = body.style.backgroundColor === 'white' ? '#f4f4f4' : 'white';
}

// Alert a message when contact link is clicked
function contactClicked() {
  alert("Thanks for clicking Contact! We'll get back to you soon.");
}
