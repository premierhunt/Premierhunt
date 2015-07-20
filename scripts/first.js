$(document).ready(function(){
	$("a.mobile").click(function()
	{
		$(".sidebar").slideToggle('fast');
	});
	window.onresize = function(events){
		if($(window).width() > 320){
			$(".sidebar").show();
		}
		else {
			$(".sidebar").hide();
		}
	}
	
});