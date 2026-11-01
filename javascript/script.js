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

    const mapContainer = document.createElement("div");
    mapContainer.id = "interactive-map-frame";
    mapContainer.style.marginTop = "20px";
    mapContainer.style.borderRadius = "6px";
    mapContainer.style.overflow = "hidden";
    mapContainer.style.border = "1px solid #2d2d35";

    mapContainer.innerHTML = `
        <iframe
            width="100%"
            height="250"
            style="border:0; display:block;"
            loading="lazy"
            allowfullscreen
            src="https://maps.google.com/maps?q=Johannesburg&t=&z=13&ie=UTF8&iwloc=&output=embed">
        </iframe>
    `;

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

/* ==========================================================================
   GAMERPLAYGROUND DYNAMIC CONTENT ENGINE - PART 2.2 INCLUSIONS
   ========================================================================== */

// Append catalog dataset array
const GAMES_DATABASE = [
    { id: 1, title: "Assassin's Creed Unity", platform: "PlayStation 4", note: "Region Free", img: "images/ps4_assassinscreedunity.jpg" },
    { id: 2, title: "Red Dead Redemption 2", platform: "PlayStation 4", note: "Premium Edition", img: "images/Red-Dead-Redemption-2-Cover-PS4-Deutsch-German.jpg" },
    { id: 3, title: "Minecraft: PS4 Edition", platform: "PlayStation 4", note: "Classic Case", img: "images/ps4_minecraftplaystation4edition.jpg" },
    { id: 4, title: "Uncharted: The Nathan Drake Collection", platform: "PlayStation 4", note: "3 Games on 1 Disc", img: "images/Uncharted-The-Nathan-Drake-Collection.jpg" },
    { id: 5, title: "Dragon Ball Z: Burst Limit", platform: "Xbox 360", note: "NTSC Original", img: "images/Dragon_Ball_Z_Burst_Limit_DVD_NTSC_Custom_f.jpg" },
    { id: 6, title: "Need For Speed: Most Wanted", platform: "Xbox 360", note: "Rare PAL Edition", img: "images/Need-For-Speed-Most-Wanted-PAL-XBOX360-FULL.jpg" },
    { id: 7, title: "Muzzle Flash", platform: "Xbox", note: "Retro Classic", img: "images/Muzzle-Flash-NTSC-XBOX-FULL.jpg" },
    { id: 8, title: "Forza Motorsport 3", platform: "Xbox 360", note: "Dual-Disc Edition", img: "images/forza_motorsport_3_dvd_cover_xbox360.jpg" },
    { id: 9, title: "Grand Theft Auto V", platform: "PC DVD-ROM", note: "Complete Big Box", img: "images/GTA-V-Grand-Theft-Auto-V-Deutsch.jpg" },
    { id: 10, title: "FIFA 2001", platform: "PC CD-ROM", note: "Vintage Sports", img: "images/fifa 2001 cd.jpg" },
    { id: 11, title: "2010 FIFA World Cup South Africa", platform: "PC DVD-ROM", note: "Official Release", img: "images/2010_Fifa_World_Cup_South_Africa_-_English_f.jpg" },
    { id: 12, title: "Zoo Tycoon 2: Ultimate Collection", platform: "PC DVD-ROM", note: "Jewel Case", img: "images/zoo_tycoon_2_-_zoodirektor_sammlung_d.jpg" }
];
// Ensure image file names are clean, lower-case, hyphenated and descriptive for search indexers
document.addEventListener("DOMContentLoaded", () => {
    renderDynamicCatalog(GAMES_DATABASE);
    initializeSearchAndSort();
});

/* --------------------------------------------------------------------------
   📦 1. DOM FACTORY LOOP (DYNAMIC LOADING ENGINE)
   -------------------------------------------------------------------------- */
function renderDynamicCatalog(itemsToRender) {
    const gridContainer = document.getElementById("dynamic-product-grid");
    if (!gridContainer) return;

    // Clear existing layout cards to prevent overlapping duplicates
    gridContainer.innerHTML = "";

    if (itemsToRender.length === 0) {
        gridContainer.innerHTML = `<p class="no-results-msg" style="grid-column: 1/-1; text-align: center; color: #a0aec0; padding: 40px 0;">No matching physical discs found inside current inventory queries.</p>`;
        return;
    }

    // Advanced DOM Manipulation: Building cards structurally out of raw array parameters
    itemsToRender.forEach(game => {
        const cardElement = document.createElement("div");
        cardElement.className = "product-card fade-in-element";

        cardElement.innerHTML = `
            <img src="${game.img}" alt="${game.title}" style="cursor: zoom-in;">
            <h3>${game.title}</h3>
            <p>${game.platform} | ${game.note}</p>
            <button class="buy-btn">Buy Now</button>
        `;

        gridContainer.appendChild(cardElement);
    });

    // Rebind shopping cart events and image lightbox handlers dynamically to new elements
    if (typeof initializeShoppingEngine === "function") initializeShoppingEngine();
    if (typeof initializeInteractiveLightbox === "function") initializeInteractiveLightbox();

}

/* --------------------------------------------------------------------------
   🔍 2. INTERACTIVE SEARCH & SORT UTILITIES
   -------------------------------------------------------------------------- */
function initializeSearchAndSort() {
    const searchInput = document.getElementById("catalog-search");
    const sortDropdown = document.getElementById("catalog-sort");

    if (!searchInput || !sortDropdown) return;

    function processCatalogTransformations() {
        let workingDataset = [...GAMES_DATABASE];
        const searchString = searchInput.value.toLowerCase().trim();

        // 1. Filter Logic
        if (searchString !== "") {
            workingDataset = workingDataset.filter(game => 
                game.title.toLowerCase().includes(searchString) || 
                game.platform.toLowerCase().includes(searchString)
            );
        }

        // 2. Sorting Logic
        const sortValue = sortDropdown.value;
        if (sortValue === "title-asc") {
            workingDataset.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortValue === "title-desc") {
            workingDataset.sort((a, b) => b.title.localeCompare(a.title));
        } else if (sortValue === "platform") {
            workingDataset.sort((a, b) => a.platform.localeCompare(b.platform));
        }

        // Output mutated transformation results back to the layout canvas
        renderDynamicCatalog(workingDataset);
    }

    // Bind Event Listeners
    searchInput.addEventListener("input", processCatalogTransformations);
    sortDropdown.addEventListener("change", processCatalogTransformations);
}
