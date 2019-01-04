function reloadPage()
 {
 window.location.reload()
 }
 

window.onresize = adjustsize;
adjustsize();
function adjustsize(){
	var i = 0;
	var htmlwindow = document.getElementsByTagName("html")[0];
	var hh = window.innerHeight;
	var tab = document.getElementsByClassName("tab");
	var tabc = document.getElementsByClassName("tabcontent");
	if ( hh > 800 ) {
		for( i = 0; i < tabc.length; i++ ) {
			tab[0].style.height= "43px";
			tabc[i].style.height= hh * 1.00 - 43 + "px";
		}
	}
	else if ( hh < 600 ) {
		for( i = 0; i < tabc.length; i++ ) {
			tab[0].style.height= "43px";
			tabc[i].style.height= hh * 1.00 - 43 + "px";
		}
	}
	else {
		for( i = 0; i < tabc.length; i++ ) {
			tab[0].style.height= "43px";
			tabc[i].style.height= hh * 1.00 - 43 + "px";
		}
	}
	var label = document.getElementById("show");
	label.innerHTML = "width = "+window.innerWidth+";height="+window.innerHeight;
}





