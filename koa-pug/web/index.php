<html>
<head>
	<meta charset="utf-8" />
	<title>Earthquake System</title>
	<link rel="stylesheet"  type="text/css"href="css/styles.css" media="screen" />
	<link rel="stylesheet" type="text/css" href="css/print.css" media="print" />
	
	<!--[if IE]><script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script><![endif]-->
</head>
<body>
<div id="wrapper"><!-- #wrapper -->

	<header><!-- header -->
		<h1><a href="http://140.118.127.71/earthquake/others/System/web/"style="font-size:80%">Earthquake System</a></h1>
	</header><!-- end of header -->
	
	<nav><!-- top nav -->
		<div class="menu">
			<ul>
				<li></li><span class="divider">|</span> 
				<li><a href="http://140.118.127.71/earthquake/others/System/web/">Search Events</a></li><span class="divider">|</span> 
				<li><a href="http://140.118.127.71/earthquake/others/System/web/sensorlist.php?sen=all">Palert List</a></li><span class="divider">|</span> 
				<li><a href="http://www.cwb.gov.tw/V7/earthquake/rtd_eq.htm">CWB</a></li><span class="divider">|</span> 
				<li><a href="http://www.cwb.gov.tw/V7/earthquake/rtd_eq.htm">TEST</a></li><span class="divider">|</span> 
				<!--<li><a href="#">Services</a></li><span class="divider">|</span> 
				<li><a href="#">Support</a></li><span class="divider">|</span> 
				<li><a href="#">Contact Us</a></li>-->
			</ul>
		</div>
	</nav><!-- end of top nav -->
	<section id="main"><!-- #main content and sidebar area -->


			<aside id="sidebar" style="width:20%"><!-- sidebar -->
					<article>
							<h2>Search Events
								<FORM ACTION="search_result.php" method="GET">
									<INPUT TYPE=TEXT NAME="name" style="height:40px ; width:80% ; font-size:20px">
									
									<INPUT TYPE=button NAME="type" VALUE="Search" style="height:40px ; width:40% ; font-size:20px"><br>
									
									<!--<INPUT TYPE=SUBMIT NAME="type" VALUE="TestPick" style="height:40px ; width:100px ; font-size:20px"><br>-->
									<!--<INPUT TYPE=SUBMIT NAME="type" VALUE="hi"><br>-->
									
							
								</FORM>
							</h2>
					</article>		
					<article>
							<!--<h2><a href="#">Second Article Title</a></h2>
							
							<p>test</p>-->
					</article>
			</aside><!-- end of sidebar -->
			
			<section id="content" style="width:75%;height:100%"><!-- #content -->
						<!--<h3>Location</h3>
						<?php 
						 include('googlemap/googlemap.php');
						?>
						
			</section><!-- end of #content -->

	</section><!-- end of #main content and sidebar-->

</div><!-- #wrapper -->
	
	
<!-- Free template created by http://freehtml5templates.com -->
</body>
</html>
