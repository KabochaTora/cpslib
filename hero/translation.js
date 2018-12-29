
function showjpver() {
	var i=0;
	var cnver = document.getElementsByClassName("cnver");
	var jpver = document.getElementsByClassName("jpver");
	for(i=0;i<cnver.length;i++) {
		cnver[i].style.display="none";
	}
	for(i=0;i<jpver.length;i++) {
		jpver[i].style.display="table-cell";
	}
}

function showcnver() {
	var i=0;
	var cnver = document.getElementsByClassName('cnver');
	var jpver = document.getElementsByClassName('jpver');
	for(i=0;i<jpver.length;i++) {
		jpver[i].style.display="none";
	}
	for(i=0;i<jpver.length;i++) {
		cnver[i].style.display="table-cell";
	}
}