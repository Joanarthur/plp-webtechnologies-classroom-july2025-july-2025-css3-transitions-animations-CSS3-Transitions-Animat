// --- Functions with scope, parameters, return values ---

let globalClicks = 0; // Global scope

function multiplyByThree(num) {
  return num * 3; // uses parameter + return
}

function incrementClicks() {
  globalClicks++;
  console.log("Total Clicks: " + globalClicks);
}

// Example of using function
console.log("3 x 3 = " + multiplyByThree(3));


// --- Part 3: Combining CSS & JS ---
// Toggle animation on logo
const animateBtn = document.getElementById("animateBtn");
const logoBox = document.getElementById("logoBox");

animateBtn.addEventListener("click", function() {
  logoBox.classList.toggle("animate");
  incrementClicks(); // track user interaction
});

// Scroll to collection when clicking "Explore"
document.getElementById("shopNowBtn").addEventListener("click", function() {
  document.getElementById("suits").scrollIntoView({behavior: "smooth"});
});
