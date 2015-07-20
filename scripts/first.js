$(document).ready(function(){
	$("a.mobile").click(function()
	{
		$(".sidebar").slideToggle('fast');
	});
	window.onresize = function(events){
		if($(window).width() >451){
			$(".sidebar").show();
		}
	}
	
});