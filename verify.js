// In verify.js
localStorage.setItem("walletUnlocked", "true");
window.location.href = "wallet.html";

// List of free codes (first 3 users)
const freeCodes = ["FREE001", "FREE002", "FREE003"];

// Main paid code
const paidCode = "SAHIL1999";

function verifyCode() {
  const code = document.getElementById("codeInput").value.trim();
  const result = document.getElementById("result");

  // Check for free codes
  if (freeCodes.includes(code)) {
    result.textContent = "✅ Welcome! Free access granted.";
    result.style.color = "green";
    unlockWallet();
    return;
  }

  // Check for paid code
  if (code === paidCode) {
    result.textContent = "✅ Code verified! Wallet unlocked.";
    result.style.color = "green";
    unlockWallet();
    return;
  }

  // Invalid code
  result.textContent = "❌ Invalid code. Please check and try again.";
  result.style.color = "red";
}

// Save unlock status and redirect
function unlockWallet() {
  localStorage.setItem("walletUnlocked", "true");
  setTimeout(() => {
    window.location.href = "wallet.html";
  }, 1500);
}
