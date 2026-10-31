/* ==========================================================================
   GAMERPLAYGROUND CORE INTERACTIVE LOGIC - PART 3 ENHANCEMENTS
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    console.log("GamerPlayground Advanced DOM Engine Online.");
    
    // Core Operational Initializers
    initializeShoppingEngine();
    initializeValidationEngines();
    initializeInteractiveLightbox();
    initializeMapWidget();
});

/* --------------------------------------------------------------------------
   🛒 1. SHOPPING CART ENGINE & ADVANCED DOM MANIPULATION
   -------------------------------------------------------------------------- */
function initializeShoppingEngine() {
    let cartCount = 0;
    const buyButtons = document.querySelectorAll(".buy-btn");
    if (buyButtons.length === 0) return;

    const navBar = document.querySelector("nav");
    if (navBar) {
        // Advanced DOM Manipulation: Constructing a reactive UI badge completely in memory
        const cartBadge = document.createElement("span");
        cartBadge.id = "cart-counter-display";
        cartBadge.className = "fade-in-element";
        cartBadge.innerHTML = ` &nbsp;&nbsp;|&nbsp;&nbsp; 🛒 Cart: <strong style="color: #ff4757;">0</strong> items`;
        navBar.appendChild(cartBadge);
        
        buyButtons.forEach((button, index) => {
            button.addEventListener("click", () => {
                cartCount++;
                const counterValue = cartBadge.querySelector("strong");
                if (counterValue) counterValue.textContent = cartCount;
                
                // Interaction Feedback Animations
                button.textContent = "🎮 Added!";
                button.classList.add("btn-success-flash");
                
                setTimeout(() => {
                    button.textContent = "Buy Now";
                    button.classList.remove("btn-success-flash");
                }, 1000);
            });
        });
    }
}

/* --------------------------------------------------------------------------
   🖼️ 2. INTERACTIVE GALLEY LIGHTBOX INTERFACE
   -------------------------------------------------------------------------- */
function initializeInteractiveLightbox() {
    const gridImages = document.querySelectorAll(".product-card img");
    if (gridImages.length === 0) return;

    // Advanced DOM Manipulation: Generating overlay modal interface structural elements
    const lightboxModal = document.createElement("div");
    lightboxModal.id = "custom-lightbox-modal";
    
    const lightboxImg = document.createElement("img");
    const closeBtn = document.createElement("span");
    closeBtn.id = "lightbox-close-trigger";
    closeBtn.innerHTML = "&times;"; // Styled X character
    
    lightboxModal.appendChild(closeBtn);
    lightboxModal.appendChild(lightboxImg);
    document.body.appendChild(lightboxModal);

    // Bind event hooks to transform grid images to lightboxed states
    gridImages.forEach(img => {
        img.style.cursor = "zoom-in";
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxModal.classList.add("modal-active");
        });
    });

    // Dismiss active lightbox modal container mechanisms
    closeBtn.addEventListener("click", () => lightboxModal.classList.remove("modal-active"));
    lightboxModal.addEventListener("click", (e) => {
        if (e.target === lightboxModal) lightboxModal.classList.remove("modal-active");
    });
}

/* --------------------------------------------------------------------------
   🗺️ 3. INTERACTIVE LOCATION MAP IMPLEMENTATION
   -------------------------------------------------------------------------- */
function initializeMapWidget() {
    const locationSection = document.querySelector(".location-card");
    if (!locationSection) return;

    // Advanced DOM Manipulation: Dynamically assembling an isolated iframe widget wrapper
    const mapContainer = document.createElement("div");
    mapContainer.id = "interactive-map-frame";
    mapContainer.style.marginTop = "20px";
    mapContainer.style.borderRadius = "6px";
    mapContainer.style.overflow = "hidden";

    // Embed an asynchronous localized high-resolution Google Maps platform lookup framework 
    mapContainer.innerHTML = `
        <iframe 
            width="100%" 
            height="250" 
            frameborder="0" 
            style="border:0;" 
            src="https://google.com" 
            allowfullscreen>
        </iframe>`;
    
    locationSection.appendChild(mapContainer);
}

/* --------------------------------------------------------------------------
   📝 4. INTERACTIVE SUBMISSION INTERCEPTORS
   -------------------------------------------------------------------------- */
function initializeValidationEngines() {
    const contactForm = document.querySelector("#contact form");
    const tradeForm = document.querySelector("#trade form");

    if (contactForm) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert(`🎮 Message Transmitted!\n\nA distribution hub coordinator will contact you via email shortly.`);
            contactForm.reset();
        });
    }

    if (tradeForm) {
        tradeForm.addEventListener("submit", (e) => {
            e.preventDefault();
            alert("💿 Appraisal Request Filed!\n\nOur validation team is scanning internal grading matrices.");
            tradeForm.reset();
        });
    }
}
