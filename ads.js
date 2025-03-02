// Ensure the page is fully loaded before running the script
window.onload = function () {
    console.log("Telegram Mini App Loaded");
    loadMonetagScript();
};

// Replace with your Monetag ad script URL
const MONETAG_SCRIPT_URL = "//your-monetag-script-url.js"; 

// Function to dynamically load the Monetag script
function loadMonetagScript() {
    const script = document.createElement("script");
    script.src = MONETAG_SCRIPT_URL;
    script.async = true;
    document.head.appendChild(script);
    console.log("Monetag Script Loaded");
}

// Rewarded Interstitial Ad
function showRewardedInterstitial() {
    if (typeof show_8678694 === "function") {
        show_8678694()
            .then(() => {
                alert("You have seen an ad! Reward granted.");
                // Add your reward logic here
            })
            .catch(error => console.error("Rewarded Interstitial Error:", error));
    } else {
        console.error("Rewarded Interstitial Ad Function Not Found");
    }
}

// Rewarded Popup Ad
function showRewardedPopup() {
    if (typeof show_8678694 === "function") {
        show_8678694("pop")
            .then(() => {
                alert("You have seen a popup ad!");
                // Add user reward logic here
            })
            .catch(error => console.error("Rewarded Popup Error:", error));
    } else {
        console.error("Rewarded Popup Ad Function Not Found");
    }
}

// In-App Interstitial Ad
function showInAppInterstitial() {
    if (typeof show_8678694 === "function") {
        show_8678694({
            type: "inApp",
            inAppSettings: {
                frequency: 2,
                capping: 0.1,
                interval: 30,
                timeout: 5,
                everyPage: false
            }
        })
        .then(() => console.log("In-App Interstitial Ad Triggered"))
        .catch(error => console.error("In-App Interstitial Error:", error));
    } else {
        console.error("In-App Interstitial Ad Function Not Found");
    }
}
