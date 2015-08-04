
// j
//// jtaModal
var modalSpeed = 200;
var lmw = ".jtaModal_wrapper";
var lm = ".jtaModal";
var container = $(lm);

$(".jtaModal_button").click(function(){
	$(lmw).fadeIn(modalSpeed);
	$(lm).fadeIn(modalSpeed);
	$(document).mouseup(function(e){
		if (container.css("display") == "block") {
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				container.fadeOut(modalSpeed);
				$(lmw).fadeOut(modalSpeed);
			};
		};
	});
});

$(".jtaModal_dismiss").click(function(event){		
	if (event.preventDefault) {
		event.preventDefault();
	} else {
		event.returnValue = false; 
	};
	$(lmw).fadeOut(modalSpeed);
	$(lm).fadeOut(modalSpeed);
});
