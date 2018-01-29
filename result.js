window.onload = function() {
	var params = decodeURI(location.search);
	params = params.substring(1);
	var paramArray = [];
	paramArray = params.split("&");
	var tableContent = "";
	for(var i in paramArray) {
		var dataStr = paramArray[i];
		var keyValue = [];
		keyValue = dataStr.split("=");
		var tr = document.createElement("tr");
		var tdName = document.createElement("td");
		tdName.innerHTML = keyValue[0];
		var tdValue = document.createElement("td");
		tdValue.innerHTML = keyValue[1];
		tr.appendChild(tdName);
		tr.appendChild(tdValue);
		var e = document.getElementById("test");
		e.appendChild(tr);
