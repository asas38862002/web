<html>
<link rel="stylesheet"  type="text/css"href="../css/sensorlist.css" media="screen" />
<link rel="stylesheet" type="text/css" href="../css/print.css" media="print" />
<?php
	include('station_inf.php');
	
	
	echo'<table>';
	echo '<tr height="50px">
				<th><font_in_th>＼</font_in_th></th>	
				<th><font_in_th>Sensor</font_in_th></th>
				<th><font_in_th>City</font_in_th></th>
				<th><font_in_th>Serial</font_in_th></th>
				<th><font_in_th>Location</font_in_th></th>
				<th><font_in_th>Lat</font_in_th></th>
				<th><font_in_th>Lon</font_in_th></th>
		</tr>';
	foreach($data as $sensor)
	{
		echo '<tr>';
		echo '<td>'.$sensor[6].'</td>';
		for($i=0;$i<count($sensor)-1;$i++)
		{	
			
			if($i==0)echo '<td><a href="http://140.118.155.230/earthquake/others/System/web/sensorlist.php?sen='.$sensor[$i].'" target="_top">'.$sensor[$i].'</a></td>';
			else echo '<td>'.$sensor[$i].'</td>';
		
		}
	
		echo'</tr>';
	}
	echo'</table>';
	
?>

</html>