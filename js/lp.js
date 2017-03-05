$(document).ready(function(){
$('#fadded-screen').hide();
$('#quote-container').hide();
$(".fadeIn").hide();
$(".fadeIn").fadeIn(3000);



$('.form-group input').focus(function(){
	$('.form-group').removeClass('on_focus');
	$(this).parent('.form-group').addClass('on_focus');

});

$('.get-quote').click(function() {
var carousel_img = $(".carousel-inner .active").find("img").height();
$('#quote-container').css("height", carousel_img+50);
$("#quote-form").animate({
        top: '-=50px',
    });
$('#fadded-screen').show();
$('#quote-container').show();
});

$('#fadded-screen').click(function(event) {
	if(event.target.id == "fadded-screen"){
		$("#quote-form").css({
		top: '+=50px'
	});
		$(this).hide();
		$('#quote-container').hide();
	}
});
$('#our-service').hover(function(event){
	
	$(this).find('h1').animate({fontSize: '3em'}, "fast");	
});
$('#our-service').mouseleave(function(event){

		$(this).find('h1').animate({fontSize: '2.5em'}, "fast");
	
});



});