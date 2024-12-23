const traditionText = document.getElementById("tradition-text");
const submitTraditionButton = document.getElementById("submit-tradition-button");
const confirmationMessage = document.getElementById("confirmation-message");

// User/Designer Side Toggle
document.getElementById("user-side-button").addEventListener("click", () => {
  alert("User side selected: You can share your festival experience here.");
});

document.getElementById("designer-side-button").addEventListener("click", () => {
  alert("Designer side selected: You can submit new festival designs here.");
});

// Submit Tradition
submitTraditionButton.addEventListener("click", () => {
  const tradition = traditionText.value.trim();
  if (tradition) {
    confirmationMessage.innerHTML = `<p>Thank you for sharing your tradition!</p><p>Your tradition: ${tradition}</p>`;
    traditionText.value = ""; // Clear input after submission
  } else {
    confirmationMessage.innerHTML = "<p>Please write something to share your tradition.</p>";
  }
});
