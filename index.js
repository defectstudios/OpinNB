  /**************************************************/
 /* Copyright © 2020 - Valor [Discord: Valor#2370] */
/**************************************************/
var _$_45dc=["body-parser","express","fs","express-session","passport","Strategy","passport-discord","./config.json","assert","quick.db","ejs","express-validator","path","highlight.js","gray-matter","dotenv","config","sitename","clientID","env","clientSecret","callbackURL","serializeUser","deserializeUser","identify","email","consent","nextTick","use","keyboard cat","initialize","session","/girisyap","discord","authenticate","get","/callback","/","id","user","redirect","/blog","/cikis","logout","urlencoded","json","views","blog","join","set","view engine","static","/blog/:article","/blog/","article","params",".md","read","log","html","markdown-it","content","render","username","avatar","authorID","data","index","title","author","date","authorRaw","uid","authorAvatar",", /blog adresine giri\u015f yapt\u0131.","endsWith","filter","readdirSync","slice","/admin","admin","/me","/getRequestData","hi","send","/yayinla","newBlog","newBlog Conn","Ba\u015fl\u0131k, en az 5 karakter ve en fazla 70 karakter olabilir!","withMessage","isLength","titt","body","Blogunuzun i\xE7eri\u011fi en az 120 ve en fazla 20000 karakter olabilir!","cont","validationResult","errors","value","isEmpty","toLowerCase","-"," ","split","existsSync","wtf","---\x0Atitle: ","\x0Aauthor: ","\x0Auid: ","\x0AauthorRaw: ","\x0AauthorID: ","-\x0Adate: ","\x0AauthorAvatar: ","\x0A---\x0A","dosya kaydedildi!","writeFile",", yeni bir post payla\u015ft\u0131! (",")","post","/newComment","commentPostID","newComment","commentAuthor","commentAuthorAvatar","commentDate","commentAuthorID","push","back","/deleteComment","targetPostID","delete","/newfaq","sss.items","question","answer","/banUser","ban.items","targetUserID","/help","help","/deletePost","targetPost","unlinkSync","deleted","deletePostSuccess","isAuthenticated","./notloggedin.ejs","0","/unbanAll","banlar temizlendi!","/editBio","bioContent","userID","/editBusinessStatus","targetBusiness","/editCustomStatus","targetCustomStatus","/download/database","./json.sqlite","download","<script>alert(\"Veritaban\u0131n\u0131 indirmek i\xE7in y\xF6netici yetkiniz olmas\u0131 laz\u0131m.\");</script>","/user/:userid","userid","locale","discriminator","now","originalUrl","Kullan\u0131c\u0131 bulunamad\u0131!","/me/edit","useredit","/user/:meUserID/edit","meUserID","listening 4000","listen"];const bodyParser=require(_$_45dc[0]),express=require(_$_45dc[1]),fs=require(_$_45dc[2]),session=require(_$_45dc[3]),passport=require(_$_45dc[4]),Strategy=require(_$_45dc[6])[_$_45dc[5]],config=require(_$_45dc[7]),assert=require(_$_45dc[8]),db=require(_$_45dc[9]),ejs=require(_$_45dc[10]),expressValidator=require(_$_45dc[11]),pathModule=require(_$_45dc[12]),hljs=require(_$_45dc[13]),matter=require(_$_45dc[14]),dotenv=require(_$_45dc[15]);dotenv[_$_45dc[16]]();const app=express();let publicSitename=config[_$_45dc[17]];const cfClientID=process[_$_45dc[19]][_$_45dc[18]],cfClientSecret=process[_$_45dc[19]][_$_45dc[20]],cfCallbackURL=process[_$_45dc[19]][_$_45dc[21]];passport[_$_45dc[22]](function(_0x1E344,_0x1E384){_0x1E384(null,_0x1E344)}),passport[_$_45dc[23]](function(_0x1E344,_0x1E384){_0x1E384(null,_0x1E344)});var scopes=[_$_45dc[24],_$_45dc[25]],prompt=_$_45dc[26];passport[_$_45dc[28]]( new Strategy({clientID:cfClientID,clientSecret:cfClientSecret,callbackURL:cfCallbackURL,scope:scopes,prompt:prompt},function(_0x1E344,_0x1E384,_0x1E3C4,_0x1E404){process[_$_45dc[27]](function(){return _0x1E404(null,_0x1E3C4)})})),app[_$_45dc[28]](session({secret:_$_45dc[29],resave:!1,saveUninitialized:!1})),app[_$_45dc[28]](passport[_$_45dc[30]]()),app[_$_45dc[28]](passport[_$_45dc[31]]()),app[_$_45dc[35]](_$_45dc[32],passport[_$_45dc[34]](_$_45dc[33],{scope:scopes,prompt:prompt}),function(_0x1E344,_0x1E384){}),app[_$_45dc[35]](_$_45dc[36],passport[_$_45dc[34]](_$_45dc[33],{failureRedirect:_$_45dc[37]}),function(_0x1E344,_0x1E384){_0x1E384[_$_45dc[40]](`/user/${_0x1E344[_$_45dc[39]][_$_45dc[38]]}`)}),app[_$_45dc[35]](_$_45dc[37],checkAuth,function(_0x1E344,_0x1E384){_0x1E384[_$_45dc[40]](_$_45dc[41])}),app[_$_45dc[35]](_$_45dc[42],function(_0x1E344,_0x1E384){_0x1E344[_$_45dc[43]](),_0x1E384[_$_45dc[40]](_$_45dc[37])}),app[_$_45dc[28]](bodyParser[_$_45dc[44]]({extended:!0})),app[_$_45dc[28]](bodyParser[_$_45dc[45]]());const path=require(_$_45dc[12]);app[_$_45dc[49]](_$_45dc[46],path[_$_45dc[48]](__dirname,_$_45dc[47])),app[_$_45dc[49]](_$_45dc[50],_$_45dc[10]),app[_$_45dc[28]](express[_$_45dc[51]](_$_45dc[47]));const {validationResult:validationResult,check:check}=require(_$_45dc[11]);app[_$_45dc[35]](_$_45dc[52],checkAuth,(_0x1E344,_0x1E384)=>{const _0x1E3C4=matter[_$_45dc[57]](__dirname+ _$_45dc[53]+ _0x1E344[_$_45dc[55]][_$_45dc[54]]+ _$_45dc[56]);console[_$_45dc[58]](_0x1E3C4),console[_$_45dc[58]](_0x1E344[_$_45dc[55]][_$_45dc[54]]);const _0x1E404=require(_$_45dc[60])({breaks:!0,linkify:!0,html:config[_$_45dc[59]]}),_0x1E4C4=_0x1E3C4[_$_45dc[61]],_0x1E484=_0x1E404[_$_45dc[62]](_0x1E4C4);console[_$_45dc[58]](`${_0x1E344[_$_45dc[39]][_$_45dc[63]]}, ${_0x1E344[_$_45dc[55]][_$_45dc[54]]} adlı posta bağlandı.`);var _0x1E444=`https://cdn.discordapp.com/avatars/${_0x1E344[_$_45dc[39]][_$_45dc[38]]}/${_0x1E344[_$_45dc[39]][_$_45dc[64]]}.png?size=128`;console[_$_45dc[58]](_0x1E3C4[_$_45dc[66]][_$_45dc[65]]),_0x1E384[_$_45dc[62]](_$_45dc[67],{sitename:publicSitename,post:_0x1E484,matterFile:_0x1E3C4,title:_0x1E3C4[_$_45dc[66]][_$_45dc[68]],slug:_0x1E344[_$_45dc[55]][_$_45dc[54]],author:_0x1E3C4[_$_45dc[66]][_$_45dc[69]],date:_0x1E3C4[_$_45dc[66]][_$_45dc[70]],authorRaw:_0x1E3C4[_$_45dc[66]][_$_45dc[71]],authorID:_0x1E3C4[_$_45dc[66]][_$_45dc[65]],uid:_0x1E3C4[_$_45dc[66]][_$_45dc[72]],authorAvatar:_0x1E3C4[_$_45dc[66]][_$_45dc[73]],discordRequest:_0x1E344,pp:_0x1E444,config:config,db:db})}),app[_$_45dc[35]](_$_45dc[41],checkAuth,(_0x1E344,_0x1E384)=>{console[_$_45dc[58]](_0x1E344[_$_45dc[39]][_$_45dc[63]]+ _$_45dc[74]);var _0x1E3C4=`https://cdn.discordapp.com/avatars/${_0x1E344[_$_45dc[39]][_$_45dc[38]]}/${_0x1E344[_$_45dc[39]][_$_45dc[64]]}.png?size=128`;const _0x1E404=fs[_$_45dc[77]](__dirname+ _$_45dc[41])[_$_45dc[76]]((_0x1E344)=>{return _0x1E344[_$_45dc[75]](_$_45dc[56])});for(post of _0x1E404){post[_$_45dc[78]](0,-3)};_0x1E384[_$_45dc[62]](_$_45dc[47],{sitename:publicSitename,posts:_0x1E404,discordRequest:_0x1E344,pp:_0x1E3C4,matter:matter,__dirname:__dirname,config:config})}),app[_$_45dc[35]](_$_45dc[79],checkAuth,(_0x1E344,_0x1E384)=>{var _0x1E3C4=`https://cdn.discordapp.com/avatars/${_0x1E344[_$_45dc[39]][_$_45dc[38]]}/${_0x1E344[_$_45dc[39]][_$_45dc[64]]}.png?size=128`;const _0x1E404=fs[_$_45dc[77]](__dirname+ _$_45dc[41])[_$_45dc[76]]((_0x1E344)=>{return _0x1E344[_$_45dc[75]](_$_45dc[56])});for(post of _0x1E404){post[_$_45dc[78]](0,-3)};_0x1E384[_$_45dc[62]](_$_45dc[80],{sitename:publicSitename,config:config,pp:_0x1E3C4,discordRequest:_0x1E344,matter:matter,posts:_0x1E404,__dirname:__dirname,fs:fs,db:db})}),app[_$_45dc[35]](_$_45dc[81],checkAuth,(_0x1E344,_0x1E384)=>{_0x1E384[_$_45dc[40]](`/user/${_0x1E344[_$_45dc[39]][_$_45dc[38]]}`)}),app[_$_45dc[35]](_$_45dc[82],checkAuth,(_0x1E344,_0x1E384)=>{console[_$_45dc[58]](_0x1E344),_0x1E384[_$_45dc[84]](_$_45dc[83])}),app[_$_45dc[35]](_$_45dc[85],checkAuth,(_0x1E344,_0x1E384)=>{var _0x1E3C4=`https://cdn.discordapp.com/avatars/${_0x1E344[_$_45dc[39]][_$_45dc[38]]}/${_0x1E344[_$_45dc[39]][_$_45dc[64]]}.png?size=128`;_0x1E384[_$_45dc[62]](_$_45dc[86],{sitename:publicSitename,discordRequest:_0x1E344,pp:_0x1E3C4,config:config}),console[_$_45dc[58]](_$_45dc[87])}),app[_$_45dc[117]](_$_45dc[85],checkAuth,[expressValidator[_$_45dc[92]](_$_45dc[91])[_$_45dc[90]]({min:5,max:70})[_$_45dc[89]](_$_45dc[88]),expressValidator[_$_45dc[92]](_$_45dc[94])[_$_45dc[90]]({min:120,max:2e4})[_$_45dc[89]](_$_45dc[93])],function(_0x1E344,_0x1E384){const _0x1E3C4=expressValidator[_$_45dc[95]](_0x1E344);var _0x1E404=_0x1E3C4[_$_45dc[96]];for(var _0x1E4C4 in _0x1E404){console[_$_45dc[58]](_0x1E404[_0x1E4C4][_$_45dc[97]])};if(!_0x1E3C4[_$_45dc[98]]()){var _0x1E484=`https://cdn.discordapp.com/avatars/${_0x1E344[_$_45dc[39]][_$_45dc[38]]}/${_0x1E344[_$_45dc[39]][_$_45dc[64]]}.png?size=128`;return void(_0x1E384[_$_45dc[62]](_$_45dc[86],{errors:_0x1E404,discordRequest:_0x1E344,pp:_0x1E484,config:config}))};if(fs[_$_45dc[103]](`./blog/${_0x1E344[_$_45dc[92]][_$_45dc[91]][_$_45dc[102]](_$_45dc[101])[_$_45dc[48]](_$_45dc[100])[_$_45dc[99]]()}.md`)){return _0x1E384[_$_45dc[84]](_$_45dc[104])};let _0x1E444=_$_45dc[105]+ _0x1E344[_$_45dc[92]][_$_45dc[91]]+ _$_45dc[106]+ _0x1E344[_$_45dc[92]][_$_45dc[69]]+ _$_45dc[107]+ _0x1E344[_$_45dc[92]][_$_45dc[72]]+ _$_45dc[108]+ _0x1E344[_$_45dc[92]][_$_45dc[71]]+ _$_45dc[109]+ _0x1E344[_$_45dc[92]][_$_45dc[65]]+ _$_45dc[110]+ _0x1E344[_$_45dc[92]][_$_45dc[70]]+ _$_45dc[111]+ _0x1E344[_$_45dc[92]][_$_45dc[73]]+ _$_45dc[112]+ _0x1E344[_$_45dc[92]][_$_45dc[94]];fs[_$_45dc[114]](__dirname+ _$_45dc[53]+ _0x1E344[_$_45dc[92]][_$_45dc[91]]+ _$_45dc[56],_0x1E444,function(_0x1E344){if(_0x1E344){return console[_$_45dc[58]](_0x1E344)};console[_$_45dc[58]](_$_45dc[113])}),_0x1E384[_$_45dc[40]](_$_45dc[41]),console[_$_45dc[58]](_0x1E344[_$_45dc[92]]),console[_$_45dc[58]](_0x1E344[_$_45dc[39]][_$_45dc[63]]+ _$_45dc[115]+ _0x1E344[_$_45dc[92]][_$_45dc[91]]+ _$_45dc[116]),console[_$_45dc[58]](_0x1E344[_$_45dc[92]][_$_45dc[91]])}),app[_$_45dc[117]](_$_45dc[118],checkAuth,function(_0x1E344,_0x1E384){db[_$_45dc[125]](`comments_${_0x1E344[_$_45dc[92]][_$_45dc[119]]}.items`,{name:`${_0x1E344[_$_45dc[92]][_$_45dc[120]]}`,author:`${_0x1E344[_$_45dc[92]][_$_45dc[121]]}`,authorAvatar:`${_0x1E344[_$_45dc[92]][_$_45dc[122]]}`,date:`${_0x1E344[_$_45dc[92]][_$_45dc[123]]}`,authorID:`${_0x1E344[_$_45dc[92]][_$_45dc[124]]}`}),_0x1E384[_$_45dc[40]](_$_45dc[126])}),app[_$_45dc[117]](_$_45dc[127],checkAuth,function(_0x1E344,_0x1E384){console[_$_45dc[58]](_0x1E344[_$_45dc[92]]),db[_$_45dc[129]](`comments_${_0x1E344[_$_45dc[92]][_$_45dc[128]]}.items`),_0x1E384[_$_45dc[40]](_$_45dc[79])}),app[_$_45dc[117]](_$_45dc[130],checkAuth,function(_0x1E344,_0x1E384){console[_$_45dc[58]](_0x1E344[_$_45dc[92]]),db[_$_45dc[125]](_$_45dc[131],{question:_0x1E344[_$_45dc[92]][_$_45dc[132]],answer:_0x1E344[_$_45dc[92]][_$_45dc[133]]}),_0x1E384[_$_45dc[40]](_$_45dc[79])}),app[_$_45dc[117]](_$_45dc[134],checkAuth,function(_0x1E344,_0x1E384){console[_$_45dc[58]](_0x1E344[_$_45dc[92]]),db[_$_45dc[125]](_$_45dc[135],`${_0x1E344[_$_45dc[92]][_$_45dc[136]]}`),_0x1E384[_$_45dc[40]](_$_45dc[79])}),app[_$_45dc[35]](_$_45dc[137],checkAuth,(_0x1E344,_0x1E384)=>{var _0x1E3C4=`https://cdn.discordapp.com/avatars/${_0x1E344[_$_45dc[39]][_$_45dc[38]]}/${_0x1E344[_$_45dc[39]][_$_45dc[64]]}.png?size=128`;_0x1E384[_$_45dc[62]](_$_45dc[138],{db:db,pp:_0x1E3C4,discordRequest:_0x1E344,config:config,sitename:publicSitename})}),app[_$_45dc[117]](_$_45dc[139],checkAuth,(_0x1E344,_0x1E384)=>{console[_$_45dc[58]](_0x1E344[_$_45dc[92]][_$_45dc[140]]),fs[_$_45dc[141]](__dirname+ `/blog/${_0x1E344[_$_45dc[92]][_$_45dc[140]]}.md`),console[_$_45dc[58]](_$_45dc[142]);var _0x1E3C4=`https://cdn.discordapp.com/avatars/${_0x1E344[_$_45dc[39]][_$_45dc[38]]}/${_0x1E344[_$_45dc[39]][_$_45dc[64]]}.png?size=128`;_0x1E384[_$_45dc[62]](_$_45dc[143],{targetPost:_0x1E344[_$_45dc[92]][_$_45dc[140]],discordRequest:_0x1E344,sitename:publicSitename,config:config,pp:_0x1E3C4,db:db})});let arrayDatabaseController=db[_$_45dc[35]](_$_45dc[135]);function checkAuth(_0x1E344,_0x1E384,_0x1E3C4){if(_0x1E344[_$_45dc[144]]()){return _0x1E3C4()};_0x1E384[_$_45dc[62]](_$_45dc[145],{sitename:publicSitename,config:config})}arrayDatabaseController|| db[_$_45dc[125]](_$_45dc[135],_$_45dc[146]),app[_$_45dc[117]](_$_45dc[147],checkAuth,function(_0x1E344,_0x1E384){db[_$_45dc[129]](_$_45dc[135]),db[_$_45dc[125]](_$_45dc[135],_$_45dc[146]),console[_$_45dc[58]](_$_45dc[148]),_0x1E384[_$_45dc[40]](_$_45dc[79])}),app[_$_45dc[117]](_$_45dc[149],checkAuth,function(_0x1E344,_0x1E384){_0x1E344[_$_45dc[92]][_$_45dc[150]]?(db[_$_45dc[49]](`bio_${_0x1E344[_$_45dc[92]][_$_45dc[151]]}`,`${_0x1E344[_$_45dc[92]][_$_45dc[150]]}`),_0x1E384[_$_45dc[40]](_$_45dc[81])):(db[_$_45dc[129]](`bio_${_0x1E344[_$_45dc[92]][_$_45dc[151]]}`),_0x1E384[_$_45dc[40]](_$_45dc[81]))}),app[_$_45dc[117]](_$_45dc[152],checkAuth,function(_0x1E344,_0x1E384){_0x1E344[_$_45dc[92]][_$_45dc[153]]?(db[_$_45dc[49]](`businessstatus_${_0x1E344[_$_45dc[92]][_$_45dc[151]]}`,`${_0x1E344[_$_45dc[92]][_$_45dc[153]]}`),_0x1E384[_$_45dc[40]](_$_45dc[81])):(db[_$_45dc[129]](`businessstatus_${_0x1E344[_$_45dc[92]][_$_45dc[151]]}`),_0x1E384[_$_45dc[40]](_$_45dc[81]))}),app[_$_45dc[117]](_$_45dc[154],checkAuth,function(_0x1E344,_0x1E384){_0x1E344[_$_45dc[92]][_$_45dc[155]]?(db[_$_45dc[49]](`customstatus_${_0x1E344[_$_45dc[92]][_$_45dc[151]]}`,`${_0x1E344[_$_45dc[92]][_$_45dc[155]]}`),_0x1E384[_$_45dc[40]](_$_45dc[81])):(db[_$_45dc[129]](`customstatus_${_0x1E344[_$_45dc[92]][_$_45dc[151]]}`),_0x1E384[_$_45dc[40]](_$_45dc[81]))}),app[_$_45dc[35]](_$_45dc[156],checkAuth,function(_0x1E344,_0x1E384){_0x1E344[_$_45dc[39]][_$_45dc[38]]=== config[_$_45dc[80]]?_0x1E384[_$_45dc[158]](_$_45dc[157]):_0x1E384[_$_45dc[84]](_$_45dc[159])}),app[_$_45dc[35]](_$_45dc[160],checkAuth,(_0x1E344,_0x1E384)=>{let _0x1E3C4=db[_$_45dc[35]](`user_${_0x1E344[_$_45dc[55]][_$_45dc[161]]}`);if(_0x1E3C4|| _0x1E344[_$_45dc[55]][_$_45dc[161]]!== _0x1E344[_$_45dc[39]][_$_45dc[38]]|| (db[_$_45dc[49]](`user_${_0x1E344[_$_45dc[55]][_$_45dc[161]]}`,{username:`${_0x1E344[_$_45dc[39]][_$_45dc[63]]}`,userid:`${_0x1E344[_$_45dc[39]][_$_45dc[38]]}`,useravatar:`https://cdn.discordapp.com/avatars/${_0x1E344[_$_45dc[39]][_$_45dc[38]]}/${_0x1E344[_$_45dc[39]][_$_45dc[64]]}.png`,useremail:`${_0x1E344[_$_45dc[39]][_$_45dc[25]]}`,userlocale:`${_0x1E344[_$_45dc[39]][_$_45dc[162]]}`,userdiscriminator:`${_0x1E344[_$_45dc[39]][_$_45dc[163]]}`,registerdate:`${Date[_$_45dc[164]]()}`}),_0x1E384[_$_45dc[40]](_0x1E344[_$_45dc[165]])),!_0x1E3C4){return _0x1E384[_$_45dc[84]](_$_45dc[166])};var _0x1E404=`https://cdn.discordapp.com/avatars/${_0x1E344[_$_45dc[39]][_$_45dc[38]]}/${_0x1E344[_$_45dc[39]][_$_45dc[64]]}.png?size=128`;const _0x1E4C4=fs[_$_45dc[77]](__dirname+ _$_45dc[41])[_$_45dc[76]]((_0x1E344)=>{return _0x1E344[_$_45dc[75]](_$_45dc[56])});for(post of _0x1E4C4){post[_$_45dc[78]](0,-3)};_0x1E384[_$_45dc[62]](_$_45dc[39],{sitename:publicSitename,discordRequest:_0x1E344,pp:_0x1E404,myUser:_0x1E3C4,config:config,db:db,posts:_0x1E4C4,matter:matter,__dirname:__dirname})}),app[_$_45dc[35]](_$_45dc[167],checkAuth,(_0x1E344,_0x1E384)=>{var _0x1E3C4=`https://cdn.discordapp.com/avatars/${_0x1E344[_$_45dc[39]][_$_45dc[38]]}/${_0x1E344[_$_45dc[39]][_$_45dc[64]]}.png?size=128`;_0x1E384[_$_45dc[62]](_$_45dc[168],{sitename:publicSitename,discordRequest:_0x1E344,pp:_0x1E3C4,db:db,config:config})}),app[_$_45dc[35]](_$_45dc[169],checkAuth,(_0x1E344,_0x1E384)=>{_0x1E344[_$_45dc[55]][_$_45dc[170]]=== _0x1E344[_$_45dc[39]][_$_45dc[38]]&& _0x1E384[_$_45dc[40]](_$_45dc[167])});const port=4e3;app[_$_45dc[172]](4e3,()=>{console[_$_45dc[58]](_$_45dc[171])})