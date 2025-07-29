// script.js

const birthDate = new Date("2004-07-19T00:00:00");

function calculateXPandLevel() {
  const now = new Date();
  let level = now.getFullYear() - birthDate.getFullYear();

  const thisYearBirthday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());

  if (now < thisYearBirthday) {
    level--; // birthday hasn't occurred yet this year
  }

  // Update level in HTML
  document.getElementById("level").textContent = level;

  // Calculate how many full months passed since last birthday
  const lastBirthday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  if (now < lastBirthday) lastBirthday.setFullYear(now.getFullYear() - 1);

  const monthDiff = (now.getFullYear() - lastBirthday.getFullYear()) * 12 + (now.getMonth() - lastBirthday.getMonth());
  const progressPercent = Math.min((monthDiff / 12) * 100, 100); // max 100%

  // Update XP bar (no text shown, just progress)
  const xpFill = document.getElementById("xp-fill");
  xpFill.textContent = ""; // you can set text here if needed
  xpFill.style.width = `${progressPercent}%`;
}

// Call once on load and then every month
window.onload = () => {
  calculateXPandLevel();
  const oneMonth = 1000 * 60 * 60 * 24 * 30; // rough estimate of a month
  setInterval(calculateXPandLevel, oneMonth);
};
