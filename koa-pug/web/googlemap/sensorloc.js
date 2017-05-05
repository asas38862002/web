var data= [
["L001" ,"台南","1693","裕文國小","22.982507","120.245741"],
["L002" ,"台南","1694","永信國小","23.017126","120.248426"],
["L003" ,"台南","1695","文元國小","23.015398","120.199802"],
["L004" ,"台南","1696","新興國小","22.979378","120.196307"],
["L005" ,"台南","1697","成功大學","22.996363","120.218282"],
["L010" ,"屏東","2334","麟洛國小","22.648","120.523"],
["L011" ,"屏東","2332","四維國小","22.5944","120.4918"],
["L012" ,"屏東","2322","泰武國小","22.6061","120.6111"],
["L013" ,"屏東","2331","楓林國小","22.1996","120.7069"],
["L014" ,"屏東","2330","新埤國小","22.4711","120.5518"],
["L015" ,"屏東","2323","載興國小","22.7776","120.5242"],
["L016" ,"屏東","2335","霧台國小","22.7443","120.7322"],
["L017" ,"屏東","2333","新園國小","22.5243","120.4521"],
["L020" ,"高雄","2325","溪埔國小","22.7223","120.4433"],
["L021" ,"高雄","2329","小林國小","23.1489","120.632"],
["L022" ,"高雄","2326","師範高中","22.6266","120.3244"],
["L023" ,"高雄","2328","大湖國小","22.8876","120.2438"],
["L024" ,"高雄","2327","竹圍國小","22.803","120.3028"],
["L025" ,"高雄","2321","永芳國小","22.605","120.3952"],
["W001" ,"花蓮","1160","三民國小","23.4304166666667","121.348888888889"],
["W002" ,"花蓮","1163","明恥國小","23.9918333333333","121.631277777778"],
["W003" ,"花蓮","1239","豐裡國小","23.8419444444444","121.507583333333"],
["W004" ,"花蓮","1240","太平國小","23.4058333333333","121.319972222222"],
["W005" ,"花蓮","1241","大進國小","23.655","121.419277777778"],
["W006" ,"花蓮","1242","志學國小","23.9044166666667","121.531555555556"],
["W007" ,"花蓮","1243","三棧國小","24.102870987","121.607051875"],
["W008" ,"花蓮","1244","光華國小","23.9353333333333","121.578333333333"],
["W009" ,"花蓮","1245","瑞美國小","23.493244809","121.392330417"],
["W00A" ,"花蓮","1246","大榮國小","23.7541666666667","121.468555555556"],
["W00B" ,"花蓮","1247","康樂國小","24.0522777777778","121.608166666667"],
["W00C" ,"花蓮","1248","壽豐國小","23.8704444444444","121.508138888889"],
["W00D" ,"花蓮","1252","溪口國小","23.819497518","121.473476301"],
["W00E" ,"花蓮","1254","復興國小","24.0068611111111","121.619472222222"],
["W00F" ,"花蓮","1255","北濱國小","23.978","121.616666666667"],
["W010" ,"花蓮","1258","玉里國中","23.3363055555556","121.313388888889"],
["W011" ,"花蓮","1259","新城國小","24.1276388888889","121.651694444444"],
["W012" ,"花蓮","1260","西寶國小","24.2068611111111","121.483055555556"],
["W013" ,"花蓮","1261","銅門國小","23.9651944444444","121.494444444444"],
["W014" ,"花蓮","1264","秀林國小","24.1180277777778","121.62475"],
["W015" ,"花蓮","1265","明利國小","23.7061944444444","121.412638888889"],
["W016" ,"花蓮","1267","大富國小","23.607414113","121.390830019"],
["W017" ,"花蓮","1269","奇美國小","23.4973333333333","121.44575"],
["W018" ,"花蓮","1270","港口國小","23.4688055555556","121.496805555556"],
["W019" ,"花蓮","1271","卓樂國小","23.2957222222222","121.267277777778"],
["W01A" ,"花蓮","1273","東竹國小","23.2145277777778","121.279388888889"],
["W01B" ,"花蓮","1275","靜浦國小","23.4620277777778","121.495416666667"],
["W01C" ,"花蓮","1276","高寮國小","23.3831666666667","121.358694444444"],
["W01D" ,"花蓮","1291","水璉國小","23.7822777777778","121.564305555556"],
["W01E" ,"花蓮","1292","春日國小","23.4515277777778","121.392805555556"],
["W01F" ,"花蓮","1293","富里國小","23.1715833333333","121.247833333333"],
["W020" ,"花蓮","1295","吳江國小","23.2784722222222","121.322527777778"],
["W021" ,"花蓮","1297","新社國小","23.6520833333333","121.535611111111"],
["W022" ,"花蓮","1298","月眉國小","23.8676388888889","121.556805555556"],
["W031" ,"宜蘭","1466","澳花國小","24.329139","121.739861"],
["W032" ,"宜蘭","1491","金岳國小","24.471028","121.777667"],
["W033" ,"宜蘭","1493","樂水分校","24.600639","121.529306"],
["W034" ,"宜蘭","1494","大溪國小","24.935762775","121.886789762"],
["W035" ,"宜蘭","1496","大同國小","24.678722","121.6085"],
["W036" ,"宜蘭","1497","礁溪國小","24.822139","121.768722"],
["W037" ,"宜蘭","1498","三星國小","24.666083","121.651"],
["W038" ,"宜蘭","1499","東澳國小","24.52175","121.832472"],
["W039" ,"宜蘭","1500","頭城國小","24.863111","121.82775"],
["W03A" ,"宜蘭","1510","利澤國小","24.66575","121.827611"],
["W03B" ,"宜蘭","1503","孝威國小","24.696583","121.811444"],
["W03C" ,"宜蘭","1504","冬山國小","24.632639","121.789667"],
["W03D" ,"宜蘭","1505","武塔國小","24.445222","121.777667"],
["W03E" ,"宜蘭","1506","南澳國小","24.467028","121.801083"],
["W040" ,"宜蘭","1508","寒溪國小","24.609472","121.687139"],
["W041" ,"宜蘭","1289","羅東高中","24.6808333333333","121.762111111111"],
["W042" ,"宜蘭","1181","復興國中","24.7489722222222","121.746916666667"],
["W043" ,"宜蘭","1509","四季國小","24.488056","121.425639"],
["W044" ,"宜蘭","1502","過嶺國小","24.758722","121.814889"],
["W045" ,"宜蘭","1512","竹安國小","24.825472","121.82075"],
["W046" ,"宜蘭","1513","龍潭國小","24.779889","121.744278"],
["W047" ,"宜蘭","1514","南山國小","24.437965637","121.380345143"],
["W048" ,"宜蘭","1515","南安國小","24.579","121.867861"],
["W049" ,"宜蘭","1516","凱旋國小","24.724389","121.762917"],
["W04A" ,"宜蘭","1517","大隱國小","24.667806","121.712778"],
["W04B" ,"宜蘭","1518","大里國小","24.971417","121.927028"],
["W04C" ,"宜蘭","1519","壯圍國小","24.743814983","121.789882653"],
["W04D" ,"宜蘭","1520","中山國小","24.754","121.754444"],
["W04E" ,"宜蘭","1525","馬賽國小","24.622056","121.834611"],
["W04F" ,"宜蘭","1501","蘇澳海事","24.593278","121.84275"],
["W051" ,"高雄","1158","茂林國中","22.8847222222222","120.663694444444"],
["W052" ,"高雄","1161","杉林國中","22.9690277777778","120.540916666667"],
["W053" ,"高雄","1162","桃源國中","23.178689248","120.780789659"],
["W054" ,"高雄","1164","甲仙國中","23.0819722222222","120.592194444444"],
["W055" ,"高雄","1166","中壇國小","22.8838611111111","120.530888888889"],
["W056" ,"高雄","1167","桃源國小","23.16075","120.765888888889"],
["W057" ,"高雄","1249","多納國小","22.9108611111111","120.715333333333"],
["W059" ,"高雄","1251","六龜國小","22.9962222222222","120.634"],
["W05A" ,"高雄","1253","新發國小","23.03175","120.662083333333"],
["W05B" ,"高雄","2164","龍肚國小","22.8858611111111","120.579833333333"],
["W05C" ,"高雄","1262","寶來國小","23.109078","120.701048"],
["W05D" ,"高雄","1266","樟山國小","23.252924501","120.8192052"],
["W05E" ,"高雄","1081","深水國小","22.777267","120.405773"],
["W05F" ,"高雄","1084","大社國小","22.7303333333333","120.345638888889"],
["W060" ,"高雄","1182","鳥松國小","22.6632222222222","120.361916666667"],
["W061" ,"高雄","1197","觀亭國小","22.917571","120.453443"],
["W062" ,"高雄","1256","楠梓國中","22.7351388888889","120.326638888889"],
["W063" ,"高雄","1277","燕巢國小","22.795255","120.365948"],
["W064" ,"高雄","1282","仁武國小","22.7016388888889","120.348805555556"],
["W071" ,"南投","1168","草屯國小","23.9809166666667","120.686277777778"],
["W072" ,"南投","1169","麒麟國小","23.9299722222222","120.990638888889"],
["W073" ,"南投","1170","新鄉國小","23.6401944444444","120.869555555556"],
["W074" ,"南投","1171","頭社國小","23.8374444444444","120.902527777778"],
["W075" ,"南投","1172","東埔國小","23.561922694","120.92778002"],
["W076" ,"南投","1173","親愛國小","23.9680833333333","121.108888888889"],
["W077" ,"南投","1174","延平國小","23.7689166666667","120.707611111111"],
["W078" ,"南投","1175","地利國小","23.7941111111111","120.942777777778"],
["W079" ,"南投","1176","五城國小","23.8909722222222","120.889527777778"],
["W07A" ,"南投","1177","廣興國小","23.736290457","120.765206315"],
["W07B" ,"南投","1178","永興國小","23.7848888888889","120.864444444444"],
["W07C" ,"南投","1179","桃源國小","23.9425277777778","120.926333333333"],
["W07D" ,"南投","1180","發祥國小","24.123046901","121.1571028"],
["W07E" ,"南投","1183","光復國小","23.9420555555556","120.702555555556"],
["W07F" ,"南投","1184","法治國小","23.916622574","121.04673437"],
["W080" ,"南投","1185","桶頭國小","23.646052","120.656319"],
["W081" ,"南投","1186","鯉魚國小","23.71425","120.654861111111"],
["W082" ,"南投","1187","忠信國小","23.7119722222222","120.8715"],
["W083" ,"南投","1188","合作國小","24.0863333333333","121.217"],
["W084" ,"南投","1189","東光國小","23.8905","120.966388888889"],
["W085" ,"南投","1190","中興國中","23.9311111111111","120.694055555556"],
["W086" ,"南投","1191","神木國小","23.5280277777778","120.856888888889"],
["W087" ,"南投","1192","同富國小","23.5936944444444","120.887694444444"],
["W088" ,"南投","1193","仁愛國小","24.021040155","121.1332844"],
["W089" ,"南投","1194","集集國小","23.827838846","120.786608542"],
["W08A" ,"南投","1195","田豐國小","23.8700277777778","120.676444444444"],
["W08B" ,"南投","1196","大鞍國小","23.6994722222222","120.716888888889"],
["W08C" ,"南投","1272","文山國小","23.9056944444444","120.63775"],
["W08D" ,"南投","1274","永和國小","23.9251111111111","120.73225"],
["W08E" ,"南投","1279","社竂國小","23.8094166666667","120.721166666667"],
["W08F" ,"南投","1280","縣消防局","23.904","120.679638888889"],
["W090" ,"南投","1281","太平國小","24.025944121","120.92143045"],
["W091" ,"南投","1283","福龜國小","24.0114444444444","120.822388888889"],
["W092" ,"南投","1284","史港國小","24.0125555555556","120.957777777778"],
["W093" ,"南投","1286","互助國小","24.0631944444444","120.97"],
["W094" ,"南投","1287","富功國小","23.9795833333333","120.698444444444"],
["W095" ,"南投","1288","弓鞋國小","23.8416944444444","120.630638888889"],
["W096" ,"南投","1290","長福國小","24.0923333333333","120.887472222222"],
["W097" ,"南投","1296","僑建國小","23.9412222222222","120.667861111111"],
["W102" ,"新竹","1088","新竹大平地","24.7278333333333","121.163611111111"],
["W103" ,"台東","1107","台東池上","23.1249722222222","121.228805555556"],
["W104" ,"屏東","1299","屏東科大","22.6471666666667","120.602277777778"],
["W105" ,"雲林","1300","雲林古坑","23.6096388888889","120.569888888889"],
["W106" ,"宜蘭","1301","蘇澳國小","24.5973611111111","121.840138888889"],
["W107" ,"嘉義","1294","嘉義楊燦堯","23.3771388888889","120.565722222222"],
["W108" ,"桃園","1159","中央大學","24.968239","121.19525"],
["W109" ,"台北","1165","台北中研院","25.040724","121.614071"],
["W10A" ,"基隆","1268","海洋大學","25.149553","121.773078"],
["W10B" ,"台北","1118","地質系館","25.014989","121.537161"],
["W10C" ,"台北","1231","地質全變","25.021778","121.536583"],
["W10D" ,"新北","1113","地質調查所","24.982217","121.5084"],
["W10E" ,"台北","1090","北一女中","25.038888","121.513055"],
["W10F" ,"花蓮","1714","東華大學","23.8959444444444","121.548355277778"],
["W111" ,"台東","1551","賓朗國小","22.8073055555556","121.093166666667"],
["W112" ,"台東","1552","新化國小","22.3818333333333","120.856638888889"],
["W113" ,"台東","1553","武陵國小","22.9692222222222","121.116972222222"],
["W114" ,"台東","1555","泰源國小","22.9982777777778","121.285194444444"],
["W115" ,"台東","1556","大王國小","22.6134722222222","121.004444444444"],
["W116" ,"台東","1557","都蘭國小","22.8781944444444","121.227888888889"],
["W117" ,"台東","1559","樟原國小","23.4128611111111","121.482027777778"],
["W118" ,"台東","1561","紅葉國小","22.8935833333333","121.063527777778"],
["W119" ,"台東","1562","大鳥國小","22.3832777777778","120.910944444444"],
["W11A" ,"台東","1563","忠勇國小","23.32575","121.439638888889"],
["W11B" ,"台東","1564","大武國小","22.36475","120.9055"],
["W11C" ,"台東","1565","安朔國小","22.2941666666667","120.868222222222"],
["W11D" ,"台東","1566","溫泉國小","22.6984444444444","121.026166666667"],
["W11E" ,"台東","1567","大溪國小","22.4624166666667","120.940805555556"],
["W11F" ,"台東","1568","賓茂國小","22.5324166666667","120.954333333333"],
["W120" ,"台東","1569","和平國小","23.0750277777778","121.352583333333"],
["W121" ,"台東","1570","博愛國小","23.1919444444444","121.395861111111"],
["W122" ,"台東","1571","富岡國小","22.79525","121.193611111111"],
["W123" ,"台東","1572","復興國小","22.7473055555556","121.151444444444"],
["W124" ,"台東","1573","崁頂國小","23.0448333333333","121.146194444444"],
["W125" ,"台東","1574","鸞山國小","22.898797541","121.149922422"],
["W126" ,"台東","1576","新園國小","22.7655","121.062805555556"],
["W127" ,"台東","1577","初鹿國小","22.8603611111111","121.091972222222"],
["W128" ,"台東","1578","豐榮國小","22.7468333333333","121.137027777778"],
["W129" ,"台東","1580","台板國小","22.4776111111111","120.907527777778"],
["W12A" ,"台東","1560","錦屏國小","23.131889","121.176833"],
["W12B" ,"台東","1579","豐源國小","22.727861","121.108417"],
["W12C" ,"台東","1554","霧鹿國小","23.169083","121.041028"],
["W12D" ,"台東","1575","利稻國小","23.186861","121.024833"],
["W131" ,"屏東","1477","泰武國中","22.5914444444444","120.632472222222"],
["W132" ,"屏東","1521","力里國小","22.4271944444444","120.628638888889"],
["W133" ,"屏東","1522","隘寮國小","22.7024444444444","120.635555555556"],
["W134" ,"屏東","1250","里港國中","22.7711388888889","120.496527777778"],
["W135" ,"屏東","1527","崇文國小","22.6670277777778","120.600138888889"],
["W136" ,"屏東","1528","望嘉國小","22.4634722222222","120.622416666667"],
["W137" ,"屏東","1529","墾丁國小","21.9436111111111","120.800972222222"],
["W138" ,"屏東","1531","青葉國小","22.8378777777778","120.638888888889"],
["W139" ,"屏東","2169","新豐國小","22.8628611111111","120.634527777778"],
["W13A" ,"屏東","1533","光華國小","22.5477777777778","120.543166666667"],
["W13B" ,"屏東","1534","古樓國小","22.5280277777778","120.627527777778"],
["W13C" ,"屏東","1535","賽嘉國小","22.7436388888889","120.639138888889"],
["W13D" ,"屏東","1536","牡丹國中","22.1291666666667","120.776361111111"],
["W13E" ,"屏東","1537","滿州國中","22.024","120.839666666667"],
["W13F" ,"屏東","1538","大平國小","22.0229722222222","120.721"],
["W140" ,"屏東","1539","青山國小","22.8168055555556","120.640972222222"],
["W141" ,"屏東","1540","泰安國小","22.6306944444444","120.594027777778"],
["W142" ,"屏東","1541","加祿國小","22.330440965","120.621077786"],
["W143" ,"屏東","1542","恆春國小","22.0058611111111","120.746333333333"],
["W144" ,"屏東","1543","九如國中","22.7171944444444","120.486222222222"],
["W145" ,"屏東","1545","口社國小","22.7659722222222","120.644638888889"],
["W146" ,"屏東","1546","牡丹國小","22.1763055555556","120.837222222222"],
["W147" ,"屏東","1547","車城國中","22.0728055555556","120.716"],
["W148" ,"屏東","1548","佳義國小","22.6526388888889","120.630611111111"],
["W149" ,"屏東","1549","春日國小","22.3706388888889","120.626666666667"],
["W14A" ,"屏東","1550","高士國小","22.1247222222222","120.846277777778"],
["W14B" ,"屏東","1511","草埔國小","22.235111","120.802972"],
["W151" ,"苗栗","1461","華興國小","24.443917","120.874111"],
["W152" ,"苗栗","1463","永興國小","24.573944","120.936528"],
["W153" ,"苗栗","1465","頭屋國中","24.578139","120.849333"],
["W154" ,"苗栗","1467","公館國中","24.498111","120.827917"],
["W155" ,"苗栗","1469","鯉魚國小","24.34375","120.766556"],
["W156" ,"苗栗","1470","泰安國中","24.422111","120.910444"],
["W157" ,"苗栗","1471","文林國中","24.490167","120.789111"],
["W158" ,"苗栗","1475","頂埔國小","24.707639","120.92375"],
["W159" ,"苗栗","1476","內灣國小","24.298167","120.849389"],
["W15A" ,"苗栗","1478","大南國小","24.410492257","120.902234327"],
["W15B" ,"苗栗","1479","苗栗國中","24.554278","120.812472"],
["W15C" ,"苗栗","1480","梅園國小","24.388227559","120.971511612"],
["W15D" ,"苗栗","1481","豐林國小","24.476556","120.891083"],
["W15E" ,"苗栗","1482","信德國小","24.686667","120.9605"],
["W15F" ,"苗栗","1483","三義國中","24.409472","120.765306"],
["W160" ,"苗栗","1484","獅潭國中","24.544611","120.9235"],
["W161" ,"苗栗","1485","大河國小","24.61725","120.946694"],
["W162" ,"苗栗","1486","育英國小","24.382417","120.759472"],
["W163" ,"苗栗","1487","南湖國中","24.397167","120.868083"],
["W164" ,"苗栗","1488","東河國小","24.600222","121.03975"],
["W165" ,"苗栗","1489","僑成國小","24.4015","120.765833"],
["W166" ,"苗栗","1490","南庄國中","24.604417","121.000722"],
["W167" ,"苗栗","1492","大同國中","24.707639","120.895139"],
["W168" ,"苗栗","1495","象鼻國小","24.359","120.947444"],
["W16A" ,"台中","1751","大甲國小","24.3518","120.625"],
["W16B" ,"台中","1473","七星國小","24.301406","120.71145"],
["W16C" ,"台中","1472","[潭子]新興國小","24.195119","120.66278"],
["W16D" ,"台中","1464","龍泉國小","24.196251","120.547445"],
["W16E" ,"台中","1462","烏日國小","24.1073","120.6233"],
["W16F" ,"台中","1474","[北屯]新興國小","24.204727","120.726523"],
["W170" ,"台中","1735","成功國小","24.207888","120.839611"],
["W171" ,"台中","1736","潭子國小","24.213055","120.704472"],
["W172" ,"台中","1737","軍功國小","24.172666","120.719555"],
["W173" ,"台中","1738","中和國小","24.15725","120.828388"],
["W174" ,"台中","1739","梨山國小","24.254444","121.260444"],
["W175" ,"台中","1740","土牛國小","24.265987001","120.807789"],
["W176" ,"台中","1741","外埔國小","24.33233674","120.653445701"],
["W177" ,"台中","1742","自由國小","24.291833","120.908861"],
["W178" ,"台中","1743","清水國小","24.265833","120.573083"],
["W179" ,"台中","1744","豐原國小","24.254305","120.721027"],
["W17A" ,"台中","1745","大元國小","24.100683","120.689738"],
["W17B" ,"台中","1746","平等國小","24.317211633","121.293262703"],
["W17C" ,"台中","1747","車籠埔國小","24.110055","120.732"],
["W17D" ,"台中","1748","萬豐國小","24.028416","120.69775"],
["W17E" ,"台中","1749","白冷國小","24.183444","120.929583"],
["W17F" ,"台中","1750","霧峰國小","24.057277","120.69775"],
["W180" ,"台中","1752","后里國中","24.307083","120.695083"],
["W181" ,"台中","1753","東汴國小","24.117888","120.795805"],
["W182" ,"台中","1754","協成國小","24.194055","120.81225"],
["W183" ,"台中","1755","博愛國小","24.177083","120.97975"],
["W184" ,"台中","1756","大雅國小","24.222232181","120.65018"],
["W185" ,"台中","1757","達觀國小","24.327770401","120.9207669"],
["W186" ,"台中","1758","中坑國小","24.236972","120.880194"],
["W187" ,"台中","1759","東華國中","24.20525","120.839388"],
["W188" ,"台中","1760","中山國小","24.252805","120.834972"],
["W189" ,"台中","1761","福民國小","24.163777","120.881888"],
["W18A" ,"台中","1762","谷關分校","24.202638","121.006277"],
["W18B" ,"台中","1763","和平國小","24.171194","120.895861"],
["W18C" ,"台中","1764","頭汴國小","24.122861","120.751694"],
["W18D" ,"嘉義","1523","中正大學","23.5651","120.4754"],
["W18E" ,"嘉義","1468","安和國小","23.5144","120.313"],
["W18F" ,"嘉義","1524","新岑國小","23.3426","120.1745"],
["W190" ,"嘉義","1765","大湖國小","23.475246387","120.6198253"],
["W191" ,"嘉義","1766","大埔國小","23.294647429","120.591525666"],
["W192" ,"嘉義","1767","三興國小","23.557642203","120.481859435"],
["W193" ,"嘉義","1768","大南國小","23.558023417","120.554260641"],
["W194" ,"嘉義","1769","大同國小","23.461297046","120.240664654"],
["W195" ,"嘉義","1770","同仁國小","23.403080471","120.512267753"],
["W196" ,"嘉義","1772","太保國小","23.454855915","120.330908322"],
["W197" ,"嘉義","1773","太興國小","23.542467011","120.634279871"],
["W198" ,"嘉義","1774","民雄國小","23.555349742","120.429315978"],
["W199" ,"嘉義","1775","來吉國小","23.529689801","120.7396698"],
["W19A" ,"嘉義","1776","梅圳國小","23.576848001","120.590405075"],
["W19B" ,"嘉義","1777","朴子國小","23.467104176","120.248046014"],
["W19C" ,"嘉義","1778","沄水國小","23.381727201","120.5299683"],
["W19D" ,"嘉義","1779","竹崎國小","23.520224952","120.553300299"],
["W19E" ,"嘉義","1780","豐山國小","23.576218277","120.749962348"],
["W19F" ,"嘉義","1781","香林國小","23.517962692","120.810284245"],
["W200" ,"嘉義","1782","茶山國小","23.30035946","120.666778303"],
["W201" ,"嘉義","1783","梅北國小","23.587508341","120.55156608"],
["W202" ,"嘉義","1784","光華國小","23.477584801","120.697131798"],
["W203" ,"嘉義","1785","瑞峰國小","23.555508186","120.669082951"],
["W204" ,"嘉義","1786","山美國小","23.382941","120.668102"],
["W205" ,"嘉義","1787","黎明國小","23.439022381","120.604677694"],
["W206" ,"嘉義","1789","灣潭國小","23.427324816","120.557104371"],
["W207" ,"嘉義","1790","水上國中","23.424967409","120.395420282"],
["W208" ,"嘉義","1791","阿里山中小","23.468354544","120.701413949"],
["W209" ,"嘉義","1792","安靖國小","23.553101146","120.577240111"],
["W20A" ,"嘉義","1793","龍眼分校","23.582910382","120.627355795"],
["W20B" ,"嘉義","1794","昇平國中","23.485023553","120.557557868"],
["W20C" ,"嘉義","1771","達邦國小","23.4533","120.7492"],
["W20D" ,"嘉義","1788","北園國小","23.4947","120.4256"],
["W20E" ,"嘉義","1544","興嘉國小","23.4652","120.438"],
["W20F" ,"嘉義","1530","文雅國小","23.4835","120.4867"],
["W210" ,"台南","1611","仙草國小","23.344227284","120.474013791"],
["W211" ,"台南","1623","竹門國小","23.351226426","120.415605326"],
["W212" ,"台南","1618","大竹國小","23.368008717","120.413186719"],
["W213" ,"台南","1625","白河國小","23.352203","120.413945"],
["W214" ,"台南","1627","重溪國小","23.28587171","120.364627399"],
["W215" ,"台南","1617","內角國小","23.397338131","120.440479458"],
["W216" ,"台南","1628","果毅國小","23.258061993","120.372771998"],
["W217" ,"台南","1624","東山國小","23.32351667","120.4051167"],
["W218" ,"台南","1639","官田國小","23.18925","120.3423167"],
["W219" ,"台南","1641","新市國小","23.07935","120.2958"],
["W21A" ,"台南","1626","山上國小","23.10076667","120.35565"],
["W21B" ,"台南","1643","新化國小","23.03741667","120.31105"],
["W21C" ,"台南","1644","那拔國小","23.06828333","120.34915"],
["W21D" ,"台南","1658","歸仁國小","22.96995","120.2973667"],
["W21E" ,"台南","1655","龍崎國小","22.96473333","120.3595"],
["W21F" ,"台南","1656","崇和國小","22.90436667","120.3525667"],
["W220" ,"台南","1668","龍潭國小","23.03331667","120.2678333"],
["W221" ,"台南","1666","永康國小","23.02595","120.2561333"],
["W222" ,"台南","1664","崑山國小","23.00628333","120.2584833"],
["W223" ,"台南","1669","博愛國小","22.99351667","120.2129833"],
["W224" ,"台南","1662","復興國小","22.98256667","120.2390667"],
["W225" ,"台南","1659","虎山國小","22.94566667","120.2306167"],
["W226" ,"台南","1672","麻豆國小","23.1861","120.2529833"],
["W227" ,"台南","1671","佳興國小","23.18908333","120.1924667"],
["W228" ,"台南","1670","海東國小","23.04905","120.1738833"],
["W229" ,"台南","1675","竹埔國中小","23.2671","120.2463833"],
["W22A" ,"台南","1661","德高國小","22.9633","120.2357833"],
["W22B" ,"台南","1677","新東國小","23.34438333","120.3158833"],
["W22C" ,"台南","1679","左鎮國小","23.05586667","120.40415"],
["W22D" ,"台南","1676","柳營國小","23.27538333","120.3129"],
["W22E" ,"台南","1657","仁德國小","22.96208333","120.2538167"],
["W22F" ,"台南","1630","南安國小","23.09816667","120.2250667"],
["W230" ,"台南","1680","層林國小","23.07805","120.4293667"],
["W231" ,"台南","1682","西埔國小","23.04605","120.4456833"],
["W232" ,"台南","1683","南化國小","23.04461667","120.4702833"],
["W233" ,"台南","1684","玉山國小","23.07416667","120.5193833"],
["W234" ,"台南","1686","玉井國小","23.12103333","120.4589833"],
["W235" ,"台南","1685","瑞峰國小","23.17335","120.5952667"],
["W236" ,"台南","1689","楠西國小","23.1745","120.4855833"],
["W237" ,"台南","1690","青山國小","23.28057833","120.4673833"],
["W240" ,"新竹","1944","大坪國小","24.67543333","121.0597167"],
["W241" ,"新竹","1955","五峰國小","24.63153333","121.118057598"],
["W242" ,"新竹","1949","三峰國小","24.72103333","120.9966167"],
["W243" ,"新竹","1946","二重國小","24.76715","121.0576"],
["W244" ,"新竹","1957","寶山國小","24.73991667","121.0217167"],
["W245" ,"新竹","1945","富興國小","24.68691667","120.9882667"],
["W246" ,"新竹","1954","竹東國小","24.73568333","121.0883833"],
["W247" ,"新竹","1970","桃山國小","24.57523333","121.1054167"],
["W248" ,"新竹","1972","芎林國小","24.77395","121.0825333"],
["W249" ,"新竹","1967","建功國小","24.799266824","120.99941733"],
["W24A" ,"新竹","1968","信勢國小","24.89916667","121.0380167"],
["W24B" ,"新竹","1947","尖石國中","24.7069","121.2030333"],
["W24C" ,"新竹","1950","尖石國小","24.72818333","121.22605"],
["W24D" ,"新竹","1956","秀巒國小","24.61863333","121.2855167"],
["W24E" ,"新竹","1964","錦山國小","24.76826667","121.22455"],
["W24F" ,"新竹","1951","玉峰國小","24.65975","121.3019"],
["W250" ,"新竹","1973","新光國小","24.57996667","121.3022833"],
["W251" ,"新竹","1963","竹蓮國小","24.79626667","120.9739833"],
["W252" ,"新竹","1948","坪林國小","24.80156667","121.1406667"],
["W253" ,"新竹","1969","香山國小","24.79625","120.9440667"],
["W254" ,"新竹","1960","新竹國小","24.79691667","120.9665167"],
["W255" ,"新竹","1952","新城國小","24.7335","120.9672667"],
["W256" ,"新竹","1965","長安國小","24.88753333","121.0944833"],
["W257" ,"新竹","1958","湖口國小","24.87875","121.06045"],
["W258" ,"新竹","1959","科園國小","24.7822","121.0117333"],
["W259" ,"新竹","1971","南隘國小","24.72623333","120.92955"],
["W260" ,"新北","1673","五寮國小","24.8591","121.3601"],
["W261" ,"新北","1961","插角國小","24.8727333333333","121.4045"],
["W262" ,"新北","1632","有木國小","24.8535833333333","121.43735"],
["W263" ,"新北","1962","永吉國小","24.9583333333333","121.333166666667"],
["W264" ,"新北","1966","柑園國小","24.9559333333333","121.389366666667"],
["W265" ,"新北","1075","土城國小","24.9712235","121.4424424"],
["W266" ,"新北","1667","建安國小","24.926238","121.447213"],
["W267" ,"新北","1612","文林國小","24.9976666666667","121.424283333333"],
["W268" ,"新北","1119","三多國小","25.0166666666667","121.405833333333"],
["W269" ,"新北","1631","丹鳳國小","25.024105","121.4137521"],
["W26A" ,"新北","1678","豐年國小","25.0311666666667","121.443233333333"],
["W26B" ,"新北","1650","明志國小","25.044660264","121.42690712"],
["W26C" ,"新北","1086","泰山國小","25.0622147","121.4316383"],
["W26D" ,"新北","1634","德音國小","25.0713151","121.4339473"],
["W26E" ,"新北","1082","五股國小","25.0826775","121.4373929"],
["W26F" ,"新北","1621","林口國小","25.0804666666667","121.389683333333"],
["W270" ,"新北","1616","嘉寶國小","25.1078666666667","121.339233333333"],
["W271" ,"新北","1640","八里國小","25.14945","121.403433333333"],
["W272" ,"新北","1649","成州國小","25.09995","121.45085"],
["W273" ,"新北","1681","蘆洲國小","25.0843333333333","121.46965"],
["W274" ,"新北","1076","永福國小","25.0772222222222","121.480277777778"],
["W275" ,"新北","1638","興穀國小","25.0502333333333","121.47545"],
["W276" ,"新北","1651","光復國小","25.0156","121.48339"],
["W277" ,"新北","1660","後埔國小","25.0033166666667","121.46325"],
["W278" ,"新北","1629","永和國小","25.0034833333333","121.517283333333"],
["W279" ,"新北","1633","雙城國小","24.95205","121.486716666667"],
["W27A" ,"新北","1635","屈尺國小","24.9224666666667","121.5468"],
["W27B" ,"新北","1646","龜山國小","24.90215","121.553133333333"],
["W27C" ,"新北","1665","烏來國小","24.862952308","121.554462335"],
["W27D" ,"新北","1077","竹圍國小","25.1475596","121.4600373"],
["W27E" ,"新北","1278","坪頂國小","25.157833","121.4834235"],
["W27F" ,"新北","1615","三芝國小","25.2578666666667","121.5014"],
["W280" ,"新北","1688","石門國小","25.2917333333333","121.567216666667"],
["W281" ,"新北","1285","中角國小","25.2394444444444","121.630555555556"],
["W282" ,"新北","1654","金山國小","25.2223545","121.6368852"],
["W283" ,"新北","1120","三和國小","25.2190132","121.6026077"],
["W284" ,"新北","1637","大坪國小","25.167375164","121.638685656"],
["W285" ,"新北","1619","萬里國小","25.176537","121.6886339"],
["W286" ,"新北","1645","瑞芳國小","25.10805","121.80492"],
["W287" ,"新北","1674","鼻頭國小","25.1209231","121.9190923"],
["W288" ,"新北","1647","和美國小","25.083006","121.912883"],
["W289" ,"新北","1620","澳底國小","25.0549","121.92432"],
["W28A" ,"新北","1642","福連國小","25.0165099","121.988533"],
["W28B" ,"新北","1648","雙溪國小","25.03304","121.86792"],
["W28C" ,"新北","1653","柑林國小","25.0151","121.80441"],
["W28D" ,"新北","1652","平溪國小","25.02699","121.73841"],
["W28E" ,"新北","1614","永定國小","25.007658378","121.688042426"],
["W28F" ,"新北","1636","石碇國小","24.9906899","121.658658"],
["W290" ,"新北","1687","白雲國小","25.047819","121.618753"],
["W291" ,"新北","1622","汐止國小","25.066754","121.655177"],
["W292" ,"新北","1114","雲海國小","24.952989","121.636375"],
["W293" ,"新北","1663","坪林國小","24.9360339","121.710787"],
["W294" ,"新北","1613","深坑國小","25.001655","121.616882"],
["W295" ,"新北","1085","新店國小","24.953571","121.538708"],
["W296" ,"新北","1953","福山國小","24.7774162","121.5021285"],
["T001" ,"台北","1091","台科大","25.013404","121.541664"],
["T002" ,"台北","2074","台大生技","25.015626","121.546997"],
["T003" ,"台北","2079","台大電機","25.018646","121.5416"],
["D001" ,"花蓮","2077","東華人社院","23.89497222","121.54227778"],
["D002" ,"花蓮","2082","東華教育學院","23.89627778","121.53986111"],
["D003" ,"花蓮","1080","東華圖書館","23.89638889","121.54230556"],
["D004" ,"花蓮","1263","東華環境解說","23.89491667","121.54905556"],
["D005" ,"花蓮","2073","東華學生活動中心","23.89922222","121.54122222"],
["W300" ,"基隆","2148","基隆消防局","25.130896","121.746233"],
["W301" ,"基隆","2156","海大河工","25.150156","121.78272"],
["W302" ,"基隆","2124","復興國小","25.107268","121.665507"],
["W303" ,"基隆","2137","武崙國小","25.138823","121.707255"],
["W304" ,"基隆","2000","碇內國小","25.098494","121.753993"],
["W305" ,"基隆","2149","深澳國小","25.128716","121.78325"],
["W306" ,"基隆","2158","月眉國小","25.124803","121.756741"],
["W310" ,"台北","2165","指南國小","24.97628333","121.58365"],
["W311" ,"台北","2132","吳興國小","25.02576667","121.5686"],
["W312" ,"台北","2119","信義國中","25.0286","121.5681167"],
["W313" ,"台北","2141","敦化國小","25.04921667","121.5486"],
["W314" ,"台北","2123","松山國小","25.05023333","121.5786167"],
["W315" ,"台北","2120","大湖國小","25.08725","121.6012"],
["W316" ,"台北","2127","西湖國小","25.08363333","121.56565"],
["W317" ,"台北","2170","雙溪國小","25.10606667","121.5639333"],
["W318" ,"台北","2122","平等國小","25.12945","121.5766"],
["W319" ,"台北","2151","湖田國小","25.1685","121.5388333"],
["W31A" ,"台北","2145","天母國中","25.1179","121.5383667"],
["W31B" ,"台北","2147","士林國小","25.09258333","121.5250667"],
["W31C" ,"台北","2157","延平國小","25.06603333","121.5125"],
["W31D" ,"台北","2146","立農國小","25.1195","121.5050167"],
["W31E" ,"台北","2155","義方國小","25.14193333","121.5097833"],
["W31F" ,"台北","2171","關渡國小","25.1266","121.4662167"],
["W320" ,"台北","2133","麗山國小","25.0835","121.5724"],
["W330" ,"桃園","2142","青埔國小","25.0065","121.214166666667"],
["W331" ,"桃園","2121","新坡國小","25.0126","121.137283333333"],
["W332" ,"桃園","2154","新屋國小","24.97345","121.102066666667"],
["W333" ,"桃園","2144","觀音國小","25.0353833333333","121.0832"],
["W334" ,"桃園","2139","笨港國小","24.9741166666667","121.026133333333"],
["W335" ,"桃園","2134","內海國小","25.0863833333333","121.190683333333"],
["W336" ,"桃園","2126","水美國小","24.9187666666667","121.137216666667"],
["W337" ,"桃園","2117","忠貞國小","24.9226166666667","121.249983333333"],
["W338" ,"桃園","2172","海湖國小","25.1018666666667","121.26665"],
["W339" ,"桃園","2163","光華國小","24.6552166666667","121.39945"],
["W33A" ,"桃園","2140","富岡國小","24.9369166666667","121.080516666667"],
["W33B" ,"桃園","2160","美華國小","24.8817833333333","121.304483333333"],
["W33C" ,"桃園","2143","三和國小","24.8476666666667","121.167666666667"],
["W33D" ,"桃園","2173","武漢國小","24.8704","121.2347"],
["W33E" ,"桃園","2136","三坑國小","24.8362","121.2484"],
["W33F" ,"桃園","2161","長興國小","24.8001","121.3073"],
["W340" ,"桃園","2135","羅浮國小","24.7975","121.36485"],
["W341" ,"桃園","2116","瑞塘國小","24.9082666666667","121.1795"],
["W342" ,"桃園","2152","中山國小","24.9867833333333","121.2901"],
["W343" ,"桃園","2131","大坑國小","25.0450833333333","121.314616666667"],
["W344" ,"桃園","2128","三光國小","24.674","121.367316666667"],
["W350" ,"彰化","2496","大城國小","23.8527","120.3207"],
["W351" ,"彰化","2513","伸仁國小","24.147","120.4763"],
["W352" ,"彰化","2512","頂番國小","24.0888","120.4798"],
["W353" ,"彰化","2517","鹿東國小","24.0586","120.4434"],
["W354" ,"彰化","2521","文昌國小","24.008","120.4191"],
["W355" ,"彰化","2505","建新國小","23.9813","120.3901"],
["W356" ,"彰化","2501","新生國小","23.9376","120.3953"],
["W357" ,"彰化","2502","中正國小","23.8979","120.3706"],
["W358" ,"彰化","2516","民靖國小","23.876","120.4166"],
["W359" ,"彰化","2500","南州國小","23.8531","120.4919"],
["W35A" ,"彰化","2514","埤頭國小","23.8927","120.4781"],
["W35B" ,"彰化","2498","陸豐國小","23.9187","120.5044"],
["W35C" ,"彰化","2508","中興國小","23.9487","120.4432"],
["W35D" ,"彰化","2522","溪湖高中","23.968","120.4869"],
["W35E" ,"彰化","2511","明正國小","24.0026","120.4929"],
["W35F" ,"彰化","2520","新庄國小","24.1042","120.5334"],
["W360" ,"彰化","2509","彰化高中","24.0717","120.5515"],
["W361" ,"彰化","2497","白沙國小","24.0476","120.5446"],
["W362" ,"彰化","2503","三春國小","24.0172","120.5657"],
["W363" ,"彰化","2504","村東國小","23.9927","120.585"],
["W364" ,"彰化","2519","東山國小","23.9684","120.6013"],
["W365" ,"彰化","2523","員林高中","23.9623","120.5635"],
["W366" ,"彰化","2499","湳雅國小","23.9198","120.6014"],
["W367" ,"彰化","2515","東和國小","23.8671","120.6053"],
["W368" ,"彰化","2510","二水國小","23.811","120.617"],
["W369" ,"彰化","2518","成功國小","23.8263","120.545"],
["W36A" ,"彰化","2506","南鎮國小","23.8868","120.5606"],
["H001" ,"新竹","2488","國網中心","24.7826","120.9957"],
["H002" ,"新竹","2486","竹園分隊","24.7817","121.007"],
["H003" ,"新竹","2492","竹苑樓","24.7793","121.0084"],
["H004" ,"新竹","2490","竹村分隊","24.7721","121.002"],
["H005" ,"新竹","2485","消防局","24.7746","121.011"],
["H006" ,"新竹","2493","矽導中心","24.7738","121.0177"],
["H007" ,"新竹","2487","清潔隊","24.7616","121.0238"],
["H008" ,"新竹","2491","廠房9樓","24.7842","121.0011"],
["H009" ,"新竹","2477","廠房5樓","24.7842","121.0011"],
["H010" ,"新竹","2618","廠房地下室","24.7842","121.0011"],
["W370" ,"雲林","2615","北港高中","23.5771","120.3047"],
["W371" ,"雲林","2613","同安國小","23.7114","120.2661"],
["W372" ,"雲林","2620","文光國小","23.5417","120.1897"],
["W373" ,"雲林","2598","台西國中","23.7097","120.1912"],
["W374" ,"雲林","2597","新興國小","23.7398","120.2222"],
["W375" ,"雲林","2616","頂湖國小","23.6007","120.1793"],
["W376" ,"雲林","2600","飛沙國小","23.6429","120.1777"],
["W377" ,"雲林","2603","廣興國小","23.7672","120.4583"],
["W378" ,"雲林","2599","義賢國小","23.8167","120.4139"],
["W379" ,"雲林","2604","陽明國小","23.7862","120.3555"],
["W37A" ,"雲林","2601","橋頭國小","23.7975","120.2735"],
["W37B" ,"雲林","2614","秀潭國小","23.6567","120.3497"],
["W37C" ,"雲林","2611","忠孝國小","23.6207","120.315"],
["W37D" ,"雲林","2617","東光國小","23.6522","120.2718"],
["W37E" ,"雲林","2621","潮厝國小","23.7198","120.3383"],
["W37F" ,"雲林","2609","正心中學","23.7153","120.5291"],
["W380" ,"雲林","2608","久安國小","23.6773","120.5139"],
["W381" ,"雲林","2610","大美國小","23.7372","120.5145"],
["W382" ,"雲林","2623","古坑國小","23.6457","120.5658"],
["W383" ,"雲林","2622","新光國小","23.6867","120.5863"],
["W384" ,"雲林","2602","林內國小","23.7599","120.6176"],
["W385" ,"雲林","2606","六合國小","23.768","120.5634"],
["W386" ,"雲林","2612","光復國小","23.7413","120.4014"],
["W387" ,"雲林","2607","虎尾高中","23.7102","120.4416"],
["W388" ,"雲林","2619","嘉興國小","23.6472","120.4592"],
["W389" ,"雲林","2605","舊庄國小","23.63466","120.40162"],
["W38A" ,"雲林","2489","宏仁國小","23.6041","120.2409"]

];
