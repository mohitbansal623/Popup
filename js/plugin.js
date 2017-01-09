jQuery.fn.popup=function() {
  
  $(".message").fadeIn("slow");
  $(".message").css({"marginLeft": "25%","marginRight": "50%","marginTop":"2%","fontSize": "20px","borderRadius":"8px", "color": "black","backgroundColor":"#9c7bd6","padding":"10px"});
  $("p").css({"color":"white","fontSize": "20px","margin":"auto","padding":"10px"});
}

$(document).ready(function() {
  $(".message").append("<input type='button' value='ok' class='ok'>");
  $(".ok").css({"marginLeft":"30%","fontSize": "20px", "paddingLeft":"12px", "color": "blue","paddingRight":"12px","paddingTop":"4px","paddingBottom":"4px"});
  
  $(".ok").click(function() {
    $(".message").hide();
	});
});