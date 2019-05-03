function bubble1_show() {
	document.getElementById('content_1').style.visibility = "visible";
	document.getElementById('content_1').style.animation = "contentHover .4s ease-in 0s 1 normal";
	document.getElementById('house__plant__1').style.animation = "plantHiding .4s ease-in 0s 1 normal";
	document.getElementById('house__plant__1').style.opacity = "0";
}
function bubble1_hide() {
	document.getElementById('content_1').style.visibility = "hidden";
	document.getElementById('content_1').style.animation = "none";
	document.getElementById('house__plant__1').style.animation = "none";
	document.getElementById('house__plant__1').style.opacity = "1";
} 
//======================================================================
//======================================================================
function bubble2_show() {
	document.getElementById('content_2').style.visibility = "visible";
	document.getElementById('content_2').style.animation = "contentHover .4s ease-in 0s 1 normal";
	document.getElementById('house__plant__2').style.animation = "plantHiding .4s ease-in 0s 1 normal";
	document.getElementById('house__plant__2').style.opacity = "0";
}
function bubble2_hide() {
	document.getElementById('content_2').style.visibility = "hidden";
	document.getElementById('content_2').style.animation = "none";
	document.getElementById('house__plant__2').style.animation = "none";
	document.getElementById('house__plant__2').style.opacity = "1";
}
//======================================================================
//======================================================================
function bubble3_show() {
	document.getElementById('content_3').style.visibility = "visible";
	document.getElementById('content_3').style.animation = "contentHover .4s ease-in 0s 1 normal";
	document.getElementById('house__plant__3').style.animation = "plantHiding .4s ease-in 0s 1 normal";
	document.getElementById('house__plant__3').style.opacity = "0";
}
function bubble3_hide() {
	document.getElementById('content_3').style.visibility = "hidden";
	document.getElementById('content_3').style.animation = "none";
	document.getElementById('house__plant__3').style.animation = "none";
	document.getElementById('house__plant__3').style.opacity = "1";
}
//======================================================================
//======================================================================
function bubble4_show() {
	document.getElementById('content_4').style.visibility = "visible";
	document.getElementById('content_4').style.animation = "contentHover .4s ease-in 0s 1 normal";
	document.getElementById('house__plant__4').style.animation = "plantHiding .4s ease-in 0s 1 normal";
	document.getElementById('house__plant__4').style.opacity = "0";
}
function bubble4_hide() {
	document.getElementById('content_4').style.visibility = "hidden";
	document.getElementById('content_4').style.animation = "none";
	document.getElementById('house__plant__4').style.animation = "none";
	document.getElementById('house__plant__4').style.opacity = "1";
}


/* ===================================================================*/
var imageCounter = 1;
var total = 8;

function imageSlide(x) {
	var image = document.getElementById('slideImg');
	imageCounter = imageCounter + x;
	if(imageCounter > total) { imageCounter = 1;}
	if(imageCounter < 1) { imageCounter = total;}
	image.src = "images/img" + imageCounter + ".jpg";
}
window.setInterval(function imageSlideA() {
	var image = document.getElementById('slideImg');
	imageCounter = imageCounter + 1;
	if(imageCounter > total) { imageCounter = 1;}
	if(imageCounter < 1) { imageCounter = total;}
	image.src = "images/img" + imageCounter + ".jpg";
}, 5000);

function parallax() {
	var par_layer = document.getElementById('butterfly_1');
	var par_layer2 = document.getElementById('aboutUsBackgroundLayer');
	par_layer.style.top = -(window.pageYOffset / 4) + 'px';
	par_layer2.style.top = -(window.pageYOffset / 4) + 'px';
}
window.addEventListener("scroll", parallax, false);



// =================== REGISTRATION ========================

function forwardButtonReg() {
	document.getElementById('registerForward').style.background = "navajowhite";
	document.getElementById('registerForward').style.color = "rgb(45,15,0)";
	document.getElementById('registerBackward').style.background = "navajowhite";
	document.getElementById('registerBackward').style.color = "rgb(45,15,0)";
}
function forwardButtonRegBack() {
	document.getElementById('registerForward').style.background = "rgb(70,25,0)";
	document.getElementById('registerForward').style.color = "navajowhite";
	document.getElementById('registerBackward').style.background = "rgb(70,25,0)";
	document.getElementById('registerBackward').style.color = "navajowhite";
}
function forwardButtonRegBG() {
	document.getElementById('registerForwardBG').style.background = "navajowhite";
	document.getElementById('registerForwardBG').style.color = "rgb(45,15,0)";
	document.getElementById('registerBackwardBG').style.background = "navajowhite";
	document.getElementById('registerBackwardBG').style.color = "rgb(45,15,0)";
}
function forwardButtonRegBackBG() {
	document.getElementById('registerForwardBG').style.background = "rgb(70,25,0)";
	document.getElementById('registerForwardBG').style.color = "navajowhite";
	document.getElementById('registerBackwardBG').style.background = "rgb(70,25,0)";
	document.getElementById('registerBackwardBG').style.color = "navajowhite";
}
function forwardButtonAnimation() {

	document.getElementById('tableRegister').style.animation = "tableRegisterFirst .7s ease-in-out 0s 1 normal";
	document.getElementById('tableRegister').style.visibility = "hidden";
	document.getElementById('registerForward').style.transition = "all 0s ease";
	document.getElementById('registerForward').style.visibility = "hidden";
	document.getElementById('tableRegister2').style.animation = "tableRegisterSecond .7s ease-in-out 0s 1 normal";
	document.getElementById('tableRegister2').style.visibility = "visible";
	document.getElementById('registerBackward').style.visibility = "visible";
}
function backwardButtonAnimation() {

	document.getElementById('tableRegister').style.animation = "tableRegisterFirstBack .7s ease-in-out 0s 1 normal";
	document.getElementById('tableRegister').style.visibility = "visible";
	document.getElementById('registerBackward').style.transition = "all 0s ease";
	document.getElementById('registerBackward').style.visibility = "hidden";
	document.getElementById('tableRegister2').style.animation = "tableRegisterSecondBack .7s ease-in-out 0s 1 normal";
	document.getElementById('tableRegister2').style.visibility = "hidden";
	document.getElementById('registerForward').style.visibility = "visible";
}
function forwardButtonAnimationBG() {

	document.getElementById('tableRegisterBG').style.animation = "tableRegisterFirst .7s ease-in-out 0s 1 normal";
	document.getElementById('tableRegisterBG').style.visibility = "hidden";
	document.getElementById('registerForwardBG').style.transition = "all 0s ease";
	document.getElementById('registerForwardBG').style.visibility = "hidden";
	document.getElementById('tableRegister2BG').style.animation = "tableRegisterSecond .7s ease-in-out 0s 1 normal";
	document.getElementById('tableRegister2BG').style.visibility = "visible";
	document.getElementById('registerBackwardBG').style.visibility = "visible";
}
function backwardButtonAnimationBG() {

	document.getElementById('tableRegisterBG').style.animation = "tableRegisterFirstBack .7s ease-in-out 0s 1 normal";
	document.getElementById('tableRegisterBG').style.visibility = "visible";
	document.getElementById('registerBackwardBG').style.transition = "all 0s ease";
	document.getElementById('registerBackwardBG').style.visibility = "hidden";
	document.getElementById('tableRegister2BG').style.animation = "tableRegisterSecondBack .7s ease-in-out 0s 1 normal";
	document.getElementById('tableRegister2BG').style.visibility = "hidden";
	document.getElementById('registerForwardBG').style.visibility = "visible";
}


/* function infoButtonAni(){
	//document.getElementById('bookmark1').style.animation = "buttonAni 1s ease 0s 1 normal";
	document.getElementById('bookmark1').style.color = "#111";
	document.getElementById('bookmark1').style.background = "white";
}
function infoButtonAniExit() {
	//document.getElementById('bookmark1').style.animation = "none";
	document.getElementById('bookmark1').style.color = "white";
	document.getElementById('bookmark1').style.background = "transparent";
} */
function infoShow() {
	document.getElementById('information').style.animation = "none";
	document.getElementById('information').style.animation = "showInfo 1s ease-in-out 0s 1 normal";
	document.getElementById('information').style.top = "20%";
}
function infoHide(){
	document.getElementById('information').style.animation = "none";
	document.getElementById('information').style.animation = "hideInfo 1s ease-in-out 0s 1 normal";
	document.getElementById('information').style.top = "100%";
}
function showContacts(){
	document.getElementById('show1').style.visibility = "visible";
	document.getElementById('show2').style.visibility = "hidden";
	document.getElementById('show3').style.visibility = "hidden";
	document.getElementById('show1').style.animation = "none";
	document.getElementById('show2').style.animation = "none";
	document.getElementById('show3').style.animation = "none";
	document.getElementById('show1').style.animation = "showContactsInfo 0.7s ease-in-out 0s 1 normal";
	document.getElementById('show2').style.animation = "hideLastInfo 0.7s ease-in-out 0s 1 normal";
	document.getElementById('show3').style.animation = "hideLastInfo 0.7s ease-in-out 0s 1 normal";

}
function showRegular(){
	document.getElementById('show1').style.visibility = "hidden";
	document.getElementById('show2').style.visibility = "visible";
	document.getElementById('show3').style.visibility = "hidden";
	document.getElementById('show1').style.animation = "none";
	document.getElementById('show2').style.animation = "none";
	document.getElementById('show3').style.animation = "none";
	document.getElementById('show1').style.animation = "hideLastInfo 0.7s ease-in-out 0s 1 normal";
	document.getElementById('show2').style.animation = "showContactsInfo 0.7s ease-in-out 0s 1 normal";
	document.getElementById('show3').style.animation = "hideLastInfo 0.7s ease-in-out 0s 1 normal";

}
function showLogo(){
	document.getElementById('show1').style.visibility = "hidden";
	document.getElementById('show2').style.visibility = "hidden";
	document.getElementById('show3').style.visibility = "visible";
	document.getElementById('show1').style.animation = "none";
	document.getElementById('show2').style.animation = "none";
	document.getElementById('show3').style.animation = "none";
	document.getElementById('show1').style.animation = "hideLastInfo 0.7s ease-in-out 0s 1 normal";
	document.getElementById('show2').style.animation = "hideLastInfo 0.7s ease-in-out 0s 1 normal";
	document.getElementById('show3').style.animation = "showContactsInfo 0.7s ease-in-out 0s 1 normal";

}

function galleryImg1() {
	document.getElementById('infoAboutImg1--gallery').style.visibility = "visible";
	document.getElementById('infoAboutImg1--gallery').style.animation = "showContactsInfo 0.3s ease 0s 1 normal";
	document.getElementById('infoAboutImg2--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg3--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg4--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg5--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg6--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg7--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg8--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg9--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg10--gallery').style.visibility = "hidden";
	document.getElementById('galleryImg2').style.animation = "none";
	document.getElementById('galleryImg3').style.animation = "none";
	document.getElementById('galleryImg4').style.animation = "none";
	document.getElementById('galleryImg5').style.animation = "none";
	document.getElementById('galleryImg6').style.animation = "none";
	document.getElementById('galleryImg7').style.animation = "none";
	document.getElementById('galleryImg8').style.animation = "none";
	document.getElementById('galleryImg9').style.animation = "none";
	document.getElementById('galleryImg10').style.animation = "none";
}
function galleryImg1Hide() {
	document.getElementById('infoAboutImg1--gallery').style.visibility = "hidden";
	document.getElementById('galleryImg1').style.animation = "none";
	document.getElementById('galleryImg2').style.animation = "none";
	document.getElementById('galleryImg3').style.animation = "none";
	document.getElementById('galleryImg4').style.animation = "none";
	document.getElementById('galleryImg5').style.animation = "none";
	document.getElementById('galleryImg6').style.animation = "none";
	document.getElementById('galleryImg7').style.animation = "none";
	document.getElementById('galleryImg8').style.animation = "none";
	document.getElementById('galleryImg9').style.animation = "none";
	document.getElementById('galleryImg10').style.animation = "none";
}
function galleryImg2() {
	document.getElementById('infoAboutImg2--gallery').style.visibility = "visible";
	document.getElementById('infoAboutImg2--gallery').style.animation = "showContactsInfo 0.3s ease 0s 1 normal";
	document.getElementById('infoAboutImg1--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg3--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg4--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg5--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg6--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg7--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg8--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg9--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg10--gallery').style.visibility = "hidden";
	document.getElementById('galleryImg1').style.animation = "none";
	document.getElementById('galleryImg3').style.animation = "none";
	document.getElementById('galleryImg4').style.animation = "none";
	document.getElementById('galleryImg5').style.animation = "none";
	document.getElementById('galleryImg6').style.animation = "none";
	document.getElementById('galleryImg7').style.animation = "none";
	document.getElementById('galleryImg8').style.animation = "none";
	document.getElementById('galleryImg9').style.animation = "none";
	document.getElementById('galleryImg10').style.animation = "none";
}
function galleryImg2Hide() {
	document.getElementById('infoAboutImg2--gallery').style.visibility = "hidden";
	document.getElementById('galleryImg2').style.animation = "none";
	document.getElementById('galleryImg1').style.animation = "none";
document.getElementById('galleryImg3').style.animation = "none";
document.getElementById('galleryImg4').style.animation = "none";
document.getElementById('galleryImg5').style.animation = "none";
document.getElementById('galleryImg6').style.animation = "none";
document.getElementById('galleryImg7').style.animation = "none";
document.getElementById('galleryImg8').style.animation = "none";
document.getElementById('galleryImg9').style.animation = "none";
document.getElementById('galleryImg10').style.animation = "none";
}
function galleryImg3() {
	document.getElementById('infoAboutImg3--gallery').style.visibility = "visible";
	document.getElementById('infoAboutImg3--gallery').style.animation = "showContactsInfo 0.3s ease 0s 1 normal";
	document.getElementById('infoAboutImg1--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg2--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg4--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg5--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg6--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg7--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg8--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg9--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg10--gallery').style.visibility = "hidden";
	document.getElementById('galleryImg1').style.animation = "none";
	document.getElementById('galleryImg2').style.animation = "none";
	document.getElementById('galleryImg4').style.animation = "none";
	document.getElementById('galleryImg5').style.animation = "none";
	document.getElementById('galleryImg6').style.animation = "none";
	document.getElementById('galleryImg7').style.animation = "none";
	document.getElementById('galleryImg8').style.animation = "none";
	document.getElementById('galleryImg9').style.animation = "none";
	document.getElementById('galleryImg10').style.animation = "none";
}
function galleryImg3Hide() {
	document.getElementById('infoAboutImg3--gallery').style.visibility = "hidden";
	document.getElementById('galleryImg3').style.animation = "none";
	document.getElementById('galleryImg1').style.animation = "none";
document.getElementById('galleryImg2').style.animation = "none";
document.getElementById('galleryImg4').style.animation = "none";
document.getElementById('galleryImg5').style.animation = "none";
document.getElementById('galleryImg6').style.animation = "none";
document.getElementById('galleryImg7').style.animation = "none";
document.getElementById('galleryImg8').style.animation = "none";
document.getElementById('galleryImg9').style.animation = "none";
document.getElementById('galleryImg10').style.animation = "none";
}
function galleryImg4() {
	document.getElementById('infoAboutImg4--gallery').style.visibility = "visible";
	document.getElementById('infoAboutImg4--gallery').style.animation = "showContactsInfo 0.3s ease 0s 1 normal";
	document.getElementById('infoAboutImg1--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg2--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg3--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg5--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg6--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg7--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg8--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg9--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg10--gallery').style.visibility = "hidden";
	document.getElementById('galleryImg1').style.animation = "none";
	document.getElementById('galleryImg2').style.animation = "none";
	document.getElementById('galleryImg3').style.animation = "none";
	document.getElementById('galleryImg5').style.animation = "none";
	document.getElementById('galleryImg6').style.animation = "none";
	document.getElementById('galleryImg7').style.animation = "none";
	document.getElementById('galleryImg8').style.animation = "none";
	document.getElementById('galleryImg9').style.animation = "none";
	document.getElementById('galleryImg10').style.animation = "none";
}
function galleryImg4Hide() {
	document.getElementById('infoAboutImg4--gallery').style.visibility = "hidden";
	document.getElementById('galleryImg4').style.animation = "none";
	document.getElementById('galleryImg1').style.animation = "none";
	document.getElementById('galleryImg2').style.animation = "none";
	document.getElementById('galleryImg3').style.animation = "none";
	document.getElementById('galleryImg5').style.animation = "none";
	document.getElementById('galleryImg6').style.animation = "none";
	document.getElementById('galleryImg7').style.animation = "none";
	document.getElementById('galleryImg8').style.animation = "none";
	document.getElementById('galleryImg9').style.animation = "none";
	document.getElementById('galleryImg10').style.animation = "none";
}
function galleryImg5() {
	document.getElementById('infoAboutImg5--gallery').style.visibility = "visible";
	document.getElementById('infoAboutImg5--gallery').style.animation = "showContactsInfo 0.3s ease 0s 1 normal";
	document.getElementById('infoAboutImg1--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg2--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg3--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg4--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg6--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg7--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg8--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg9--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg10--gallery').style.visibility  = "hidden";
	document.getElementById('galleryImg1').style.animation = "none";
	document.getElementById('galleryImg2').style.animation = "none";
	document.getElementById('galleryImg3').style.animation = "none";
	document.getElementById('galleryImg4').style.animation = "none";
	document.getElementById('galleryImg6').style.animation = "none";
	document.getElementById('galleryImg7').style.animation = "none";
	document.getElementById('galleryImg8').style.animation = "none";
	document.getElementById('galleryImg9').style.animation = "none";
	document.getElementById('galleryImg10').style.animation = "none";
}
function galleryImg5Hide() {
	document.getElementById('infoAboutImg5--gallery').style.visibility = "hidden";
	document.getElementById('galleryImg5').style.animation = "none";
	document.getElementById('galleryImg1').style.animation = "none";
	document.getElementById('galleryImg2').style.animation = "none";
	document.getElementById('galleryImg3').style.animation = "none";
	document.getElementById('galleryImg4').style.animation = "none";
	document.getElementById('galleryImg6').style.animation = "none";
	document.getElementById('galleryImg7').style.animation = "none";
	document.getElementById('galleryImg8').style.animation = "none";
	document.getElementById('galleryImg9').style.animation = "none";
	document.getElementById('galleryImg10').style.animation = "none";
}
function galleryImg6() {
	document.getElementById('infoAboutImg6--gallery').style.visibility = "visible";
	document.getElementById('infoAboutImg6--gallery').style.animation = "showContactsInfo 0.3s ease 0s 1 normal";
	document.getElementById('infoAboutImg1--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg2--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg3--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg4--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg5--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg7--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg8--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg9--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg10--gallery').style.visibility = "hidden";
	document.getElementById('galleryImg1').style.animation = "none";
	document.getElementById('galleryImg2').style.animation = "none";
	document.getElementById('galleryImg3').style.animation = "none";
	document.getElementById('galleryImg4').style.animation = "none";
	document.getElementById('galleryImg5').style.animation = "none";
	document.getElementById('galleryImg7').style.animation = "none";
	document.getElementById('galleryImg8').style.animation = "none";
	document.getElementById('galleryImg9').style.animation = "none";
	document.getElementById('galleryImg10').style.animation = "none";
}
function galleryImg6Hide() {
	document.getElementById('infoAboutImg6--gallery').style.visibility = "hidden";
	document.getElementById('galleryImg6').style.animation = "none";
	document.getElementById('galleryImg1').style.animation = "none";
	document.getElementById('galleryImg2').style.animation = "none";
	document.getElementById('galleryImg3').style.animation = "none";
	document.getElementById('galleryImg4').style.animation = "none";
	document.getElementById('galleryImg5').style.animation = "none";
	document.getElementById('galleryImg7').style.animation = "none";
	document.getElementById('galleryImg8').style.animation = "none";
	document.getElementById('galleryImg9').style.animation = "none";
	document.getElementById('galleryImg10').style.animation = "none";
}
function galleryImg7() {
	document.getElementById('infoAboutImg7--gallery').style.visibility = "visible";
	document.getElementById('infoAboutImg7--gallery').style.animation = "showContactsInfo 0.3s ease 0s 1 normal";
	document.getElementById('infoAboutImg1--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg2--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg3--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg4--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg5--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg6--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg8--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg9--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg10--gallery').style.visibility = "hidden";
	document.getElementById('galleryImg1').style.animation = "none";
	document.getElementById('galleryImg2').style.animation = "none";
	document.getElementById('galleryImg3').style.animation = "none";
	document.getElementById('galleryImg4').style.animation = "none";
	document.getElementById('galleryImg5').style.animation = "none";
	document.getElementById('galleryImg6').style.animation = "none";
	document.getElementById('galleryImg8').style.animation = "none";
	document.getElementById('galleryImg9').style.animation = "none";
	document.getElementById('galleryImg10').style.animation = "none";
}
function galleryImg7Hide() {
	document.getElementById('infoAboutImg7--gallery').style.visibility = "hidden";
	document.getElementById('galleryImg7').style.animation = "none";
	document.getElementById('galleryImg1').style.animation = "none";
	document.getElementById('galleryImg2').style.animation = "none";
	document.getElementById('galleryImg3').style.animation = "none";
	document.getElementById('galleryImg4').style.animation = "none";
	document.getElementById('galleryImg5').style.animation = "none";
	document.getElementById('galleryImg6').style.animation = "none";
	document.getElementById('galleryImg8').style.animation = "none";
	document.getElementById('galleryImg9').style.animation = "none";
	document.getElementById('galleryImg10').style.animation = "none";
}
function galleryImg8() {
	document.getElementById('infoAboutImg8--gallery').style.visibility = "visible";
	document.getElementById('infoAboutImg8--gallery').style.animation = "showContactsInfo 0.3s ease 0s 1 normal";
	document.getElementById('infoAboutImg1--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg2--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg3--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg4--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg5--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg6--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg7--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg9--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg10--gallery').style.visibility = "hidden";
	document.getElementById('galleryImg1').style.animation = "none";
	document.getElementById('galleryImg2').style.animation = "none";
	document.getElementById('galleryImg3').style.animation = "none";
	document.getElementById('galleryImg4').style.animation = "none";
	document.getElementById('galleryImg5').style.animation = "none";
	document.getElementById('galleryImg6').style.animation = "none";
	document.getElementById('galleryImg7').style.animation = "none";
	document.getElementById('galleryImg9').style.animation = "none";
	document.getElementById('galleryImg10').style.animation = "none";
}
function galleryImg8Hide() {
	document.getElementById('infoAboutImg8--gallery').style.visibility = "hidden";
	document.getElementById('galleryImg8').style.animation = "none";
	document.getElementById('galleryImg1').style.animation = "none";
	document.getElementById('galleryImg2').style.animation = "none";
	document.getElementById('galleryImg3').style.animation = "none";
	document.getElementById('galleryImg4').style.animation = "none";
	document.getElementById('galleryImg5').style.animation = "none";
	document.getElementById('galleryImg6').style.animation = "none";
	document.getElementById('galleryImg7').style.animation = "none";
	document.getElementById('galleryImg9').style.animation = "none";
	document.getElementById('galleryImg10').style.animation = "none";
}
function galleryImg9() {
	document.getElementById('infoAboutImg9--gallery').style.visibility = "visible";
	document.getElementById('infoAboutImg9--gallery').style.animation = "showContactsInfo 0.3s ease 0s 1 normal";
	document.getElementById('infoAboutImg1--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg2--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg3--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg4--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg5--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg6--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg7--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg8--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg10--gallery').style.visibility = "hidden";
	document.getElementById('galleryImg1').style.animation = "none";
	document.getElementById('galleryImg2').style.animation = "none";
	document.getElementById('galleryImg3').style.animation = "none";
	document.getElementById('galleryImg4').style.animation = "none";
	document.getElementById('galleryImg5').style.animation = "none";
	document.getElementById('galleryImg6').style.animation = "none";
	document.getElementById('galleryImg7').style.animation = "none";
	document.getElementById('galleryImg8').style.animation = "none";
	document.getElementById('galleryImg10').style.animation = "none";
}
function galleryImg9Hide() {
	document.getElementById('infoAboutImg9--gallery').style.visibility = "hidden";
	document.getElementById('galleryImg9').style.animation = "none";
	document.getElementById('galleryImg1').style.animation = "none";
	document.getElementById('galleryImg2').style.animation = "none";
	document.getElementById('galleryImg3').style.animation = "none";
	document.getElementById('galleryImg4').style.animation = "none";
	document.getElementById('galleryImg5').style.animation = "none";
	document.getElementById('galleryImg6').style.animation = "none";
	document.getElementById('galleryImg7').style.animation = "none";
	document.getElementById('galleryImg8').style.animation = "none";
	document.getElementById('galleryImg10').style.animation = "none";
}
function galleryImg10() {
	document.getElementById('infoAboutImg10--gallery').style.visibility = "visible";
	document.getElementById('infoAboutImg10--gallery0').style.animation = "showContactsInfo 0.3s ease 0s 1 normal";
	document.getElementById('infoAboutImg1--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg2--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg3--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg4--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg5--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg6--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg7--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg8--gallery').style.visibility = "hidden";
	document.getElementById('infoAboutImg9--gallery').style.visibility = "hidden";
	document.getElementById('galleryImg1').style.animation = "none";
	document.getElementById('galleryImg2').style.animation = "none";
	document.getElementById('galleryImg3').style.animation = "none";
	document.getElementById('galleryImg4').style.animation = "none";
	document.getElementById('galleryImg5').style.animation = "none";
	document.getElementById('galleryImg6').style.animation = "none";
	document.getElementById('galleryImg7').style.animation = "none";
	document.getElementById('galleryImg8').style.animation = "none";
	document.getElementById('galleryImg9').style.animation = "none";
}
function galleryImg10Hide() {
	document.getElementById('infoAboutImg10--gallery').style.visibility = "hidden";
	document.getElementById('galleryImg10').style.animation = "none";
	document.getElementById('galleryImg1').style.animation = "none";
	document.getElementById('galleryImg2').style.animation = "none";
	document.getElementById('galleryImg3').style.animation = "none";
	document.getElementById('galleryImg4').style.animation = "none";
	document.getElementById('galleryImg5').style.animation = "none";
	document.getElementById('galleryImg6').style.animation = "none";
	document.getElementById('galleryImg7').style.animation = "none";
	document.getElementById('galleryImg8').style.animation = "none";
	document.getElementById('galleryImg9').style.animation = "none";
}

function G_showImg1(){
	document.getElementById('g-z').style.display = "block";
}
function G_showImg2(){
	document.getElementById('g-z2').style.display = "block";
}
function G_showImg3(){
	document.getElementById('g-z3').style.display = "block";
}
function G_showImg4(){
	document.getElementById('g-z4').style.display = "block";
}
function G_showImg5(){
	document.getElementById('g-z5').style.display = "block";
}
function G_showImg6(){
	document.getElementById('g-z6').style.display = "block";
}
function G_showImg7(){
	document.getElementById('g-z7').style.display = "block";
}
function G_showImg8(){
	document.getElementById('g-z8').style.display = "block";
}
function G_showImg9(){
	document.getElementById('g-z9').style.display = "block";
}
function G_showImg10(){
	document.getElementById('g-z10').style.display = "block";
}
function G_showImg11(){
	document.getElementById('g-z11').style.display = "block";
}
function G_showImg12(){
	document.getElementById('g-z12').style.display = "block";
}
function G_showImg13(){
	document.getElementById('g-z13').style.display = "block";
}
function G_showImg14(){
	document.getElementById('g-z14').style.display = "block";
}
function G_showImg15(){
	document.getElementById('g-z15').style.display = "block";
}


function G_hideImg1(){
	document.getElementById('g-z').style.display = "none";
}
function G_hideImg2(){
	document.getElementById('g-z2').style.display = "none";
}
function G_hideImg3(){
	document.getElementById('g-z3').style.display = "none";
}
function G_hideImg4(){
	document.getElementById('g-z4').style.display = "none";
}
function G_hideImg5(){
	document.getElementById('g-z5').style.display = "none";
}
function G_hideImg6(){
	document.getElementById('g-z6').style.display = "none";
}
function G_hideImg7(){
	document.getElementById('g-z7').style.display = "none";
}
function G_hideImg8(){
	document.getElementById('g-z8').style.display = "none";
}
function G_hideImg9(){
	document.getElementById('g-z9').style.display = "none";
}
function G_hideImg10(){
	document.getElementById('g-z10').style.display = "none";
}
function G_hideImg11(){
	document.getElementById('g-z11').style.display = "none";
}
function G_hideImg12(){
	document.getElementById('g-z12').style.display = "none";
}
function G_hideImg13(){
	document.getElementById('g-z13').style.display = "none";
}
function G_hideImg14(){
	document.getElementById('g-z14').style.display = "none";
}
function G_hideImg15(){
	document.getElementById('g-z15').style.display = "none";
}

var setShow;
var setHide;
function orderHideInfo() {

		document.getElementById('greyOrder').style.animation = "orderInfoHide .2s ease-in-out 0s 1 normal";
		document.getElementById('greyOrder').style.left = "85%";
		document.getElementById('O-button').style.display = "none";
		document.getElementById('O-button2').style.display = "block";
		document.getElementById('O-show-hide').style.display ="inline-block";
		document.getElementById('O-show-hide').style.opacity = "1";
		
		clearInterval(setHide);
		setShow = setInterval(function(){
			document.getElementById('O-links').style.visibility = "visible";
		}, 350);
		document.getElementById('O-links').style.animation = "OrderLinksShow 0.5s ease-in-out 0.3s 1 normal";
	}
function orderShowInfo() {

		document.getElementById('greyOrder').style.animation = "orderInfoShow .2s ease-in-out 0s 1 normal";
		document.getElementById('greyOrder').style.left = "97%";
		document.getElementById('O-button').style.display = "block";
		document.getElementById('O-button2').style.display = "none";
		document.getElementById('O-show-hide').style.display = "none";
		document.getElementById('O-show-hide').style.opacity = "0";
		
		clearInterval(setShow);
		setHide = setInterval(function(){
			document.getElementById('O-links').style.visibility = "hidden";
		}, 0); 
		document.getElementById('O-links').style.animation = "none";
}

function HH(){
	document.getElementById('O-link-home').style.animation = "Shh 0.3s ease-in-out 0s 1 normal";
	document.getElementById('O-link-home').style.visibility = "visible";
}
function RR(){
	document.getElementById('O-link-reg').style.animation = "Shh 0.3s ease-in-out 0s 1 normal";
	document.getElementById('O-link-reg').style.visibility = "visible";
}
function GG(){
	document.getElementById('O-link-gallery').style.animation = "Shh 0.3s ease-in-out 0s 1 normal";
	document.getElementById('O-link-gallery').style.visibility = "visible";
}
function II(){
	document.getElementById('O-link-info').style.animation = "Shh 0.3s ease-in-out 0s 1 normal";
	document.getElementById('O-link-info').style.visibility = "visible";
}

function Hhh(){
	document.getElementById('O-link-home').style.animation = "Hhh 0.2s ease-in-out 0s 1 normal";
	document.getElementById('O-link-home').style.visibility = "hidden";
}
function Rhh(){
	document.getElementById('O-link-reg').style.animation = "Hhh 0.2s ease-in-out 0s 1 normal";
	document.getElementById('O-link-reg').style.visibility = "hidden";
}
function Ghh(){
	document.getElementById('O-link-gallery').style.animation = "Hhh 0.2s ease-in-out 0s 1 normal";
	document.getElementById('O-link-gallery').style.visibility = "hidden";
}
function Ihh(){
	document.getElementById('O-link-info').style.animation = "Hhh 0.2s ease-in-out 0s 1 normal";
	document.getElementById('O-link-info').style.visibility = "hidden";
}

function stylish_wood(){
	document.getElementById('desc-Header').innerHTML = "Bed room \"Stylish Wood\"";
	document.getElementById('desc-Price').innerHTML = "Price: 479$";
	document.getElementById('inside-monitor-img').src = "images/gallery/img11.jpg";
}
function creamy(){
	document.getElementById('desc-Header').innerHTML = "Living room \"Creamy\"";
	document.getElementById('desc-Price').innerHTML = "Price: 539$";
	document.getElementById('inside-monitor-img').src = "images/gallery/img12.jpg";
}
function light_fireplace(){
	document.getElementById('desc-Header').innerHTML = "Living room \"Light Fireplace\"";
	document.getElementById('desc-Price').innerHTML = "Price: 819$";
	document.getElementById('inside-monitor-img').src = "images/gallery/img13.jpg";
}
function my_comfort(){
	document.getElementById('desc-Header').innerHTML = "Bed room \"My Comfort\"";
	document.getElementById('desc-Price').innerHTML = "Price: 439$";
	document.getElementById('inside-monitor-img').src = "images/gallery/img14.jpg";
}
function steel_with_style(){
	document.getElementById('desc-Header').innerHTML = "Living room \"Steel with Style\"";
	document.getElementById('desc-Price').innerHTML = "Price: 469$";
	document.getElementById('inside-monitor-img').src = "images/gallery/img15.jpg";
}
function royal_dreams(){
	document.getElementById('desc-Header').innerHTML = "Bed room \"Royal Dreams\"";
	document.getElementById('desc-Price').innerHTML = "Price: 609$";
	document.getElementById('inside-monitor-img').src = "images/gallery/img16.jpg";
}
function zebra(){
	document.getElementById('desc-Header').innerHTML = "Bed room \"Zebra\"";
	document.getElementById('desc-Price').innerHTML = "Price: 299$";
	document.getElementById('inside-monitor-img').src = "images/gallery/img17.jpg";
}
function celtic_faith(){
	document.getElementById('desc-Header').innerHTML = "Living room \"Celtic Faith\"";
	document.getElementById('desc-Price').innerHTML = "Price: 539$";
	document.getElementById('inside-monitor-img').src = "images/gallery/img18.jpg";
}
function violette(){
	document.getElementById('desc-Header').innerHTML = "Set \"Violette\"";
	document.getElementById('desc-Price').innerHTML = "Price: 129$";
	document.getElementById('inside-monitor-img').src = "images/gallery/img1.jpg";
}
function rose_quartz(){
	document.getElementById('desc-Header').innerHTML = "Bed room \"Rose Quartz\"";
	document.getElementById('desc-Price').innerHTML = "Price: 499$";
	document.getElementById('inside-monitor-img').src = "images/gallery/img2.jpg";
}
function inside_coconut(){
	document.getElementById('desc-Header').innerHTML = "Living room \"Inside of a Coconut\"";
	document.getElementById('desc-Price').innerHTML = "Price: 559$";
	document.getElementById('inside-monitor-img').src = "images/gallery/img3.jpg";
}
function veltheimia(){
	document.getElementById('desc-Header').innerHTML = "Living room \"Veltheimia\"";
	document.getElementById('desc-Price').innerHTML = "Price: 539$";
	document.getElementById('inside-monitor-img').src = "images/gallery/img4.jpg";
}
function anthurium(){
	document.getElementById('desc-Header').innerHTML = "Bed room \"Anthurium\"";
	document.getElementById('desc-Price').innerHTML = "Price: 339$";
	document.getElementById('inside-monitor-img').src = "images/gallery/img5.jpg";	
}
function echeveria(){
	document.getElementById('desc-Header').innerHTML = "Bed room \"Echeveria\"";
	document.getElementById('desc-Price').innerHTML = "Price: 619$";
	document.getElementById('inside-monitor-img').src = "images/gallery/img6.jpg";
}
function forest_realm(){
	document.getElementById('desc-Header').innerHTML = "Living room \"Forest Realm\"";
	document.getElementById('desc-Price').innerHTML = "Price: 679$";
	document.getElementById('inside-monitor-img').src = "images/gallery/img7.jpg";
}
function stylish_woodBG(){
	document.getElementById('desc-Header').innerHTML = "Спалня \"Stylish Wood\"";
	document.getElementById('desc-Price').innerHTML = "Цена: 479 лв.";
	document.getElementById('inside-monitor-img').src = "images/gallery/img11.jpg";
}
function creamyBG(){
	document.getElementById('desc-Header').innerHTML = "Всекидневна \"Creamy\"";
	document.getElementById('desc-Price').innerHTML = "Цена: 539 лв.";
	document.getElementById('inside-monitor-img').src = "images/gallery/img12.jpg";
}
function light_fireplaceBG(){
	document.getElementById('desc-Header').innerHTML = "Всекидневна \"Light Fireplace\"";
	document.getElementById('desc-Price').innerHTML = "Цена: 819 лв.";
	document.getElementById('inside-monitor-img').src = "images/gallery/img13.jpg";
}
function my_comfortBG(){
	document.getElementById('desc-Header').innerHTML = "Спалня \"My Comfort\"";
	document.getElementById('desc-Price').innerHTML = "Цена: 439 лв.";
	document.getElementById('inside-monitor-img').src = "images/gallery/img14.jpg";
}
function steel_with_styleBG(){
	document.getElementById('desc-Header').innerHTML = "Всекидневна \"Steel with Style\"";
	document.getElementById('desc-Price').innerHTML = "Цена: 469 лв.";
	document.getElementById('inside-monitor-img').src = "images/gallery/img15.jpg";
}
function royal_dreamsBG(){
	document.getElementById('desc-Header').innerHTML = "Спалня \"Royal Dreams\"";
	document.getElementById('desc-Price').innerHTML = "Цена: 609 лв.";
	document.getElementById('inside-monitor-img').src = "images/gallery/img16.jpg";
}
function zebraBG(){
	document.getElementById('desc-Header').innerHTML = "Спалня \"Zebra\"";
	document.getElementById('desc-Price').innerHTML = "Цена: 299 лв.";
	document.getElementById('inside-monitor-img').src = "images/gallery/img17.jpg";
}
function celtic_faithBG(){
	document.getElementById('desc-Header').innerHTML = "Всекидневна \"Celtic Faith\"";
	document.getElementById('desc-Price').innerHTML = "Цена: 539 лв.";
	document.getElementById('inside-monitor-img').src = "images/gallery/img18.jpg";
}
function violetteBG(){
	document.getElementById('desc-Header').innerHTML = "Комплект \"Violette\"";
	document.getElementById('desc-Price').innerHTML = "Цена: 129 лв.";
	document.getElementById('inside-monitor-img').src = "images/gallery/img1.jpg";
}
function rose_quartzBG(){
	document.getElementById('desc-Header').innerHTML = "Спалня \"Rose Quartz\"";
	document.getElementById('desc-Price').innerHTML = "Цена: 499 лв.";
	document.getElementById('inside-monitor-img').src = "images/gallery/img2.jpg";
}
function inside_coconutBG(){
	document.getElementById('desc-Header').innerHTML = "Всекидневна \"Inside of a Coconut\"";
	document.getElementById('desc-Price').innerHTML = "Цена: 559 лв.";
	document.getElementById('inside-monitor-img').src = "images/gallery/img3.jpg";
}
function veltheimiaBG(){
	document.getElementById('desc-Header').innerHTML = "Всекидневна \"Veltheimia\"";
	document.getElementById('desc-Price').innerHTML = "Цена: 539 лв.";
	document.getElementById('inside-monitor-img').src = "images/gallery/img4.jpg";
}
function anthuriumBG(){
	document.getElementById('desc-Header').innerHTML = "Спалня \"Anthurium\"";
	document.getElementById('desc-Price').innerHTML = "Цена: 339 лв.";
	document.getElementById('inside-monitor-img').src = "images/gallery/img5.jpg";	
}
function echeveriaBG(){
	document.getElementById('desc-Header').innerHTML = "Спалня \"Echeveria\"";
	document.getElementById('desc-Price').innerHTML = "Цена: 619 лв.";
	document.getElementById('inside-monitor-img').src = "images/gallery/img6.jpg";
}
function forest_realmBG(){
	document.getElementById('desc-Header').innerHTML = "Всекидневна \"Forest Realm\"";
	document.getElementById('desc-Price').innerHTML = "Цена: 679 лв.";
	document.getElementById('inside-monitor-img').src = "images/gallery/img7.jpg";
}




/* ==============================================================================================
============================================================================================
============================================================================================
/* ON LOAD FUNCTIONS */ /*
============================================================================================
==============================================================================================
==================================================================================================== */
function monitorSlide(){
	
	document.getElementById('O-description').style.animation = "descriptionFall 0.8s ease 0s 1 normal";
	document.getElementById('O-divider').style.animation = "dividerSpinIncoming 0.7s ease 0s 1 normal";
	document.getElementById('O-monitor').style.animation = "monitorSliding 1.2s ease-in-out 0s 1 normal";
	document.getElementById('orderBox').style.animation = "orderBoxSlide 1s ease 0s 1 normal";
}

function orderHideInfoBG() {

		document.getElementById('greyOrder').style.animation = "orderInfoHide .2s ease-in-out 0s 1 normal";
		document.getElementById('greyOrder').style.left = "85%";
		document.getElementById('O-button').style.display = "none";
		document.getElementById('O-button2').style.display = "block";
		document.getElementById('O-show-hide').style.display ="inline-block";
		document.getElementById('O-show-hide').style.opacity = "1";
		
		clearInterval(setHide);
		setShow = setInterval(function(){
			document.getElementById('O-linksBG').style.visibility = "visible";
		}, 350);
		document.getElementById('O-linksBG').style.animation = "OrderLinksShow 0.5s ease-in-out 0.3s 1 normal";
	}
function orderShowInfoBG() {

		document.getElementById('greyOrder').style.animation = "orderInfoShow .2s ease-in-out 0s 1 normal";
		document.getElementById('greyOrder').style.left = "97%";
		document.getElementById('O-button').style.display = "block";
		document.getElementById('O-button2').style.display = "none";
		document.getElementById('O-show-hide').style.display = "none";
		document.getElementById('O-show-hide').style.opacity = "0";
		
		clearInterval(setShow);
		setHide = setInterval(function(){
			document.getElementById('O-linksBG').style.visibility = "hidden";
		}, 0); 
		document.getElementById('O-linksBG').style.animation = "none";
}
/*
function orderBG_LNG_Switch() {
	document.getElementById("O-show-hide").innerHTML = "Скрий";
	document.getElementById("hm").innerHTML = "&spades; Начало";
	document.getElementById("hr").innerHTML = "&clubs; Регистрация";
	document.getElementById("hg").innerHTML = "&hearts; Галерия";
	document.getElementById("hi").innerHTML = "&diams; Информация";
	document.getElementById('O-link-home').innerHTML = "Това е нашата начална страница с последните новини!";
	document.getElementById('O-link-reg').innerHTML = "От тук можете да се регистрирате!";
	document.getElementById('O-link-gallery').innerHTML = "Всички наши продукти, които могат да бъдат закупени ще намерите тук!";
	document.getElementById('O-link-info').innerHTML = "Тук ще намерите всичката информация за нас, която Ви е нужна!";
	document.getElementById("desc-Header").innerHTML = "Спалня \"Stylish Wood\"";
	document.getElementById("desc-Price").innerHTML = "Цена: 479 лв.";
	document.getElementById("title").innerHTML = "Поръчка";
	document.getElementById("name-order").innerHTML = "Име: ";
	document.getElementById("lname-order").innerHTML = "Фамилия: ";
	document.getElementById("email-order").innerHTML = "Е-мейл: ";
	document.getElementById("address-order").innerHTML = "Адрес: ";
	document.getElementById("city-order").innerHTML = "Град: ";
	document.getElementById("product-order").innerHTML = "Продукт: ";

}
function orderEN_LNG_Switch() {
	document.getElementById("O-show-hide").innerHTML = "Hide";
	document.getElementById("hm").innerHTML = "&spades; Home";
	document.getElementById("hr").innerHTML = "&clubs; Registration";
	document.getElementById("hg").innerHTML = "&hearts; Gallery";
	document.getElementById("hi").innerHTML = "&diams; Information";
	document.getElementById('O-link-home').innerHTML = "This is our home page with latest news!";
	document.getElementById('O-link-reg').innerHTML = "You can register an account from here!!";
	document.getElementById('O-link-gallery').innerHTML = "All of our products available for purchase are here!";
	document.getElementById('O-link-info').innerHTML = "You can find all the information you need about us here!";
	document.getElementById("desc-Header").innerHTML = "Bed room \"Stylish Wood\"";
	document.getElementById("desc-Price").innerHTML = "Price: 479 лв.";
	document.getElementById("title").innerHTML = "Order";
	document.getElementById("name-order").innerHTML = "Name: ";
	document.getElementById("lname-order").innerHTML = "Last name: ";
	document.getElementById("email-order").innerHTML = "E-mail: ";
	document.getElementById("address-order").innerHTML = "Address: ";
	document.getElementById("city-order").innerHTML = "City: ";
	document.getElementById("product-order").innerHTML = "Product: ";

}  =======> ОПИТ ЗА СМЯНА НА ЕЗИКА БЕЗ REFRESH */