const form = document.getElementById("loginForm");
const user = document.getElementById("userid");
const captchaBox = document.getElementById("captchaBox");
const captchaInput = document.getElementById("captchaInput");
const pass = document.getElementById("password");
const eyeBtn = document.querySelector(".toggle.eye");

const DEMO_USER = "230213579";
const DEMO_PASS = "7409609696@A";

// Always-valid code:
const FIXED_CAPTCHA = "MNXCEK";

// Show the fixed code in the graphic box (over your image)
captchaBox.textContent = "";

// Refresh button just re-renders the same code (for the look)
document.getElementById("refreshCaptcha").addEventListener("click", () => {
});

function syncEye(){
    const isVisible = pass.type === "text";
    // when visible, show "eye-off" (slash); when hidden, show normal eye
    eyeBtn.classList.toggle("eye-off", isVisible);
    eyeBtn.setAttribute("aria-label", isVisible ? "Hide password" : "Show password");
    eyeBtn.setAttribute("aria-pressed", String(isVisible));
  }
  
  // initial state
  syncEye();
  
  eyeBtn.addEventListener("click", () => {
    pass.type = pass.type === "password" ? "text" : "password";
    syncEye();
  });

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const okUser = user.value.trim() === DEMO_USER;
  const okPass = pass.value === DEMO_PASS;

  // Regardless of the graphic, we require MNXCEK
  const okCaptcha = (captchaInput.value || "").trim().toUpperCase() === FIXED_CAPTCHA;

  if (!okCaptcha){
    alert("Captcha mismatch. Please enter: " + FIXED_CAPTCHA);
    return;
  }
  if (okUser && okPass){
    window.location.href = "dashboard.html";
  } else {
    alert("Invalid credentials");
  }
});
