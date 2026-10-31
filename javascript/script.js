/* ==========================================================================
   GAMERPLAYGROUND UTILITY ENGINE - EXTERNAL JAVASCRIPT
   ========================================================================== */

// Ensures the DOM structure is fully mounted before querying elements
document.addEventListener("DOMContentLoaded", () => {
    console.log("GamerPlayground External Engine Operational.");
    
    initializeShoppingEngine();
    initializeValidationEngines();
});

/* --------------------------------------------------------------------------
   🛒 1. SHOPPING CART INTERACTIVE STATE TRACKER
   -------------------------------------------------------------------------- */
function initializeShoppingEngine() {
    let cartCount = 0;
    const buyButtons = document.querySelectorAll(".buy-btn");
    
    // Safety check: only execute if product cards are rendering on page
    if (buyButtons.length === 0) return;

    // Proactively inject a visible Cart UI indicator into the Navigation Bar dynamically
    const navBar = document.querySelector("nav");
    if (navBar) {
        const cartBadge = document.createElement("span");
        cartBadge.id = "cart-counter-display";
        cartBadge.innerHTML = ` &nbsp;&nbsp;|&nbsp;&nbsp; 🛒 Cart: <strong style="color: #ff4757;">0</strong> items`;
        navBar.appendChild(cartBadge);
        
        // Loop through all product buy hooks
        buyButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                cartCount++;
                
                // Update navigation text metrics instantly
                const counterValue = cartBadge.querySelector("strong");
                if (counterValue) counterValue.textContent = cartCount;
                
                // Provide visual interactive response feedback on the clicked button
                const originalText = button.textContent;
                button.textContent = "🎮 Added to Cart!";
                button.style.backgroundColor = "#2ed573"; // Changes to gaming green
                
                // Reset button appearance gracefully after a short delay
                setTimeout(() => {
                    button.textContent = originalText;
                    button.style.backgroundColor = ""; // Restores baseline crimson CSS
                }, 1200);
                
                console.log(`Product slot [Index ${index}] appended to virtual checkout payload.`);
            });
        });
    }
}

/* --------------------------------------------------------------------------
   📝 2. INTERACTIVE SUBMISSION INTERCEPTORS (CONTACT & TRADE FORMS)
   -------------------------------------------------------------------------- */
function initializeValidationEngines() {
    const contactForm = document.querySelector("#contact form");
    const tradeForm = document.querySelector("#trade form");

    // Intercept Contact Form actions
    if (contactForm) {
        contactForm.addEventListener("submit", (event) => {
            event.preventDefault(); // HALT default unstyled browser reload routines
            
            const userName = document.getElementById("user-name").value;
            const userEmail = document.getElementById("user-email").value;
            
            // Build dynamic validation overlay modal message layout
            alert(`🎮 Thank you, ${userName}!\n\nYour message regarding disc verification support metrics has been securely parsed. A distribution coordinator will reach out to ${userEmail} within 24 hours.`);
            
            contactForm.reset(); // Safely wipe input logs clean
        });
    }

    // Intercept Trade Valuation actions
    if (tradeForm) {
        tradeForm.addEventListener("submit", (event) => {
            event.preventDefault();
            
            const gameTitle = document.getElementById("trade-title").value;
            const conditionElement = document.querySelector('input[name="user-cond"]:checked');
            const payoutMethod = document.getElementById("payout-pref").value;
            
            if (!conditionElement) {
                alert("⚠️ Please select the estimated disc physical grade condition parameter before submission.");
                return;
            }
            
            let valuationMessage = `💿 Appraisal Request Submitted!\n\nGame: ${gameTitle}\nGrade Condition: ${conditionElement.value.toUpperCase()}\n`;
            
            if (payoutMethod === "credit") {
                valuationMessage += `Preferred Payout: Store Credit (Your 15% bonus margin estimation will be applied manually upon physical disc surface assessment verification).`;
            } else {
                valuationMessage += `Preferred Payout: Direct Bank Transfer EFT.`;
            }
            
            alert(valuationMessage);
            tradeForm.reset();
        });
    }
}
