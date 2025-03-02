// Function to show Rewarded Interstitial Ad
function showRewardedInterstitial() {
    if (typeof show_8678694 === "function") {
        show_8678694()
            .then(() => {
                alert("You have seen an ad! Reward granted.");
            })
            .catch(error => console.error("Rewarded Interstitial Error:", error));
    } else {
        console.error("Rewarded Interstitial Ad Function Not Found");
    }
}

// Function to show Rewarded Popup Ad
function showRewardedPopup() {
    if (typeof show_8678694 === "function") {
        show_8678694("pop")
            .then(() => {
                alert("You have seen a popup ad!");
            })
            .catch(error => console.error("Rewarded Popup Error:", error));
    } else {
        console.error("Rewarded Popup Ad Function Not Found");
    }
}

// Function to show In-App Interstitial Ad
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

// Function to trigger all ads at once
function showAllAds() {
    showRewardedInterstitial();
    showRewardedPopup();
    showInAppInterstitial();
}
