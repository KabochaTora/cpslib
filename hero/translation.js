showcnver()

function showjpver() {
	var i=0;
	var cnver = document.getElementsByClassName("cnver");
	var jpver = document.getElementsByClassName("jpver");
	var cnlrc = document.getElementsByClassName("lrccn");
	for(i=0;i<cnver.length;i++) {
		cnver[i].style.display="none";
	}
	for(i=0;i<jpver.length;i++) {
		jpver[i].style.display="inline";
	}
	for(i=0;i<cnlrc.length;i++) {
		cnlrc[i].style.display="none";
	}
		
}

function showcnver() {
	var i=0;
	var cnver = document.getElementsByClassName('cnver');
	var jpver = document.getElementsByClassName('jpver');
	var cnlrc = document.getElementsByClassName("lrccn");
	for(i=0;i<jpver.length;i++) {
		jpver[i].style.display="none";
	}
	for(i=0;i<jpver.length;i++) {
		cnver[i].style.display="inline";
	}
	for(i=0;i<cnlrc.length;i++) {
		cnlrc[i].style.display="table-row";
	}
}