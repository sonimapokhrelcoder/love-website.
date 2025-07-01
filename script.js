document.getElementById("showMessage").addEventListener("click", function () {
  document.getElementById("messageBox").classList.remove("hidden");
  updateTimeTogether();
  setInterval(updateTimeTogether, 1000);

  // Show popup after 5 seconds
  setTimeout(() => {
    document.getElementById("popup").classList.remove("hidden");
  }, 5000);
});

function updateTimeTogether() {
  const startDate = new Date("2023-01-01T00:00:00"); // Change to your anniversary date
  const now = new Date();
  const diff = now - startDate;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("timer").textContent =
    `${days} Days, ${hours} Hours, ${minutes} Minutes, ${seconds} Seconds`;
}

document.getElementById("closePopup").addEventListener("click", () => {
  document.getElementById("popup").classList.add("hidden");
});
