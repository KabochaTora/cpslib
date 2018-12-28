window.onload = alertclientwindow()
function alertclientwindow(){
};

window.onresize = adjuest;
adjuest();
function adjuest(){
	
	var htmlwindow = document.getElementsByTagName("html")[0];
	var hh = htmlwindow.clientHeight;
	var tabpageh = 0.02 * hh;
	var tab = document.getElementsByClassName("tab");
	var tabc = document.getElementsByClassName("tabcontent");
	document.getElementById("pagewithtab").style.marginTop = tabpageh + "px" ;
	if ( hh > 800 ) {
		tab[0].style.height= "52px";
		var i = 0;
		for( i = 0; i < tabc.length; i++ ) {
			tabc[i].style.height= hh * 0.97 - 52 + "px";
		}
	}
	else {
		alert("tast")
		tab[0].style.height= "6.5%";
		var i = 0;
		for( i = 0; i < tabc.length; i++ ) {
			tabc[i].style.height= "93.5%";
		}
	}
	alertclientwindow()
	var label = document.getElementById("show");
	label.innerHTML = "width = "+window.innerWidth+";height="+window.innerHeight;
	}