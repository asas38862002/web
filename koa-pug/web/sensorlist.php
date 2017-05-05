<html>
<head>
	<meta charset="utf-8" />
	<title>System</title>
	<link rel="stylesheet"  type="text/css"href="css/styles.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="css/print.css" media="print" />
	<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>

<body>
<div id="wrapper"><!-- #wrapper -->

	<header><!-- header -->
		<h1><a href="http://140.118.127.71/earthquake/others/System/web/">System</a></h1>
	</header><!-- end of header -->
	
	<nav><!-- top nav -->
		<div class="menu">
			<ul>
				<li></li><span class="divider">|</span> 
				<li><a href="http://140.118.127.71/earthquake/others/System/web/">Search Events</a></li><span class="divider">|</span> 
				<li><a href="http://140.118.127.71/earthquake/others/System/web/sensorlist.php?sen=all">Palert List</a></li><span class="divider">|</span> 
				<li><a href="http://www.cwb.gov.tw/V7/earthquake/rtd_eq.htm">CWB</a></li><span class="divider">|</span> 
				<!--<li><a href="#">Services</a></li><span class="divider">|</span> 
				<li><a href="#">Support</a></li><span class="divider">|</span> 
				<li><a href="#">Contact Us</a></li>-->
			</ul>
		</div>
	</nav><!-- end of top nav -->
	<section id="main"><!-- #main content and sidebar area -->


			<aside id="sidebar"><!-- sidebar -->
					<article>
							<h2>Sensor List</h2>
							<?php
								if($_GET["sen"]==all)
								
									echo '<iframe id=ifr src=sensor/all_sensor_table.php  width="1030px" height="650px" overflow:hidden></iframe>';
								else
									echo '<iframe id=ifr src=src/chartold/Dchart.html?sen='.$_GET["sen"].'&type=RT'.'  width="1030px" height="350px" overflow:hidden></iframe>';
							?>
					</article>		
					<article>
							
					</article>
			</aside><!-- end of sidebar -->
			
			<section id="content"><!-- #content -->
						<h3>Location</h3>
						<?php
						 include('sensor/station_inf.php');
						 $s=$_GET["sen"];
						 //echo $data["$s"][5];
						 $kk=0;
						 if($s=='all'){
							foreach($data as $aa =>$bb){
								//echo $bb;
								$sensor_info[$kk]=array($data[$aa][0],$data[$aa][4],$data[$aa][5]);
								$kk++;
							}
						 }
						 else $sensor_info[0]=array($data["$s"][0],$data["$s"][4],$data["$s"][5]);
						 //$sensor_info[1]=array($data["$s"][0],$data["$s"][4],$data["$s"][5]);
						 //print_r($sensor_info);
						 include('googlemap/googlemap.php');
						?>
						
			</section><!-- end of #content -->

	</section><!-- end of #main content and sidebar-->

</div><!-- #wrapper -->
<!-- Free template created by http://freehtml5templates.com -->
</body>
</html>
