window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
        navbar.style.padding = '10px 50px';
        navbar.style.boxShadow = '0 4px 20px rgba(0,0,0,0.1)';
    } else {
        navbar.style.padding = '20px 50px';
        navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
    }
});
/* --- Pooja Booking Popup --- */
function openPopup() {
    document.getElementById('bookingPopup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('bookingPopup').style.display = 'none';
}

/* --- Donation Popup --- */
function openDonationPopup() {
    document.getElementById('donationPopup').style.display = 'flex';
}
function closeDonationPopup() {
    document.getElementById('donationPopup').style.display = 'none';
}

function openHistoryPopup() {
    document.getElementById('historyPopup').style.display = 'flex';
}
function closeHistoryPopup() {
    document.getElementById('historyPopup').style.display = 'none';
}


/* --- Close popups when clicking the dark background --- */
window.onclick = function(event) {
    let bookingPopup = document.getElementById('bookingPopup');
    let donationPopup = document.getElementById('donationPopup');
    let historyPopup = document.getElementById('historyPopup');
    
    if (event.target == bookingPopup) {
        bookingPopup.style.display = 'none';
    }
    if (event.target == donationPopup) {
        donationPopup.style.display = 'none';
    }
    if (event.target == historyPopup) {
        historyPopup.style.display = 'none';
    }


    let menu = document.getElementById("navLinks");
    let hamburger = document.querySelector(".hamburger");
    
    // If the menu is open, AND the user didn't click inside the menu, AND they didn't click the hamburger icon itself...
    if (menu && menu.classList.contains('active') && !menu.contains(event.target) && !hamburger.contains(event.target)) {
        menu.classList.remove("active"); // Close it!
        hamburger.classList.remove("open"); 
    }
}

function copyToClipboard(element, textToCopy) {
    // Copies the text to the clipboard
    navigator.clipboard.writeText(textToCopy);
    
    // Save the original text
    let originalText = element.innerHTML;
    
    // Change the text to show it worked
    element.innerHTML = "✅ Copied!";
    element.style.color = "#25D366"; 
    
    // Change it back after 2 seconds
    setTimeout(function() {
        element.innerHTML = originalText;
        element.style.color = "var(--primary-color)";
    }, 2000);
}


/* --- Hamburger Menu Logic --- */
function toggleMenu() {
    let menu = document.getElementById("navLinks");
    let hamburger = document.querySelector(".hamburger");
    
    menu.classList.toggle("active");
    hamburger.classList.toggle("open"); // Animates the X!
}

// Automatically close the menu when any link is clicked on a phone!
let navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(function(item) {
    item.addEventListener('click', function() {
        document.getElementById("navLinks").classList.remove("active");
        document.querySelector(".hamburger").classList.remove("open");
    });
});