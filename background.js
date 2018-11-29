alert("Special checker loaded");
var product="asdasdasdsad";

function check2() {
	chrome.tabs.sendMessage(activeTab.id, {"message": "check"}, );
}
function loaded() {
	alert(this.responseText)
}

function error() {
	alert("Error fetching specials");
}
function check() {
var url = "https://shop.coles.com.au/a/a-national/specials/search/"+product+"?pageNumber=1";

var req = new XMLHttpRequest();
req.addEventListener("load", loaded);
req.addEventListener("error", error);
req.open("GET", url);
req.send();
}
check();
setInterval(check, 60000);