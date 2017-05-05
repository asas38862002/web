<meta name="viewport" content="initial-scale=1.0, user-scalable=no" />
<!--指定css，否則#map_canvas在有的瀏覽器可能看不到-->

<style type="text/css">
	  #container { height: 60%;width:30%;float:right; position:relative; top:20px; }
	  #googleMap { max-width: none ;}
	  #word { height: 0px;width:80px; position:relative; left 400px; font-weight:bolder;}
	  .gm-style-iw + div {display: none;}
</style>
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
<script type="text/javascript" src="https://maps.google.com/maps/api/js?sensor=false"></script>
<script src="jquery.tinyMap.js"></script>
<script type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.7.2/jquery.min.js"></script>

<script>
		
			function initialize()
			{   
				//parameter about lat lon
				var myLatLng = {lat: 23.500, lng: 120.700};
				var center_lat='<?php echo substr($event_info[$seri][2],35,8)?>';
				var center_lon='<?php echo substr($event_info[$seri][2],44,9)?>';
				var center_latlon = new google.maps.LatLng(center_lat,center_lon);
				
				//parameter about image
				var image_center =new google.maps.MarkerImage(
					'http://140.118.127.71/earthquake/others/System/web/googlemap/yellowstar.png',
					null, /* size is determined at runtime */
					null, /* origin is 0,0 */
					null, /* anchor is bottom center of the scaled image */
					new google.maps.Size(20,20)
				);
				var image_sensor =new google.maps.MarkerImage(
					'http://140.118.127.71/earthquake/others/System/web/googlemap/redcircle.png',
					null, /* size is determined at runtime */
					null, /* origin is 0,0 */
					null, /* anchor is bottom center of the scaled image */
					new google.maps.Size(5,5)
				);
				//maps setting
				var map =new google.maps.Map(document.getElementById("googleMap"),
					{
						center:myLatLng,
						zoom:8,//越小越遠
						mapTypeId:google.maps.MapTypeId.SATELLITE/*HYBRID*/
					}
				);
				//marker for hypoenter
				var marker_center = new google.maps.Marker({
					position:center_latlon,
					map: map,
					icon: image_center,
					title:"lat:"+center_lat+"  lon:"+center_lon
				});
				//marker for trigger sensor
				var i;
				var x='<?php echo count($sensor_info)?>';
				var sen= <?php echo json_encode($sensor_info); ?>;
				var all='<? echo $_GET['sen']?>';
				for (i = 0; i<x; i++) {
					if(sen[i][0]=='coun')continue;
					var infowindow = new google.maps.InfoWindow({
										content:sen[i][0],
										visible:true
										});			
					var sensor_lat=sen[i][1];
					var sensor_lon=sen[i][2];
					var sensor_latlon = new google.maps.LatLng(sensor_lat,sensor_lon);
					var marker_sensor =new google.maps.Marker({
						position:sensor_latlon,
						map: map,
						icon: image_sensor,
						title:sen[i][0]	
					})
					//$(".gm-style").remove();
				
					if(all!="all")infowindow.open(map, marker_sensor);
				
				}
					
			}
			
			google.maps.event.addDomListener(window, 'load', initialize);
	</script>

<div id="googleMap" style="width:100%;height:100%;"></div>