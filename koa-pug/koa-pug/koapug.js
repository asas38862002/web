const serve  = require('koa-static');
const koa    = require('koa');
const app    = new koa();
const Pug    = require('koa-pug'); 
const router = require('koa-router')(); //koa-router
const fs     = require('fs');
const dirpath = require('path');
const net = require('net');
const lineReader = require('line-reader');
var tempnum = new Array;
		

/*
client.connect(1337, '127.0.0.1', function() {
	for(;;)
	console.log('Connected');
	client.write('Hello, server! Love, Client.');
});*/
/*
client.on('data', function(data) {
	
	
});

client.on('close', function() {
	console.log('Connection closed');
});*/

//載入MySQL模組
var mysql = require('mysql');
//建立連線
var sql = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'wavedata'
});
//開始連接
sql.connect();
	
router.get('/sensors', async function (ctx, next) {
	var studentsInfo = { students: [{ name: 'Tim', number: count }, { name: 'Jimmy', number: 87 }] };
    var studentsInfo1 = new Array() ;
	
	
	console.log("get");
	studentsInfo1 = await readText();
	//console.log("temp= "+temp);
	//ctx.body = 'Hello World!';
	ctx.render('sensor', studentsInfo1[0], true); //read ./views/index file
	//ctx.render('sensor');
	
});//get



var y=0 ;
var m=0 ;
var d=0 ;

 
 
router.get('/', async function (ctx, next) {
	if(ctx.url == '/')
	{
		y = '2017';
		m = '04';
		d = 30;
		var count = 0 ;
		var repinside = 0 ;
		var numevent  = 0 ;
		var Event = [] ;
		var RepCount = [] ;
		var linkarr = { eventlinks:[]   };
		for(count = d ; count>=1 ;count--)
		{
			repinside = 0 ;
			numevent = 0 ;
			var event_info = new Array();
			for (var i = 0; i < 1; i++) {
			  event_info[i] = new Array();
			}
			Event = await readevent() ; //read event file
			for(var i=0 ; i<Event.length;i++)
			{
				if(Event[i].substring(0,9) == 'Reporting')
				{

					if( count == parseInt(Event[i].substring(31,33)) ){
						repinside=0; //modify
						numevent++;
						event_info[numevent] = new Array();
						event_info[numevent][repinside]=Event[i];
		
					}//day is right
					else if(count < parseInt(Event[i].substring(31,33)) )
					{
						break ;
					}
				}//save title is Reporting
				else if(event_info[numevent][0]!=''){
					event_info[numevent][repinside]=Event[i];
					
					repinside++;
				}			
			}
			for(var i=1 ; i<event_info.length;i++)
			{
				event_info[i][event_info[i].length -1] =i;//加入事件編號 seri 
			}
			for(var i=1 ; i<event_info.length;i++){
				RepCount[i] = event_info[i][event_info[i].length -2].substring(-3); //count num		
			}		
			//=================================top 10 modify this way=======================================
			
				if(event_info.length ==1) No_event=1; //judge event exit
				else No_event=0;		
				
				var z = 0  ; //number 
				var mon = 0 ;
				var day = 0 ;
				var hur = 0 ;
				var min = 0 ;
				var sec = 0 ;
				var linkev = "" ; 
				var templk=[];
				var name = y+m+count;//error

				if(No_event != 1 )
				{	
					for(var i=1 ; i<event_info.length-1;i++)
					{
						mon = parseInt( event_info[1][1].substring(5,7)  );			
						day = parseInt( event_info[1][1].substring(13,15));			
						hur = parseInt( event_info[i][1].substring(17,19));	
						min = parseInt( event_info[i][1].substring(23,25));
						sec = parseFloat( event_info[i][1].substring(28,34));			
						linkev = settinglink(name,hur,min,sec);	// bug is the name !!!!!!!!!!!!!!!!!!!!! no y+m+d is wrong 
						
						if( RepCount[i+1].substring(0,7) == 'count:0' || ( (i+1) == event_info.length-1 ) )
						{
							//if next RepCount==0 or i+1 == event_info.length
							var tempev = [];
							var numc = 0 ;	
							z++;
					
							linkev = '?name='+linkev+'&type='+"prep"+"&seri="+event_info[i][event_info[i].length-1] ;
							var eventtm = {
								Numbering: z,
								linkstr :linkev,
								Dep      :event_info[i][1].substring(55,60),
								Mpd      :event_info[i][1].substring(62,66),
								senCt    :event_info[i].length-5,
								linkt    :(mon+"/"+day+","+hur+":"+min+" :"+sec)  
							};		//json save event information		
							linkarr.eventlinks.push(eventtm);

						}//==================json===============
					}//for loop (get latest report)
				}	//exist event						
			if(linkarr.eventlinks.length > 10)
			{
				break ;
			}
		}//count for loop
		var templink = [];
	//	console.log(linkarr.eventlinks);

		for(var i =0 ; i<10 ; i++ )
		{
			console.log(linkarr.eventlinks[i]);
			templink.push(linkarr.eventlinks[i]);
		}//get top 10 event  
		
		linkarr.eventlinks.length = 0 ; //clear
		for(var i = 0 ;i<templink.length ; i++)
		{
			templink[i].Numbering = i+1;
			linkarr.eventlinks.push(templink[i]);
		}		
		ctx.render('index',linkarr, true);	
		console.log("in index");
	}//index web
	else
	{
		var str = ctx.url ;
        var No_event ;
		var type ;
		var Event = [] ;
		var RepCount = [] ;
		var sumbut ;
		temp = str.split('&');
		console.log(temp[0]);
		console.log(temp[1]);
		if(temp[0].substring(2,6)=='year')
		{
			y = temp[0].substring(7);
			m = temp[1].substring(4);
			d = temp[2].substring(4);
			sumbut = temp[3].substring(5,11);
			if(parseInt(m) < 10)
			{
				m = '0'+m;
			}
			if(parseInt(d) < 10)
			{
				d = '0'+d;
			}
		}
		else if(temp[0].substring(2,6)=='name')
		{
			y = temp[0].substring(7,11);
			m = temp[0].substring(11,13);
			d = temp[0].substring(13,15);				
		}

		//console.log(y+" "+m+" "+d);
		var repinside = 0 ;
		var numevent  = 0 ;
		var daygate = 0 ;
		var Event = [] ;
		var event_info = new Array();
		for (var i = 0; i < 1; i++) {
		  event_info[i] = new Array();
		}
		Event = await readevent() ; //read event file
		
		for(var i=0 ; i<Event.length;i++)
		{
			if(Event[i].substring(0,9) == 'Reporting')
			{
				if( d == parseInt(Event[i].substring(31,33)) ){
					repinside=0;
					numevent++;
					event_info[numevent] = new Array();
					event_info[numevent][repinside]=Event[i];
				}//day is right
				else if(d < parseInt(Event[i].substring(31,33)) )
				{
					break ;
				}
			}//save title is Reporting
			else if(event_info[numevent][0]!=''){
				event_info[numevent][repinside]=Event[i];
				//console.log(event_info[numevent][repinside]);
				repinside++;
			}			
		}
		for(var i=1 ; i<event_info.length;i++)
		{
			event_info[i][event_info[i].length -1] =i;//加入事件編號
		}
		for(var i=1 ; i<event_info.length;i++){
			RepCount[i] = event_info[i][event_info[i].length -2].substring(-3); //count num							
		}
	
		if(sumbut=='Submit')
		{
		//============search earthquake event========================
			if(event_info.length ==1) No_event=1; //judge event exit
			else No_event=0;		
			
			var z = 0   ; //number 
			var mon = 0 ;
			var day = 0 ;
			var hur = 0 ;
			var min = 0 ;
			var sec = 0 ;
			var linkev = "" ; 
			var linkarr = { eventlinks:[]   };
			var name = y+m+d; //Y+M+D
			
			if(No_event == 1 )
			{
				var eventtm = {
					Event:"no event"
				};		//json save event information				
				linkarr.eventlinks.push(eventtm);
				ctx.render('indexnsearch',linkarr, true);	
			}// no exist event

			if(No_event != 1 )
			{
				
				for(var i=1 ; i<event_info.length-1;i++)
				{
					
					mon = parseInt( event_info[1][1].substring(5,7)  );			
					day = parseInt( event_info[1][1].substring(13,15));			
					hur = parseInt( event_info[i][1].substring(17,19));	
					min = parseInt( event_info[i][1].substring(23,25));
					sec = parseFloat( event_info[i][1].substring(28,34));			
					linkev = settinglink(name,hur,min,sec);			  
					if( RepCount[i+1].substring(0,7) == 'count:0' || ( (i+1) == event_info.length-1 ) )
					{
						//if next RepCount==0 or i+1 == event_info.length
						var test = event_info[i][1].split(" ");
						var tempev = [];
						var numc = 0 ;	
						z++;
				
						linkev = '?name='+linkev+'&type='+"prep"+"&seri="+event_info[i][event_info[i].length-1] ;
						var eventtm = {
							Numbering: z,
							linkstr :linkev,
							Dep      :event_info[i][1].substring(55,60),
							Mpd      :event_info[i][1].substring(62,66),
							senCt    :event_info[i].length-5,
							linkt    :(mon+"/"+day+","+hur+":"+min+" :"+sec)  
						};		//json save event information		
						linkarr.eventlinks.push(eventtm);
					}//==================json===============
				}//for loop (get latest report)
				
				//console.log(linkarr.eventlinks[0].EventTime);
					
				ctx.render('indexsearch',linkarr, true);			
			}	//exist event			
		}//earthquake event
		else if(temp[1].substring(5,11)=='prep')
		{
			//console.log(temp[2].substring(5,temp[2].length))
			var seri = parseInt(temp[2].substring(5,temp[2].length));
			console.log(RepCount[seri]);
			var year = event_info[seri][1].substring(0,4);
			mon = event_info[seri][1].substring(5,7);			
			day = event_info[seri][1].substring(13,15);			
			hur = event_info[seri][1].substring(17,19);	
			min = event_info[seri][1].substring(23,25);
			sec = event_info[seri][1].substring(28,34);	
			var loc ;
			var lon ;
			var dep ;
			var mpd ;
			var rt ;
			var count=0 ;
			
			var temp = event_info[seri][1].split(" ");
			
			for(var i = 0 ; i< temp.length;i++)
			{
				if(temp[i].length>2)
				{
				  if(count == 2)
				  {
					loc = temp[i]; 
				  }//lat
				  else if(count == 3)
				  {
					lon = temp[i];  
				  }//lon
				  else if(count == 4)
				  {
					dep = temp[i];  
				  }
				  else if(count == 5)
				  {
					mpd = temp[i];  
				  }				  
				  count = count + 1	;
				}
				
			}
			//console.log(temp[21]+" "+temp[22]);
			
			//console.log("year= "+year+" mon= "+mon+" day= "+day+" hur= "+hur+" min= "+min+" sec= "+sec);
            var linkarr = { eventlinks:[] ,sensors:[],filedir:[] };
			
			var eventtm = {
				Year:year,
				Mon:mon,
				Day:day,
				Hur:hur,
				Min:min,
				Sec:sec,
				Loc:loc,
				Lon:lon,
				Dep:dep,
				Mpd:mpd
			};		//json save event information
			
			for(var i=3; i<=event_info[seri].length-3;i++)
			{
				count = 0 ;
				temp = event_info[seri][i].split(" ");

				for(var j = 0 ; j< temp.length;j++)
				{
					
					if(temp[j].length>2)
					{
					  if(count == 1)
					  {
						loc = temp[j]; 					
					  }//loc
					  else if(count == 2)
					  {
						lon = temp[j]; 
					  }//lon
					  else if(count == 8)
					  {
						mpd = temp[j];  
					  }				  	  
					  else if(count == 9)
					  {
						rt = temp[j];  
					  }					
					  count = count + 1	;
					}			
				}
				var sensorinfo = {
					Num:i-2,
					Station:event_info[seri][i].substring(0,4),
					Lat:loc,
					Lon:lon,
					MPd:mpd,
					RT:rt
				};		//json save event information						
				linkarr.sensors.push(sensorinfo);
				//console.log(temp);
				//console.log(event_info[seri][i].substring(0,4));
			}
			linkarr.eventlinks.push(eventtm);

			var name = str.split('&');
			//var path = '../wave/'+substr($name,0,6)+'/'+substr($name,0,8)+'/'+substr($name,0,14);
			//console.log(name[0].substring(7));
			var path ='../../wave/'+name[0].substring(7,13)+'/'+name[0].substring(7,15)+'/';//(parseInt(name[0].substring(7,21))+1)	
			path = path.substr(3) + await findwave(path,name[0]) ;
			console.log(path);
			var fileurl = {
				dir:path
			}
			linkarr.filedir.push(fileurl);
			//console.log(linkarr.filedir[0])
			ctx.render('indexwave',linkarr, true);
		}//event sensor

		
	}//search

});//get search


function settinglink(evt,hur,min,sec)
{
    var linkstr = "";
	if(hur>=10)
	{
		if(min>=10)
		{
			if(sec>=10) 				linkstr=evt+""+hur+""+min+""+sec;		
			else if(sec<10&&sec>0)	    linkstr=evt+""+hur+""+min+""+"0"+""+sec;
			else 						linkstr=evt+""+hur+""+min+""+"00";					
		}
		else if(min<10&&min>0)
		{
			if(sec>=10) 				linkstr= evt+""+hur+""+"0"+""+min+""+sec;		
			else if( sec<10&& sec>0)	linkstr= evt+""+hur+""+"0"+""+min+""+"0"+""+sec;
			else 						linkstr= evt+""+hur+""+"0"+""+min+""+"00";	
		}
		else
		{
			if( sec>=10) 				linkstr= evt+""+hur+""+"00"+""+sec;		
			else if( sec<10&& sec>0)	linkstr= evt+""+hur+""+"00"+""+"0"+""+sec;
			else 						linkstr= evt+""+hur+""+"00"+""+"00";	
		}
	}//hour > 10
	else if( hur<10 && hur>0)
	{
		if( min>=10)
		{
			if( sec>=10) 				 linkstr= evt+""+"0"+""+ hur+""+ min+""+ sec;		
			else if( sec<10&& sec>0)	 linkstr= evt+""+"0"+""+ hur+""+ min+""+"0"+""+ sec;
			else 						 linkstr= evt+""+"0"+""+ hur+""+ min+""+"00";
		}
		else if( min<10&& min>0)
		{
			if( sec>=10) 				 linkstr= evt+""+"0"+""+ hur+""+"0"+""+ min+""+ sec;		
			else if( sec<10&& sec>0)	 linkstr= evt+""+"0"+""+ hur+""+"0"+""+ min+""+"0"+""+ sec;
			else 						 linkstr= evt+""+"0"+""+ hur+""+"0"+""+ min+""+"00";	
		}
		else
		{
			if( sec>=10) 				 linkstr= evt+""+"0"+""+ hur+""+"00"+""+ sec;		
			else if( sec<10&& sec>0)	 linkstr= evt+""+"0"+""+ hur+""+"00"+""+"0"+""+ sec;
			else 						 linkstr= evt+""+"0"+""+ hur+""+"00"+""+"00";	
		}
	}//hour < 10 && > 0
 
	else
	{
		if(min>=10)
		{
			if(sec>=10) 				linkstr=evt+""+"00"+""+min+""+sec;		
			else if(sec<10&&sec>0)	    linkstr=evt+""+"00"+""+min+""+"0"+""+sec;
			else 						linkstr=evt+""+"00"+""+min+""+"00";
		}
		else if(min<10&&min>0)
		{
			if(sec>=10) 				linkstr=evt+""+"00"+""+"0"+""+min+""+sec;		
			else if(sec<10&&sec>0)	    linkstr=evt+""+"00"+""+"0"+""+min+""+"0"+""+sec;
			else 						linkstr=evt+""+"00"+""+"0"+""+min+""+"00";	
		}
		else
		{
			if(sec>=10) 				linkstr=evt+""+"00"+""+"00"+""+sec;		
			else if(sec<10&&sec>0)	    linkstr=evt+""+"00"+""+"00"+""+"0"+""+sec;
			else 						linkstr=evt+""+"00"+""+"00"+""+"00";	
		}
	}
	return linkstr ;
}


function readevent()
{
	var test  ;
	
	return new Promise((resolve, reject) => {
		
		fs.readFile(dirpath.resolve(__dirname,'../../Events/'+y+m+'_evts_new.txt'), 'utf8', (err, data) => {
			if (err) { reject(err);}
			//temp = data.split(/\r\n|\r|\n/g);
			test = data.split(/\n/);
			//console.log(temp.length);
			resolve(test);
		});
		
		
	});
	
	
	
}
function findwave(path,str)
{
		var rf;
		return new Promise((resolve, reject) => {	
			fs.readdir(path, (err, files) => {
				files.forEach(file => {
					if(parseInt(file) <  (parseInt(str.substring(7,21))+1) && parseInt(file) > (parseInt(file)-100) ) //near 1 min
					{
						console.log("find= "+file);
						rf = file ;
					}		
				});		
				
				resolve(rf);
			})
			
			
		});
	
	
}


function readText()
{
	return new Promise((resolve, reject) => {
		fs.readFile("public/station_inf.php", 'utf8', (err, data) => {
			if (err) { reject(err); }
			else { 
				var studentsInfo1 = new Array() ;
				var temp = 0 ;
				var temp1 = 0 ;
				var temp2 = 0 ;
				var test = {
					sensors:[

					]
				};				
				temp = data.split(/\r\n|\r|\n/g);
				//console.log(temp);
				//console.log(temp[5]);
				for(var i = 4 ;i<586 ;i++)
				{

					temp1 = temp[i].split('(');
					temp[i] = temp1[1].replace("(", "");
					temp[i] = temp[i].replace("),", "");
					temp[i] = temp[i].replace(/\"/g, "")
					temp2 = temp[i].split(',');
					var test1 = {
						name:temp2[0],
						city:temp2[1],
						serial:temp2[2],
						Location:temp2[3],
						Lat:temp2[4],
						Lon:temp2[5],
						number:temp2[6]
						
					};		
					test.sensors.push(test1) ;	
					studentsInfo1.push(test);	
					studentsInfo1.push(test);					
				}
				resolve(studentsInfo1);
			}
		
			
		})
	});	
}

var dstr ="00000000000000" ;
function getText(uri) {
	tempnum.length = 0 ;
	return new Promise((resolve, reject) => {
		//console.log("read"+uri);
 		//console.log("now= "+dstr);


			 
		sql.query('SELECT * FROM `data` where name = "'+uri+'" and time = "'+ dstr+'"'  , (err, rows, fields)=> {
			if (err) { reject(err); }
			for(var r in rows){
			  //console.log("r= "+r +" "+rows[r].name +" value= "+rows[r].value );
			  tempnum[r] = rows[r].value;
		 	}//for loop
		  
		 /* console.log(dstr);
		  for(var i =0 ; i< tempnum.length ; i++)
		  {
			  console.log(" "+tempnum[i]);
			  
		  }*/
		  resolve(tempnum);
	    });
	});//promise
}//getText

 

router.post('sensorid', '/sensors/:sensorid', async function (ctx, next) {
	const sensorid = ctx.params['sensorid'];
	if (sensorid === undefined) { return 'ERR_SENSORID_IS_UNDEFINED'; }
	
	//console.log("get the data here. " + sensorid);
    var str = "L001";
	ctx.body = await getText(str); // respond this is data 
		
});//post

/*router.post('day', '/:day', async function (ctx, next) {
	//const day = ctx.params['day'];
	console.log("OK");
		
});//post*/
 

app.use(router.routes());
app.use(router.allowedMethods());
app.use(serve(__dirname + '/public'));

 
const pug = new Pug({
  viewPath: './views',//folder
  debug: false,
  pretty: false,
  compileDebug: false,
  locals: {},
  app: app // equals to pug.use(app) and app.use(pug.middleware)
});
var count = 0 ;
pug.locals.someKey = 'some value'


setInterval(function(){
    gettime();
	//console.log("delete time "+dstr);
	sql.query('delete  FROM `data` WHERE time <  '+ dstr+'  ', function(err) {
      if (err) throw err;
    });
	
	
	
}, 1000);  //post to server and get data in thread  

function gettime()
{
	dstr = '' ;
	var now = new Date();
	var time = now.getTime()-1000 ;
	var bsec = new Date( time );
	var year = bsec.getFullYear();
		var mon = bsec.getMonth();
	var date = bsec.getDate();
	var hour = bsec.getHours();
	var minute = bsec.getMinutes();
	var sec = bsec.getSeconds();
	//console.log(date);
	if( sec-1 < 0 )
	{
	   minute = minute -1 ; 
	   if( minute < 0 )
	   {
			hour = hour - 1 ;
			if(hour < 0)
			{
				date = date-1 ;
				hour = 59 ;
			}
			else
			{
				minute = 59 ;
			}
	   }
	   else 
	   {
		sec = 60 ;
	   }
	

	}
	dstr = dstr + year ;
	if(mon<9)
	{
	 dstr = dstr +"0"; 
	}
	dstr = dstr + (mon+1);
	if(date<10)
	{
	 dstr = dstr +"0"; 
	}
	dstr = dstr + date;
	if(hour<10)
	{
	 dstr = dstr +"0"; 
	}
	dstr = dstr + hour;
	if(minute<10)
	{
	 dstr = dstr +"0"; 
	}
	dstr = dstr + minute;
	if(sec<11 )
	{
	 dstr = dstr +"0"; 
	 
	}
	dstr = dstr + (sec-1) ; 	

	
}



/*

app.use(function* () {
      var start = new Date;
      // studentInfo is from db.
      var studentsInfo = { students: [{ name: 'Tim', number: count }, { name: 'Jimmy', number: 87 }] };
      var ms = new Date - start;
      //console.log('%s %s - %s', this.method, this.url, ms);
	  console.log('%s %s',this.method,this.url);
	  if(this.url=='/'){
		  
		  this.render('sensor'); //read ./views/index file 			 
		  
      }
	  else if (this.url=='sensor')
	  {	
		this.render('socket'); //read ./views/index file 
	  }
	  
	  
      //this.render('socket', studentsInfo, true); //read ./views/index file
});
 */
 
app.listen(3001);
