$(document).ready(function(){
	$("a.mobile").click(function()
	{
		$(".sidebar").slideToggle('fast');
	});
	window.onresize = function(events){
		if($(window).width() >= 439){
			$(".sidebar").show();
		}
		else if($(window).width() >439){
			$(".sidebar").hide();
		}
	}
	
});