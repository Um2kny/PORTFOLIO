// script.js

const birthDate = new Date("2004-07-19T00:00:00");
const totalYearMinutes = 525600;

function calculateXPandLevel() {
  const now = new Date();

  // Determine current level based on whether birthday has passed
  const thisYearBirthday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  let level = now.getFullYear() - birthDate.getFullYear();
  if (now < thisYearBirthday) level--;

  // Find last birthday date
  const lastBirthday = new Date(thisYearBirthday);
  if (now < thisYearBirthday) lastBirthday.setFullYear(now.getFullYear() - 1);

  // Calculate minutes since last birthday
  const minutesSinceBirthday = Math.floor((now - lastBirthday) / (1000 * 60));
  const progressPercent = Math.min((minutesSinceBirthday / totalYearMinutes) * 100, 100);

  // Update level display
  document.getElementById("level").textContent = level;

  // Update XP bar
  const xpFill = document.getElementById("xp-fill");
  xpFill.style.width = `${progressPercent}%`;
  xpFill.textContent = ""; // No XP number shown, just progress
}

// Initial call and update every 60 seconds
window.onload = () => {
  calculateXPandLevel();
  setInterval(calculateXPandLevel, 60000); // Update every minute
};
