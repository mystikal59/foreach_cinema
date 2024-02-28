document.addEventListener("DOMContentLoaded", function() {
    setTimeout(showAdBanner, 3000);
});

function showAdBanner() {
    var adBanner = document.getElementById("adBanner");
    adBanner.style.display = "block";
}

function closeAd() {
    var adBanner = document.getElementById("adBanner");
    adBanner.style.display = "none";
}