

$(document).on("ready",function(){


$(".link").on("click",function(e){
	e.preventDefault();
	var scrollTime = 500;
	if($(this).hasClass("link_chiat")){
		$.scrollTo("#chiatPage",scrollTime,{
		offset: 0
	});
	}else if($(this).hasClass("link_dentsu")){
		$.scrollTo("#dentsuPage",scrollTime);
		// offset:700

	}else if($(this).hasClass("link_tenga")){
		$.scrollTo("#tengaPage", scrollTime);
		// offset:2100;

	}else if($(this).hasClass("link_srp")){
		$.scrollTo("#srpPage", scrollTime);
		// offset:2800;
	}
});	

$(".link").on("click",function(e){
	e.preventDefault();
	var scrollTime = 500;
	if($(this).hasClass("link_boxResume")){
	$.scrollTo("#section1",scrollTime, {
		offset: -100
		});
	// }else if($(this).hasClass("link_about")){
	// 	$.scrollTo("#section2", scrollTime);
	
	// }else if($(this).hasClass("link_contact")){
	// 	$.scrollTo("#section3", scrollTime);

	}
});
});

// var currentSlide = 1;
// var intervalId;

// function goToSlideNumber(number){
//   var selector = "#mcdonalds" + updateSlide(number);
//   var fadeDuration = 1000;
//   $(".mcdonalds").stop().not(selector).fadeOut(fadeDuration);
//   $(selector).fadeIn(fadeDuration);
// }
// function slideForward() {
//   clearInterval(intervalId);
//   intervalId = null;
//   goToSlideNumber(currentSlide+1);
//   startCarousel();
// }
// function slideBackward() {
//   clearInterval(intervalId);
//   intervalId = null;
//   goToSlideNumber(currentSlide-1);
//   startCarousel();
// }

// function updateSlide(number) {
//   var slideCount = document.getElementsByClassName("mcdonalds").length;
//   if( number > slideCount ) {
//     number = 1;
//   } else if( number < 1 ) {
//     number = slideCount;
//   }
//   currentSlide = number;
//   return number;
// }

// function startCarousel() {
//   if( intervalId ) {
//     clearInterval(intervalId);
//   }
//   intervalId = setInterval(function(){
//     goToSlideNumber(currentSlide+1);
//   },1000);
// }

// $(document).on("ready",function(){
//   startCarousel();
//   $(".arrow-left").on("click",slideBackward);
//   $(".arrow-right").on("click",slideForward);
//    }); 
// }






