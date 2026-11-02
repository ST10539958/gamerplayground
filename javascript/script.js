/* ==========================================================================
   GAMERPLAYGROUND CORE LAYOUT ENGINE - HTML, CSS & JS INTEGRATED
   ========================================================================== */

// 1. Unified Shared Memory Register
let globalCartCount = 0;

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

// 2. Single Unified Initialization Framework
document.addEventListener("DOMContentLoaded", () => {
    console.log("GamerPlayground Advanced DOM Engine Online.");
    
    // Draw persistent elements first
    setupStaticCartBadge();
    initializeMapWidget();
    initializeValidationEngines();
    
    // Mount product structures if running on products.html
    const gridContainer = document.getElementById("dynamic-product-grid");
    if (gridContainer) {
        renderDynamicCatalog(GAMES_DATABASE);
        initializeSearchAndSort();
    }
});

/* --------------------------------------------------------------------------
   🛒 1. NAVIGATION CART DISPLAY ENGINE
   -------------------------------------------------------------------------- */
function setupStaticCartBadge() {
    const navBar = document.querySelector("nav");
    if (!navBar) return;

    let cartBadge = document.getElementById("cart-counter-display");
    if (!cartBadge) {
        cartBadge = document.createElement("span");
        cartBadge.id = "cart-counter-display";
        cartBadge.className = "fade-in-element";
        navBar.appendChild(cartBadge);
    }
    
    cartBadge.innerHTML = ` &nbsp;&nbsp;|&nbsp;&nbsp; 🛒 Cart: <strong style="color: #ff4757;">${globalCartCount}</strong> items`;
}

function bindProductPurchaseEvents() {
    const buyButtons = document.querySelectorAll(".buy-btn");
    const cartBadge = document.getElementById("cart-counter-display");
    if (!cartBadge || buyButtons.length === 0) return;

    buyButtons.forEach(button => {
        button.addEventListener("click", () => {
            globalCartCount++;
            
            // Sync text update across global nav element
            const counterValue = cartBadge.querySelector("strong");
            if (counterValue) counterValue.textContent = globalCartCount;
            
            // Quick flash interaction notification change state
            button.textContent = "🎮 Added!";
            button.classList.add("btn-success-flash");
            
            setTimeout(() => {
                button.textContent = "Buy Now";
                button.classList.remove("btn-success-flash");
            }, 1000);
        });
    });
}

/* --------------------------------------------------------------------------
   📦 2. RESPONSIVE PRODUCT LISTING POPULATOR
   -------------------------------------------------------------------------- */
function renderDynamicCatalog(itemsToRender) {
    const gridContainer = document.getElementById("dynamic-product-grid");
    if (!gridContainer) return;

    gridContainer.innerHTML = "";

    if (itemsToRender.length === 0) {
        gridContainer.innerHTML = `<p class="no-results-msg" style="grid-column: 1/-1; text-align: center; color: #a0aec0; padding: 40px 0;">No matching physical discs found inside current inventory queries.</p>`;
        return;
    }

    itemsToRender.forEach(game => {
        const cardElement = document.createElement("div");
        cardElement.className = "product-card fade-in-element";

        cardElement.innerHTML = `
            <img src="${game.img}" alt="${game.title} original box case art" style="cursor: zoom-in;">
            <h3>${game.title}</h3>
            <p>${game.platform} | ${game.note}</p>
            <button class="buy-btn">Buy Now</button>
        `;

        gridContainer.appendChild(cardElement);
    });

    // Rebind operational actions smoothly to new nodes
    bindProductPurchaseEvents();
    initializeInteractiveLightbox();
}

/* --------------------------------------------------------------------------
   🔍 3. SEARCH & ALPHANUMERIC SORT ENGINE
   -------------------------------------------------------------------------- */
function initializeSearchAndSort() {
    const searchInput = document.getElementById("catalog-search");
    const sortDropdown = document.getElementById("catalog-sort");

    if (!searchInput || !sortDropdown) return;

    function processCatalogTransformations() {
        let workingDataset = [...GAMES_DATABASE];
        const searchString = searchInput.value.toLowerCase().trim();

        if (searchString !== "") {
            workingDataset = workingDataset.filter(game => 
                game.title.toLowerCase().includes(searchString) || 
                game.platform.toLowerCase().includes(searchString)
            );
        }

        const sortValue = sortDropdown.value;
        if (sortValue === "title-asc") {
            workingDataset.sort((a, b) => a.title.localeCompare(b.title));
        } else if (sortValue === "title-desc") {
            workingDataset.sort((a, b) => b.title.localeCompare(a.title));
        } else if (sortValue === "platform") {
            workingDataset.sort((a, b) => a.platform.localeCompare(b.platform));
        }

        renderDynamicCatalog(workingDataset);
    }

    searchInput.addEventListener("input", processCatalogTransformations);
    sortDropdown.addEventListener("change", processCatalogTransformations);
}

/* --------------------------------------------------------------------------
   🖼️ 4. STABLE INTERACTIVE MODAL LIGHTBOX
   -------------------------------------------------------------------------- */
function initializeInteractiveLightbox() {
    const gridImages = document.querySelectorAll(".product-card img");
    if (gridImages.length === 0) return;

    // Check if backdrop element exists to block stack duplications
    let lightboxModal = document.getElementById("custom-lightbox-modal");
    let lightboxImg, closeBtn;

    if (!lightboxModal) {
        lightboxModal = document.createElement("div");
        lightboxModal.id = "custom-lightbox-modal";
        
        lightboxImg = document.createElement("img");
        closeBtn = document.createElement("span");
        closeBtn.id = "lightbox-close-trigger";
        closeBtn.innerHTML = "&times;";
        
        lightboxModal.appendChild(closeBtn);
        lightboxModal.appendChild(lightboxImg);
        document.body.appendChild(lightboxModal);

        closeBtn.addEventListener("click", () => lightboxModal.classList.remove("modal-active"));
        lightboxModal.addEventListener("click", (e) => {
            if (e.target === lightboxModal) lightboxModal.classList.remove("modal-active");
        });
    } else {
        lightboxImg = lightboxModal.querySelector("img");
    }

    gridImages.forEach(img => {
        img.style.cursor = "zoom-in";
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxModal.classList.add("modal-active");
        });
    });
}

/* --------------------------------------------------------------------------
   🗺️ 5. INTERACTIVE LOCATION MAP IMPLEMENTATION
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
   📝 6. SUBMISSION FIELD INTERCEPTORS
-------------------------------------------------------------------------- */
function initializeValidationEngines() {
const contactForm = document.querySelector("#contact form");
const tradeForm = document.querySelector("#trade form");
//if (contactForm && !contactForm.dataset.hooked) {
/*
contactForm.dataset.hooked = "true";
contactForm.addEventListener("submit", (e) => {
e.preventDefault();
alert("🎮 Message Transmitted!\n\nA distribution hub coordinator will contact you via email shortly.");
contactForm.reset();
});
}
*/
if (tradeForm && !tradeForm.dataset.hooked) {
tradeForm.dataset.hooked = "true";
tradeForm.addEventListener("submit", (e) => {
e.preventDefault();
alert("💿 Appraisal Request Filed!\n\nOur validation team is scanning internal grading matrices.");
tradeForm.reset();
});
}
}