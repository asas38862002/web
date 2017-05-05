<html>

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"></script>
	<?php
		if($_GET['type']==SR){
			$nn = 0;
			include('../../sensor/station_inf.php');
			$senname	= $_GET['name'];
			$triggertime= $_GET['trigger'];
			//echo $_GET['path'];
			//開啟波形檔
			$path='../../'.$_GET['path'].'/'.$senname.'_120';			
			$fp=fopen($path,"r");
			
			//設定index
			foreach($data as $namesorname => $infomation){
								if($senname==$namesorname)$index=$infomation[6];
			}
			if($fp){
			
				$header[]=fgets($fp);
				$filearray[]=explode(" ",$header[0]);
				
				$i=0;
				
				while (($wavedata = fgetcsv($fp, '10000', ' ','\n')) !== FALSE) {
					$temp = $wavedata;
					$wave.=$temp[0];
					
				}
				$wave .= '0';
				$ewave=explode(",",$wave);
				$wave = 0;
				for($i=0;$i<$triggertime;$i++)$wave .=$ewave[$i].",";
				$wave.="{ y: ".$ewave[$triggertime].",
							marker: {
								symbol: 'url(https://www.highcharts.com/samples/graphics/sun.png)'
							}
						},";
				for($i=($triggertime+1);$i<12500;$i++)$wave .=$ewave[$i].",";
				$wave .= '0';
				
				$x_line = "plotLines: [{
						    color: 'red', 
						    dashStyle: 'solide', 
						    value: ".$triggertime.", 
						    width:1,
						    label: {
		        			text: 'Detect at:".$triggertime."',
		        				style: {
		        			  		fontSize:'18px'
		        				}
						    }
						  }]";
					
			}else echo "檔案不存在. ";
			fclose($fp);

			
			if($filearray != ""){
				
				$ymd=$filearray[0][2]."/".$filearray[0][3]."/".$filearray[0][4];
				$hr=$filearray[0][5];
				$Min_Sec=$filearray[0][6].":".$filearray[0][7];
				$Y_Axisp .= "{name: '"."Start time:".$ymd.'   '.$hr.":".$Min_Sec."', marker: {symbol: 'cross'}, data: [".$wave."]}";
				
			}else{
				echo gettext('查詢內容不正確');
			}
			$title="Record Start : ".$ymd."   ".$hr.":".$Min_Sec." | Sensor : ".$_GET['name'];
			$max=11000;
		}
		else if($_GET['type']==RT){
			echo '<meta http-equiv="refresh" content="3">';
			$path='../../../wave/REALTIME/'.$_GET['sen'].'_120';	
			//echo $path;
			$fp=fopen($path,"r");
			//echo $path;
			//設定index
			foreach($data as $namesorname => $infomation){
								if($senname==$namesorname)$index=$infomation[6];
			}
			if($fp){
				
				$header[]=fgets($fp);
				$filearray[]=explode(" ",$header[0]);
				
				$i=0;
				
				while (($wavedata = fgetcsv($fp, '10000', ' ','\n')) !== FALSE) {
					$temp = $wavedata;
					$wave .= $temp[0];
					
				}
				
				
			}else echo "檔案不存在. ";
			fclose($fp);
			if($filearray != ""){
				$ymd=$filearray[0][2]."/".$filearray[0][3]."/".$filearray[0][4];
				$hr=$filearray[0][5];
				$Min_Sec=$filearray[0][6].":".$filearray[0][7];
				$Y_Axisp .= "{name: '"."5秒更新一次 "."', marker: {symbol: 'cross'}, data: [".$wave."]}";
				
			}else{
				echo gettext('查詢內容不正確');
				
			}
			$title="測站:".$_GET["sen"];
			$max=12500;
		}
	?>
<script type="text/javascript">
		$(function () {

			// Define a custom symbol path
			Highcharts.SVGRenderer.prototype.symbols.cross = function (x, y, w, h) {
				return ['M', x, y, 'L', x + w, y + h, 'M', x + w, y, 'L', x, y + h, 'z'];
			};
			if (Highcharts.VMLRenderer) {
				Highcharts.VMLRenderer.prototype.symbols.cross = Highcharts.SVGRenderer.prototype.symbols.cross;
			}


			$('#container').highcharts
			({
					chart: {
							renderTo: 'container', 
							type: 'spline',
							zoomType: 'xy'
					},
					title: {
						text: '<?php echo  $title?>'
					},

					legend: {
						y: -40 // make room for subtitle
					},

					xAxis: {
						title: {
							text: 'Sample'
						},
						min:0,
						max:<?php echo $max;?>,
						categories: [],
						<?php echo $x_line; ?>
						
					},

					series: [<?php echo $Y_Axisp; ?>
					
					],

					credits: {
						enabled: false
					},

					subtitle: {
						verticalAlign: 'bottom',
						align: 'right',
						y: null,
						style: {
							fontSize: '10px'
						}
					}
			});
});


		</script>
    <script src="https://code.highcharts.com/highcharts.js"></script>
	<script src="https://code.highcharts.com/highcharts-more.js"></script>
	<script src="https://code.highcharts.com/modules/exporting.js"></script>
	<div id="container" style="min-width: 310px; height: 400px; margin: 0 auto"></div>
	
</html>