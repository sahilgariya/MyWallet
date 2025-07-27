
function checkCode() {
  const code = document.getElementById("secretCode").value.trim();
  
  // You can replace this with real generated OTP codes like "WLT-8437"
  const approvedCodes = ["WLT-1234", "WLT-8437", "WLT-5566"];

  if (approvedCodes.includes(code)) {
    localStorage.setItem("walletUnlocked", "true");
    window.location.href = "wallet.html"; // Redirect to wallet page
  } else {
    document.getElementById("unlockMessage").innerText = "❌ Invalid code. Please try again.";
  }
}