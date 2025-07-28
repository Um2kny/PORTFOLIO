// script.js

// Set your birth date here (YYYY-MM-DD)
const birthDate = new Date("2004-07-19T00:00:00");

function calculateXPandLevel() {
  const now = new Date();
  const age = now.getFullYear() - birthDate.getFullYear();
  const hasBirthdayPassed =
    now.getMonth() > birthDate.getMonth() ||
    (now.getMonth() === birthDate.getMonth() && now.getDate() >= birthDate.getDate());

  const level = hasBirthdayPassed ? age : age - 1;
  document.getElementById("level").textContent = level;

  // Calculate minutes since last birthday
  const lastBirthday = new Date(now.getFullYear(), birthDate.getMonth(), birthDate.getDate());
  if (!hasBirthdayPassed) lastBirthday.setFullYear(now.getFullYear() - 1);

  const minutesSinceLastBirthday = Math.floor((now - lastBirthday) / (1000 * 60));
  const totalYearMinutes = 525600; // minutes in a year
  const progressPercent = Math.min((minutesSinceLastBirthday / totalYearMinutes) * 100, 100);

  const xpText = `${minutesSinceLastBirthday} XP`;
  const xpFill = document.getElementById("xp-fill");
xpFill.textContent = "";

  xpFill.style.width = `${progressPercent}%`;
}

// Initial call and update every minute
window.onload = () => {
  calculateXPandLevel();
  setInterval(calculateXPandLevel, 60000); // every minute
};
