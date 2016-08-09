// ********************************************************************
//
// Javascript for KKLabs' SPOT VR Project
// Author: SybiL
//
// ********************************************************************

// UI framework Generators
var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: true,
    live: true
});
wow.init();

// UI Default
$(document).ready(function(){
  
  boxHoverEffect();

});

function boxHoverEffect() {
	
	$(".boxMiddle").hover(function() {	

			$(".literatureLogo").hide();
			$(".glassLogoLeft").hide();
			$(".glassLogoRight").hide();

			$(".middlePhoto01").show();
			$(".leftPhoto01").fadeIn();
			$(".rightPhoto01").fadeIn();

		},function() {

			$(".literatureLogo").show();
			$(".glassLogoLeft").show();
			$(".glassLogoRight").show();

			$(".middlePhoto01").hide();
			$(".leftPhoto01").hide();
			$(".rightPhoto01").hide();

			$(".middlePhoto02").hide();
			$(".leftPhoto02").hide();
			$(".rightPhoto02").hide();

			$(".middlePhoto03").hide();
			$(".leftPhoto03").hide();
			$(".rightPhoto03").hide();
	});

	
	$(".boxLeft").hover(function() {
			
			$(".literatureLogo").hide();
			$(".glassLogoLeft").hide();
			$(".glassLogoRight").hide();

			$(".leftPhoto02").show();
			$(".middlePhoto02").fadeIn();
			$(".rightPhoto02").fadeIn();

		},function() {

			$(".literatureLogo").show();
			$(".glassLogoLeft").show();
			$(".glassLogoRight").show();

			$(".middlePhoto01").hide();
			$(".leftPhoto01").hide();
			$(".rightPhoto01").hide();

			$(".middlePhoto02").hide();
			$(".leftPhoto02").hide();
			$(".rightPhoto02").hide();

			$(".middlePhoto03").hide();
			$(".leftPhoto03").hide();
			$(".rightPhoto03").hide();
	});


	$(".boxRight").hover(function() {
			
			$(".literatureLogo").hide();
			$(".glassLogoLeft").hide();
			$(".glassLogoRight").hide();

			$(".rightPhoto03").show();
			$(".middlePhoto03").fadeIn();
			$(".leftPhoto03").fadeIn();

		},function() {

			$(".literatureLogo").show();
			$(".glassLogoLeft").show();
			$(".glassLogoRight").show();

			$(".middlePhoto01").hide();
			$(".leftPhoto01").hide();
			$(".rightPhoto01").hide();

			$(".middlePhoto02").hide();
			$(".leftPhoto02").hide();
			$(".rightPhoto02").hide();

			$(".middlePhoto03").hide();
			$(".leftPhoto03").hide();
			$(".rightPhoto03").hide();
	});

}