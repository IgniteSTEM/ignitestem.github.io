function toggleChevron(collapse_faq_id) {
	var font_awesome_class = $(collapse_faq_id).closest("li").find("span");
	if (font_awesome_class.hasClass("fa fa-chevron-circle-right")) {
		font_awesome_class.removeClass();
		font_awesome_class.addClass("fa fa-chevron-circle-down");
	} else {
		font_awesome_class.removeClass();
		font_awesome_class.addClass("fa fa-chevron-circle-right");
	}
}


$(document).ready(function() {
	$("#collapse_faq_1").hide();
	$("#collapse_faq_2").hide();
	$("#collapse_faq_3").hide();
	$("#collapse_faq_4").hide();
	$("#collapse_faq_5").hide();
	$("#collapse_faq_6").hide();
	$("#collapse_faq_7").hide();
	$("#collapse_faq_8").hide();
	$("#collapse_faq_9").hide();






	$("#question_1").click(function() {
		$("#collapse_faq_1").slideToggle();
		toggleChevron("#collapse_faq_1");
	});
	$("#question_2").click(function() {
		$("#collapse_faq_2").slideToggle();
		toggleChevron("#collapse_faq_2");
	});
	$("#question_3").click(function() {
		$("#collapse_faq_3").slideToggle();
		toggleChevron("#collapse_faq_3");
	});
	$("#question_4").click(function() {
		$("#collapse_faq_4").slideToggle();
		toggleChevron("#collapse_faq_4");
	});
	$("#question_5").click(function() {
		$("#collapse_faq_5").slideToggle();
		toggleChevron("#collapse_faq_5");
	});
	$("#question_6").click(function() {
		$("#collapse_faq_6").slideToggle();
		toggleChevron("#collapse_faq_6");
	});
	$("#question_7").click(function() {
		$("#collapse_faq_7").slideToggle();
		toggleChevron("#collapse_faq_7");
	});
	$("#question_8").click(function() {
		$("#collapse_faq_8").slideToggle();
		toggleChevron("#collapse_faq_8");
	});
	$("#question_9").click(function() {
		$("#collapse_faq_9").slideToggle();
		toggleChevron("#collapse_faq_9");
	});

});