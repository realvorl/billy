var majorSpans = document.getElementsByClassName("a-price-whole");
var minorSpans = document.getElementsByClassName("a-price-fraction");
var currencySymbol = document.getElementsByClassName("a-price-symbol")[0];

major=[];
minor=[];

sum = 0;

for(var i=0; i < majorSpans.length; i++) {
    major.push (majorSpans[i].innerText.substring(0, majorSpans[i].innerText.indexOf(".")));
    minor.push (minorSpans[i].innerText);
}

for(var i=0; i < major.length; i++) {
    sum += parseInt(major[i]);
    sum += (parseInt(minor[i]) / 100);
}

console.log("your wishlist costs: " + sum + " " + currencySymbol.innerText);
var listTitle = document.getElementById("profile-list-name");
var oldHtml = listTitle.innerHTML;
listTitle.innerHTML = oldHtml + "<span style='color: #008400; text-weight: bolder;'> ( " + sum.toFixed(2) + " " + currencySymbol.innerText + " ) </span>";
