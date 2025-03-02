// Show Rewarded Ad
function showRewardedAd() {
    show_8678694().then(() => {
        alert("You have watched an ad!");
    }).catch(error => {
        console.error("Error showing ad:", error);
    });
}

// Show Popup Ad
function showPopupAd() {
    show_8678694('pop').then(() => {
        alert("Popup ad completed!");
    }).catch(error => {
        console.error("Error showing popup ad:", error);
    });
}

// Show In-App Interstitial Ad
function showInAppAd() {
    show_8678694({ 
        type: 'inApp', 
        inAppSettings: { 
            frequency: 2, 
            capping: 0.1, 
            interval: 30, 
            timeout: 5, 
            everyPage: false 
        } 
    });
}
