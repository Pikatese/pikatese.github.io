$(document).ready(function(){
	$(function(){
	    var $select = $(".pricelist");
	    for (i=1000;i<=50000;i=i+1000){
	        $select.append($('<option></option>').val(i).html(i))
   		}
	});
});