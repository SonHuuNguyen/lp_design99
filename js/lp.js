$(document).ready(function(){
$('#quote-container').hide();
$(".fadeIn").hide();
$(".fadeIn").fadeIn(3000);

// var under_input = $(".form-group").find('div');

$('.form-group input').focus(function(){
	$('.form-group').removeClass('on_focus');
	$(this).parent('.form-group').addClass('on_focus');

})
$('.get-quote').click(function() {
var carousel_img = $(".carousel-inner .active").find("img").height();
$('#quote-container').css("height", carousel_img+50);
$("#quote-form").animate({
        top: '-=50px',
    });
$('#quote-container').show();
});

$('#quote-container').click(function(event) {
	if(event.target.id == "quote-container"){
		$("#quote-form").css({
		top: '+=50px'
	});
		$(this).hide();
	}
	
});


});