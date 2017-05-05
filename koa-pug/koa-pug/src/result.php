
<?php
	$name=$_GET["name"];
	$seri=$_GET["seri"];
	$type=$_GET["type"];
	$pst=$_GET['pst'];
	
	$y=(int)substr($name,0,4);
	$m=(int)substr($name,4,2);
	$d=(int)substr($name,6,2);
	$h=(int)substr($name,8,2);
	
	if($type=='Search'){
		if(strlen($name)==10)$nametype='onehour';
		else if(strlen($name)==8)$nametype='oneday';
		else if(strlen($name)==6)$nametype='onemonth';
		else $nametype='error';
	}
	//Search name is not correct.
	if($nametype=='error'){
		echo "Error In Entering Search Date.<br><br> Example: 2016/01/01 => 20160101 . <br>Example:2016/01&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp=> 201601.";
		return;
	}
	
	include_once('events_arrary.php');
	include_once('function.php');
	include_once('sensor/station_inf.php');
	$i=0;
	$j=0;

//Search type
	if($type==Search)
	{	
		if($No_event==1)echo '<h2>There is no events in data sets.<br><br><h2>';
		if($d==0)echo "<h2>(CMT)&nbsp&nbsp Your search：".$y."／".$m."／"."1 ～ ".$y."／".$m."／31"."&nbsp&nbsp&nbsp&nbsp</h2>";//&nbsp=空白
		else echo "<h2>(CMT)Your search:".$y."／".$m."／".$d."</h2>";
		echo '<table>';
		echo '<tr height="50px">  
				<th><font_in_th>Numbering</font_in_th></th>
				<th><font_in_th>Event Time</font_in_th></th>
				<th><font_in_th>Dep</font_in_th></th>
				<th><font_in_th>Mpd</font_in_th></th>
				<th><font_in_th>senCt</font_in_th></th>
			</tr>';
		$z=0;
		for($i=1;$i<=count($event_info);$i++)
		{	
			
				$mon=(int)substr($event_info[$i][2],5,2);
				$day=(int)substr($event_info[$i][2],13,2);
				$hur=(int)substr($event_info[$i][2],17,2);
				$min=(int)substr($event_info[$i][2],23,2);
				$sec=(float)substr($event_info[$i][2],28,6);
				//setting link
				$link=settinglink($name,$hur,$min,$sec);
			
			//超過多少snsor數量才會顯示在網頁上面
			if(substr($RepCount[$i+1],0,7)=='count:0'){				
				//echo $link.'<br>';
				$z++;
				//echo $event_info[$i][count($event_info[$i])-1];
				echo '<tr>';
				echo '<td><font_in_table>'.$z.'</font_in_table></td>';//count																									
				echo '<td><font_in_table><a href="http://140.118.127.71/earthquake/others/System/web/search_result.php?name='.$link.'&type='."rep&pst=".$nametype."&seri=".$event_info[$i][count($event_info[$i])-1].'">'.$mon."/".$day.",".$hur.":".$min." :".$sec.'</a></font_in_table></td>';//eve t
				//echo '<td><font_in_table>'.substr($event_info[$i][2],35,8).'</font_in_table></td>';//lat
				//echo '<td><font_in_table>'.substr($event_info[$i][2],44,9).'</font_in_table></td>';//lon
				echo '<td><font_in_table>'.substr($event_info[$i][2],55,5).'</font_in_table></td>';//dep
				echo '<td><font_in_table>'.substr($event_info[$i][2],62,4).'</font_in_table></td>';//Mpd
				echo '<td><font_in_table>'.(count($event_info[$i])-6).'</font_in_table></td>';//number of sensor 
				/*
				for($k=4;$k<=count($event_info[$i]);$k++){
					if(substr($event_info[$i][$k],0,1)=='c'){
						echo '<td><font_in_table>'/*.($k-4)*//*."  ".substr($event_info[$i][$k],6,1).'</font_in_table></td>';//Mpd
					}
				}
				*/
				echo '</tr>';
			}
		}
			//echo $No_event;					
			
			echo '</table>';
	}
	if($type==TestPick)
	{
			if($h!=0)echo "<h2>CWBtime = Event Time + 8hour.&nbsp&nbsp Your search：".$y."／".$m."／".$d."&nbsp&nbsp&nbsp&nbsp".$h.":00~".$h.":59"."</h2>";//&nbsp=空白
			else echo "<h2>CWBtime = Event Time + 8hour.   Your search:".$y."／".$m."／".$d."</h2>";
			echo '<table>';
			echo '<tr height="50px">  
					<th><font_in_th>＼</font_in_th></th>
					<th><font_in_th>Event Time</font_in_th></th>
					<th><font_in_th>Reporting Time</font_in_th></th>
					<th><font_in_th>Dep</font_in_th></th>
					<th><font_in_th>Mpd</font_in_th></th>
					<th><font_in_th>senCt</font_in_th></th>
					<th><font_in_th>RepCt</font_in_th></th>
				</tr>';
			$z=0;
			for($i=1;$i<=count($event_info);$i++)
			{	
				
					$mon=(int)substr($event_info[$i][2],5,2);
					$day=(int)substr($event_info[$i][2],13,2);
					$hur=(int)substr($event_info[$i][2],17,2);
					$min=(int)substr($event_info[$i][2],23,2);
					$sec=(float)substr($event_info[$i][2],28,6);
					//setting link
					$link=settinglink($name,$hur,$min,$sec);
				
				//超過多少snsor數量才會顯示在網頁上面
				if((count($event_info[$i])-6)>1){				
					//echo $link.'<br>';
					$z++;
					echo '<tr>';
					echo '<td><font_in_table>'.$z.'</font_in_table></td>';//count																									
					echo '<td><font_in_table><a href="http://140.118.127.71/earthquake/others/System/web/search_result.php?name='.$link.'&type='."prep&pst=".$nametype."&seri=".$i.'">'.$mon."/".$day.",".$hur.":".$min." :".$sec.'</a></font_in_table></td>';//eve t
					echo '<td><font_in_table>'.substr($event_info[$i][0],15,31).'</font_in_table></td>';//rep t
					//echo '<td><font_in_table>'.substr($event_info[$i][2],35,8).'</font_in_table></td>';//lat
					//echo '<td><font_in_table>'.substr($event_info[$i][2],44,9).'</font_in_table></td>';//lon
					echo '<td><font_in_table>'.substr($event_info[$i][2],55,5).'</font_in_table></td>';//dep
					echo '<td><font_in_table>'.substr($event_info[$i][2],62,4).'</font_in_table></td>';//Mpd
					echo '<td><font_in_table>'.(count($event_info[$i])-6).'</font_in_table></td>';//number of sensor 
					//echo $event_info[$i][9];
					for($k=4;$k<=count($event_info[$i]);$k++){
						if(substr($event_info[$i][$k],0,1)=='c'){
							echo '<td><font_in_table>'/*.($k-4)*/."  ".substr($event_info[$i][$k],6,1).'</font_in_table></td>';//Mpd
						}
					}
					echo '</tr>';
				}
			}
										
				if($No_event==1)echo '<font>There is no events in data sets.<br><br></font>';
				echo '</table>';
	}
	
//Report type
	else if($type==rep||$type==prep)
	{	
		echo '<ul>';
		echo 'Now is '.substr($RepCount[$seri],6,1).'-th report.&nbsp&nbsp&nbsp&nbsp&nbsp<br>';
		$next=$seri+1;
		$previous=$seri-1;
		//Link to backward and next previous
		
		if($pst==1)echo '<a href="http://140.118.127.71/earthquake/others/System/web/search_result.php?name='.substr($name,0,10).'&type=Search">'.'Back to the List'.'</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
		if($pst==2)echo '<a href="http://140.118.127.71/earthquake/others/System/web/search_result.php?name='.substr($name,0,8).'&type=Search">'.'Back to the List'.'</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
		echo '<a href="http://140.118.127.71/earthquake/others/System/web/search_result.php?name='.$name.'&type=rep&pst='.$pst.'&seri='.$next.'">'.'Next Report'.'</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
		echo '<a href="http://140.118.127.71/earthquake/others/System/web/search_result.php?name='.$name.'&type=rep&pst='.$pst.'&seri='.$previous.'">'.'Previous Report'.'</a>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
		echo '</ul>';
		//echo $event_info[$seri][0];
		//Reporting time 2016/ X/XX X:XX:XX
		echo '<h3>';
		echo '<table>';
		echo '<tr><td><font_in_th>'.$event_info[$seri][0].'</font_in_th></td></tr>';
		echo '</table>';
		
		//Event information
		echo '<table>';
		echo '<tr>
				<td>Year	</td>
				<td>Month	</td>
				<td>Day		</td>
				<td>Hour	</td>
				<td>Minute	</td>
				<td>Second	</td>
				<td>Lat		</td>
				<td>Lon		</td>
				<td>Dep		</td>
				<td>Mpd		</td>
			</tr>';
		
		echo '<td>'.(int)substr($event_info[$seri][2],0,4).'</td>';				//event year
		echo '<td>'.(int)substr($event_info[$seri][2],5,2).'</td>';				//event month
		echo '<td>'.(int)substr($event_info[$seri][2],13,2).'</td>';				//event day
		echo '<td>'.(int)substr($event_info[$seri][2],17,2).'</td>';				//event hour
		echo '<td>'.(int)substr($event_info[$seri][2],23,2).'</td>';				//event minute
		echo '<td>'.(float)substr($event_info[$seri][2],28,6).'</td>';			//event second
		echo '<td>'.number_format(substr($event_info[$seri][2],35,8),2).'</td>';				  //lat
		echo '<td>'.number_format(substr($event_info[$seri][2],44,9),2).'</td>';//lon
		echo '<td>'.substr($event_info[$seri][2],55,5).'</td>';//dep
		echo '<td>'.substr($event_info[$seri][2],62,4).'</td>';//Mpd
		echo '</table>';	
		
		//Sensor information
		echo '<table>';
		echo '<tr><td><font_in_th>'.'Trigger Station'.'</font_in_th></td></tr>';
		echo '</table>';
		echo '<table>';
		echo '<tr>
				<td>＼		</td>
				<td>Station	</td>
				<td>Lat		</td>
				<td>Lon		</td>
				<td>tc		</td>
				<td>pd		</td>
				<td>pv		</td>
				<td>pa		</td>
				<td>Mtc		</td>
				<td>MPd		</td>
				<td>RecieveT</td>
				</tr>';
		for($i=4;$i<=count($event_info[$seri])-2;$i++)
		{	
			echo '<tr>';
			if(substr($event_info[$seri][$i],0,4)=="coun")continue;
			echo '<td>'.($i-3).'</td>';
			echo '<td>'.substr($event_info[$seri][$i],0,4).'</td>';//Station name
			echo '<td>'.number_format(substr($event_info[$seri][$i],5,8),2).'</td>';//Station Lat
			echo '<td>'.number_format(substr($event_info[$seri][$i],15,9),2).'</td>';//Station Lon
			echo '<td>'.number_format(substr($event_info[$seri][$i],26,6),3).'</td>';//tc
			echo '<td>'.number_format(substr($event_info[$seri][$i],34,11),3).'</td>';//pd
			echo '<td>'.number_format(substr($event_info[$seri][$i],47,11),3).'</td>';//pv
			echo '<td>'.number_format(substr($event_info[$seri][$i],59,7),2).'</td>'; //pa
			echo '<td>'.number_format(substr($event_info[$seri][$i],67,7),4).'</td>';//Mtc	
			echo '<td>'.number_format(substr($event_info[$seri][$i],75,7),1).'</td>';//Mpd
			echo '<td>'.number_format(substr($event_info[$seri][$i],84,8),2).'</td>';//receive time
			echo'</tr>';
		}	
		echo '<tr><td>'.$event_info[$seri][count($event_info[$seri])-2].'</td></tr>';
		echo '</table>';
		echo '</h3>';
		
		
		for($i=4;$i<=count($event_info[$seri])-2;$i++)
		{	
			$sensor_info[$i-4][]= substr($event_info[$seri][$i],0,4);	
			$sensor_info[$i-4][]= substr($event_info[$seri][$i],5,8);	
			$sensor_info[$i-4][]= substr($event_info[$seri][$i],14,9);	
		}
		$sen=json_encode($sensor_info);
		echo '<backtolist><a href="http://140.118.127.71/earthquake/others/System/web/search_result.php?name='.$name.'&type=waveform&pst='.$pst.'&seri='.$seri.'">'.'WaveForm'.'</a></backtolist>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp';
		
		for($i=4;$i<=count($event_info[$seri])-3;$i++)
		{
			//echo '<iframe id=ifr src=src/chart.php?sensor='.substr($event_info[$seri][$i],0,4).'&date='.substr($name,0,14).'  width="1040px" height="150px" overflow:hidden></iframe>';
		}
	}
//waveform type
	else if($type==waveform){
		
		//array for googlemap
		for($i=4;$i<=count($event_info[$seri])-2;$i++)
		{	
			$sensor_info[$i-4][]= substr($event_info[$seri][$i],0,4);	
			$sensor_info[$i-4][]= substr($event_info[$seri][$i],5,8);	
			$sensor_info[$i-4][]= substr($event_info[$seri][$i],14,9);	
		}
		$sen=json_encode($sensor_info);
		
		//Find path 
		$path = '../wave/'.substr($name,0,6).'/'.substr($name,0,8).'/'.substr($name,0,14);
		echo $path.'<br>';
		
		//ex.55.99秒 取的波型檔案是 5600  不取5500
		$path1 = '../wave/'.substr($name,0,6).'/'.substr($name,0,8).'/'.(substr($name,0,14)+1);
		echo $path1.'<br>';
		
		if(is_dir($path1))$path=$path1;
		//如果波形不存在開始尋找波形檔案開始尋找波形檔案
		if(!is_dir($path)){
			if(!is_dir($path1))
			if(!is_dir($path)){
				echo "＊ FILE not exists:&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp ".substr($name,0,14)." <br>";
				$path=searchwavefile(substr($name,0,14));
				$diff=substr($path,0,2);
				if($diff<10)$path=substr($path,1,100);
				else $path=substr($path,2,100);
				echo "＊ Open file :".$path.'<br>';
				$diff=$diff*100;
			}
		
				
		}
		else echo '＊ FILE : '.$path.' Exist.<br>';
		//echo $event_info[$seri];
		echo "sensor count: ".(count($event_info[$seri])-6).'<br>';
		if($path){
			
			for($i=4;$i<=count($event_info[$seri])-3;$i++)
			{
					foreach($data as $sensorname => $infomation){
						if(substr($event_info[$seri][$i],0,4)==$sensorname)$index=$infomation[6];
					}
					//echo '<br>'.$event_info[$seri][$i].",".substr($event_info[$seri][$i],85,7);
					
					$trigger=number_format(substr($event_info[$seri][$i],85,7),2);
					
					$trigger=(int)($trigger*100);//receiveT
					echo '<br>aaa'.$trigger.'<br>bb'.(int)substr($name,15,2)	;
					$trigger=		$trigger+		(int)substr($name,15,2)+    $diff+  2000;
					
					if(is_dir($path1))$trigger-=100	;//如果是用進位的時間的話  會多算一秒trigger
					echo " 	前20秒:2000+地震發生時的sample:".substr($name,15,2)."+記錄開始跟地震開始的差值:".$diff."+測站減地震開始時間:".number_format(substr($event_info[$seri][$i],85,7),2)."*100=".$trigger;
				echo '<iframe id=ifr src=src/chartold/chart.php?name='.substr($event_info[$seri][$i],0,4).'&path='.$path.'&type=SR'.'&trigger='.$trigger.'  width="1040px" height="300px" overflow:hidden></iframe>';
				
			}
			
		}
		
	}
	
	
							
?>	

