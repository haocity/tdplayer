/*!
 * TDPLAYER.
 * @author   HaoDong <ureygt@gmail.com> <http://www.haotown.cn>
 * @license  The Star And Thank Author License (SATA)
 */
const html = require('./html.js');
require('./style.css');

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
window.$d=function(e){
    return document.getElementById(e);
}
window.$c=function(e){
	return document.querySelectorAll(e);
}

window.tdvidplay=(ele, vid,coverimage)=>{
	let acflash=document.querySelector('section.player #player object')||document.querySelector('section.player #player #ACFlashPlayer')
	if (acflash) {
		acflash.style.display='none';
	}
	console.log('vid:'+vid);
	let damuurl=`https://t5.haotown.cn/acfun/danmu/?vid=${vid}`;
	let videourl=`https://t5.haotown.cn/pyapi/vid/${vid}`;
	let videosrcarr=[],danmudata,f1,f2;
	let e = document.createElement("div");
	e.className = "tp-loding";
    if(!coverimage){
        if (pageInfo) {
            if(pageInfo.coverImage){
                coverimage=pageInfo.coverImage
            }
        }
    }
	let backimg = document.createElement("div");
    backimg.className = "tp-img-back";
    backimg.style.backgroundImage="url("+coverimage+")";
    ele.appendChild(backimg);
	ele.appendChild(e);
	e.innerText += "正在加载中...";
	fetch(videourl).then(response => response.json())
	  .then(function(json){
			let v1,v2,v3,vv;
			for (var i = 0; i < json.stream.length; i++) {
				if(json.stream[i].stream_type=='mp4hd3'){
					v1=json.stream[i]
				}
				if(json.stream[i].stream_type=='mp4hd2'){
					v2=json.stream[i]
				}
				if(json.stream[i].stream_type=='mp4hd'){
					v3=json.stream[i]
				}
			}
			if(v1){
				vv=v1
			}else if(v2){
				vv=v2
			}else if(v3){
				vv=v3
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
			console.log(vv);
			if (vv) {
				for (var i = 0; i < vv.segs.length; i++) {
					videosrcarr.push(vv.segs[i].url)
				}
				f1=true;
				console.log(videosrcarr);
				checkend()
			}
	  	})
	  .catch(e => console.log(" error", e))
	fetch(damuurl).then(response => response.json())
	  .then(function(data){ 
	  	danmudata=JSON.stringify(data)
	  	f2=true
	  	console.log(data)
	  	checkend()
	  })
	  .catch(e => console.log(" error", e))
	function checkend(){
		if (f1&&f2) {
		 	console.log('end')
		 	tdplayer(ele,videosrcarr,danmudata,coverimage,null);
		 }
	}
}
window.tdacplay=(ele, acid)=>{
	function $d(e){
    return ele.getElementById(e);
	}
	function $c(e){
	    return ele.querySelectorAll(e);
	}
    ele.innerHTML = null;
	console.log('acid:'+acid);
	var e=ele.querySelector(".tp-loding");
	if(!e){
		e = document.createElement("div");
		e.className = "tp-loding";
		try{
	    	if(pageInfo.coverImage){
	    		var backimg = document.createElement("div");
				backimg.className = "tp-img-back";
				backimg.style.backgroundImage="url("+pageInfo.coverImage+")";
	    		ele.appendChild(backimg);
	    	}
   		}catch(eero){}
		ele.appendChild(e);
		e.innerText += "正在加载中...";
	}
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = xmlhttp.responseText;
            e.innerText += "\n获取视频弹幕信息成功..";
            e.innerText +="\n正在解析视频地址";
            if(JSON.parse(data).info.videoList[0].source_type=='youku') {
            	var vid=JSON.parse(data).info.videoList[0].source_id;
            	console.log('这应该是优酷源的视频');
            	var xmlhttp2;
	            xmlhttp2 = new XMLHttpRequest();
	            xmlhttp2.onreadystatechange = function() {
	                if (xmlhttp2.readyState == 4) {
	                    if (xmlhttp2.status == 200) {
	                        var t = xmlhttp2.responseText;
	                        var c = JSON.parse(t);
	                        for (var i=0;i<c.data.length;i++) {
		                        if(c.data[i].stream_type=='mp4hd'){
									var arr=new Array;
									for(var x=0;x<c.data[i].segs.length;x++)
									{
										arr.push(c.data[i].segs[x].cdn_url)
									}
									console.log(arr);
									tdplayer(ele,arr,data,null,null);
									break
								}
		                    }
	                    } else {
	                        e.innerText += "\n视频解析失败";
	                    }
	                }
	            };
	            xmlhttp2.open("GET", "https://t5.haotown.cn/youku/api/?youku=" + vid, true);
	            xmlhttp2.send();
            }else{
	            var xmlhttp2;
	            xmlhttp2 = new XMLHttpRequest();
	            xmlhttp2.onreadystatechange = function() {
	                if (xmlhttp2.readyState == 4) {
	                    if (xmlhttp2.status == 200) {
	                        var t = xmlhttp2.responseText;
	                        var videosrcarr = JSON.parse(t).video;
	                        if (videosrcarr) {
	                            tdplayer(ele,videosrcarr,data,null,null);
	                        } else {
	                            e.innerText +=  "\n视频解析失败  5秒后将重试";
	                            setTimeout(function() {
	                               tdacplay(ele, acid);
	                            }, 5e3);
	                        }
	                    } else {
	                        e.innerText += "\n视频解析失败";
	                    }
	                }
	            };
	            xmlhttp2.open("GET", "https://t5.haotown.cn/td/video.php?ac=" + acid, true);
	            xmlhttp2.send();
            }
        }
    };
    xmlhttp.open("GET", "https://t5.haotown.cn/acfun/danmu/?ac=" + acid, true);
    xmlhttp.send();
}

window.tdplayer=(Element,src,data,poster,videotype)=> {
	var tdplayer = new Object();
    tdplayer.warp = Element;
    tdplayer.videosrcarr = src;
    tdplayer.data=data;
    tdplayer.videoinfo = JSON.parse(tdplayer.data).info;
    tdplayer.nowdata = JSON.parse(tdplayer.data).danmu;
    if(poster){
    	tdplayer.vposter =poster
    }
    else if(tdplayer.videoinfo){
    	poster=tdplayer.videoinfo.coverImage
    }
    tdplayer.vloop=false;
    tdplayer.vposter = poster;
    tdplayer.nowduan = 0;
    tdplayer.v = html.html();
    tdplayer.warp.innerHTML = tdplayer.v;
    function eleload(){
	    this.tdplayer = $c(".tdplayer")[0];
	    this.danmu_switch = $c(".tp-danmu-switch")[0];
	    this.tp_text = $c(".tp-text")[0];
	    this.tp_up = $c(".tp-up")[0];
	    this.tp_color_bo = $c(".tp-color-bo")[0];
	    this.video_control_play = $c(".tp-control-play")[0];
	    this.tp_oneplay = $c(".tp-oneplay")[0];
	    this.danmu_warp = $c(".danmu-warp")[0];
	    this.video_con = $c(".tp-video-con")[0];
	    this.video_control_paused = $c(".tp-control-paused")[0];
	    this.tp_s_w = $c(".tp-s-tranger")[0];
        this.tp_s = $c(".tp-s-tranger-a")[0];
	    this.alltime = $c(".tp-control-alltime")[0];
	    this.tranger_a = $c(".tp-tranger-a")[0];
	    this.tranger_c = $c(".tp-tranger-c")[0];
	    this.nowtime = $c(".tp-control-nowtime")[0];
	    this.tp_spinner = $c(".tp-spinner")[0];
	    this.full = $c(".video-full")[0];
	    this.tp_con = $c(".tp-con")[0];
	    this.tp_color_warp = $c(".tp-color-warp")[0];
	    this.tp_place = $c(".tp-place")[0];
	    this.tp_send = $c(".tp-send")[0];
	    this.tranger = $c(".tp-tranger")[0];
	    this.tp_speend_con = $c(".tp-speend-con")[0];
	    this.tp_speend = $c(".tp-speend")[0];
	    this.tp_video_warp = $c(".tp-video-warp")[0];
	    this.tp_rightmenu = $c(".tp-rightmenu")[0];
	    this.end = $c(".video-end")[0];
	    this.replay = $c(".replay")[0];
	    this.copy = $c(".tp-copy-warp")[0];
	    this.copytext = $c(".tp-copy-input")[0];
	    this.css = $c(".css")[0];
	    this.alltime_phone= $c(".tp-control-alltime-phone")[0];
    }
    tdplayer.ele=new eleload;
    for (var i = 0; i < tdplayer.videosrcarr.length; i++) {
        var video = document.createElement("video");
        video.src = tdplayer.videosrcarr[i];
        video.className = "tp-video";
        if (i != 0) {
            video.style.display = "none";
            video.preload = "meta";
        } else {
            video.preload = "load";
            tdplayer.Element = video;
        }
        tdplayer.ele.tdplayer.appendChild(video);
        if (videotype == "flv") {
	        try {           
	                var flvPlayer = flvjs.createPlayer({
	                    type:"flv",
	                    url:tdplayer.videosrcarr[i]
	                });
	                flvPlayer.attachMediaElement(video);
	                flvPlayer.load();
	        } catch (e) {
	            console.log("flv.js没有加载");
	        }
	    } 
    }
    tdplayer.videoelearr = tdplayer.ele.tdplayer.getElementsByTagName("video");
    tdplayer.videotimearr = [];
    for (var i = 0; i < tdplayer.videoelearr.length; i++) {
        getallvideotime(tdplayer.videoelearr[i], i);
    }
    function getallvideotime(ele, i) {
        var time = ele.duration;
        if (!time) {
            setTimeout(function() {
                getallvideotime(ele, i);
            }, 500);
        } else {
            tdplayer.videotimearr[i] = time;
            if (tdplayer.videotimearr[0] && tdplayer.videotimearr[tdplayer.videotimearr.length - 1]) {
                tdplayer.alltime = 0;
                for (var i = 0; i < tdplayer.videotimearr.length; i++) {
                    tdplayer.alltime += tdplayer.videotimearr[i];
                }
                tdplayer.ele.alltime.innerHTML = getvideotime(tdplayer.alltime).m + ":" + getvideotime(tdplayer.alltime).s;
                tdplayer.ele.alltime_phone.innerHTML ='&nbsp;/&nbsp;'+tdplayer.ele.alltime.innerHTML;
            }
        }
    }
    tdplayer.Element.poster = tdplayer.vposter;
    tdplayer.danmuelement = tdplayer.ele.danmu_warp;
    tdplayer.sjc = 0;
    tdplayer.dsq = 0;
    tdplayer.leftarr = [];
    tdplayer.toparr = [];
    tdplayer.dmheight = 31;
    tdplayer.dmplace = 1;
   	if (/android/i.test(navigator.userAgent) || /(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)) {
        tdplayer.phone = true;
        tdplayer.ele.video_con.style.opacity='1';
        tdplayer.ele.video_con.style.display='none';
    }
    //弹幕行高
    tdplayer.width = tdplayer.Element.offsetWidth;
    tdplayer.height = tdplayer.Element.offsetHeight;
    //样式
    tdplayer.send = function(text, color, wz, me) {
        tdplayer.width = tdplayer.Element.offsetWidth;
        tdplayer.height = tdplayer.Element.offsetHeight;
        var dm = document.createElement("div");
        dm.appendChild(document.createTextNode(text));
        dm.style.color = color;
        if (me) {
            dm.style.border = "1px solid #fff";
        }
        if (wz == 1) {
            //left 弹幕
            var dtop = tdplayer.getlefttop();
            dm.style.top = dtop * tdplayer.dmheight + "px";
            tdplayer.leftarr[dtop] = 1;
            dm.className = "danmu tp-left";
            dm.style.transform = "translateX(-" + tdplayer.width + "px)";
            var e = tdplayer.ele.danmu_warp.appendChild(dm);
            var s1 = e.offsetWidth;
            var s2 = s1 + tdplayer.width;
            var v = s2 / 10;
            var t = s1 / v;
            setTimeout(function() {
                tdplayer.leftarr[dtop] = 0;
            }, t * 1e3 + 500);
            dm.addEventListener("webkitAnimationEnd", tdplayer.dmend);
            dm.addEventListener("animationend", tdplayer.dmend);
        } else if (wz == 2) {
            //顶部弹幕
            dm.className = "danmu tp-top";
            var dtop = tdplayer.gettoptop();
            dm.style.top = dtop * tdplayer.dmheight + "px";
            tdplayer.toparr[dtop] = 1;
            var e = tdplayer.ele.danmu_warp.appendChild(dm);
            setTimeout(function() {
                tdplayer.danmuhide(e, dtop);
            }, 5e3);
        }
    };
    tdplayer.dmend = function() {
        tdplayer.danmuelement.removeChild(this);
    };
    tdplayer.danmuhide = function(e, topid) {
        if (tdplayer.Element.paused) {
            setTimeout(function() {
                tdplayer.danmuhide(e, topid);
            }, tdplayer.width * 10 + 1e3);
        } else {
            e.remove();
            tdplayer.toparr[topid] = 0;
        }
    };
    tdplayer.getlefttop = function() {
        var h;
        for (var i = 0; i <= tdplayer.leftarr.length; i++) {
            if (!tdplayer.leftarr[i]) {
                //console.log('第'+i+'可以发射弹幕');
                h = i;
                break;
            }
        }
        return h;
    };
    tdplayer.gettoptop = function() {
        var h;
        for (var i = 0; i <= tdplayer.toparr.length; i++) {
            if (!tdplayer.toparr[i]) {
                //console.log('第'+i+'可以发射弹幕');
                h = i;
                break;
            }
        }
        return h;
    };
    //重播
    tdplayer.ele.replay.addEventListener("click", function() {
        tiao(0);
        tdplayer.ele.end.style.display = "none";
    });
    //播放完成
    for (var i=0;i<tdplayer.videoelearr.length;i++) {
		(function(arg){
			tdplayer.videoelearr[i].onended=function(){
				 if(tdplayer.videoelearr[arg+1]){
				 	tdplayer.nowduan=arg+1;
				 	var oldele = tdplayer.videoelearr[arg];
	                var nowele = tdplayer.videoelearr[arg+1];
				 	for (var i = 0; i < tdplayer.videoelearr.length; i++) {
	                    if (i != tdplayer.nowduan) {
	                        var ele = tdplayer.videoelearr[i];
	                        if (ele.style.display != "none") {
	                            ele.style.display = "none";
	                        }
	                        ele.currentTime = 0;
	                        ele.pause();
	                    } else {
	                        var ele = tdplayer.videoelearr[i];
	                        tdplayer.Element = ele;
	                        ele.style.display = "block";
	                        ele.currentTime = 0;
	                        ele.play();
	                    }
				 	}
				 	tdplayer.changersound()
				 }else{
				 	console.log("播放完毕"+arg);
				 	tdplayer.ele.end.style.display = "block";
				 }
			}
		})(i)
    }
    
    //弹幕开关
    tdplayer.ele.danmu_switch.addEventListener("click", function() {
        if (this.className == "tp-danmu-switch") {
            this.className = "tp-danmu-switch tp-danmu-switch-c";
            tdplayer.ele.danmu_warp.style.opacity = "0";
        } else {
            this.className = "tp-danmu-switch";
            tdplayer.ele.danmu_warp.style.opacity = "1";
        }
    });
    //弹幕回车按下
    tdplayer.ele.tp_text.onkeydown = function(event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e.keyCode == 13) {
            tdplayer.ele.tp_up.click();
        }else if(e.keyCode == 32){
        	e.stopPropagation();
        }
    };
    //弹幕发送
    tdplayer.ele.tp_up.addEventListener("click", function() {
        tdplayer.send(tdplayer.ele.tp_text.value, tdplayer.ele.tp_color_bo.style.backgroundColor, tdplayer.dmplace, 1);
        tdplayer.ele.tp_text.readonly = "readonly";
        //$("tp-text").style.background = "#f4f4f4";
        tdplayer.ele.tp_up.disabled = "true";
        tdplayer.ele.tp_up.style.background = "#777479";
        setTimeout(function() {
            tdplayer.ele.tp_text.value = "";
            //$("tp-text").style.background = "#fff";
            tdplayer.ele.tp_up.disabled = "";
            tdplayer.ele.tp_up.style.background = "#8715EF";
        }, 500);
        var postData = {
            id:tdplayer.videoid,
            text:tdplayer.ele.tp_text.value,
            color:tdplayer.ele.tp_color_bo.style.backgroundColor,
            time:parseInt(tdplayer.Element.currentTime * 10),
            place:tdplayer.dmplace
        };
        postData = function(obj) {
            // 转成post需要的字符串.
            var str = "";
            for (var prop in obj) {
                str += prop + "=" + obj[prop] + "&";
            }
            return str;
        }(postData);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", tdplayer.sendurl, true);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.onreadystatechange = function() {
            var XMLHttpReq = xhr;
            if (XMLHttpReq.readyState == 4) {
                if (XMLHttpReq.status == 200) {
                    var text = XMLHttpReq.responseText;
                    console.log(text);
                }
            }
        };
    });
    //弹幕速度
    function dmspeend(v) {
    	console.log('弹幕速度调整为'+v);
        tdplayer.ele.css.innerText = ".tp-left {animation: dmleft " + v + "s linear;-webkit-animation: dmleft " + v + "s linear;}";
    }
    //视频播放
    tdplayer.ele.video_control_play.onclick = function() {
        tdplayer.ele.tp_oneplay.style.display = "none";
        if (tdplayer.dsq == 0) {
            tdplayer.Interval = setInterval(danmutime, 100);
            tdplayer.dsq = 1;
        }
        if(!tdplayer.phone){
         tdplayer.ele.video_con.style.opacity = "0";
        }
        var e = tdplayer.ele.danmu_warp.getElementsByTagName("div");
        this.style.display = "none";
        tdplayer.ele.video_control_paused.style.display = "inline-block";
        tdplayer.Element.play();
        for (var i = e.length - 1; i >= 0; i--) {
            removeClass(e[i], "tp-suspend");
        }
    };
    //视频暂停
    tdplayer.ele.video_control_paused.onclick = function() {
        clearInterval(tdplayer.Interval);
        tdplayer.dsq = 0;
        var e = tdplayer.ele.danmu_warp.getElementsByTagName("div");
        this.style.display = "none";
        tdplayer.ele.video_control_play.style.display = "inline-block";
        tdplayer.Element.pause();
        for (var i = e.length - 1; i >= 0; i--) {
            addClass(e[i], "tp-suspend");
        }
        tdplayer.ele.tp_spinner.style.display = "none";
    };
    tdplayer.ele.tp_oneplay.addEventListener("click", function() {
        this.style.display = "none";
        tdplayer.ele.video_control_play.onclick();
    });
    //控件显示
    if (tdplayer.phone) {
        tdplayer.ele.danmu_warp.addEventListener("click", function() {
            var e = tdplayer.ele.video_con;
            if (e.style.display == "block") {
                console.log("隐藏");
                e.style.display = "none"
            } else {
                e.style.display = "block";
                console.log("显示");
            }
        });
    } else {
        tdplayer.ele.video_con.onmousemove = function() {
            showbar();
        };
    }
    function getCookie(Name) {
        var cookieName = encodeURIComponent(Name) + "=", returnvalue = "", cookieStart = document.cookie.indexOf(cookieName), cookieEnd = null;
        if (cookieStart > -1) {
            cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            returnvalue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return returnvalue;
    }
    tdplayer.changersound = function() {
    	var s = parseInt(tdplayer.ele.tp_s.style.width) * .01;
    	for (var i=0;i<tdplayer.videoelearr.length;i++) {
           tdplayer.videoelearr[i].volume = s;
        }
        var Days = 7;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1e3);
        document.cookie = "tpsound=" + s*100 + ";expires=" + exp.toGMTString() + "&path=/";
    };
    tdplayer.soundcookie = getCookie("tpsound");
    if (tdplayer.soundcookie) {
        tdplayer.ele.tp_s.style.width = tdplayer.soundcookie+"%";
        tdplayer.Element.volume = parseInt(tdplayer.ele.tp_s.style.width) * .01;
    } else {
         tdplayer.ele.tp_s.style.width = "80%";
        tdplayer.changersound();
    }
    //音量调节
   tdplayer.ele.tp_s_w.addEventListener("click", function(event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        var xbl = show_coords(e, this).xbl * 100;
        tdplayer.ele.tp_s.style.width = xbl + "%";
        tdplayer.changersound();
    }, false);
    function getnowtime() {
        var videotime = 0;
        for (var i = 0; i <= tdplayer.nowduan - 1; i++) {
            videotime += tdplayer.videotimearr[i];
        }
        videotime += tdplayer.videoelearr[tdplayer.nowduan].currentTime;
        return videotime;
    }
    //定时器
    function danmutime() {
        var videotime = getnowtime();
        var smalltime = tdplayer.Element.currentTime;
        tdplayer.ele.tranger_a.style.width = videotime / tdplayer.alltime * 100 + "%";
        var buff = tdplayer.Element.buffered;
        //判断缓存段
        var oldduan = tdplayer.nowduan - 1, oldtime = 0, time2 = 0;
        for (var i = 0; i <= oldduan; i++) {
            oldtime += tdplayer.videotimearr[i];
        }
        try {
            time2 = oldtime + buff.end(buff.length - 1);
        } catch (e) {
            console.log(e);
        }
        var width = time2 / tdplayer.alltime * 100 + "%";
        if (tdplayer.ele.tranger_c.style.width != width) {
            tdplayer.ele.tranger_c.style.width = width;
        }
        if (tdplayer.nowdata) {
            var inttime = parseInt(videotime * 10);
            for (var i = 0; i < tdplayer.nowdata.length; i++) {
                if (tdplayer.nowdata[i]) {
                    //console.log('nowtime:'+inttime);
                    if (tdplayer.nowdata[i].time == inttime) {
                        tdplayer.send(unescape(tdplayer.nowdata[i].text), tdplayer.nowdata[i].color, tdplayer.nowdata[i].place);
                        delete tdplayer.nowdata[i];
                    }
                }
            }
        }
    }
    //返回当前播放段
    function getduan(time) {
        var mun = 0;
        for (var i = 0; i < tdplayer.videotimearr.length; i++) {
            mun += tdplayer.videotimearr[i];
            if (mun >= time) {
                return i;
                break;
            }
        }
    }
    
    //定时器二 1s执行一次
    setInterval(function() {
    	var videotime=getnowtime(videotime);
        //当前段播放将要结束 缓存下一段
        var temp = tdplayer.videoelearr[tdplayer.nowduan].currentTime;
        if (temp + 20 >= tdplayer.videotimearr[tdplayer.nowduan]) {
            if (tdplayer.videoelearr[tdplayer.nowduan + 1]) {
            	if (tdplayer.videoelearr[tdplayer.nowduan + 1].preload != "load") {
	                tdplayer.videoelearr[tdplayer.nowduan + 1].preload = "load";
	                console.log("当前正在播放第" + tdplayer.nowduan + "段，正在加载下一段");
	            }
            }
        }
        tdplayer.ele.nowtime.innerHTML = getvideotime(videotime).m + ":" + getvideotime(videotime).s;
        var t = tdplayer.ele.tp_send.offsetWidth - 280 + "px";
        if (tdplayer.ele.tp_text.style.width != t) {
            tdplayer.ele.tp_text.style.width = t;
        }
    }, 1e3);
    //跳转函数
    function tiao(time) {
        var oldduan = getduan(time) - 1, oldtime = 0;
        for (var i = 0; i <= oldduan; i++) {
            oldtime += tdplayer.videotimearr[i];
        }
        var duantime = time - oldtime;
        tdplayer.nowduan = getduan(time);
        //video id
        for (var i = 0; i < tdplayer.videoelearr.length; i++) {
            if (i != tdplayer.nowduan) {
                var ele = tdplayer.videoelearr[i];
                ele.style.display = "none";
                ele.currentTime = 0;
                ele.pause();
            } else {
                var ele = tdplayer.videoelearr[i];
                tdplayer.Element = ele;
                ele.style.display = "block";
                ele.play();
                ele.currentTime = duantime;
                tdplayer.ele.tp_spinner.style.display = "none";
            }
        }
        tdplayer.nowdata = JSON.parse(tdplayer.data).danmu;
        if (tdplayer.ele.video_control_play.display != "none") {
            tdplayer.ele.video_control_play.onclick();
        }

    }
    //进度条
    tdplayer.ele.tranger.onmousedown = function(event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        var xbl = show_coords(e, this);
        tdplayer.ele.tranger_a.style.width = xbl.xbl * 100 + "%";
        tiao(xbl.xbl * tdplayer.alltime);
    };
    //获取元素的纵坐标（相对于窗口）
    function getTop(e) {
        var offset = e.offsetTop;
        if (e.offsetParent != null) offset += getTop(e.offsetParent);
        return offset;
    }
    //获取元素的横坐标（相对于窗口）
    function getLeft(e) {
        var offset = e.offsetLeft;
        if (e.offsetParent != null) offset += getLeft(e.offsetParent);
        return offset;
    }
    function show_coords(event, elem) {
        var x = event.clientX - getLeft(elem);
	    var y = event.clientY - getTop(elem);
	    var xbl = x / elem.offsetWidth;
	    var ybl =1- y / elem.offsetHeight;
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
    function videohc() {
        console.log("loding");
        clearInterval(tdplayer.Interval);
        tdplayer.dsq = 0;
        tdplayer.ele.tp_spinner.style.display = "block";
        var e = tdplayer.ele.danmu_warp.getElementsByTagName("div");
        for (var i = e.length - 1; i >= 0; i--) {
            addClass(e[i], "tp-suspend");
        }
    }
    for (var i = 0; i < tdplayer.videoelearr.length; i++) {
        tdplayer.videoelearr[i].addEventListener("waiting", function() {
            videohc();
        });
        tdplayer.videoelearr[i].addEventListener("playing", function() {
            tdplay();
        });
    }
    function tdplay() {
        if (tdplayer.ele.tp_spinner.style.display = "block") {
            if (tdplayer.dsq == 0) {
                tdplayer.Interval = setInterval(danmutime, 100);
                tdplayer.dsq = 1;
            }
            var e = tdplayer.ele.danmu_warp.getElementsByTagName("div");
            tdplayer.ele.tp_spinner.style.display = "none";
            tdplayer.ele.alltime.innerHTML = getvideotime(tdplayer.alltime).m + ":" + getvideotime(tdplayer.alltime).s;
            for (var i = e.length - 1; i >= 0; i--) {
                removeClass(e[i], "tp-suspend");
            }
        }
    }
    //键盘
    tdplayer.ele.tp_video_warp.addEventListener('click',function(){
         setTimeout(function(){ tdplayer.ele.tp_video_warp.xz=true;},200);
         console.log('ccc')
    }, false);
    document.addEventListener('click', function(e){
         if (e.target==tdplayer.ele.danmu_warp) {
            tdplayer.ele.tp_video_warp.xz=true
         }else{
            tdplayer.ele.tp_video_warp.xz=false
         }
    }, false);
    document.addEventListener("keydown", function(event) {
        var ev = event || window.event || arguments.callee.caller.arguments[0];
         if(tdplayer.ele.tp_video_warp.xz==true){
	        showbar();
	        if(ev.keyCode==39||37||32){
	        	console.log(tdplayer.ele.end)
	        	if(tdplayer.ele.end.style.display=="block"){
    				tdplayer.ele.end.style.display="none"

    			}
	        }
	        if (ev && ev.keyCode == 39) {
	            // right 键
	            var videotime = getnowtime();
	            tiao(videotime + 5);
	        }
	        if (ev && ev.keyCode == 37) {
	            // left 键
	            var videotime = getnowtime();
	            tiao(videotime - 5);
	        }
	        if (ev && ev.keyCode == 32) {
	            // space 键
	              event.preventDefault();
	            if (tdplayer.Element.paused) {
	                tdplayer.ele.video_control_play.onclick();
	            } else {
	                tdplayer.ele.video_control_paused.onclick();
	            }
	        }
	        if (ev && ev.keyCode == 38) {
	            // up 键
	            event.preventDefault();
	           tdplayer.ele.tp_s.style.width = parseInt(tdplayer.ele.tp_s.style.width) + 1 + "%";
                tdplayer.changersound();
	        }
	        if (ev && ev.keyCode == 40) {
	            // down 键
	            event.preventDefault();
	            tdplayer.ele.tp_s.style.width = parseInt(tdplayer.ele.tp_s.style.width) - 1 + "%";
                tdplayer.changersound();
	        }
	    }
    });
    function getvideotime(time) {
        var tm;
        var m = parseInt(time / 60);
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
    tdplayer.ele.full.addEventListener("click", function() {
        var e = tdplayer.ele.tp_video_warp;
        document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() :document.mozCancelFullScreen ? document.mozCancelFullScreen() :document.webkitCancelFullScreen && document.webkitCancelFullScreen() :e.requestFullscreen ? e.requestFullscreen() :e.mozRequestFullScreen ? e.mozRequestFullScreen() :e.webkitRequestFullscreen && e.webkitRequestFullscreen();
        setTimeout(function() {
            tdplayer.width = tdplayer.ele.danmu_warp.offsetWidth;
            var e = tdplayer.ele.danmu_warp.getElementsByTagName("div");
            dmspeend(tdplayer.width / 100);
            for (var i = 0; i < e.length; i++) {
                if (hasClass(e[i], "tp-left")) {
                    e[i].style.transform = "translateX(-" + tdplayer.width + "px)";
                }
            }
        }, 1e3);
    });
    function showbar() {
    	if(!tdplayer.phone){
	        tdplayer.ele.video_con.style.opacity = "1";
	        tdplayer.sjc++;
	        var time = setTimeout(sjc, 2e3, tdplayer.sjc);
       }
    }
    function sjc(time) {
        if (time >= tdplayer.sjc) {
            tdplayer.ele.video_con.style.opacity = "0";
        }
    }
    //颜色
    var tpcolor = new Object();
    tpcolor.arr = new Array("#FFFFFF", "#000000", "#4ab0c6", "#555656", "#09b745", "#f86141", "#FFEB3B", "#4d38d8", "#fe67c1", "#ff9c07");
    for (var r = 255; r >= 0; r -= 25) {
        for (var g = 0; g <= 255; g += 25) {
            for (var b = 0; b <= 255; b += 25) {
                tpcolor.arr.push("rgb(" + r + "," + g + "," + b + ")");
            }
        }
    }
    var danmucon = tdplayer.ele.tp_con;
    var colorwarp = tdplayer.ele.tp_color_warp;
    tdplayer.ele.tp_color_bo.addEventListener("click", function() {
        if (danmucon.style.display == "block") {
            danmucon.style.display = "none";
        } else {
            danmucon.style.display = "block";
        }
    });
    for (tpcolor.i = 0; tpcolor.i < tpcolor.arr.length; tpcolor.i++) {
        var colormain = document.createElement("div");
        colormain.className = "tp-color";
        var color = document.createElement("div");
        color.className = "tp-color-main";
        color.style.background = tpcolor.arr[tpcolor.i];
        color.addEventListener("click", function() {
            tdplayer.ele.tp_color_bo.style.backgroundColor = this.style.background;
        });
        colormain.appendChild(color);
        colorwarp.appendChild(colormain);
    }
    //设置
    //视频速度设置
    tdplayer.ele.tp_speend_con.addEventListener("click", function() {
        var t = tdplayer.ele.tp_speend;
        if (t.style.display == "block") {
            t.style.display = "none";
        } else {
            t.style.display = "block";
        }
    });
    var videospeendele = tdplayer.ele.tp_speend.childNodes;
    for (i = 0; i < videospeendele.length; i++) {
        var e = videospeendele[i];
        var s = parseFloat(videospeendele[i].innerText).toFixed(2);
        if (s != "NaN") {
            e.onclick = function() {
                var t = parseFloat(this.innerText).toFixed(2);
                for (var i=0;i<tdplayer.videoelearr.length;i++) {
                	tdplayer.videoelearr[i].playbackRate = t;
                }
            };
        } else {
            e.onclick = function() {
                for (var i=0;i<tdplayer.videoelearr.length;i++) {
                	tdplayer.videoelearr[i].playbackRate = 1;
                }
            };
        }
    }
    function tpeixtfull(){
    	setTimeout(function(){
    	tdplayer.width = tdplayer.ele.tdplayer.offsetWidth;
    	dmspeend(tdplayer.width / 100);
        var e = tdplayer.ele.danmu_warp.getElementsByTagName("div");
        for (var i = e.length - 1; i >= 0; i--) {
	        if (hasClass(e[i], "tp-left")) {
	            e[i].style.transform = "translateX(-" + tdplayer.width + "px)";
	        }
        }
    	},1000);
    }
    document.addEventListener('webkitfullscreenchange',function(c){
    	if(document.webkitFullscreenElement){
    		console.log('进入全屏');
    		}else{
    		console.log('退出全屏');
			tpeixtfull();
    	}
    	
    });
    document.addEventListener('mozfullscreenchange',function(c){
    	if(document.mozFullscreenElement){
    		console.log('进入全屏')
    		}else{
    		console.log('退出全屏');
    		tpeixtfull();
    	}
    	
    });
    tdplayer.ele.danmu_warp.onmousedown = function(event) {
        var container = tdplayer.ele.tdplayer;
        var rightmenu = tdplayer.ele.tp_rightmenu;
        var ev = event || window.event || arguments.callee.caller.arguments[0];
        if (!tdplayer.phone){
	        if (ev.button == 2) {
	            var target = ev.target || ev.srcElement;
	            if (hasClass(target, "danmu")) {
	                tdplayer.ele.copytext.innerHTML = target.innerHTML;
	                tdplayer.ele.copy.style.display = "block";
	                tdplayer.ele.copy.onclick = function() {
	                    tdplayer.ele.copytext.select();
	                    document.execCommand("Copy");
	                    rightmenu.style.display = "none";
	                };
	            } else {
	                tdplayer.ele.copy.style.display = "none";
	            }
	            rightmenu.style.display = "block";
	            var leftedge, topedge, danmuheight = tdplayer.ele.danmu_warp.offsetHeight, danmuwidth = tdplayer.ele.danmu_warp.offsetWidth;
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
	            	topedge = ev.clientY + document.body.scrollTop - getTop(tdplayer.ele.tdplayer);
	                leftedge = ev.clientX - getLeft(tdplayer.ele.tdplayer);
	                var tweidth = container.offsetWidth;
	                var theigtht = container.offsetHeight;
	                if (leftedge + rightmenu.offsetWidth > tweidth) {
	                    leftedge = tweidth - rightmenu.offsetWidth;
	                }
	              	if (topedge + rightmenu.offsetHeight > theigtht) {
	                  topedge = theigtht - rightmenu.offsetHeight;
	             	}
	            }
	            if (window.document.all) {
	                this.IContextmenuHander = function() {
	                    return false;
	                };
	                document.attachEvent("oncontextmenu", this.IContextmenuHander);
	            } else {
	                this.IContextmenuHander = document.oncontextmenu;
	                document.oncontextmenu = function() {
	                    return false;
	                };
	            }
	            rightmenu.style.top = topedge + "px";
	            rightmenu.style.left = leftedge + "px";
	        } else if (ev.button == 0) {
	            //如果左按键
	            if (rightmenu.style.display == "block") {
	                rightmenu.style.display = "none";
	            } else {
	                //视频暂停
	                if (tdplayer.Element.paused) {
	                    tdplayer.ele.video_control_play.onclick();
	                } else {
	                    tdplayer.ele.video_control_paused.onclick();
	                }
	            }
	        }
	    }
    };
    tdplayer.ele.tp_place.addEventListener("click", function() {
        if (tdplayer.dmplace == 1) {
            tdplayer.dmplace = 2;
            this.innerText = "▲顶部弹幕";
        } else {
            tdplayer.dmplace = 1;
            this.innerText = "◀滚动弹幕";
        }
    });
    function chadown() {
	    var w = $c(".crumb")[0];
	    if(w){
	    	var span = document.createElement("span");
		    span.className = "vdown fl";
		    span.innerHTML = '<div class="fl ico" style="background: #d52c2c;"><div class="img" style="width: 36px;height: 36px;background: url(https://ooo.0o0.ooo/2017/04/20/58f83dbb3f6bb.png) no-repeat 50% 50%;background-size: 65%;"></div></div><span class="sp3 fl">下载</span><br><span class="sp4">本视频</span></div>';
		    w.insertBefore(span, w.childNodes[5]);
		    var d = document.createElement("div");
		    d.id = "vdown";
		    d.style.display = "none";
		    if (tdplayer.videosrcarr) {
		        for (var i = 0; i < tdplayer.videosrcarr.length; i++) {
		            var div = document.createElement("div");
		            div.className = "down-btn";
		            var t = i + 1;
                    div.innerHTML = '<a href="' + tdplayer.videosrcarr[i] + '" download="[' + t + "]" +  document.querySelector('#pageInfo').getAttribute("data-title") + '.mp4">下载' + t + "段</a>";
		            d.appendChild(div);
		        }
		        span.appendChild(d);
		        span.onmousemove = function() { if (d.style.display == "none") {d.style.display = "block"}};
		        span.onmouseout = function() { if (d.style.display == "block") { d.style.display = "none" }};
		     }
	    }
	}
    var thisurl=window.location.href;
    if(thisurl.indexOf("acfun.cn") < 0||thisurl.indexOf("acfun.tv") < 0||thisurl.indexOf("aixifan.com") < 0){
    	chadown();
    	editor32();
    }
    
	function editor32(){
    	if($d('editor')){
		$d('editor').addEventListener('keydown',function(event){
			  var e = event || window.event || arguments.callee.caller.arguments[0];
			  if (e.keyCode == 32) {
	            e.stopPropagation();
	          }
		});
		}else{
			setTimeout(editor32,200);
		}
    }
    
}
