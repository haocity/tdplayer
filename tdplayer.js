/*!
 * TDPLAYER.
 * @author   HaoDong <ureygt@gmail.com> <http://www.haotown.cn>
 * @license  The Star And Thank Author License (SATA)
 */
function $d(e) {
    return document.getElementById(e);
}

function $c(ele) {
    return document.querySelectorAll(ele);
}

function hasClass(elements, cName) {
    return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
}

function addClass(elements, cName) {
    if (!hasClass(elements, cName)) {
        elements.className += " " + cName;
    }
}

function removeClass(elements, cName) {
    if (hasClass(elements, cName)) {
        elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
    }
}
function getPoint(obj) {
    var t = obj.offsetTop; 
    var l = obj.offsetLeft; 
    while (obj = obj.offsetParent) {
        t += obj.offsetTop;
        l += obj.offsetLeft; 
    }  
    return {
    	top:t,
    	left:l
    }
}  

function Tdplayer(ele, acid) {
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
		e.innerText = e.innerText+"正在加载中...";
	}
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = xmlhttp.responseText;
            e.innerText = e.innerText + "\n获取视频弹幕信息成功..";
            e.innerText = e.innerText + "\n正在解析视频地址";
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
									tdstart(ele,arr,data,null,null);
									break
								}
		                    }
	                    } else {
	                        e.innerText = e.innerText + "\n视频解析失败";
	                    }
	                }
	            };
	            xmlhttp2.open("GET", "https://t5.haotown.cn/youku/api/?youku=" + vid, true);
	            xmlhttp2.send();
            	for (var i=0;i<c.data.length;i++) {
					if(c.data[i].stream_type=='mp4hd'){
						console.log(c.data[i].segs[0].cdn_url);
						tdstart(ele,c.data[i].segs[0].cdn_url,data,null,null);
						break
					}
				}
            }else{
	            var xmlhttp2;
	            xmlhttp2 = new XMLHttpRequest();
	            xmlhttp2.onreadystatechange = function() {
	                if (xmlhttp2.readyState == 4) {
	                    if (xmlhttp2.status == 200) {
	                        var t = xmlhttp2.responseText;
	                        var videosrcarr = JSON.parse(t).video;
	                        if (videosrcarr) {
	                            tdstart(ele,videosrcarr,data,null,null);
	                        } else {
	                            e.innerText = e.innerText + "\n视频解析失败  5秒后将重试";
	                            setTimeout(function() {
	                               Tdplayer(ele, acid);
	                            }, 5e3);
	                        }
	                    } else {
	                        e.innerText = e.innerText + "\n视频解析失败";
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

function tdstart(Element,src,data,poster,videotype) {
	var tdplayer = new Object();
    tdplayer.warp = Element;
    tdplayer.videosrcarr = src;
    tdplayer.data=data;
    tdplayer.videoinfo = JSON.parse(tdplayer.data).info;
    tdplayer.nowdata = JSON.parse(tdplayer.data).danmu;
    if(poster){tdplayer.vposter =poster}else{poster=tdplayer.videoinfo.coverImage}
    tdplayer.vposter = poster;
    tdplayer.nowduan = 0;
    tdplayer.v = '<div class="tp-video-warp"><div class="tp-video-main"><ul class="tp-rightmenu"><li class="tp-copy-warp"><textarea rows="1" class="tp-copy-input">复制弹幕</textarea></li><li class="tp-speend-con">播放速度<ul class="tp-speend"><li>0.5</li><li>0.75</li><li>正常</li><li>1.25</li><li>1.5</li><li>2</li></ul></li><a href="https://github.com/haocity/tdplayer/issues" target="_blank"><li>意见反馈</li></a><a href="https://www.haotown.cn/about.html" target="_blank"><li>关于作者</li></a><a href="https://github.com/haocity/tdplayer" target="_blank"><li>About tdplayer</li></a></ul><div class="video-end"><svg t="1493275296747" class="replay" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3488" xmlns:xlink="http://www.w3.org/1999/xlink" width="100" height="100"><path d="M48.012564 368.005052 256.007345 368.005052C282.50851 368.005052 303.987849 346.493648 303.987849 319.992484 303.987849 293.459261 282.50851 272.011981 256.007345 272.011981L172.518731 272.011981C247.808645 165.585172 371.698941 95.994406 512.016029 95.994406 741.749327 95.994406 928.004256 282.249339 928.004256 511.981298 928.004256 741.731959 741.749327 927.954828 512.016029 927.954828 282.249335 927.954828 95.994406 741.730625 95.994406 511.981298 95.994406 485.481472 74.513729 464.00213 48.012564 464.00213 21.479342 464.00213 0 485.481472 0 511.981298 0 794.734285 229.213614 1023.981298 512.017367 1023.981298 794.75299 1023.981298 1024 794.734285 1024 511.981298 1024 229.214949 794.751652 0 512.017367 0 340.405743 0 188.81594 84.590769 95.99574 214.213612L95.99574 128.003676C95.99574 101.471785 74.515063 79.991108 48.013903 79.991108 21.480677 79.991108 0.001338 101.471785 0.001338 128.003676L0.001338 319.993822C0 346.493645 21.479339 368.005052 48.012564 368.005052" p-id="3489" fill="#ffffff"></path></svg></div><div class="tdplayer"></div><div class="danmu-warp"></div><div class="tp-oneplay"><svg style="width: 200px;height:200px;" class="tp-icon" viewbox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M836.1152 512 194.2848 886.4v-748.8000000000001L836.1152 512z" /></svg></div><div class="tp-spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div><div class="tp-video-con"><div class="tp-send"><div class="tp-logo-small"></div><input type="text" class="tp-text" required="true" placeholder="客官，不来吐槽一下吗?" autocomplete="off" /><div class="tp-color"><div class="tp-color-bo" style="background-color: rgb(255, 255, 255)"></div><div class="tp-con"><div class="tp-place">◀滚动弹幕</div><div class="tp-color-warp"></div></div></div><input class="tp-up" type="submit" value="发送" /></div><div class="tp-control"><div style="float:right;"><span class="tp-control-alltime" style="padding:0 6px 0 12px">0:00</span><div class="tp-danmu-switch">弹</div><div class="tp-syk"><span class="tp-syk-ico">♫</span><input class="tp-syk-range" type="range" name="points" min="0" max="100" value="100" /></div><svg class="video-full" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="tp-icon" viewbox="0 0 1024 1024" version="1.1" p-id="1427"><path d="M971.862 52.538c-10.964-10.992-25.546-17.044-41.056-17.044L429.616 35.494l0 79.362 479.86 0 0 465.288 79.364 0L988.84 93.524C988.84 78.024 982.802 63.46 971.862 52.538z" p-id="1428" /><path d="M115.092 429.62 35.728 429.62l0 500.854c0 15.5 6.038 30.066 16.982 40.994 10.966 10.988 25.544 17.04 41.05 17.04l469.182 0 0-79.364L115.092 909.144 115.092 429.62z" p-id="1429" /><path d="M127.16 193.578l73.198 73.198-0.034 0.034 40.438 40.44 14.164 14.096 152.616 152.616c8.796 8.796 20.492 13.64 32.932 13.64 12.442 0 24.138-4.846 32.936-13.644 18.158-18.16 18.156-47.708-0.002-65.866l-141.318-141.318 0.094-0.094-40.484-40.486-14.162-13.97L192.812 127.492l146.47 0 0-92L101.16 35.492c-36.392 0-66 29.608-66 66l0 237.972 92 0L127.16 193.578z" p-id="1430" /><path d="M896.578 830.358l-73.198-73.198 0.034-0.034-40.44-40.44-14.148-14.084-152.622-152.62c-8.796-8.8-20.496-13.648-32.942-13.648-12.444 0-24.14 4.848-32.94 13.646-18.148 18.156-18.148 47.702 0.004 65.866l141.31 141.306-0.094 0.094 40.492 40.494 14.16 13.974 84.728 84.726-146.734 0 0 92 238.386 0c36.392 0 66-29.608 66-66l0-237.96-92 0L896.574 830.358z" p-id="1431" /></svg></div><div style="float: left;"><svg class="tp-control-play tp-icon" viewbox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M836.1152 512 194.2848 886.4v-748.8000000000001L836.1152 512z" /></svg><svg class="tp-control-paused tp-icon" style="display:none" viewbox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" d="M256.033769 192.014198l127.977743 0 0 639.933741-127.977743 0 0-639.933741ZM639.976 191.982l127.993 0 0 639.966-127.993 0 0-639.966z" /></svg><span class="tp-control-nowtime">0:00</span><span class="tp-control-alltime-phone"> / 0:00</span></div><div class="tp-tranger"><div class="tp-tranger-a"></div><div class="tp-tranger-b"></div><div class="tp-tranger-c"></div></div></div></div></div></div><style class="css" type="text/css"></style>';
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
	    this.tp_syk_range = $c(".tp-syk-range")[0];
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
    tdplayer.changersound = function(s) {
    	for (var i=0;i<tdplayer.videoelearr.length;i++) {
           tdplayer.videoelearr[i].volume = s;
        }
        var Days = 7;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1e3);
        document.cookie = "tpsound=" + s + ";expires=" + exp.toGMTString() + "&path=/";
    };
    tdplayer.soundcookie = getCookie("tpsound");
    if (tdplayer.soundcookie) {
        tdplayer.ele.tp_syk_range.value = tdplayer.soundcookie*100;
        tdplayer.Element.volume = parseInt(tdplayer.ele.tp_syk_range.value) * .01;
    } else {
        tdplayer.changersound(1);
        
    }
    //音量调节
     tdplayer.ele.tp_syk_range.addEventListener("input", function() {
        var s = parseInt(tdplayer.ele.tp_syk_range.value) * .01;
        tdplayer.changersound(s);
        
    });
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
        if (temp + 10 >= tdplayer.videotimearr[tdplayer.nowduan]) {
            if (tdplayer.videoelearr[tdplayer.nowduan + 1]) {
                tdplayer.videoelearr[tdplayer.nowduan + 1].preload = "load";
                console.log("当前正在播放第" + tdplayer.nowduan + "段，正在加载下一段");
            }
        }
        //检测是否播放
        //          if(tdplayer.a){
        //              if (tdplayer.a>temp-2||tdplayer.a<temp+2) {
        //              console.log('playyy a:'+tdplayer.a+"  temp: "+temp);
        //              tdplay();
        //           }
        //          }
        // tdplayer.a=temp;
        //播放下一段
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
        tdplayer.ele.tp_syk_range.click();
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
        var ybl = y / elem.offsetTop;
        return {
            x:x,
            y:y,
            w:elem.offsetWidth,
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
    document.addEventListener("keydown", function(event) {
        var ev = event || window.event || arguments.callee.caller.arguments[0];
        showbar();
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
        if (e && e.keyCode == 38) {
            // up 键
            tdplayer.ele.tp_syk_range.value = parseInt(tdplayer.ele.tp_syk_range.value) + 1;
            tdplayer.ele.tp_syk_range.click();
        }
        if (ev && ev.keyCode == 40) {
            // down 键
            tdplayer.ele.tp_syk_range.value = parseInt(tdplayer.ele.tp_syk_range.value) - 1;
            tdplayer.ele.tp_syk_range.click();
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
    tpcolor = new Object();
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
	            	var arr=getPoint(tdplayer.ele.tdplayer)
	            	topedge = ev.clientY + document.body.scrollTop - arr.top;
	                leftedge = ev.clientX - arr.left;
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
		            div.innerHTML = '<a href="' + tdplayer.videosrcarr[i] + '" download="[' + t + "]" + tdplayer.videoinfo.title + '.mp4">下载' + t + "段</a>";
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
    }
}