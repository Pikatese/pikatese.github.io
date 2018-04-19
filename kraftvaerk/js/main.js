$(document).ready(function(){	
	function getDate() {
    var date = new Date();
    var weekdays = [];
    weekdays[0] = "Sunday";
    weekdays[1] = "Monday";
    weekdays[2] = "Tuesday";
    weekdays[3] = "Wednesday";
    weekdays[4] = "Thursday";
    weekdays[5] = "Friday";
    weekdays[6] = "Saturday";
    var n = weekdays[date.getDay()];
    console.log(n);
    $("#date").text("Today is "+n+"!");
	}
getDate();


 $.ajax({
   url:"lunches.csv",
   dataType:"jsonp",
   success:function(data)
   {

    var data = data.split(/\r?\n|\r/);
    alert(data);
    /*
    var table_data = '<table class="table table-bordered table-striped">';
    for(var count = 0; count<employee_data.length; count++)
    {
     var cell_data = employee_data[count].split(",");
     table_data += '<tr>';
     for(var cell_count=0; cell_count<cell_data.length; cell_count++)
     {
      if(count === 0)
      {
       table_data += '<th>'+cell_data[cell_count]+'</th>';
      }
      else
      {
       table_data += '<td>'+cell_data[cell_count]+'</td>';
      }
     }
     table_data += '</tr>';
    }
    table_data += '</table>';
    $('#employee_table').html(table_data);*/
   }
  });




});