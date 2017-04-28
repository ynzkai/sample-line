
/* You can set the variables below to fit your website. */

// start date
var sStart = '2017/03/27';

// end date
var sEnd = '2017/09/27';





/* Note: Modify the folowing code is not suggestion! */

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

  // validate contact form
  var contact_validator = $("#contactForm").validate({
	errorPlacement: function(error, element) {
	// Append error within linked label
	$(element).closest("form")
	  .find("label[for='" + element.attr("id") + "']")
		.append(error);
	},
	errorElement: "span",
	messages: {
	  name: {
	  	required: " Please leave your name."
	  },
	  email: {
	  	required: " Please leave your e-mail."
	  },
	  message: {
	  	required: " Please leave a message."
	  }
	}
  });

  // validate subscribe form
  var sub_validator = $("#subscribeForm").validate({
	errorPlacement: function(error, element) {
	// Append error within linked label
	$(element).closest("form")
	  .find("label[for='" + element.attr("id") + "']")
		.append(error);
	},
	errorElement: "span",
	messages: {
	  email: {
	  	required: " We need your email address."
	  }
	}
  });

  // nicescroll
  $("html, #message").niceScroll({
	cursorwidth: "10px",
	cursorcolor:"#999",
	cursorborder: "0px",
	cursoropacitymax: 0.5
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

  // scroll animation
  $("#about .items .item i").listenedByScroll("animated fadeInDown");
  $("#about .items .item p").listenedByScroll("animated fadeInUp");
  $("#subscribe .more-info p").listenedByScroll("animated fadeInUp");
  $("#subscribe .form-wrapper").listenedByScroll("animated fadeInDown");
  $("#contact-info .address").listenedByScroll("animated fadeInLeft");
  $("#contact-info .telephone").listenedByScroll("animated fadeInLeft");
  $("#contact-info .email").listenedByScroll("animated fadeInLeft");
  $("#contact-info .sns").listenedByScroll("animated fadeInLeft");

});

