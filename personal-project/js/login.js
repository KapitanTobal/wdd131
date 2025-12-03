// Guest button
const guestButton = document.querySelector("#guestButton");

// Redirect to projects page when clicking "Login as Guest"
guestButton.addEventListener("click", () => {
  window.location.href = "projects.html";
});
