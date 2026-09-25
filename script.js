const menuButton = document.getElementById("menuButton");
const navLinks = document.getElementById("navLinks");
const statusButton = document.getElementById("statusButton");
const statusMessage = document.getElementById("statusMessage");

menuButton.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => navLinks.classList.remove("show"));
});

statusButton.addEventListener("click", () => {
  statusMessage.textContent = "Deployment check complete: the website is ready for GitHub and Vercel.";
});
