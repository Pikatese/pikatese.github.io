$(document).ready(function(){	
	function getDate() {
    var date = new Date();
    var days = [];
    days[0] = "Sunday";
    days[1] = "Monday";
    days[2] = "Tuesday";
    days[3] = "Wednesday";
    days[4] = "Thursday";
    days[5] = "Friday";
    days[6] = "Saturday";
    n = days[date.getDay()];
    console.log(n);
    $("#date").text("Today is "+n+"!");
    days.pop();
    days.shift();
    var weekdays = days;
    //weekdays = days.slice(0,1);
    //weekdays.pop();
    var option = '';
		for (var i=0;i<weekdays.length;i++){
			if (weekdays[i] === n) {
				option += '<option value="'+ weekdays[i] + '" selected>' + weekdays[i] + '</option>';
			}
			else {
   			option += '<option value="'+ weekdays[i] + '">' + weekdays[i] + '</option>';
   		}
		}
		$('#weekdays').append(option);
	}
getDate();

$("select").change(getMenu);

function getMenu() {
 $.ajax({
   url:"https://pikatese.github.io/kraftvaerk/lunches.csv",
   dataType:"text",
   success:function(data)
   {
   	var chosenDay = $('#weekdays').val();
    var data = data.split(/\r?\n|\r/);
    
    var menu = "";
    if (n === "Saturday" || n === "Sunday") {
    	menu = "We are closed today :(";
    }
    else {
    	for(var row = 0; row<data.length; row++) {
     		var cell_data = data[row].split(";");
     		for(var cell_count=0; cell_count<cell_data.length; cell_count++) {
      		if(cell_data[0] === chosenDay && cell_count !== 0) {
       			menu += cell_data[cell_count] + " ";
      		}
      	}
    	}
  	}
    $('#menu').html(menu+ "€");
   }
  });
};
 getMenu();




});