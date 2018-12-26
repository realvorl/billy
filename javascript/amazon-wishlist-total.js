// URL to match: *amazon.de/*/wishlist/*

var majorSpans = document.getElementsByClassName("a-price-whole");
var minorSpans = document.getElementsByClassName("a-price-fraction");
var currencySymbol = document.getElementsByClassName("a-price-symbol")[0];

major=[];
minor=[];

sum = 0;

for(var i=0; i < majorSpans.length; i++) {
    major.push (majorSpans[i].innerText.substring(0, majorSpans[i].innerText.indexOf(".")));
    minor.push (majorSpans[i].innerText);
}

for(var i=0; i < major.length; i++) {
    sum += parseInt(major[i]);
    sum += (parseInt(minor[i]) / 100);
}

console.log("your wishlist costs: " + sum + " " + currencySymbol.innerText);
