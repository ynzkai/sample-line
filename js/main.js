// progress

var sStart = '2015/04/27';
var sEnd = '2015/06/27';
var dStart = new Date(sStart);
var dEnd = new Date(sEnd);
var total = dEnd-dStart;

$(document).ready(function() {
  var l = new Date() - dStart;
  var w = l/total*100 + "%";
  $("#passed").animate({width: w}, 3000, "easeInOutQuart");

  $('#countdown').countdown(sEnd, function(event) {
	$(this).find("#days").html(event.strftime('%-D'));
	$(this).find("#hours").html(event.strftime('%-H'));
	$(this).find("#minutes").html(event.strftime('%-M'));
	$(this).find("#seconds").html(event.strftime('%-S'));

	var left = new Date() - dStart;
	var persentage = Math.max(0, left / total * 100);
	$("#persentage").html(persentage.toFixed() + '%');
	
  });

  // scroll buttons

$("#about-arrow .inner-wrapper").click(function() {
	$(document).scrollTo("#about", 1000, {easing: "easeInOutQuad"});
});

$("#subscribe-button").click(function() {
	$(document).scrollTo("#subscribe", 1000, {easing: "easeInOutQuad"});
});

$("#contact-button").click(function() {
	$(document).scrollTo("#contactus", 1000, {easing: "easeInOutQuad"});
});

$("#home-button").click(function() {
	$(document).scrollTo(0, 1000, {easing: "easeInOutQuad"});
});

  // slider
  $("#backpics").responsiveSlides({
    speed: 2000,
    timeout: 5000
  });
});

