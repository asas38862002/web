<?php
	if($type==Search||$type==rep||$type==waveform){
		
		if($type==rep)$nametype=$pst;
		if($type==waveform)$nametype=$pst;
		if($m<10)$filename="../Events/".$y."0".$m."_evts_new.txt";
		else $filename="../Events/".$y.$m."_evts_new.txt";
		//echo $filename;
		$file = fopen($filename, "r");
		$j=0;
		$i=0;
		if($file){
			while(!feof($file))$all_evts[]=fgets($file).'<br>';
			fclose($file);
		}
		
		$No_event=1;
	
		//make array of  each event after search
		$numevent=0;
		for($i=0;$i<count($all_evts);$i++)
		{	
			//Find report start position and find which report will be print .
			if(substr($all_evts[$i],0,9)=='Reporting' && ($nametype=='onemonth')){
				$repinside=0;
				$numevent++;
				$event_info[$numevent][$repinside]=$all_evts[$i];
			}
			if(substr($all_evts[$i],0,9)=='Reporting' && ($nametype=='oneday')){			
				if($d<(int)substr($all_evts[$i],31,2))break;
				if($d==(int)substr($all_evts[$i],31,2)){
					$repinside=0;
					$numevent++;
					$event_info[$numevent][$repinside]=$all_evts[$i];
				}
			}//20160401
			if(substr($all_evts[$i],0,9)=='Reporting' && ($nametype=='onehour')){
				//echo $all_evts[$i];
			}
			//insert the report infomation.
			if($event_info[$numevent][0]!=''){
				$event_info[$numevent][$repinside]=$all_evts[$i];
				$repinside++;
			}
		}
		for($i=1;$i<=count($event_info);$i++)$event_info[$i][count($event_info[$i])-1]=$i;//加入事件編號
		
		for($i=1;$i<=count($event_info);$i++){
			/*$Reptime[$i]=substr($event_info[$i][0],15,-1);
			
			$Eventtime[$i][1]=substr($event_info[$i][2],0,4);
			$Eventtime[$i][2]=substr($event_info[$i][2],5,2);
			$Eventtime[$i][3]=substr($event_info[$i][2],13,3);
			$Eventtime[$i][4]=substr($event_info[$i][2],17,3);
			$Eventtime[$i][5]=substr($event_info[$i][2],23,3);
			$Eventtime[$i][6]=substr($event_info[$i][2],28,6);
			$Eventlocation[$i][1]=substr($event_info[$i][2],35,8);
			$Eventlocation[$i][2]=substr($event_info[$i][2],44,9);
			$EventDep[$i]=substr($event_info[$i][2],55,5);
			$EventMpd[$i]=substr($event_info[$i][2],62,4);
			$EventSenC[$i]=count($event_info[$i])-6;*/
			$RepCount[$i] = substr($event_info[$i][count($event_info[$i])-2],0,-1);	
		}
		
		
		if($event_info[1][0]=='')$No_event=1;
		else $No_event=0;
		
		//echo $event_info[1][0];
		//print_r($RepCount);
		//print_r($all_evts);
		//print_r($event_info);
		//echo count($event_info);
		
	}//search
	
	if($type==TestPick||$type==prep){
		if($m<10)$filename="../Events/".$y."0".$m."_evts_new.txt";
		else $filename="../Events/".$y.$m."_evts_new.txt";
		//echo $filename;
		$file = fopen($filename, "r");
		
		$j=0;
		$i=0;
		if($file)
		{
			//$all_evts[]=array();
			while(!feof($file))
			{
				$all_evts[]=fgets($file).'<br>';
			}
			fclose($file);
		}
		
		$No_event=1;
		
		//make array of  each event after search
		for($i=0;$i<count($all_evts);$i++)
		{	
			if(substr($all_evts[$i],0,1)=='R' && ($nametype==1||$pst==1))
			{	
				if($d==(int)substr($all_evts[$i],31,2)&&//day
					$h==(int)substr($all_evts[$i],34,2))//hour
				{
					$copy=1;
					$j++;
					$No_event=0;
					//echo "bbb".$j."<br>";
					
					//$event_info[$j]=array();
				}
				else $copy=0;
			}
			
			if(substr($all_evts[$i],0,1)=='R' && ($nametype==2||$pst==2))
			{	
				if($d==(int)substr($all_evts[$i],31,2))
				{
					$copy=1;
					$j++;
					$No_event=0;
					
					//$event_info[$j]=array();
				}
				else $copy=0;
			}
			if($copy==1)$event_info[$j][]=$all_evts[$i].'<br>';					
		}
		//echo $event_info[1][0];
		//print_r($all_evts);
		//print_r($event_info);
	}
?>

