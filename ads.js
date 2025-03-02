<!DOCTYPE html>
<html lang="en">
<head>

    <script src="//whephiwums.com/sdk.js" data-zone="8678694" data-sdk="show_8678694"></script>

    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ad Reward System</title>

    <style>
        body {
            margin: 0;
            padding: 0;
            background-color: #121212;
            color: #fff;
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }
        .container {
            text-align: center;
            background: #1f1f1f;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.5);
            width: 300px;
        }
        .container h1 {
            font-size: 20px;
            color: green;
            margin-bottom: 10px;
        }
        .buttons button {
            width: 90%;
            margin: 5px 0;
            padding: 10px;
            font-size: 14px;
            border: none;
            border-radius: 5px;
            color: white;
            background: green;
            cursor: pointer;
        }
        .buttons button:hover {
            background: darkorange;
        }
    </style>

</head>
<body>

    <div class="container">
        <h1>Auto MoneTag Ads</h1>
        <p>Watched Ads: <span id="watched-ads">0</span></p>
        <p>Earned Points: <span id="earned-points">0</span></p>

        <div class="buttons">
            <button onclick="showRewardedAd()">Watch Ad</button>
            <button onclick="showRewardedPopup()">Watch Popup Ad</button>
        </div>
    </div>

    <script>
        let watchedAdsCount = 0;
        let earnedPoints = 0.00;

        // Load stored data
        if (localStorage.getItem('watchedAdsCount')) {
            watchedAdsCount = parseInt(localStorage.getItem('watchedAdsCount'));
            earnedPoints = parseFloat(localStorage.getItem('earnedPoints'));

            document.getElementById('watched-ads').textContent = watchedAdsCount;
            document.getElementById('earned-points').textContent = earnedPoints.toFixed(2);
        }

        function showRewardedAd() {
            if (typeof show_8678694 === "function") {
                show_8678694().then(() => {
                    rewardUser();
                }).catch(error => {
                    console.error("Ad error:", error);
                });
            } else {
                console.error("Ad function not available.");
            }
        }

        function showRewardedPopup() {
            if (typeof show_8678694 === "function") {
                show_8678694("pop").then(() => {
                    rewardUser();
                }).catch(error => {
                    console.error("Popup ad error:", error);
                });
            } else {
                console.error("Popup ad function not available.");
            }
        }

        function rewardUser() {
            alert("You have seen an ad! Reward credited.");
            watchedAdsCount++;
            earnedPoints += 0.50;

            document.getElementById("watched-ads").textContent = watchedAdsCount;
            document.getElementById("earned-points").textContent = earnedPoints.toFixed(2);

            localStorage.setItem("watchedAdsCount", watchedAdsCount);
            localStorage.setItem("earnedPoints", earnedPoints.toFixed(2));
        }
    </script>

</body>
</html>
