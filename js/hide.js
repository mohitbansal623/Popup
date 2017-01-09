$(document).ready(function() {
  $(".message").hide();	
  $(".link").click(function() {
    $(".message").popup();
	});
});