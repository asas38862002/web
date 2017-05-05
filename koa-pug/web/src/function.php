<?php
//settinglink
	function settinglink($evt,$hur,$min,$sec){
		if($hur>=10)
				{
					if($min>=10)
					{
						if($sec>=10) 				$link=$evt.$hur.$min.$sec;		
						else if($sec<10&&$sec>0)	$link=$evt.$hur.$min."0".$sec;
						else 						$link=$evt.$hur.$min."00";					
					}
					else if($min<10&&$min>0)
					{
						if($sec>=10) 				$link=$evt.$hur."0".$min.$sec;		
						else if($sec<10&&$sec>0)	$link=$evt.$hur."0".$min."0".$sec;
						else 						$link=$evt.$hur."0".$min."00";	
					}
					else
					{
						if($sec>=10) 				$link=$evt.$hur."00".$sec;		
						else if($sec<10&&$sec>0)	$link=$evt.$hur."00"."0".$sec;
						else 						$link=$evt.$hur."00"."00";	
					}
				}
				else if($hur<10&&$hur>0)
				{
					if($min>=10)
					{
						if($sec>=10) 				$link=$evt."0".$hur.$min.$sec;		
						else if($sec<10&&$sec>0)	$link=$evt."0".$hur.$min."0".$sec;
						else 						$link=$evt."0".$hur.$min."00";
					}
					else if($min<10&&$min>0)
					{
						if($sec>=10) 				$link=$evt."0".$hur."0".$min.$sec;		
						else if($sec<10&&$sec>0)	$link=$evt."0".$hur."0".$min."0".$sec;
						else 						$link=$evt."0".$hur."0".$min."00";	
					}
					else
					{
						if($sec>=10) 				$link=$evt."0".$hur."00".$sec;		
						else if($sec<10&&$sec>0)	$link=$evt."0".$hur."00"."0".$sec;
						else 						$link=$evt."0".$hur."00"."00";	
					}
				}
				else
				{
					if($min>=10)
					{
						if($sec>=10) 				$link=$evt."00".$min.$sec;		
						else if($sec<10&&$sec>0)	$link=$evt."00".$min."0".$sec;
						else 						$link=$evt."00".$min."00";
					}
					else if($min<10&&$min>0)
					{
						if($sec>=10) 				$link=$evt."00"."0".$min.$sec;		
						else if($sec<10&&$sec>0)	$link=$evt."00"."0".$min."0".$sec;
						else 						$link=$evt."00"."0".$min."00";	
					}
					else
					{
						if($sec>=10) 				$link=$evt."00"."00".$sec;		
						else if($sec<10&&$sec>0)	$link=$evt."00"."00"."0".$sec;
						else 						$link=$evt."00"."00"."00";	
					}
				}
		
		if(strlen($link)==20)
		{
			$f=substr($link,0,8);
			$l=substr($link,10,10);
			$link=$f.$l;	
		}
		return $link;
	}	
//search wavefile

	function searchwavefile($startname){
		$path = '../wave/'.substr($startname,0,6).'/'.substr($startname,0,8).'/'.substr($startname,0,14);
		//echo $path.'<br>';
		$i=1;
		while(!is_dir($path)){
			if($i>=100){
				echo "＊ No waveform data in 100 seconds.<br>";
				return 0;
			}
			//echo $startname.'<br>';
			if(substr($startname,8,6)=='000000'){
				echo '＊No waveform file in system.<br>';
				echo '＊Diff:'.$i.'seconds .<br>';
				return 0;
			}
			//if(substr($startname,8,6)=='000000')$startname=$startname-764040;
			if(substr($startname,10,4)=='0000')$startname=$startname-4000;
			if(substr($startname,12,2)=='00')$startname=$startname-40;
			$startname=$startname-1;
			$path = '../wave/'.substr($startname,0,6).'/'.substr($startname,0,8).'/'.substr($startname,0,14);
			//echo $path.'<br>';
			if(is_dir($path)){
				echo '＊  Find closest file is:  '.$startname;
				echo '   ＊Diff : '.$i.' Seconds .&nbsp&nbsp&nbsp&nbsp';
				$r=$i.$path;
				return $r;
			}
			$i++;
			
		}
		
	}
	
	/*
	function getpalertlist(){
		$listpath="../palertlist.txt";
		$palertlistFP=fopen($listpath, "r");
		while(!feof($palertlistFP))
		{
			$palertlist[]=fgets($palertlistFP).'<br>';
		}
		//print_r($palertlist);
		fclose($palertlistFP);
		return $palertlist;
	}
	*/
?>