window.onresize = adjustsize;
adjustsize();
function adjustsize(){
	var i = 0;
	var htmlwindow = document.getElementsByTagName("html")[0];
	var hh = window.innerHeight;
	var tabpageh = 0.00 * hh;
	var tab = document.getElementsByClassName("tab");
	var tabc = document.getElementsByClassName("tabcontent");
	document.getElementById("pagewithtab").style.marginTop = tabpageh + "px" ;
	if ( hh > 800 ) {
		tab[0].style.height= "52px";
		for( i = 0; i < tabc.length; i++ ) {
			tabc[i].style.height= hh * 1.00 - 52 + "px";
		}
	}
	else {
		tab[0].style.height= "6.5%";
		for( i = 0; i < tabc.length; i++ ) {
			tabc[i].style.height= "93.5%";
		}
	}
	var label = document.getElementById("show");
	label.innerHTML = "width = "+window.innerWidth+";height="+window.innerHeight;
}


function toPercent(point){
    var str=Number(point*100).toFixed(1);
    str+="%";
    return str;
}

window.onload=iniprgr()

function iniprgr(){
	setTimeout("changeWidth(1.0,1.2,0.8)","10")
}

function changeWidth(x,y,z)
{
	var r = x / 1.5;
	var s = y / 1.5;
	var t = z / 1.5;
	elementx=document.getElementById('atkBar')
	{
		elementx.style.width=toPercent(r);
	}
	elementy=document.getElementById('defBar')
	{
		elementy.style.width=toPercent(s);
	}
	elementz=document.getElementById('lifBar')
	{
		elementz.style.width=toPercent(t);
	}
}