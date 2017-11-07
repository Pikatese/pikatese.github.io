$(document).ready(function(){
	$(function(){
	    var $select = $(".pricelist");
	    for (i=1000;i<=50000;i=i+1000){
	        $select.append($('<option></option>').val(i).html(i))
   		}
   		$("option").append( " €" );
	});
	$(".menu").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1000);
    });
});