/* var product="maxibon";

function check2() {
	chrome.tabs.sendMessage(activeTab.id, {"message": "check"}, );
}
function loaded() {
	console.log(this.responseText);
	if (!this.responseText.includes("\"totalCount\":0")) {
		alert(product+" is on special!");
	} else alert(":(");
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
*/