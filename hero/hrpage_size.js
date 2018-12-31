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


function toPercent(point){
    var str=Number(point*100).toFixed(1);
    str+="%";
    return str;
}



function changeWidth(x,y,z)
{
	var r = x / 1.5;
	var s = y / 1.5;
	var t = z / 1.5;
	var barx=document.getElementById('atkBar');
	var bary=document.getElementById('defBar');
	var barz=document.getElementById('lifBar');
	var numx=document.getElementById('atknum');
	var numy=document.getElementById('defnum');
	var numz=document.getElementById('lifnum');
	barx.style.width=toPercent(r);
	bary.style.width=toPercent(s);
	barz.style.width=toPercent(t);
	numx.innerHTML = '&times;&nbsp;' + x.toFixed(2);
	numy.innerHTML = '&times;&nbsp;' + y.toFixed(2);
	numz.innerHTML = '&times;&nbsp;' + z.toFixed(2);
}