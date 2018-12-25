var hrid = new Array();
hrid[0] = "sys";
hrid[1] = "kz";
hrid[2] = "jt";
hrid[3] = "mg";
hrid[4] = "cg";
hrid[5] = "cm";
hrid[6] = "jn";
hrid[7] = "nt";
hrid[8] = "hm";
hrid[9] = "fg";
hrid[10] = "rb";
hrid[11] = "gs";
hrid[12] = "gd";
hrid[13] = "pg";
hrid[14] = "gb";
hrid[15] = "mk";
hrid[16] = "dv";
hrid[17] = "ex";
hrid[18] = "sr";
hrid[19] = "sc";
hrid[20] = "sl";
hrid[21] = "ig";
hrid[22] = "tt";
hrid[23] = "ky";
hrid[24] = "re";
hrid[25] = "rr";
hrid[26] = "gk";
hrid[27] = "gg";
hrid[28] = "rn";
hrid[29] = "ln";
hrid[30] = "eg";
hrid[31] = "si";
hrid[32] = "ng";
hrid[33] = "dn";
hrid[34] = "dq";
hrid[35] = "stop";

function idtonm(x) {
	var nm = 0;
	for( nm=0;hrid[nm]!=x;nm++){
	}
	return nm;
}

	
var imgurl=new Array();

	imgurl[0] = "img/hero_small/mg.png";
	imgurl[1] = "img/hero_small/kz.png";
	imgurl[2] = "img/hero_small/jt.png";
	imgurl[3] = "img/hero_small/mg.png";
	imgurl[4] = "img/hero_small/cg.png";
	imgurl[5] = "img/hero_small/cm.png";
	imgurl[6] = "img/hero_small/jn.png";
	imgurl[7] = "img/hero_small/nt.png";
	imgurl[8] = "img/hero_small/hm.png";
	imgurl[9] = "img/hero_small/fg.png";
	imgurl[10] = "img/hero_small/rb.png";
	imgurl[11] = "img/hero_small/gs.png";
	imgurl[12] = "img/hero_small/gd.png";
	imgurl[13] = "img/hero_small/pg.png";
	imgurl[14] = "img/hero_small/gb.png";
	imgurl[15] = "img/hero_small/mk.png";
	imgurl[16] = "img/hero_small/dv.png";
	imgurl[17] = "img/hero_small/ex.png";
	imgurl[18] = "img/hero_small/sr.png";
	imgurl[19] = "img/hero_small/sc.png";
	imgurl[20] = "img/hero_small/sl.png";
	imgurl[21] = "img/hero_small/ig.png";
	imgurl[22] = "img/hero_small/tt.png";
	imgurl[23] = "img/hero_small/ky.png";
	imgurl[24] = "img/hero_small/re.png";
	imgurl[25] = "img/hero_small/rr.png";
	imgurl[26] = "img/hero_small/gk.png";
	imgurl[27] = "img/hero_small/gg.png";
	imgurl[28] = "img/hero_small/rn.png";
	imgurl[29] = "img/hero_small/ln.png";
	imgurl[30] = "img/hero_small/eg.png";
	imgurl[31] = "img/hero_small/si.png";
	imgurl[32] = "img/hero_small/ng.png";
	imgurl[33] = "img/hero_small/dn.png";
	imgurl[34] = "img/hero_small/dq.png";

var imgurl_on=new Array();
imgurl_on[1] = "img/hero_small_on/kz.png";
imgurl_on[2] = "img/hero_small_on/jt.png";
imgurl_on[3] = "img/hero_small_on/mg.png";
imgurl_on[4] = "img/hero_small_on/cg.png";
imgurl_on[5] = "img/hero_small_on/cm.png";
imgurl_on[6] = "img/hero_small_on/jn.png";
imgurl_on[7] = "img/hero_small_on/nt.png";
imgurl_on[8] = "img/hero_small_on/hm.png";
imgurl_on[9] = "img/hero_small_on/fg.png";
imgurl_on[10] = "img/hero_small_on/rb.png";
imgurl_on[11] = "img/hero_small_on/gs.png";
imgurl_on[12] = "img/hero_small_on/gd.png";
imgurl_on[13] = "img/hero_small_on/pg.png";
imgurl_on[14] = "img/hero_small_on/gb.png";
imgurl_on[15] = "img/hero_small_on/mk.png";
imgurl_on[16] = "img/hero_small_on/dv.png";
imgurl_on[17] = "img/hero_small_on/ex.png";
imgurl_on[18] = "img/hero_small_on/sr.png";
imgurl_on[19] = "img/hero_small_on/sc.png";
imgurl_on[20] = "img/hero_small_on/sl.png";
imgurl_on[21] = "img/hero_small_on/ig.png";
imgurl_on[22] = "img/hero_small_on/tt.png";
imgurl_on[23] = "img/hero_small_on/ky.png";
imgurl_on[24] = "img/hero_small_on/re.png";
imgurl_on[25] = "img/hero_small_on/rr.png";
imgurl_on[26] = "img/hero_small_on/gk.png";
imgurl_on[27] = "img/hero_small_on/gg.png";
imgurl_on[28] = "img/hero_small_on/rn.png";
imgurl_on[29] = "img/hero_small_on/ln.png";
imgurl_on[30] = "img/hero_small_on/eg.png";
imgurl_on[31] = "img/hero_small_on/si.png";
imgurl_on[32] = "img/hero_small_on/ng.png";
imgurl_on[33] = "img/hero_small_on/dn.png";
imgurl_on[34] = "img/hero_small_on/dq.png";
	

charaimg_initialall()

function charaimg_initialall() {
	var i = 1;
	var id = "start";
	for( var i = 1; hrid[i]!="stop"; i++){
		id = hrid[i];
		charaimg_ini(id)
	}
}

function charaimg_ini(x) {
	var hrnm = idtonm(x);
	document.getElementById('hrlist_' + x ).src=imgurl[hrnm];
	}
	
function charaimg(x) {
	var hrnm = idtonm(x);
	document.getElementById('hrlist_' + x ).src=imgurl_on[hrnm];
	}

function charaimg_bk(x) {
	var hrnm = idtonm(x);
	document.getElementById('hrlist_' + x ).src=imgurl[hrnm];
	}