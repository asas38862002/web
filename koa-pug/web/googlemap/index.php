<html>
<head>
<title>地震清單 </title>　
<meta charset="utf-8">
</head>

<body>

 
<?php 
echo'<br>';
if ($handle = opendir('.')) { //開啟現在的資料夾  
       while (false !== ($file = readdir($handle))) {  
    //避免搜尋到的資料夾名稱是false,像是0  
           if ($file != "." && $file != ".."&& $file != "index.php" && $file !="@eaDir") {  
    //去除掉..跟.  
               echo "<a href='$file'>".'<font size="5">'.$file.'</font>'.'</a><br><br>';              
              }  
          }  
          closedir($handle);  
      }  
?>
</body>


</html>
