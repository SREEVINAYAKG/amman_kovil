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

/* --- Close popups when clicking the dark background --- */
window.onclick = function(event) {
    let bookingPopup = document.getElementById('bookingPopup');
    let donationPopup = document.getElementById('donationPopup');
    
    if (event.target == bookingPopup) {
        bookingPopup.style.display = 'none';
    }
    if (event.target == donationPopup) {
        donationPopup.style.display = 'none';
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