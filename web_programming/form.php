<html>
<head>
    <title>FOOD ORDERED</title>
    <style>body {padding:1%;}div {padding:1%;max-width: 700px;margin:0 auto;border-radius:10px;border: 2px solid #ccc;}</style>
</head>    
<body>
<div>
Welcome, <?php echo $_POST["name"]; ?>!<br>
Your email address is: <?php echo $_POST["email"]; ?>.<br>
The food ordered: <?php echo $_POST["breakfast"]; ?>, <?php echo $_POST["lunch"]; ?>, <?php echo $_POST["dinner"]; ?>.<br>
The total price is: 
<?php
$breakfast = $_POST["breakfast"];
if ($breakfast === "Porridge")
	$br_price = 5;
else if ($breakfast === "Cereals")
	$br_price = 3;
else if ($breakfast === "Jogurt")
	$br_price = 2;

$lunch = $_POST["lunch"];
if ($lunch === "Borsch")
	$lu_price = 4;
else if ($lunch === "Salmon soup")
	$lu_price = 3;
else if ($lunch === "Vegetables soup")
	$lu_price = 2;

$dinner = $_POST["dinner"];
if ($dinner === "Potato and meat")
	$di_price = 6;
else if ($dinner === "Salmon and rice")
	$di_price = 3;
else if ($dinner === "Vegetables and salad")
	$di_price = 2;

$sum = $br_price + $lu_price + $di_price;
echo $sum;
?>€.<br>
<a href="https://pikatesetesting.000webhostapp.com/form.html">Go back to the main page to make a new order!</a>
</div>
</body>
</html>