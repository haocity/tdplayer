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

function chadown(){
	var w=$c('.crumb')[0];
	var span=document.createElement('span');
	span.className='vdown fl';
	span.innerHTML='<div class="fl ico" style="background: #d52c2c;"><div class="img" style="width: 36px;height: 36px;background: url(https://ooo.0o0.ooo/2017/04/20/58f83dbb3f6bb.png) no-repeat 50% 50%;background-size: 65%;"></div></div><span class="sp3 fl">下载</span><br><span class="sp4">本视频</span></div>';
	w.insertBefore(span,w.childNodes[5]);
	var d= document.createElement('div');
	d.id='vdown';
	d.style.display='none';
	if(tdplayer.videosrcarr){
		for (var i = 0; i < tdplayer.videosrcarr.length; i++) {
			var div=document.createElement('div');
			div.className="down-btn";
			var t=i+1;
			div.innerHTML='<a href="'+tdplayer.videosrcarr[i]+'" download="['+t+']'+tdplayer.videoinfo.title+'.mp4">下载'+t+'段</a>';
			d.appendChild(div);
		}
		span.appendChild(d);
		span.onmousemove=function(){
			if(d.style.display=='none'){
				d.style.display='block'
			}
		};
		span.onmouseout=function(){
			if(d.style.display=='block'){
				d.style.display='none'
			}
		};
	}
}
var tdplayer = new Object();

function acplay(ele, acid) {
    var e = document.createElement("div");
    e.className = "dm-loding";
    ele.appendChild(e);
    e.innerText = "正在加载中...";
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            tdplayer.data = xmlhttp.responseText;
            tdplayer.videoinfo = JSON.parse(tdplayer.data).info;
            //tdplayer.vposter = tdplayer.videoinfo.coverImage;
            tdplayer.nowdata = JSON.parse(tdplayer.data).danmu;
            e.innerText =e.innerText+"\n获取视频弹幕信息成功..";
            e.innerText =e.innerText+"\n正在解析视频地址";
            var xmlhttp2;
            xmlhttp2 = new XMLHttpRequest();
            xmlhttp2.onreadystatechange = function() {
                if (xmlhttp2.readyState == 4) {
                    if (xmlhttp2.status == 200) {
                        var t = xmlhttp2.responseText;
                        tdplayer.videosrcarr = JSON.parse(t).video;
                        if (tdplayer.videosrcarr) {
                            Tdplayer(ele, tdplayer.videosrcarr, tdplayer.videoinfo.coverImage);
                            chadown();
                        } else {
                            e.innerText =e.innerText+"\n视频解析失败  5秒后将重试";
                            setTimeout(function(){ acplay(ele, acid)},5000);
                        }
                    } else {
                       e.innerText =e.innerText+"\n视频解析失败";
                    }
                }
            };
            xmlhttp2.open("GET", "https://t5.haotown.cn/acfun/video/?ac=" + acid, true);
            xmlhttp2.send();
        }
    };
    xmlhttp.open("GET", "https://t5.haotown.cn/acfun/danmu/?ac=" + acid, true);
    xmlhttp.send();
}

function Tdplayer(Element, src, poster) {
    tdplayer.warp = Element;
    tdplayer.videosrcarr = src;
    tdplayer.vposter = poster;
    tdplayer.nowduan = 0;
    tdplayer.v = '<div class="dm-video-warp"id="dm-video-warp"><div class="dm-video-main"id="dm-video-main"><ul class="dm-rightmenu"><li class="tp-speend-con">播放速度 <ul class="tp-speend"><li>0.5</li><li>0.75</li><li>正常</li><li>1.25</li><li>1.5</li><li>2</li></ul></li><a href="https://github.com/haocity/tdplayer/issues" target="_blank"><li>意见反馈</li></a><a href="https://www.haotown.cn/about.html" target="_blank"><li>关于作者</li></a><a href="https://github.com/haocity/tdplayer" target="_blank"><li>About tdplayer</li></a></ul><div id="tdplayer"></div><div id="danmu"></div><div class="dm-oneplay"id="dm-oneplay"><svg style="width: 200px;height:200px;"class="dm-icon"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"><path fill="#fff"d="M836.1152 512 194.2848 886.4v-748.8000000000001L836.1152 512z"/></svg></div><div class="dm-spinner"id="dm-spinner"><div class="rect1"></div><div class="rect2"></div><div class="rect3"></div><div class="rect4"></div><div class="rect5"></div></div><div id="video-con"class="video-con"><div class="dm-send"id="dm-send"><div class="dm-logo-small"></div><input class="dm-tucao"type="text"id="dm-text"required="true"placeholder="客官，不来吐槽一下吗?"autocomplete="off"><div class="tp-color"><div class="tp-color-bo" id="tp-color-bo" style="background-color: rgb(255, 255, 255)"></div><div class="tp-con" id="tp-con"><div class="tp-place" id="tp-place">◀滚动弹幕</div><div id="tp-color-warp"></div></div></div><input class="dm-post"id="dm-up"type="submit"value="发送"></div><div id="video-control"class="video-control"><div style="float:right;"><span id="video-control-alltime" style="padding-right:6px">0:00</span><div class="dm-dmk"id="dm-dmk">弹</div><div class="dm-syk"id="dm-syk"><span class="dm-syk-ico">♫</span><input id="dm-syk-range" type="range"name="points"min="0"max="100"value="100"/></div><svg id="video-full"style="width: 20px;padding-right:30px;top: 9px;"xmlns="http://www.w3.org/2000/svg"xmlns:xlink="http://www.w3.org/1999/xlink"class="dm-icon"style=""viewBox="0 0 1024 1024"version="1.1"p-id="1427"><defs><style type="text/css"><![CDATA[]]></style></defs><path d="M971.862 52.538c-10.964-10.992-25.546-17.044-41.056-17.044L429.616 35.494l0 79.362 479.86 0 0 465.288 79.364 0L988.84 93.524C988.84 78.024 982.802 63.46 971.862 52.538z"p-id="1428"/><path d="M115.092 429.62 35.728 429.62l0 500.854c0 15.5 6.038 30.066 16.982 40.994 10.966 10.988 25.544 17.04 41.05 17.04l469.182 0 0-79.364L115.092 909.144 115.092 429.62z"p-id="1429"/><path d="M127.16 193.578l73.198 73.198-0.034 0.034 40.438 40.44 14.164 14.096 152.616 152.616c8.796 8.796 20.492 13.64 32.932 13.64 12.442 0 24.138-4.846 32.936-13.644 18.158-18.16 18.156-47.708-0.002-65.866l-141.318-141.318 0.094-0.094-40.484-40.486-14.162-13.97L192.812 127.492l146.47 0 0-92L101.16 35.492c-36.392 0-66 29.608-66 66l0 237.972 92 0L127.16 193.578z"p-id="1430"/><path d="M896.578 830.358l-73.198-73.198 0.034-0.034-40.44-40.44-14.148-14.084-152.622-152.62c-8.796-8.8-20.496-13.648-32.942-13.648-12.444 0-24.14 4.848-32.94 13.646-18.148 18.156-18.148 47.702 0.004 65.866l141.31 141.306-0.094 0.094 40.492 40.494 14.16 13.974 84.728 84.726-146.734 0 0 92 238.386 0c36.392 0 66-29.608 66-66l0-237.96-92 0L896.574 830.358z"p-id="1431"/></svg></div><div style="float: left;"><svg id="video-control-play"class="dm-icon"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"><path fill="#fff"d="M836.1152 512 194.2848 886.4v-748.8000000000001L836.1152 512z"/></svg><svg id="video-control-paused"style="display:none" class="dm-icon"viewBox="0 0 1024 1024"version="1.1"xmlns="http://www.w3.org/2000/svg"><path fill="#fff"d="M256.033769 192.014198l127.977743 0 0 639.933741-127.977743 0 0-639.933741ZM639.976 191.982l127.993 0 0 639.966-127.993 0 0-639.966z"/></svg><span id="video-control-nowtime">0:00</span></div><div id="tranger" class="tranger" ><div class="tranger-a" id="tranger-a"></div><div class="tranger-b"></div><div id="tranger-c" class="tranger-c"></div></div></div></div></div></div>';
    tdplayer.warp.innerHTML = tdplayer.v;
    console.log("ok");
    for (var i = 0; i < tdplayer.videosrcarr.length; i++) {
        var video = document.createElement("video");
        video.src = tdplayer.videosrcarr[i];
        video.className = "dm-video";
        if (i != 0) {
            video.style.display = "none";
            video.preload = "meta";
        } else {
            video.preload = "load";
            tdplayer.Element = video;
        }
        $d("tdplayer").appendChild(video);
    }
    tdplayer.videoelearr = $d("tdplayer").getElementsByTagName("video");
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
                $d("video-control-alltime").innerHTML = getvideotime(tdplayer.alltime).m + ":" + getvideotime(tdplayer.alltime).s;
            }
        }
    }
    tdplayer.Element.poster = tdplayer.vposter;
    tdplayer.danmuelement = $d("danmu");
    tdplayer.sjc = 0;
    tdplayer.dsq = 0;
    tdplayer.leftarr = [];
    tdplayer.toparr = [];
    tdplayer.dmheight = 31;
    tdplayer.dmplace = 1;
    //弹幕行高
    tdplayer.width = tdplayer.Element.offsetWidth;
    tdplayer.height = tdplayer.Element.offsetHeight;
    //样式
    tdplayer.style=document.createElement('style');
	tdplayer.style.id='playerstyle';
	document.body.appendChild(tdplayer.style);
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
            dm.className = "danmu dm-left";
            dm.style.transform = "translateX(-" + tdplayer.width + "px)";
            var e = $d("danmu").appendChild(dm);
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
            dm.className = "danmu dm-top";
            var dtop = tdplayer.gettoptop();
            dm.style.top = dtop * tdplayer.dmheight + "px";
            tdplayer.toparr[dtop] = 1;
            var e = $d("danmu").appendChild(dm);
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
    //弹幕开关
    $d("dm-dmk").addEventListener("click", function() {
        if (this.className == "dm-dmk") {
            this.className = "dm-dmk dm-dmk-c";
            $d("danmu").style.opacity = "0";
        } else {
            this.className = "dm-dmk";
            $d("danmu").style.opacity = "1";
        }
    });
    //弹幕回车按下
    $d("dm-text").onkeydown = function(event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e.keyCode == 13) {
            $d("dm-up").click();
        }
    };
    //弹幕发送
    $d("dm-up").addEventListener("click", function() {
        tdplayer.send($d("dm-text").value, $d("tp-color-bo").style.backgroundColor, tdplayer.dmplace, 1);
        $d("dm-text").readonly = "readonly";
        //$("dm-text").style.background = "#f4f4f4";
        $d("dm-up").disabled = "true";
        $d("dm-up").style.background = "#777479";
        setTimeout(function() {
            $d("dm-text").value = "";
            //$("dm-text").style.background = "#fff";
            $d("dm-up").disabled = "";
            $d("dm-up").style.background = "#8715EF";
        }, 500);
        var postData = {
            id:tdplayer.videoid,
            text:$d("dm-text").value,
            color:$d("tp-color-bo").style.backgroundColor,
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
    	tdplayer.style.innerText='.dm-left {animation: dmleft '+v+'s linear;-webkit-animation: dmleft '+v+'s linear;}';
    }
    //视频播放
    $d("video-control-play").onclick = function() {
        $d("dm-oneplay").style.display = "none";
        if (tdplayer.dsq == 0) {
            tdplayer.Interval = setInterval(danmutime, 100);
            tdplayer.dsq = 1;
        }
        $d("video-con").style.opacity = "0";
        var e = $d("danmu").getElementsByTagName("div");
        this.style.display = "none";
        $d("video-control-paused").style.display = "inline-block";
        tdplayer.Element.play();
        for (var i = e.length - 1; i >= 0; i--) {
            removeClass(e[i], "dm-suspend");
        }
    };
    //视频暂停
    $d("video-control-paused").onclick = function() {
        clearInterval(tdplayer.Interval);
        tdplayer.dsq = 0;
        var e = $d("danmu").getElementsByTagName("div");
        this.style.display = "none";
        $d("video-control-play").style.display = "inline-block";
        tdplayer.Element.pause();
        for (var i = e.length - 1; i >= 0; i--) {
            addClass(e[i], "dm-suspend");
        }
        $d("dm-spinner").style.display = "none";
    };
    $d("dm-oneplay").addEventListener("click", function() {
        this.style.display = "none";
        $d("video-control-play").onclick();
    });
    //控件显示
    $d("video-con").onmousemove = function() {
        showbar();
    };
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
        var Days = 7;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1e3);
        document.cookie = "tpsound=" + parseInt($d("dm-syk-range").value) + ";expires=" + exp.toGMTString() + "&path=/";
    };
    tdplayer.soundcookie = getCookie("tpsound");
    if (tdplayer.soundcookie) {
        $d("dm-syk-range").value = tdplayer.soundcookie;
        tdplayer.Element.volume = parseInt($d("dm-syk-range").value) * .01;
    } else {
        tdplayer.changersound();
    }
    //音量调节
    $d("dm-syk").onmousemove = function() {
        $d("dm-syk-range").style.width = "70px";
        $d("dm-syk-range").style.opacity = "1";
    };
    $d("dm-syk").onmouseout = function() {
        $d("dm-syk-range").style.width = "1px";
        $d("dm-syk-range").style.opacity = "0";
    };
    $d("dm-syk-range").addEventListener("click", function() {
        var i = parseInt($d("dm-syk-range").value) * .01;
        tdplayer.Element.volume = i;
        tdplayer.changersound();
    });
    function getnowalltime() {
        var videotime = 0;
        for (var i = 0; i <= tdplayer.nowduan - 1; i++) {
            videotime += tdplayer.videotimearr[i];
        }
        videotime += tdplayer.videoelearr[tdplayer.nowduan].currentTime;
        return videotime;
    }
    //定时器
    function danmutime() {
        var videotime = getnowalltime();
        var smalltime = tdplayer.videoelearr[tdplayer.nowduan].currentTime;
        $d("tranger-a").style.width = videotime / tdplayer.alltime * 100 + "%";
        var buff = tdplayer.videoelearr[tdplayer.nowduan].buffered;
        //判断缓存段
        for (var i = 0; i < buff.length; i++) {
            if (buff.start(i) <= smalltime && smalltime < buff.end(i)) {
                var oldduan = tdplayer.nowduan - 1, oldtime = 0, time2 = 0;
                for (var i = 0; i <= oldduan; i++) {
                    oldtime += tdplayer.videotimearr[i];
                }
				if (tdplayer.videoelearr[tdplayer.nowduan].buffered.end(i)) {
                    time2 = oldtime + tdplayer.videoelearr[tdplayer.nowduan].buffered.end(i);
                }
                var width = time2 / tdplayer.alltime * 100 + "%";
                if ($d("tranger-c").style.width != width) {
                    $d("tranger-c").style.width = width;
                }
                break;
            }
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
        var videotime = getnowalltime();
        //当前段播放将要结束 缓存下一段
        var temp = tdplayer.videoelearr[tdplayer.nowduan].currentTime;
        if (temp + 10 >= tdplayer.videotimearr[tdplayer.nowduan]) {
            //console.log("当前正在播放第" + tdplayer.nowduan + "段，正在加载下一段");
            if (tdplayer.videoelearr[tdplayer.nowduan + 1]) {
                tdplayer.videoelearr[tdplayer.nowduan + 1].preload = "load";
            }
        }
        //检测是否播放
        //          if(tdplayer.a){
        //          	if (tdplayer.a>temp-2||tdplayer.a<temp+2) {
        //          	console.log('playyy a:'+tdplayer.a+"  temp: "+temp);
        //              tdplay();
        //         	 }
        //          }
        // tdplayer.a=temp;
        //播放下一段
        if (temp == tdplayer.videotimearr[tdplayer.nowduan]) {
            console.log("正在播放下一段");
            if (tdplayer.videoelearr[tdplayer.nowduan + 1]) {
                tdplayer.nowduan++;
                var oldele = tdplayer.videoelearr[tdplayer.nowduan - 1];
                var nowele = tdplayer.videoelearr[tdplayer.nowduan];
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
                        ele.play();
                        $d("dm-syk-range").click();
                        ele.currentTime = 0;
                    }
                }
            }
        }
        $d("video-control-nowtime").innerHTML = getvideotime(videotime).m + ":" + getvideotime(videotime).s;
        var t = $d("dm-send").offsetWidth - 280 + "px";
        if ($d("dm-text").style.width != t) {
            $d("dm-text").style.width = t;
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
                $d("dm-spinner").style.display = "none";
            }
        }
    }
    //进度条
    $d("tranger").onmousedown = function(event) {
        if ($d("video-control-play").display != "none") {
            $d("video-control-play").onclick();
        }
        var e = event || window.event || arguments.callee.caller.arguments[0];
        var xbl = show_coords(e, this);
        $d("tranger-a").style.width = xbl.xbl * 100 + "%";
        tiao(xbl.xbl * tdplayer.alltime);
        $d("dm-syk-range").click();
        tdplayer.nowdata = JSON.parse(tdplayer.data).danmu;
        
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
    for (var i = 0; i < tdplayer.videoelearr; i++) {
        i.addEventListener("waiting", videohc);
        function videohc() {
            console.log("loding");
            clearInterval(tdplayer.Interval);
            tdplayer.dsq = 0;
            $d("dm-spinner").style.display = "block";
            var e = $d("danmu").getElementsByTagName("div");
            for (var i = e.length - 1; i >= 0; i--) {
                addClass(e[i], "dm-suspend");
            }
        }
        tdplayer.Element.addEventListener("playing", function() {
            tdplay();
        });
    }
    function tdplay() {
        if ($d("dm-spinner").style.display = "block") {
            if (tdplayer.dsq == 0) {
                tdplayer.Interval = setInterval(danmutime, 100);
                tdplayer.dsq = 1;
            }
            var e = $d("danmu").getElementsByTagName("div");
            $d("dm-spinner").style.display = "none";
            $d("video-control-alltime").innerHTML = getvideotime(tdplayer.alltime).m + ":" + getvideotime(tdplayer.alltime).s;
            for (var i = e.length - 1; i >= 0; i--) {
                removeClass(e[i], "dm-suspend");
            }
        }
    }
    //键盘
    document.onkeydown = function(event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        
        showbar();
        if (e && e.keyCode == 39) {
            // right 键
            var time = tdplayer.Element.currentTime;
            tdplayer.Element.currentTime = time + 5;
        }
        if (e && e.keyCode == 37) {
            // left 键
            var time = tdplayer.Element.currentTime;
            tdplayer.Element.currentTime = time - 5;
            tdplayer.nowdata = JSON.parse(tdplayer.data).danmu;
        }
        if (e && e.keyCode == 32) {
            // space 键
           if (tdplayer.Element.paused) {
                $d("video-control-play").onclick();
            } else {
                $d("video-control-paused").onclick();
             }
        }
        if (e && e.keyCode == 38) {
            // up 键
            $d("dm-syk-range").value = parseInt($d("dm-syk-range").value) + 1;
            $d("dm-syk-range").click();
        }
        if (e && e.keyCode == 40) {
            // down 键
            $d("dm-syk-range").value = parseInt($d("dm-syk-range").value) - 1;
            $d("dm-syk-range").click();
        }
    };
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
    $d("video-full").addEventListener("click", function() {
        var e = $d("dm-video-warp");
        document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() :document.mozCancelFullScreen ? document.mozCancelFullScreen() :document.webkitCancelFullScreen && document.webkitCancelFullScreen() :e.requestFullscreen ? e.requestFullscreen() :e.mozRequestFullScreen ? e.mozRequestFullScreen() :e.webkitRequestFullscreen && e.webkitRequestFullscreen();
        setTimeout(function() {
            tdplayer.width = $d("danmu").offsetWidth;
            var e = $d("danmu").getElementsByTagName("div");
            dmspeend(tdplayer.width / 100);
            for (var i = 0; i < e.length; i++) {
                if (hasClass(e[i], "dm-left")) {
                    e[i].style.transform = "translateX(-" + tdplayer.width + "px)";
                }
            }
        }, 1e3);
    });
    function showbar() {
        $d("video-con").style.opacity = "1";
        tdplayer.sjc++;
        var time = setTimeout(sjc, 2e3, tdplayer.sjc);
    }
    function sjc(time) {
        if (time >= tdplayer.sjc) {
            $d("video-con").style.opacity = "0";
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
    var danmucon = $d("tp-con");
    var colorwarp = $d("tp-color-warp");
    $d("tp-color-bo").addEventListener("click", function() {
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
            $d("tp-color-bo").style.backgroundColor = this.style.background;
        });
        colormain.appendChild(color);
        colorwarp.appendChild(colormain);
    }
    //设置
    //视频速度设置
    $c(".tp-speend-con")[0].addEventListener("click", function() {
        var t = $c(".tp-speend")[0];
        if (t.style.display == "block") {
            t.style.display = "none";
        } else {
            t.style.display = "block";
        }
    });
    var videospeendele = $c(".tp-speend")[0].childNodes;
    for (i = 0; i < videospeendele.length; i++) {
        var e = videospeendele[i];
        var s = parseFloat(videospeendele[i].innerText).toFixed(2);
        if (s != "NaN") {
            e.onclick = function() {
                var t = parseFloat(this.innerText).toFixed(2);
                $c(".dm-video")[0].playbackRate = t;
            };
        } else {
            e.onclick = function() {
                $c(".dm-video")[0].playbackRate = 1;
            };
        }
    }
        $c("#danmu")[0].onmousedown = function(event) {
            var container = $c(".dm-video-warp")[0];
            var rightmenu = $c(".dm-rightmenu")[0];
            var e = event||window.event||arguments.callee.caller.arguments[0];
            if (e.button == 2) {
                rightmenu.style.display = "block";
                var evt = window.event || arguments[0];
                var leftedge, topedge, danmuheight = $d("danmu").offsetHeight, danmuwidth = $d("danmu").offsetWidth;
                if (danmuheight == document.documentElement.clientHeight) {
                    topedge = evt.clientY;
                    leftedge = evt.clientX;
                    if (leftedge + rightmenu.offsetWidth > danmuwidth) {
                        leftedge = danmuwidth - rightmenu.offsetWidth;
                    }
                    if (topedge + rightmenu.offsetWidth > danmuheight) {
                        topedge = danmuheight - rightmenu.offsetHeight;
                    }
                } else {
                    topedge = evt.clientY + document.body.scrollTop - container.offsetTop;
                    leftedge = evt.clientX - container.offsetLeft;
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
            } else if (e.button == 0) {
                //如果左按键
                if (rightmenu.style.display == "block") {
                    rightmenu.style.display = "none";
                } else {
                    //视频暂停
                    if (tdplayer.Element.paused) {
                        $d("video-control-play").onclick();
                    } else {
                        $d("video-control-paused").onclick();
                    }
                }
            }
        };
    $d("tp-place").addEventListener("click", function() {
        if (tdplayer.dmplace == 1) {
            tdplayer.dmplace = 2;
            this.innerText = "▲顶部弹幕";
        } else {
            tdplayer.dmplace = 1;
            this.innerText = "◀滚动弹幕";
        }
    });
}