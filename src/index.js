/*!
 * this.
 * @author   HaoDong <ureygt@gmail.com> <http://www.haotown.cn>
 * @license  The Star And Thank Author License (SATA)
 */
import html from './html';
import Hls  from 'hls.js';
import './style.css';
html.test();

let hasClass=(elements, cName)=>{
    return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
}

let addClass=(elements, cName)=>{
    if (!hasClass(elements, cName)) {
        elements.className += " " + cName;
    }
}

let removeClass=(elements, cName)=> {
    if (hasClass(elements, cName)) {
        elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
    }
}
let $c=function(e){
	return document.querySelectorAll(e);
}

function xhr(url, method='GET', data=null) {
    return new Promise(function(res, rej) {
      try {
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function() {
          if (xhr.readyState == 4 && xhr.status == 200) {
            res(xhr.responseText)
          } else if(xhr.readyState == 4) {
            rej(xhr.status)
          }
        }
        xhr.open(method, url, true)
        xhr.send(data)
      } catch(e) {}
    })
}

window.tdvidplay=(ele,vid,coverimage,autoplay,ab)=>{
	console.log('vid:'+vid);
	ele.style.backgroundColor="#000000";
	let damuurl=`https://t5.haotown.cn/acfun/danmu/?vid=${vid}`;
	let videourl=`https://t5.haotown.cn/pyapi/vid/${vid}`;
	let videosrcarr=[],danmudata,f1,f2;
	let e = document.createElement("div");
	let acflash=document.querySelector('section.player #player object')||document.querySelector('section.player #player #ACFlashPlayer')
	if (acflash) {
		acflash.style.display='none';
		e.style.height=acflash.style.height;
		e.style.backgroundColor="#000000"
	}
	e.className = "tp-loding";
    if(!coverimage){
        try{
            if(pageInfo.coverImage){
                coverimage=pageInfo.coverImage
            }
        }
        catch(e){coverimage='https://ooo.0o0.ooo/2017/06/28/5953b4aecd49a.png'}    
    }
	let backimg = document.createElement("div")
    backimg.className = "tp-img-back"
    backimg.style.backgroundImage="url("+coverimage+")"
    ele.appendChild(backimg)
	ele.appendChild(e)
    let lodingimg=document.createElement("div")
    let lodingimgwarp=document.createElement("div")
    lodingimgwarp.className='tp-loding-img-warp tp-acenter'
    let imgid=Math.round(Math.random()*55)
    if (imgid==0) {imgid='01'}else if (imgid<10) {imgid='0'+imgid}
    lodingimg.style.backgroundImage=`url(http://cdn.aixifan.com/dotnet/20130418/umeditor/dialogs/emotion/images/ac2/${imgid}.gif)`
    lodingimg.className='tp-loding-img'
    let lodingtext=document.createElement("div")
    lodingtext.className='tp-loding-text'
    lodingtext.innerText = "正在加载中..."
    lodingimgwarp.appendChild(lodingimg)
    e.appendChild(lodingimgwarp)
    e.appendChild(lodingtext)
    getvideourl(videourl);
    function getvideourl(u){
    	xhr(u).then(t=>JSON.parse(t))
	  .then(function(t){getvideourl2(t)})
    }
	function getvideourl2(json){
			let vobj=new Object
			let vv
			if(!json.stream){
				 urleero()
			}else{
			  for (let i = 0; i < json.stream.length; i++) {
				if(json.stream[i].stream_type=='m3u8_hd3'){
					vobj.v1=json.stream[i]
					vobj.v1.v=1;
               }else if(json.stream[i].stream_type=='m3u8_hd'){
					vobj.v2=json.stream[i]
					vobj.v2.v=2;
				}else if(json.stream[i].stream_type=='m3u8_mp4'){
					vobj.v3=json.stream[i]
					vobj.v3.v=3;
				}else  if(json.stream[i].stream_type=='m3u8_flv'){
					vobj.v4=json.stream[i]
					vobj.v4.v=4;
				}
			}
			if(vobj.v1||vobj.v2||vobj.v3||vobj.v4){
				videosrcarr.push(vobj)
				f1=true;
				checkend();
			}else{
                if(document.querySelector(".noflash-alert")){
                    document.querySelector(".noflash-alert").style.display="block";
                }
				try{
					$c('object')[0].style.display='block'
					e.style.display='none'
					$.info.error('替换失败 本视频不支持')
					backimg.style.display='none'
					acflash.style.display='block'
				}catch(e){
					console.log('本视频不支持')
				}
			}
		}

	}
	function urleero(){
		console.log("失败 API超时 ")
		lodingtext.innerText = "解析失败... 等待重试"
		setTimeout(function(){getvideourl(videourl)},5000)
	}
	function getdanmu(){
		xhr(damuurl).then(t=>JSON.parse(t))
		  .then(function(data){ 
		  	danmudata=JSON.stringify(data)
		  	f2=true
		  	console.log(data)
		  	checkend()
		 })
	}
	
	 try{
	 	getdanmu()
	 }catch(e){
	 	if(e.code==500||e==500){
	 		setTimeout(function(){getdanmu()},5000)
	 	}
	 }
	  	
	
	function checkend(){
		if (f1&&f2) {
			//Element,src,,poster,videotype,autoplay)
			//ele,,danmudata,coverimage,,autoplay
		 	new Tdplayer({
		 		Element:ele,
		 		video:{
		 			url:videosrcarr,
		 			pic:coverimage,
		 			type:'hls',
		 			autoplay:autoplay
		 		},
		 		danmaku:danmudata,
		 		ab:ab
		 	});
		 }
	}
}
window.tdyoukuplay=(option)=>{
	function $c(e){
	    return ele.querySelectorAll(e);
	}
	//ele 元素
	//ab 是否为番剧
	//option.danmakuid 弹幕id
	//youkuid 优酷视频id
	//pic 图片
    option.ele.innerHTML = null;
    option.ele.style.backgroundColor="#000000";
	console.log('danmakuid:'+option.danmakuid+' youkuid:'+option.youkuid);
	
	let e=option.ele.querySelector(".tp-loding");
	if(!e){
		e = document.createElement("div");
		e.className = "tp-loding";
		let backimg = document.createElement("div");
		backimg.className = "tp-img-back";
		backimg.style.backgroundImage="url("+option.pic+")";
	    option.ele.appendChild(backimg);
		option.ele.appendChild(e);
		e.innerText += "正在加载中...";
	}
	xhr("https://t5.haotown.cn/acfun/danmu/?vid="+option.danmakuid).then(t=>JSON.parse(t)).then(
		function(json){
			e.innerText += "\n获取视频弹幕信息成功..";
            e.innerText +="\n正在解析视频地址";
            console.log('这应该是优酷源的视频');
            let data=json;
            xhr("https://t5.haotown.cn/youku/api/?youku=" + option.youkuid).then(t=>JSON.parse(t)).then(
            		function(t){
            			console.log('优酷视频地址解析成功');
            			let c = t.data;
            			for (let i=0;i<c.data.stream.length;i++) {
		                        if(c.data.stream[i].stream_type=='mp4hd'){
									let arr=new Array;
									for(let x=0;x<c.data.stream[i].segs.length;x++)
									{
										arr.push(c.data.stream[i].segs[x].cdn_url)
									}
									console.log(arr)
									console.log(data)
									new Tdplayer({
								 		Element:option.ele,
								 		video:{
								 			url:arr,
								 			pic:option.pic
								 		},
								 		danmaku:JSON.stringify(data),
								 		ab:option.ab
								 	});
									break
								}
		                }
            			
            		}
            		
            	)	
            
		}
	)     
}


class Tdplayer{
  constructor(options){
  	
  	if(options.ab){
		console.log("番剧")
	}
  	this.options=options;
  	let _this=this;
  	this.warp = this.options.Element
    this.data=this.options.danmaku
    this.nowdata = JSON.parse(this.data).danmu
    this.vloop=false
    this.nowduan = 0
    this.v = html.main()
  	this.warp.innerHTML=this.v
  	this.bar=false;
	this.ele={
		"tdplayer":$c(".tdplayer")[0],
		"tdplayer_main":$c(".tp-video-main")[0],
		"danmu_switch":$c(".tp-danmu-switch")[0],
		"tp_text":$c(".tp-text")[0],
		"tp_up":$c(".tp-up")[0],
		"tp_color_bo":$c(".tp-color-bo")[0],
		"video_control_play":$c(".tp-control-play")[0],
		"tp_oneplay":$c(".tp-oneplay")[0],
		"danmu_warp":$c(".danmu-warp")[0],
		"video_con":$c(".tp-video-con")[0],
		"video_control_paused":$c(".tp-control-paused")[0],
		"tp_s_w":$c(".tp-s-tranger")[0],
		"tp_s":$c(".tp-s-tranger-a")[0],
		"alltime":$c(".tp-control-alltime")[0],
		"tranger_a":$c(".tp-tranger-a")[0],
		"tranger_c":$c(".tp-tranger-c")[0],
		"nowtime":$c(".tp-control-nowtime")[0],
		"tp_spinner":$c(".tp-spinner")[0],
		"full":$c(".video-full")[0],
		"tp_con":$c(".tp-con")[0],
		"tp_color_warp":$c(".tp-color-warp")[0],
		"tp_place":$c(".tp-place")[0],
		"tp_send":$c(".tp-send")[0],
		"tranger":$c(".tp-tranger")[0],
		"tp_speend_con":$c(".tp-speend-con")[0],
		"tp_speend":$c(".tp-speend")[0],
		"tp_video_warp":$c(".tp-video-warp")[0],
		"tp_rightmenu":$c(".tp-rightmenu")[0],
		"end":$c(".video-end")[0],
		"replay":$c(".replay")[0],
		"copy":$c(".tp-copy-warp")[0],
		"copytext":$c(".tp-copy-input")[0],
		"css":$c(".css")[0],
		"alltime_phone":$c(".tp-control-alltime-phone")[0],
		"vloop":$c('.tp-vloop')[0],
		"setbox":$c('.tp-video-set')[0],
		"setclose":$c('.tp-closeset')[0],
		"setbtn":$c('.tp-set')[0],
		"setr1":$c(".tp-s-r1")[0],
		"setr2":$c(".tp-s-r2")[0],
		"setr3":$c(".tp-s-r3")[0],
		"setr4":$c(".tp-s-r4")[0],
		"setr5":$c(".tp-s-r5")[0],
		"setr6":$c(".tp-s-r6")[0],
		"setr7":$c(".tp-s-r7")[0],
		"setr8":$c(".tp-s-r8")[0],
		"video_ratio":$c(".tp-ratio")[0],
		"searchuser":$c(".tp-search-user")[0],
		"alert":$c(".tp-alert")[0],
		"alert_container":$c(".tp-alert-container")[0],
		"alert_ok":$c(".tp-alert-ok")[0],
		"screenshot":$c(".tp-screenshot")[0],
		"definition":$c(".tp-definition")[0]
	}
    if (localStorage.getItem('tdconfig')&&localStorage.getItem('tdconfig')!="undefined") {
       this.config=JSON.parse(localStorage.getItem('tdconfig'))
       console.log('加载设置成功')
    }else{
        this.config=new Object()
    }
    this.changerconfig()
    //判断地址类型
    if(typeof this.options.video.url[0]=='object'){
    	let src=this.options.video.url
    	console.log('多清晰度视频');
    	let t=this.config.definition;
    	let vv,ele;
    	ele=document.createElement('ul')
   		for(let i in src[0]){ 
   			if(src[0][i].v==t){
   				vv=src[0][i]
   			}
   			let li=document.createElement('li')
   			li.v=src[0][i].v
   			li.vsrc=src[0][i].m3u8
   			li.addEventListener('click',function(){
   				console.log('清晰度切换'+this.v);
   				_this.ele.video_control_paused.onclick()
   				_this.ele.definition.querySelector('span').innerHTML=_this.Definition(this.v)
   				let time=_this.Element.currentTime
   				let hls = new Hls();
				hls.loadSource(this.vsrc);
				hls.attachMedia(_this.Element);
				hls.on(Hls.Events.MANIFEST_PARSED,function() {
					let i=true;
					_this.Element.addEventListener("canplay", function()
					  {
					  	if(i){
					  		i=false
					  		_this.tiao(time)
					  	}
					    
					  }
					);	   	
				   	_this.Element.style.display='block'
				})
   			},false);
   			li.innerHTML=_this.Definition(li.v)
   			ele.appendChild(li);
		}
   		if(!vv){
   			if(src[0].v1){
   				vv=src[0].v1
   			}else if(src[0].v2){
   				vv=src[0].v2
   			}else if(src[0].v3){
   				vv=src[0].v3
   			}else if(src[0].v4){
   				vv=src[0].v4
   			}
   		}
   		this.videosrcarr=[vv.m3u8]
   		//创建清晰度菜单
   		this.ele.definition.querySelector('span').innerHTML=_this.Definition(vv.v)
   		this.ele.definition.appendChild(ele);
   		this.ele.definition.style.display='block';
    	this.ele.definition.ul=this.ele.definition.querySelector('ul')
    	this.ele.definition.ul.style.display='none'
    	this.ele.definition.addEventListener('click',function(){
    		if(_this.ele.definition.ul.style.display=='block'){
    			_this.ele.definition.ul.style.display='none'
    		}else{
    			_this.ele.definition.ul.style.display='block'
    		}
    	})
    }else{
    	this.videosrcarr = this.options.video.url
    }
    
    
    for (let i = 0; i < this.videosrcarr.length; i++) {
        let video = document.createElement("video")
         if (this.options.video.type == "hls") {
         	console.log('这是hls视频 启动加载');
         	let hls = new Hls();
			hls.loadSource(this.videosrcarr[i]);
			hls.attachMedia(video);
			hls.on(Hls.Events.MANIFEST_PARSED,function() {
		     	console.log('可以开始加载');
		     	if(this.options.video.autoplay){
		     		this.ele.video_control_play.onclick();
//		     		if(this.options.autoplay==2){
//		     			this.ele.full.click();
//		     		}
		     	}
		  	});
        }else{
        	video.src = this.videosrcarr[i]
        }
        video.className = "tp-video"
        if (i != 0) {
            video.style.display = "none"
            video.preload = "meta"
        } else {
            video.preload = "auto"
            this.Element = video
        }
        
        this.ele.tdplayer.appendChild(video)
    }
    
    this.Element.addEventListener("canplaythrough", function()
		{
			console.log('加载完成 可以进行播放');
		}
	);
    this.videoelearr = this.ele.tdplayer.getElementsByTagName("video")
    this.videotimearr = []
    for (let i = 0; i < this.videoelearr.length; i++) {
        this.getallvideotime(this.videoelearr[i], i)
    }

    //封面
    if(this.options.video.pic){
    	this.Element.poster=this.options.video.pic
    }
    this.danmuelement = this.ele.danmu_warp
    this.sjc = 0
    this.dsq = 0
    this.leftarr = {t:[],v:[],out:[],w:[]}
    this.toparr = []
    this.dmheight = 37
    this.dmplace = 1
   	if (/android/i.test(navigator.userAgent) || /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        this.phone = true
        this.ele.video_con.style.opacity='1'
        this.ele.video_con.style.display='none'
    }
    //弹幕行高
    this.width = this.ele.tdplayer_main.offsetWidth
    this.height =this.ele.tdplayer_main.offsetHeight
    //样式
    this.send = function(text, color, wz, me,user,size) {
        this.width = this.ele.tdplayer_main.offsetWidth
        this.height = this.ele.tdplayer_main.offsetHeight
        let dm = document.createElement("div")
        dm.user=user
	    dm.style.color = color
	    dm.style.fontSize=size+'px'
        if (me) {
            dm.style.border = "1px solid #fff"
        }
        if (wz == 1) {
            //left 弹幕
            dm.appendChild(document.createTextNode(text))
            dm.className = "danmu tp-left"
            if(this.config.danmusize){
               dm.style.transform = "translateX(-" + this.width/this.config.danmusize + "px)" 
            }else{
                dm.style.transform = "translateX(-" + this.width + "px)"
            }
            this.ele.danmu_warp.appendChild(dm)
            let time = this.width / 100
            let v=(dm.offsetWidth+this.width)/time
            let outt=dm.offsetWidth/v
            let dtop=this.getlefttop(v,dm.offsetWidth)
            setTimeout(function(){
                _this.leftarr.out[dtop]=false
            },outt*1000)
            dm.style.top = dtop * this.dmheight + "px"
            dm.addEventListener("webkitAnimationEnd",function(){_this.dmend(dm)})
            dm.addEventListener("animationend",function(){_this.dmend(dm)})
        } else if (wz == 2) {
            //顶部弹幕
            dm.appendChild(document.createTextNode(text))
	        
            dm.className = "danmu tp-top"
            let dtop = this.gettoptop()
            dm.style.top = dtop * this.dmheight + "px"
            this.toparr[dtop] = 1
            let e = this.ele.danmu_warp.appendChild(dm)
            setTimeout(function() {
                _this.danmuhide(e, dtop)
            }, 5e3)
        }else if(wz==7){
        	console.log('高级弹幕');
        	let tj=JSON.parse(text);
        	console.log(tj)
        	//高级弹幕 test 
        	//{"e":0.52,"w":{"b":false,"l":[[1,16777215,1,2.7,2.7,5,3,false,false],[2,0,0,16777215,0.5,32,32,2,2,false,false,false]],"f":"黑体"},"l":5.551115123125783e-17,"f":0.52,"z":[{"t":0,"g":0.8,"l":0.2,"y":930,"f":0.8},{"t":1,"g":0.52,"l":0.2,"y":940,"f":0.52},{"l":1.3099999999999998},{"c":16776960,"x":-2,"t":0,"l":0.3,"v":2}],"t":0,"a":0,"n":"但是那样不行哦","ver":2,"b":false,"c":3,"p":{"x":35,"y":950},"ovph":false}
        	 dm.className = "danmu danmu-ad";
        	 if(tj.w){
        	 	dm.style.fontFamily=tj.w.f;
        	 }
        	 if(tj.n){
        	 	dm.appendChild(document.createTextNode(tj.n))
        	 }
        	 if(tj.p){
        	 	dm.style.right=(1000-tj.p.x)/10+'%';
        	 	dm.style.bottom=(1000-tj.p.y)/10+'%';
        	 }
        	 if(tj.a){
        	 	dm.style.opacity=tj.a;
        	 }
        	 let e = this.ele.danmu_warp.appendChild(dm);
        	 
        	 if(!tj.l||tj.l.toFixed(2)==0){
        	 	//时间如果为0
        	 	if(tj.z){
        	 		
        	 	}
        	 	tj.l=2;
        	 	console.log('22222222')
        	 }
        	
        	 setTimeout(function(){
        	 	 _this.danmuhide(e)
        	 },tj.l*1000)
        }
    }
   

    //重播
    this.ele.replay.addEventListener("click", function() {
        _this.tiao(0)
        this.ele.end.style.display = "none"
    });
    

    //播放完成
    for (let arg=0;arg<this.videoelearr.length;arg++) {
			this.videoelearr[arg].onended=function(){
				 if(_this.videoelearr[arg+1]){
				 	_this.nowduan=arg+1;
				 	let oldele = _this.videoelearr[arg];
	                let nowele = _this.videoelearr[arg+1];
				 	for (let i = 0; i < _this.videoelearr.length; i++) {
	                    if (i != _this.nowduan) {
	                        let ele = _this.videoelearr[i];
	                        if (ele.style.display != "none") {
	                            ele.style.display = "none";
	                        }
	                        ele.currentTime = 0;
	                        ele.pause();
	                    } else {
	                        let ele = _this.videoelearr[i];
	                        _this.Element = ele;
	                        ele.style.display = "block";
	                        ele.currentTime = 0;
	                        ele.play();
	                    }
				 	}
				 	_this.changersound()
				 }else{
				 	console.log("播放完毕"+arg)
                    if (_this.vloop) {
                        __this.tiao(0)
                    }else{
                        _this.ele.end.style.display = 'block'
                        _this.leftarr={t:[],v:[],out:[],w:[]}
                        _this.toparr = []
                        let arr=$c('.danmu')
                        for (let i = arr.length - 1; i >= 0; i--) {
                            arr[i].parentNode.removeChild(arr[i])
                        }
                       
                        if(_this.options.ab){
                        	console.log("番剧下一段")
                        	let nowi;
                        	let t=document.querySelectorAll('.digitized>li');
                        	let nowt=document.querySelector('.digitized>li.play');
                        	for (let i = 0; i < t.length; i++) {
                        		if(t[i]==nowt){
                        			nowi=i;
                        			continue;
                        		}
                        	}
                        	console.log("当前段"+nowi)
                        	let data;
                        	xhr("http://www.acfun.cn/album/abm/bangumis/video?albumId="+pageInfo.album.id)
                        	.then(tt=>JSON.parse(tt))
	  						.then(function(tt){
	  							console.log("解析所有段完成")
	  							data=tt
	  							console.log(data)
	  							console.log(t[nowi+1])
	  							if(t[nowi+1]){
								_this.nextvideo(function(){
									t[nowi].className=''
									t[nowi+1].className='play'
									console.log("播放下一段")
								    tdvidplay(document.querySelector('#player'),data.data.content[nowi+1].videos[0].danmakuId,null,true,_this.options.ab)			
								 })
                        		}
	  						
	  						})

                        }else{
                        	try{
	                        	let t=$c('.part-wrap>.scroll-div>a');
	                        	let nowi;
	                        	for (let i = 0; i <t.length; i++) {
	                        		if(hasClass(t[i],'active')){
	                        			nowi=i;
	                        			continue;
	                        		}
	                        	}
	                    		if(pageInfo.videoList[nowi+1]){
	                    			_this.nextvideo(function(){
	                    			let info=document.querySelector('#pageInfo');
	                    			let e=$c('.scroll-div .active')[0];
	                    			addClass($c('.scroll-div .active+a')[0],'active');
	                    			removeClass(e,'active')
	                    			tdvidplay(document.querySelector('#player'),pageInfo.videoList[nowi+1].id,info.getAttribute("data-pic"),true)
	                    			})
	                    		}
                        	}catch(e){console.log(e)}
                        }
                        
                    }
				 }
			}
		
    }
  
    //弹幕开关
    this.ele.danmu_switch.addEventListener("click", function() {
        if (this.className == "tp-danmu-switch") {
            this.className = "tp-danmu-switch tp-danmu-switch-c";
            _this.ele.danmu_warp.style.opacity=0;
        } else {
            this.className = "tp-danmu-switch";
            _this.ele.danmu_warp.style.opacity=null;
        }
    });


    this.ele.setr5.onclick=function(){
        if (this.checked) {
            if(_this.removaldata){
                _this.nowdata=_this.removaldata
            }else{
               _this.removaldanmu()
            }
            _this.config.qc=true
        }else{
            _this.nowdata = JSON.parse(_this.data).danmu;
            _this.config.qc=false
        }
        localStorage.setItem('tdconfig', JSON.stringify(this.config))
    }
    this.ele.setr6.onclick=function(){
        if (this.checked) {
            _this.shielddanmu()
            _this.config.pb=true
        }else{
            _this.nowdata = JSON.parse(_this.data).danmu;
            _this.config.pb=false
        }
        _this.config.pbs=_this.ele.setr7.value
        localStorage.setItem('tdconfig', JSON.stringify(_this.config))
    }
    this.ele.setr7.addEventListener('keydown',function(event){
        let e = event || window.event || arguments.callee.caller.arguments[0];
        if (e.keyCode) {
            e.stopPropagation();
        }
    });
    this.ele.setr7.onchange=function(){
        if (this.ele.setr6.checked) {
            _this.shielddanmu()   
        }
    }
    this.ele.setr8.onchange=function(){
    	const t=this.selectedIndex+1
    	_this.config.definition=t
    }
    this.ele.setr7.value=_this.config.pbs
    if (this.config.qc) {
        this.ele.setr5.click()
    } 
    if (this.config.pb) {
        this.ele.setr6.click()
    }
    if (this.config.danmuo) {
        this.ele.setr1.value=this.config.danmuo*100;
    }
    if (this.config.danmusize) {
        this.ele.setr2.value=this.config.danmusize*50;
    }
    if (this.config.dmweight!=400) {
        this.ele.setr3.checked=true
    }
    if (this.config.dmshadow==0) {
        this.ele.setr4.checked=true
    }
    if(this.config.definition){
    	this.ele.setr8.value=_this.Definition(this.config.definition)
    }
    


    this.ele.setr1.onchange=_this.changerset.bind(_this);
    this.ele.setr2.onchange=_this.changerset.bind(_this);
    this.ele.setclose.addEventListener('click',function(){
        _this.changerset.bind(_this)
        addClass(_this.ele.setbox,'tp-zoomoutdown');
        setTimeout(function(){
            _this.ele.setbox.style.display='none'
            removeClass(_this.ele.setbox,'tp-zoomoutdown')
        },480);
    },false);
    this.ele.setbtn.addEventListener('click',function(){
        if (_this.ele.setbox.style.display!='block') {
            _this.ele.setbox.style.display='block'
            addClass(_this.ele.setbox,'tp-zoomoutup');
            setTimeout(function(){
               _this.ele.setbox.className='tp-video-set';
            },480);
        }else if(_this.ele.setbox.className=='tp-video-set'){
            _this.ele.setclose.click();
        }
    },false);
    this.ele.setr3.onclick=function(){
        if (this.checked) {
             _this.config.dmweight=600
        }else{
             _this.config.dmweight=400
        }
        _this.changerconfig();
    }
    this.ele.setr4.onclick=function(){
        if (this.checked) {
            _this.config.dmshadow=0;
        }else{
             _this.config.dmshadow=2
        }
        _this.changerconfig();
    }
 

    //视频播放
    this.ele.video_control_play.onclick = function() {
        addClass(_this.ele.tp_oneplay,'tp-zoomoutdown');
        if (_this.dsq == 0) {
            _this.Interval = setInterval(function(){
            	this.danmutime();
            }.bind(_this), 100);
            _this.dsq = 1;
        }
        if(!_this.phone){
         _this.ele.video_con.style.opacity = "0";
        }
        let e = _this.ele.danmu_warp.getElementsByTagName("div");
        this.style.display = "none";
        _this.ele.video_control_paused.style.display = "inline-block";
        _this.Element.play();
        for (let i = e.length - 1; i >= 0; i--) {
            removeClass(e[i], "tp-suspend");
        }
    };
    this.ele.tp_oneplay.addEventListener("animationend", function(){
            removeClass(this,'tp-zoomoutdown')
            this.style.display='none'
    }, false)
    this.ele.tp_oneplay.addEventListener("webkitAnimationEnd", function(){
            removeClass(this,'tp-zoomoutdown')
            this.style.display='none'
    }, false)
    //视频暂停
    this.ele.video_control_paused.onclick = function() {
        clearInterval(this.Interval);
        _this.dsq = 0;
        let e = _this.ele.danmu_warp.getElementsByTagName("div");
        this.style.display = "none"
        _this.ele.video_control_play.style.display = "inline-block"
        _this.Element.pause();
        for (let i = e.length - 1; i >= 0; i--) {
            addClass(e[i], "tp-suspend")
        }
        _this.ele.tp_spinner.style.display = "none";
    };
    this.ele.tp_oneplay.addEventListener("click", function() {
        addClass(this,'tp-zoomoutdown')
        _this.ele.video_control_play.onclick()
    });
    //鼠标隐藏
	this.ele.danmu_warp.addEventListener('mousemove',function(){
		if(this.time){clearTimeout(this.time)}
		_this.ele.danmu_warp.style.cursor='auto';
		this.time=setTimeout(function(){
			_this.ele.danmu_warp.style.cursor='none';
		},3000)
	})
    //控件显示
    if (this.phone) {
        this.ele.danmu_warp.addEventListener("click", function() {
            let e = this.ele.video_con;
            if (e.style.display == "block") {
                e.style.display = "none"
            } else {
                e.style.display = "block";
            }
        });
    } else {
    	let ele=this.ele.video_con.childNodes;
    	for (var i = 0; i < ele.length; i++) {
    		ele[i].addEventListener('mousemove',function(){
	        	_this.showbar();
        	})
    	}
    	this.ele.video_con.addEventListener('mousemove',function(){
	        _this.showbar();
        })
        
    }
    
    this.ele.alert_ok.addEventListener('click',function(){
        _this.ele.alert.style.display='none'
    },false)
    this.ele.screenshot.addEventListener('click',function(){
        _this.ele.tp_rightmenu.style.display='none'
        _this.screenshot()
    },false)
    
    this.sound = this.config.sound;
    if (this.sound) {
        this.ele.tp_s.style.width = this.sound+"%";
        this.Element.volume = parseInt(this.ele.tp_s.style.width) * .01;
    } else {
         this.ele.tp_s.style.width = "80%";
        this.changersound();
    }
    //循环按钮
    this.ele.vloop.onclick=function(){
        if (_this.vloop) {
             _this.vloop=false
            this.className='tp-vloop tp-vloop1'
        }else{
             _this.vloop=true
            this.className='tp-vloop tp-vloop2'
        }
    }
    //音量调节
   this.ele.tp_s_w.addEventListener("click", function(event) {
        let e = event || window.event || arguments.callee.caller.arguments[0];
        let xbl = _this.show_coords(e, this).xbl * 100;
         _this.ele.tp_s.style.width = xbl + "%";
         _this.changersound();
    }, false);

    //行走器
    this.Element.addEventListener('timeupdate',function(){
    	let videotime = _this.getnowtime();
        let smalltime = _this.Element.currentTime;
        _this.ele.tranger_a.style.width = videotime / _this.alltime * 100 + "%";
        let buff = _this.Element.buffered;
        //判断缓存段
        let oldduan = _this.nowduan - 1, oldtime = 0, time2 = 0;
        for (let i = 0; i <= oldduan; i++) {
            oldtime += _this.videotimearr[i];
        }
        if(buff.length){
        	time2 = oldtime + buff.end(buff.length - 1);
        }
        let width = time2 / _this.alltime * 100 + "%";
        if (_this.ele.tranger_c.style.width != width) {
            _this.ele.tranger_c.style.width = width;
        }
    },false)
   
    
    //定时器二 1s执行一次
    setInterval(function() {
    	let videotime=_this.getnowtime(videotime);
        //当前段播放将要结束 缓存下一段
        let temp = _this.videoelearr[_this.nowduan].currentTime;
        if (temp + 20 >= _this.videotimearr[_this.nowduan]) {
            if (_this.videoelearr[_this.nowduan + 1]) {
            	if (_this.videoelearr[_this.nowduan + 1].preload != "auto") {
	                _this.videoelearr[_this.nowduan + 1].preload = "auto";
	                console.log("当前正在播放第" + _this.nowduan + "段，正在加载下一段");
	            }
            }
        }
        _this.ele.nowtime.innerHTML = _this.getvideotime(videotime).m + ":" + _this.getvideotime(videotime).s;
        let t = _this.ele.tp_send.offsetWidth - 280 + "px";
        if (_this.ele.tp_text.style.width != t) {
            _this.ele.tp_text.style.width = t;
        }
    }, 1e3);
    

    //进度条
    this.ele.tranger.onmousedown = function(event) {
        let e = event || window.event || arguments.callee.caller.arguments[0];
        let xbl = _this.show_coords(e, this);
        _this.ele.tranger_a.style.width = xbl.xbl * 100 + "%";
        _this.tiao(xbl.xbl * _this.alltime);
    };

    for (let i = 0; i < this.videoelearr.length; i++) {
        this.videoelearr[i].addEventListener("waiting", function() {
            _this.videohc();
        });
        this.videoelearr[i].addEventListener("playing", function() {
            _this.tdplay();
        });
    }

    //键盘
    this.ele.tp_video_warp.addEventListener('click',function(){
         setTimeout(function(){ _this.ele.tp_video_warp.xz=true;},200);
    }, false);
    document.addEventListener('click', function(e){
         if (e.target==_this.ele.danmu_warp) {
            _this.ele.tp_video_warp.xz=true
         }else{
            _this.ele.tp_video_warp.xz=false
         }
    }, false);
    document.addEventListener("keydown", function(event) {
        let ev = event || window.event || arguments.callee.caller.arguments[0];
         if(_this.ele.tp_video_warp.xz==true){
	        _this.showbar();
	        if(ev.keyCode==39||37){
	        	if(_this.ele.end.style.display=="block"){
    				_this.ele.end.style.display="none"
    			}
	        }
	        if (ev && ev.keyCode == 39) {
	            // right 键
	            let videotime = _this.getnowtime();
	            _this.tiao(videotime + 5);
	        }
	        if (ev && ev.keyCode == 37) {
	            // left 键
	            let videotime = _this.getnowtime();
	            _this.tiao(videotime - 5);
	        }
	        if (ev && ev.keyCode == 32) {
	            // space 键
	              event.preventDefault();
                if(_this.ele.end.style.display=="block"){
                    _this.ele.end.style.display="none"
                    _this.tiao(0)
                }else if (_this.Element.paused) {
	                _this.ele.video_control_play.onclick();
	            } else {
	                _this.ele.video_control_paused.onclick();
	            }
	        }
	        if (ev && ev.keyCode == 38) {
	            // up 键
	            event.preventDefault();
	            _this.ele.tp_s.style.width = parseInt(_this.ele.tp_s.style.width) + 1 + "%";
                _this.changersound();
	        }
	        if (ev && ev.keyCode == 40) {
	            // down 键
	            event.preventDefault();
	            _this.ele.tp_s.style.width = parseInt(_this.ele.tp_s.style.width) - 1 + "%";
                _this.changersound();
	        }
	    }
    });
    
    this.ele.full.addEventListener("click", function() {
        let e = _this.ele.tp_video_warp;
        document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() :document.mozCancelFullScreen ? document.mozCancelFullScreen() :document.webkitCancelFullScreen && document.webkitCancelFullScreen() :e.requestFullscreen ? e.requestFullscreen() :e.mozRequestFullScreen ? e.mozRequestFullScreen() :e.webkitRequestFullscreen && e.webkitRequestFullscreen();
        setTimeout(function() {
            _this.width = _this.ele.tdplayer_main.offsetWidth;
            let e = _this.ele.danmu_warp.getElementsByTagName("div");
            _this.dmspeend(_this.width / 100);
            for (let i = 0; i < e.length; i++) {
                if (hasClass(e[i], "tp-left")) {
                    e[i].style.transform = "translateX(-" + _this.width + "px)";
                }
            }
        }, 1e3);
    });
   
    //颜色
    let tpcolor = new Object();
    tpcolor.arr = new Array("#FFFFFF", "#000000", "#4ab0c6", "#555656", "#09b745", "#f86141", "#FFEB3B", "#4d38d8", "#fe67c1", "#ff9c07");
    for (let r = 255; r >= 0; r -= 25) {
        for (let g = 0; g <= 255; g += 25) {
            for (let b = 0; b <= 255; b += 25) {
                tpcolor.arr.push("rgb(" + r + "," + g + "," + b + ")");
            }
        }
    }
    let danmucon = this.ele.tp_con;
    let colorwarp = this.ele.tp_color_warp;
    this.ele.tp_color_bo.addEventListener("click", function() {
        if (danmucon.style.display == "block") {
            danmucon.style.display = "none";
        } else {
            danmucon.style.display = "block";
        }
    });
    for (tpcolor.i = 0; tpcolor.i < tpcolor.arr.length; tpcolor.i++) {
        let colormain = document.createElement("div");
        colormain.className = "tp-color";
        let color = document.createElement("div");
        color.className = "tp-color-main";
        color.style.background = tpcolor.arr[tpcolor.i];
        color.addEventListener("click", function() {
            _this.ele.tp_color_bo.style.backgroundColor = this.style.background;
        });
        colormain.appendChild(color);
        colorwarp.appendChild(colormain);
    }
    //设置
    //视频速度设置
    this.ele.tp_speend_con.addEventListener("click", function() {
        let t = _this.ele.tp_speend;
        if (t.style.display == "block") {
            t.style.display = "none";
        } else {
            t.style.display = "block";
        }
    });
    let videospeendele = this.ele.tp_speend.childNodes;
    for (let i = 0; i < videospeendele.length; i++) {
        let e = videospeendele[i];
        let s = parseFloat(videospeendele[i].innerText).toFixed(2);
        if (s != "NaN") {
            e.onclick = function() {
                let t = parseFloat(this.innerText).toFixed(2);
                for (let i=0;i<_this.videoelearr.length;i++) {
                	_this.videoelearr[i].playbackRate = t;
                }
            };
        } else {
            e.onclick = function() {
                for (let i=0;i<_this.videoelearr.length;i++) {
                	_this.videoelearr[i].playbackRate = 1;
                }
            };
        }
    }
    //视频比例设置
    this.ele.video_ratio.ratio=1;
    this.ele.video_ratio.addEventListener('click',function(){
        if(this.ratio==1){
            this.ratio=2
            _this.ele.tdplayer.style.transform=`scale(1,0.892)`
            _this.ele.tdplayer.style.webkitTransform=`scale(1,0.892)`
            this.innerText=`视频比例 4:3`
        }else if(this.ratio==2){
            this.ratio=3
            _this.ele.tdplayer.style.transform=`scale(0.841,1)`
            _this.ele.tdplayer.style.webkitTransform=`scale(0.841,1)`
            this.innerText=`视频比例 16:9`
        }else if(this.ratio==3){
            this.ratio=4
            this.innerText=`视频比例 全屏`
            _this.ele.tdplayer.style.transform=`none`
            _this.ele.tdplayer.style.webkitTransform=`none`
            for (let i = 0; i < _this.videoelearr.length; i++) {
                _this.videoelearr[i].style.height='auto';
                _this.videoelearr[i].style.width='auto';
                _this.videoelearr[i].className="";
            }
            setTimeout(function(){
                let w1= _this.ele.tdplayer.offsetWidth
                let w2= _this.videoelearr[0].offsetWidth
                let h1= _this.ele.tdplayer.offsetHeight
                let h2= _this.videoelearr[0].offsetHeight
                _this.ele.tdplayer.style.transform=`scale(${w1/w2},${h1/h2})`
                _this.ele.tdplayer.style.webkitTransform=`scale(${w1/w2},${h1/h2})`
                _this.ele.tdplayer.style.transformOrigin= 'left top'
                _this.ele.tdplayer.style.webkitTransformOrigin='left top'
            },0);
        }else{
            for (let i = 0; i < _this.videoelearr.length; i++) {
                _this.videoelearr[i].style.height='100%';
                _this.videoelearr[i].style.width='100%';
                _this.videoelearr[i].className=".tp-video";
                _this.ele.tdplayer.style.webkitTransformOrigin='center'
            }
            this.ratio=1
            this.innerText=`视频比例 默认`
            _this.ele.tdplayer.style.transform=`none`
            _this.ele.tdplayer.style.webkitTransform=`none`
        }
        

    })

    document.addEventListener('webkitfullscreenchange',function(c){
    	if(document.webkitFullscreenElement){
    		console.log('进入全屏')
            _this.joinfull()
    	}else{
    		console.log('退出全屏')
			_this.tpeixtfull()
    	}
    	
    });
    document.addEventListener('mozfullscreenchange',function(c){
    	if(document.mozFullscreenElement){
    		console.log('进入全屏')
            _this.joinfull()
    	}else{
    		console.log('退出全屏')
    		_this.tpeixtfull()
    	}
    	
    });

    this.ele.danmu_warp.onmousedown=function(event){
         let ev = event || window.event || arguments.callee.caller.arguments[0];
            if (ev.button == 0) {
                //如果左按键
                if (_this.ele.tp_rightmenu.style.display == "block") {
                    _this.ele.tp_rightmenu.style.display = "none";
                } else {
                    //视频暂停
                    if (_this.Element.paused) {
                        _this.ele.video_control_play.onclick();
                    } else {
                        _this.ele.video_control_paused.onclick();
                    }
                }
            }
    }
   
    //
    this.ele.danmu_warp.oncontextmenu = function(event){
        let ev = event || window.event || arguments.callee.caller.arguments[0];
        _this.tp_menu(ev)
        return false
    }
    this.ele.danmu_warp.contextmenu=function(event){
        let ev = event || window.event || arguments.callee.caller.arguments[0];
        _this.tp_menu(ev)
        return false
    }
    

    this.ele.tp_place.addEventListener("click", function() {
        if (this.dmplace == 1) {
            this.dmplace = 2;
            this.innerText = "▲顶部弹幕";
        } else {
            this.dmplace = 1;
            this.innerText = "◀滚动弹幕";
        }
    });
 

    let thisurl=window.location.href;
    if(thisurl.indexOf("acfun.cn") < 0||thisurl.indexOf("acfun.tv") < 0||thisurl.indexOf("aixifan.com") < 0){
    	//if(!this.options.ab){
    		this.chadown();
    	//}

    	this.editor32();
    }
    
	
    this.dmspeend(this.width / 100);

	 
	 
	 
  }
  //函數
      //弹幕速度
     dmspeend(v) {
    	console.log('弹幕速度调整为'+v);
        this.config.v=v;
        this.changerconfig();
    }
    joinfull(){
        this.ele.video_ratio.ratio=4;
        this.ele.video_ratio.click();
    }
    changerconfig(){
    	//默认清晰度
    	this.config.definition=this.config.definition||1
        this.config.v=this.config.v||this.width / 100
        this.config.danmusize=this.config.danmusize||1
        this.config.danmuo=this.config.danmuo||1
        this.config.dmweight=this.config.dmweight||600
        this.config.sound=this.config.sound||80
        this.config.pbs=this.config.pbs||'笑容我来守护,隔壁难民'
        1!=this.config.qc&&(this.config.qc=!1);
        1!=this.config.pb&&(this.config.pb=!1);
        0!=this.config.dmshadow&&(this.config.dmshadow=3);
        let shadow='';
        if(this.config.dmshadow){
        	shadow=`text-shadow: rgb(0, 0, 0) 1px 0px 1px, rgb(0, 0, 0) 0px 1px 1px, rgb(0, 0, 0) 0px -1px 1px, rgb(0, 0, 0) -1px 0px 1px;`
        }
        this.ele.css.innerText = `
        .tp-left {animation: dmleft  ${this.config.v}s linear;-webkit-animation: dmleft ${this.config.v}s linear;}
        .danmu-warp{font-weight:${this.config.dmweight};transform:scale(${this.config.danmusize});-webkit-transform:scale(${this.config.danmusize});-moz-transform:scale(${this.config.danmusize});width:${100/this.config.danmusize}%;height:${100/this.config.danmusize}%;opacity:${this.config.danmuo}}
        .tp-video-main>.danmu-warp>.danmu{${shadow}}`;
        let earr= $c('.tp-left');
        for (let i = 0; i < earr.length; i++) {
            earr[i].style.transform = "translateX(-" + this.width/this.config.danmusize + "px)";
        }
        localStorage.setItem('tdconfig', JSON.stringify(this.config))      
    }
    	//下一段提示
	nextvideo(callback){
		console.log('视频存在下一段')
		let e=document.createElement('div')
		e.className='tp-msg'
		
		let text=document.createElement('span')
		text.i=5;
		text.innerHTML=text.i+'秒后将播放下一段'
		
		let btn=document.createElement('span')
		btn.innerHTML='×'
		btn.className='tp-msg-close'
		btn.addEventListener('click',function(){
			btn.parentNode.parentNode.removeChild(btn.parentNode)
			if(time){clearInterval(time)}
		})
		e.appendChild(btn)
		e.appendChild(text)
		let _this=this;
		this.ele.tdplayer_main.appendChild(e)
		let time=setInterval(function(){
			if(text.i>0){
				text.i--
				text.innerHTML=text.i+'秒后将播放下一段'
			}else{
				clearInterval(time)
				console.log('播放下一段')
				let t=_this.options.Element.childNodes
				for (let i = 0; i < t.length; i++) {
					_this.options.Element.removeChild(t[i])
				}
				if (typeof callback === "function"){
		            callback()
		        }else{
		        	console.log('eero')
		        	console.log(callback)
		        }
			}
		},1000)
	}
	chadown() {
    	if($c('.vdown').length){
    		for (let i = 0; i < $c('.vdown').length; i++) {
    			$c('.vdown')[i].parentNode.removeChild($c('.vdown')[i])
    		}
    	}
	    let w = $c(".crumb")[0];
	    if(w){
	    	let span = document.createElement("span");
		    span.className = "vdown fl";
		    span.innerHTML = '<div class="fl ico" style="background: #d52c2c;"><div class="img" style="width: 36px;height: 36px;background: url(https://ooo.0o0.ooo/2017/04/20/58f83dbb3f6bb.png) no-repeat 50% 50%;background-size: 65%;"></div></div><span class="sp3 fl">下载</span><br><span class="sp4">本视频</span></div>';
		    w.insertBefore(span, w.childNodes[5]);
		    let d = document.createElement("div");
		    d.id = "vdown";
		    d.style.display = "none";
		    if (this.videosrcarr) {
		        for (let i = 0; i < this.videosrcarr.length; i++) {
		            let div = document.createElement("div");
		            div.className = "down-btn";
		            let t = i + 1;
                    div.innerHTML = '<a href="' + this.videosrcarr[i] + '" download="[' + t + "]" + document.title + '.mp4">下载' + t + "段</a>";
		            d.appendChild(div);
		        }
		        span.appendChild(d);
		        span.onmousemove = function() { if (d.style.display == "none") {d.style.display = "block"}};
		        span.onmouseout = function() { if (d.style.display == "block") { d.style.display = "none" }};
		     }
	    }
	}
	editor32(){
    	if($c('#editor')[0]){
		$c('#editor')[0].addEventListener('keydown',function(event){
			  let e = event || window.event || arguments.callee.caller.arguments[0];
			  if (e.keyCode == 32) {
	            e.stopPropagation();
	          }
		});
		}else{
			setTimeout(this.editor32.bind(this),200);
		}
    }
	getnowtime() {
        let videotime = 0;
        for (let i = 0; i <= this.nowduan - 1; i++) {
            videotime += this.videotimearr[i];
        }
//      console.log(videotime)
//      console.log(this.nowduan)
//      console.log(this.videoelearr[this.nowduan])
        videotime += this.videoelearr[this.nowduan].currentTime;
        return videotime;
    }
	getallvideotime(ele, i) {
        let time = ele.duration
        if (!time) {
            setTimeout(function() {
                this.getallvideotime(ele, i)
            }.bind(this), 500)
        } else {
            this.videotimearr[i] = time
            if (this.videotimearr[0] && this.videotimearr[this.videotimearr.length - 1]) {
                this.alltime = 0
                for (let i = 0; i < this.videotimearr.length; i++) {
                    this.alltime += this.videotimearr[i]
                }
                this.ele.alltime.innerHTML = this.getvideotime(this.alltime).m + ":" + this.getvideotime(this.alltime).s
                this.ele.alltime_phone.innerHTML ='&nbsp;/&nbsp;'+this.ele.alltime.innerHTML
            }
        }
    }
	tpeixtfull(){
    	setTimeout(function(){
    	this.width = this.ele.tdplayer.offsetWidth;
    	this.dmspeend(this.width / 100);
        let e = this.ele.danmu_warp.getElementsByTagName("div");
        for (let i = e.length - 1; i >= 0; i--) {
	        if (hasClass(e[i], "tp-left")) {
	            e[i].style.transform = "translateX(-" + this.width + "px)";
	        }
        }
        this.ele.video_ratio.ratio=4;
        this.ele.video_ratio.click();
    	}.bind(this),1000)
    }
	
	Definition(i){
    	if(i==1){
    		return '超清'
    	}else if(i==2){
    		return '高清'
    	}else if(i==3){
    		return '普通'
    	}else if(i==4){
    		return '流畅'
    	}
    }
	getvideotime(time) {
        let tm;
        let m = parseInt(time / 60);
        if (parseInt(time % 60) >= 10) {
            tm = parseInt(time % 60);
        } else {
            tm = "0" + parseInt(time % 60);
        }
        return {
            m:m,
            s:tm
        };
    }
	//屏蔽关键词弹幕
    shielddanmu(){
       let shieldarr=this.ele.setr7.value.split(",");
       let cache;
       let b=0;
       if (this.ele.setr5.checked) {
            if (!this.removaldata) {
               this.removaldanmu()
            }
            let t=JSON.parse(JSON.stringify(this.removaldata))
            cache=t
       }else{
            let t=JSON.parse(this.data).danmu
            cache=t;
       }
       
       for (let i = cache.length - 1; i >= 0; i--) {
        if (cache[i]) {
           if (cache[i].text) {
               for (let x = shieldarr.length - 1; x >= 0; x--) {
                if (cache[i]) {
                    if (cache[i].text.indexOf(shieldarr[x])>-1) {
                        delete cache[i]
                        b++
                    }
                 }  
               }
           }
        }  
       }
       this.nowdata=cache
       let elearr=$c('.danmu-warp>.danmu')
       for (let x = 0; x < elearr.length; x++) {
           for (let y = 0; y < shieldarr.length; y++) {
               if (elearr[x].innerText.indexOf(shieldarr[y])>-1) {
                    elearr[x].innerText=null;
               }
           }
       }
       console.log(shieldarr)
       console.log(`弹幕屏蔽  屏蔽${b}个弹幕`)
    }
	
	danmuhide(e, topid) {
		let _this=this;
        if (this.Element.paused) {
            setTimeout(function() {
                _this.danmuhide(e, topid)
            }, this.width * 10 + 1e3)
        } else {
            e.parentNode.removeChild(e);
            if(topid!==undefined){
            	this.toparr[topid] = 0
            }
        }
    }
	
    getlefttop(v,ww) {
        let h
        let t=this.getnowtime()
        let allt=this.width/100
        for (let i = 0; i <= this.leftarr.t.length; i++) {
            if (!this.leftarr.out[i]) {
                 if (this.leftarr.v[i]>=v) {
                       h = i;
                       break;
                    }else {
                       if (!this.leftarr.t[i]) {break}
                       //追上的时间和距离
                       let tt=this.width/100-t+this.leftarr.t[i];
                       let sz= tt*(v-this.leftarr.v[i]);
                       //间隔距离 这里-20是为了防止跟太紧
                       let so=(t-this.leftarr.t[i])*this.leftarr.v[i]-this.leftarr.w[i]-20;
                       //console.log(`${i}弹幕会在上一弹幕尾部飞行${tt}秒 速度差${v-this.leftarr.v[i]} 会追上路程 ${sz}  判断时距离 ${so}`)
                       if (sz<so) {
                            h = i;
                            break;
                       }
                    }
            }
        }
        if (typeof(h)=='undefined') {
            h=this.leftarr.t.length;
            //console.log('开辟新通道');
        }
        this.leftarr.t[h]=t;
        this.leftarr.v[h]=v;
        this.leftarr.out[h]=true;
        this.leftarr.w[h]=ww;
        return h;
    };
    gettoptop() {
        let h;
        for (let i = 0; i <= this.toparr.length; i++) {
            if (!this.toparr[i]) {
                //console.log('第'+i+'可以发射弹幕');
                h = i;
                break;
            }
        }
        return h;
    };
	
	dmend(a) {
        a.parentNode.removeChild(a)
    }
	
	    //合并重复弹幕
   removaldanmu(){
        if (this.nowdata) {
            let cache=JSON.parse(this.data).danmu;
            let b=0;
            if(cache){
            	 for (let i = cache.length - 1; i >= 0; i--) {
	                for (let a = cache.length - 1; a >= 0; a--) {
	                    if (a==i) {break}
	                    if (cache[i]&&cache[a]) {
	                        if (cache[i].text==cache[a].text) {
	                            delete cache[a];
	                            b++
	                        }
	                    }
	                }
            	}
            }
           
            this.removaldata=cache
            this.nowdata=this.removaldata
            console.log(`弹幕去重  去除${b}个重复弹幕`)
        }   
    }
	changerset(){
        let e=this.ele;
        this.config.danmuo=parseInt(e.setr1.value)/100;
        this.config.danmusize=parseInt(e.setr2.value)/50;
        this.changerconfig();
    }
	showbar() {
    	if(!this.phone){
    		if(this.bar){
	    		clearTimeout(_this.bar)
	    	}
    		if(this.ele.video_con.style.opacity!='1'){
    			this.ele.video_con.style.opacity = "1";
    		}
	        let _this=this;
	    	setTimeout(function(){
	    		_this.ele.video_con.style.opacity = "0";
	    	},3000);
        }
    	
    }

	 //定时器
    danmutime() {
    	let videotime = this.getnowtime();
        if (this.nowdata) {
            let inttime = parseInt(videotime * 10);
            for (let i = 0; i < this.nowdata.length; i++) {
                if (this.nowdata[i]) {
                    //console.log('nowtime:'+inttime);
                    if (this.nowdata[i].time == inttime) {
                        this.send(unescape(this.nowdata[i].text), this.nowdata[i].color, this.nowdata[i].place,false,this.nowdata[i].user,this.nowdata[i].size);
                        delete this.nowdata[i];
                    }
                }
            }
        }
    }
    //返回当前播放段
   getduan(time) {
        let mun = 0;
        for (let i = 0; i < this.videotimearr.length; i++) {
            mun += this.videotimearr[i];
            if (mun >= time) {
                return i;
                break;
            }
        }
    }
    tdplay() {
        if (this.ele.tp_spinner.style.display = "block") {
            if (this.dsq == 0) {
                this.Interval = setInterval(function(){this.danmutime()}.bind(this), 100);
                this.dsq = 1;
            }
            let e = this.ele.danmu_warp.getElementsByTagName("div");
            this.ele.tp_spinner.style.display = "none";
            this.ele.alltime.innerHTML = this.getvideotime(this.alltime).m + ":" +this.getvideotime(this.alltime).s;
            for (let i = e.length - 1; i >= 0; i--) {
                removeClass(e[i], "tp-suspend");
            }
        }
    }
       //获取元素的纵坐标（相对于窗口）
    getTop(e) {
        let offset = e.offsetTop;
        if (e.offsetParent != null) offset += this.getTop(e.offsetParent);
        return offset;
    }
    //获取元素的横坐标（相对于窗口）
    getLeft(e) {
        let offset = e.offsetLeft;
        if (e.offsetParent != null) offset += this.getLeft(e.offsetParent);
        return offset;
    }
    show_coords(event, elem) {
        let x = event.clientX - this.getLeft(elem);
	    let y = event.clientY - this.getTop(elem);
	    let xbl = x / elem.offsetWidth;
	    let ybl =1- y / elem.offsetHeight;
	    return {
	        x:x,
	        y:y,
	        w:elem.offsetWidth,
	        h:elem.offsetHeight,
	        xbl:xbl,
	        ybl:ybl
	    };
    }
    //视频缓冲事件
    videohc() {
        console.log("loding");
        clearInterval(this.Interval);
        this.dsq = 0;
        this.ele.tp_spinner.style.display = "block";
        let e = this.ele.danmu_warp.getElementsByTagName("div");
        for (let i = e.length - 1; i >= 0; i--) {
            addClass(e[i], "tp-suspend");
        }
    }
    alert(w,h,t){
        w=w||'auto'
        h=h||'auto'
        if (typeof t=='object') {
             this.ele.alert_container.innerHTML=null
             this.ele.alert_container.appendChild(t)
        }else{
            this.ele.alert_container.innerHTML=t 
        }
        this.ele.alert.style.display='block'
        
    }
    screenshot(){
        let c = document.createElement('canvas');
        c.width = this.ele.tdplayer.offsetWidth
        c.height = this.ele.tdplayer.offsetHeight
        c.getContext('2d').drawImage(this.videoelearr[this.nowduan], 0, 0, c.width, c.height);
        c.className='tp-screenshot-canvas'
        let warp=document.createElement("div");
        warp.innerHTML='<p>请右键保存截图</p>'
        warp.appendChild(c)
        this.alert(null,null,warp)
    }
    changersound() {
    	let s = parseInt(this.ele.tp_s.style.width) * .01;
    	for (let i=0;i<this.videoelearr.length;i++) {
           this.videoelearr[i].volume = s;
        }
        this.config.sound=s*100;
        localStorage.setItem('tdconfig', JSON.stringify(this.config))
    }
   //菜单
    tp_menu(ev) {
        let container = this.ele.tdplayer;
        let rightmenu = this.ele.tp_rightmenu;
        if (!this.phone){
                let target = ev.target || ev.srcElement;
                if (hasClass(target, "danmu")) {
                    if(target.user){
                        this.ele.searchuser.style.display='block';
                        this.ele.searchuser.innerHTML=`<a href="http://www.acfun.cn/u/${target.user}.aspx#page=1" target="_blank">查询发送者</a>`
                    }
                    this.ele.copytext.innerHTML = target.innerHTML;
                    this.ele.copy.style.display = "block";
                    this.ele.copy.onclick = function() {
                        this.ele.copytext.select();
                        document.execCommand("Copy");
                        rightmenu.style.display = "none";
                    };
                } else {
                    this.ele.copy.style.display = "none";
                    this.ele.searchuser.style.display= "none";
                }
                rightmenu.style.display = "block";
                let leftedge, topedge, danmuheight = this.ele.danmu_warp.offsetHeight, danmuwidth = this.ele.danmu_warp.offsetWidth;
                if (danmuheight == document.documentElement.clientHeight) {
                    topedge = ev.clientY;
                    leftedge = ev.clientX;
                    if (leftedge + rightmenu.offsetWidth > danmuwidth) {
                        leftedge = danmuwidth - rightmenu.offsetWidth;
                    }
                    if (topedge + rightmenu.offsetWidth > danmuheight) {
                        topedge = danmuheight - rightmenu.offsetHeight;
                    }
                } else {
                    topedge = ev.clientY + document.body.scrollTop - this.getTop(this.ele.tdplayer);
                    leftedge = ev.clientX - this.getLeft(this.ele.tdplayer);
                    let tweidth = container.offsetWidth;
                    let theigtht = container.offsetHeight;
                    if (leftedge + rightmenu.offsetWidth > tweidth) {
                        leftedge = tweidth - rightmenu.offsetWidth;
                    }
                    if (topedge + rightmenu.offsetHeight > theigtht) {
                      topedge = theigtht - rightmenu.offsetHeight;
                    }
                }
                rightmenu.style.top = topedge + "px";
                rightmenu.style.left = leftedge + "px";
            
        } 
    }
    tiao(time) {
    	
        let oldduan = this.getduan(time) - 1, oldtime = 0;
        for (let i = 0; i <= oldduan; i++) {
            oldtime += this.videotimearr[i];
        }
        let duantime = time - oldtime;
        this.nowduan = this.getduan(time);
        //video id
        for (let i = 0; i < this.videoelearr.length; i++) {
            if (i != this.nowduan) {
                let ele = this.videoelearr[i];
                ele.style.display = "none";
                ele.currentTime = 0;
                ele.pause();
            } else {
                let ele = this.videoelearr[i];
                this.Element = ele;
                if (ele.style.display!= "block") {
                    ele.style.display = "block"
                }
                ele.currentTime = duantime;
                if(ele.paused){
                    ele.play() 
                }
                this.ele.tp_spinner.style.display = "none";
            }
        }
       if(this.removaldata&&this.config.qc){
          this.nowdata=this.removaldata
          if (this.config.pb) {
            this.shielddanmu()
          }
        }else{
           this.nowdata = JSON.parse(this.data).danmu;
        }
        if (this.ele.video_control_play.display != "none") {
            this.ele.video_control_play.onclick();
        }

    }
    
	
}


window.Tdplayer=Tdplayer;

window.getvideop=function(){
	var p;
	var parr=document.querySelectorAll('.scroll-div>a')
	if(parr.length>0){
	   var e=document.querySelector('.scroll-div>a.active');
	   for (var i = 0; i < parr.length; i++) {
		   if(e==parr[i]){
		   	p=i;
		   	break
		   }
	   }
	}else{
	    p=0;
	}
	return p;
}
