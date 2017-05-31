/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = {
  html: function html() {
    return "<div class=\"tp-video-warp\">\n  <div class=\"tp-video-main\">\n    <ul class=\"tp-rightmenu\">\n      <li class=\"tp-copy-warp\">\n        <textarea rows=\"1\" class=\"tp-copy-input\">\u590D\u5236\u5F39\u5E55</textarea></li>\n      <li class=\"tp-speend-con\">\u64AD\u653E\u901F\u5EA6\n        <ul class=\"tp-speend\">\n          <li>0.5</li>\n          <li>0.75</li>\n          <li>\u6B63\u5E38</li>\n          <li>1.25</li>\n          <li>1.5</li>\n          <li>2</li></ul>\n      </li>\n      <a href=\"https://github.com/haocity/tdplayer/issues\" target=\"_blank\">\n        <li>\u610F\u89C1\u53CD\u9988</li></a>\n      <a href=\"https://www.haotown.cn/about.html\" target=\"_blank\">\n        <li>\u5173\u4E8E\u4F5C\u8005</li></a>\n      <a href=\"https://github.com/haocity/tdplayer\" target=\"_blank\">\n        <li>About tdplayer</li></a>\n    </ul>\n    <div class=\"video-end\">\n      <svg t=\"1493275296747\" class=\"replay\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3488\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"100\" height=\"100\">\n        <path d=\"M48.012564 368.005052 256.007345 368.005052C282.50851 368.005052 303.987849 346.493648 303.987849 319.992484 303.987849 293.459261 282.50851 272.011981 256.007345 272.011981L172.518731 272.011981C247.808645 165.585172 371.698941 95.994406 512.016029 95.994406 741.749327 95.994406 928.004256 282.249339 928.004256 511.981298 928.004256 741.731959 741.749327 927.954828 512.016029 927.954828 282.249335 927.954828 95.994406 741.730625 95.994406 511.981298 95.994406 485.481472 74.513729 464.00213 48.012564 464.00213 21.479342 464.00213 0 485.481472 0 511.981298 0 794.734285 229.213614 1023.981298 512.017367 1023.981298 794.75299 1023.981298 1024 794.734285 1024 511.981298 1024 229.214949 794.751652 0 512.017367 0 340.405743 0 188.81594 84.590769 95.99574 214.213612L95.99574 128.003676C95.99574 101.471785 74.515063 79.991108 48.013903 79.991108 21.480677 79.991108 0.001338 101.471785 0.001338 128.003676L0.001338 319.993822C0 346.493645 21.479339 368.005052 48.012564 368.005052\" p-id=\"3489\" fill=\"#ffffff\"></path>\n      </svg>\n    </div>\n    <div class=\"tdplayer\"></div>\n    <div class=\"danmu-warp\"></div>\n    <div class=\"tp-oneplay\">\n      <svg style=\"width: 200px;height:200px;\" class=\"tp-icon\" viewbox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill=\"#fff\" d=\"M836.1152 512 194.2848 886.4v-748.8000000000001L836.1152 512z\" /></svg>\n    </div>\n    <div class=\"tp-spinner\">\n      <div class=\"rect1\"></div>\n      <div class=\"rect2\"></div>\n      <div class=\"rect3\"></div>\n      <div class=\"rect4\"></div>\n      <div class=\"rect5\"></div>\n    </div>\n    <div class=\"tp-video-con\">\n      <div class=\"tp-send\">\n        <div class=\"tp-logo-small\"></div>\n        <input type=\"text\" class=\"tp-text\" required=\"true\" placeholder=\"\u5BA2\u5B98\uFF0C\u4E0D\u6765\u5410\u69FD\u4E00\u4E0B\u5417?\" autocomplete=\"off\" />\n        <div class=\"tp-color\">\n          <div class=\"tp-color-bo\" style=\"background-color: rgb(255, 255, 255)\"></div>\n          <div class=\"tp-con\">\n            <div class=\"tp-place\">\u25C0\u6EDA\u52A8\u5F39\u5E55</div>\n            <div class=\"tp-color-warp\"></div>\n          </div>\n        </div>\n        <input class=\"tp-up\" type=\"submit\" value=\"\u53D1\u9001\" /></div>\n      <div class=\"tp-control\">\n        <div style=\"float:right;\">\n          <span class=\"tp-control-alltime\" style=\"padding:0 6px 0 12px\">0:00</span>\n          <div class=\"tp-danmu-switch\">\u5F39</div>\n          <div class=\"tp-syk\">\n            <span class=\"tp-syk-ico\">\u266B</span>\n            <input class=\"tp-syk-range\" type=\"range\" name=\"points\" min=\"0\" max=\"100\" value=\"100\" /></div>\n          <svg class=\"video-full\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"tp-icon\" viewbox=\"0 0 1024 1024\" version=\"1.1\" p-id=\"1427\">\n            <path d=\"M971.862 52.538c-10.964-10.992-25.546-17.044-41.056-17.044L429.616 35.494l0 79.362 479.86 0 0 465.288 79.364 0L988.84 93.524C988.84 78.024 982.802 63.46 971.862 52.538z\" p-id=\"1428\" />\n            <path d=\"M115.092 429.62 35.728 429.62l0 500.854c0 15.5 6.038 30.066 16.982 40.994 10.966 10.988 25.544 17.04 41.05 17.04l469.182 0 0-79.364L115.092 909.144 115.092 429.62z\" p-id=\"1429\" />\n            <path d=\"M127.16 193.578l73.198 73.198-0.034 0.034 40.438 40.44 14.164 14.096 152.616 152.616c8.796 8.796 20.492 13.64 32.932 13.64 12.442 0 24.138-4.846 32.936-13.644 18.158-18.16 18.156-47.708-0.002-65.866l-141.318-141.318 0.094-0.094-40.484-40.486-14.162-13.97L192.812 127.492l146.47 0 0-92L101.16 35.492c-36.392 0-66 29.608-66 66l0 237.972 92 0L127.16 193.578z\" p-id=\"1430\" />\n            <path d=\"M896.578 830.358l-73.198-73.198 0.034-0.034-40.44-40.44-14.148-14.084-152.622-152.62c-8.796-8.8-20.496-13.648-32.942-13.648-12.444 0-24.14 4.848-32.94 13.646-18.148 18.156-18.148 47.702 0.004 65.866l141.31 141.306-0.094 0.094 40.492 40.494 14.16 13.974 84.728 84.726-146.734 0 0 92 238.386 0c36.392 0 66-29.608 66-66l0-237.96-92 0L896.574 830.358z\" p-id=\"1431\" /></svg>\n        </div>\n        <div style=\"float: left;\">\n          <svg class=\"tp-control-play tp-icon\" viewbox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill=\"#fff\" d=\"M836.1152 512 194.2848 886.4v-748.8000000000001L836.1152 512z\" /></svg>\n          <svg class=\"tp-control-paused tp-icon\" style=\"display:none\" viewbox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill=\"#fff\" d=\"M256.033769 192.014198l127.977743 0 0 639.933741-127.977743 0 0-639.933741ZM639.976 191.982l127.993 0 0 639.966-127.993 0 0-639.966z\" /></svg>\n          <span class=\"tp-control-nowtime\">0:00</span>\n          <span class=\"tp-control-alltime-phone\">/ 0:00</span></div>\n        <div class=\"tp-tranger\">\n          <div class=\"tp-tranger-a\"></div>\n          <div class=\"tp-tranger-b\"></div>\n          <div class=\"tp-tranger-c\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<style class=\"css\" type=\"text/css\"></style>\n\n        ";
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(3);
if(typeof content === 'string') content = [[module.i, content, '']];
// Prepare cssTransformation
var transform;

var options = {}
options.transform = transform
// add the styles to the DOM
var update = __webpack_require__(5)(content, options);
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./style.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./style.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*!
 * TDPLAYER.
 * @author   HaoDong <ureygt@gmail.com> <http://www.haotown.cn>
 * @license  The Star And Thank Author License (SATA)
 */
//tdvidplay(document.querySelector('#player'),document.querySelector('#pageInfo').getAttribute("data-vid"))
var html = __webpack_require__(0);
__webpack_require__(1);
window.$d = function (e) {
    return document.getElementById(e);
};
window.$c = function (e) {
    return document.querySelectorAll(e);
};
window.hasClass = function (elements, cName) {
    return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
};

window.addClass = function (elements, cName) {
    if (!hasClass(elements, cName)) {
        elements.className += " " + cName;
    }
};

window.removeClass = function (elements, cName) {
    if (hasClass(elements, cName)) {
        elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
    }
};

window.tdvidplay = function (ele, vid) {
    console.log('vid:' + vid);
    var e = document.createElement("div");
    e.className = "tp-loding";
    if (pageInfo) {
        if (pageInfo.coverImage) {
            var backimg = document.createElement("div");
            backimg.className = "tp-img-back";
            backimg.style.backgroundImage = "url(" + pageInfo.coverImage + ")";
            ele.appendChild(backimg);
        }
    }
    ele.appendChild(e);
    e.innerText += "正在加载中...";
    var damuurl = 'https://t5.haotown.cn/acfun/danmu/?vid=' + vid;
    var videourl = 'https://t5.haotown.cn/pyapi/vid/' + vid;
    var videosrcarr = [],
        danmudata = void 0;
    fetch(damuurl).then(function (response) {
        return response.json();
    }).then(function (json) {
        var v1 = void 0,
            v2 = void 0,
            v3 = void 0,
            vv = void 0;
        for (var i = 0; i < json.stream.length; i++) {
            if (json.stream[i].stream_type == 'mp4hd3') {
                v1 = json.stream[i];
            }
            if (json.stream[i].stream_type == 'mp4hd2') {
                v2 = json.stream[i];
            }
            if (json.stream[i].stream_type == 'mp4hd') {
                v3 = json.stream[i];
            }
        }
        if (v1) {
            vv = v1;
        } else if (v2) {
            vv = v2;
        } else if (v3) {
            vv = v3;
        } else {
            console.log('解析失败');
        }
        console.log(vv);
        for (var i = 0; i < vv.segs.length; i++) {
            videosrcarr.push(vv.segs[i].url);
        }
        console.log(videosrcarr);
        checkend();
    }).catch(function (e) {
        return console.log(" error", e);
    });
    fetch(videourl).then(function (response) {
        return response.json();
    }).then(function (data) {
        danmudata = data;
        console.log(data);
        checkend();
    }).catch(function (e) {
        return console.log(" error", e);
    });
    function checkend() {
        if (videosrcarr && danmudata) {
            console.log('end');
            tdplayer(ele, videosrcarr, danmudata, null, null);
        }
    }
};
window.tdacplay = function (ele, acid) {
    console.log('acid:' + acid);
    var e = ele.querySelector(".tp-loding");
    if (!e) {
        e = document.createElement("div");
        e.className = "tp-loding";
        try {
            if (pageInfo.coverImage) {
                var backimg = document.createElement("div");
                backimg.className = "tp-img-back";
                backimg.style.backgroundImage = "url(" + pageInfo.coverImage + ")";
                ele.appendChild(backimg);
            }
        } catch (eero) {}
        ele.appendChild(e);
        e.innerText += "正在加载中...";
    }
    var xmlhttp = new XMLHttpRequest();
    xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
            var data = xmlhttp.responseText;
            e.innerText += "\n获取视频弹幕信息成功..";
            e.innerText += "\n正在解析视频地址";
            if (JSON.parse(data).info.videoList[0].source_type == 'youku') {
                var vid = JSON.parse(data).info.videoList[0].source_id;
                console.log('这应该是优酷源的视频');
                var xmlhttp2;
                xmlhttp2 = new XMLHttpRequest();
                xmlhttp2.onreadystatechange = function () {
                    if (xmlhttp2.readyState == 4) {
                        if (xmlhttp2.status == 200) {
                            var t = xmlhttp2.responseText;
                            var c = JSON.parse(t);
                            for (var i = 0; i < c.data.length; i++) {
                                if (c.data[i].stream_type == 'mp4hd') {
                                    var arr = new Array();
                                    for (var x = 0; x < c.data[i].segs.length; x++) {
                                        arr.push(c.data[i].segs[x].cdn_url);
                                    }
                                    console.log(arr);
                                    tdstart(ele, arr, data, null, null);
                                    break;
                                }
                            }
                        } else {
                            e.innerText += "\n视频解析失败";
                        }
                    }
                };
                xmlhttp2.open("GET", "https://t5.haotown.cn/youku/api/?youku=" + vid, true);
                xmlhttp2.send();
            } else {
                var xmlhttp2;
                xmlhttp2 = new XMLHttpRequest();
                xmlhttp2.onreadystatechange = function () {
                    if (xmlhttp2.readyState == 4) {
                        if (xmlhttp2.status == 200) {
                            var t = xmlhttp2.responseText;
                            var videosrcarr = JSON.parse(t).video;
                            if (videosrcarr) {
                                tdplayer(ele, videosrcarr, data, null, null);
                            } else {
                                e.innerText += "\n视频解析失败  5秒后将重试";
                                setTimeout(function () {
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
};

window.tdplayer = function (Element, src, data, poster, videotype) {
    var tdplayer = new Object();
    tdplayer.warp = Element;
    tdplayer.videosrcarr = src;
    tdplayer.data = data;
    tdplayer.videoinfo = JSON.parse(tdplayer.data).info;
    tdplayer.nowdata = JSON.parse(tdplayer.data).danmu;
    if (poster) {
        tdplayer.vposter = poster;
    } else {
        poster = tdplayer.videoinfo.coverImage;
    }
    tdplayer.vposter = poster;
    tdplayer.nowduan = 0;
    tdplayer.v = html.html();
    tdplayer.warp.innerHTML = tdplayer.v;
    function eleload() {
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
        this.alltime_phone = $c(".tp-control-alltime-phone")[0];
    }
    tdplayer.ele = new eleload();
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
                    type: "flv",
                    url: tdplayer.videosrcarr[i]
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
            setTimeout(function () {
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
                tdplayer.ele.alltime_phone.innerHTML = '&nbsp;/&nbsp;' + tdplayer.ele.alltime.innerHTML;
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
        tdplayer.ele.video_con.style.opacity = '1';
        tdplayer.ele.video_con.style.display = 'none';
    }
    //弹幕行高
    tdplayer.width = tdplayer.Element.offsetWidth;
    tdplayer.height = tdplayer.Element.offsetHeight;
    //样式
    tdplayer.send = function (text, color, wz, me) {
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
            setTimeout(function () {
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
            setTimeout(function () {
                tdplayer.danmuhide(e, dtop);
            }, 5e3);
        }
    };
    tdplayer.dmend = function () {
        tdplayer.danmuelement.removeChild(this);
    };
    tdplayer.danmuhide = function (e, topid) {
        if (tdplayer.Element.paused) {
            setTimeout(function () {
                tdplayer.danmuhide(e, topid);
            }, tdplayer.width * 10 + 1e3);
        } else {
            e.remove();
            tdplayer.toparr[topid] = 0;
        }
    };
    tdplayer.getlefttop = function () {
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
    tdplayer.gettoptop = function () {
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
    tdplayer.ele.replay.addEventListener("click", function () {
        tiao(0);
        tdplayer.ele.end.style.display = "none";
    });
    //播放完成
    for (var i = 0; i < tdplayer.videoelearr.length; i++) {
        (function (arg) {
            tdplayer.videoelearr[i].onended = function () {
                if (tdplayer.videoelearr[arg + 1]) {
                    tdplayer.nowduan = arg + 1;
                    var oldele = tdplayer.videoelearr[arg];
                    var nowele = tdplayer.videoelearr[arg + 1];
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
                } else {
                    console.log("播放完毕" + arg);
                    tdplayer.ele.end.style.display = "block";
                }
            };
        })(i);
    }

    //弹幕开关
    tdplayer.ele.danmu_switch.addEventListener("click", function () {
        if (this.className == "tp-danmu-switch") {
            this.className = "tp-danmu-switch tp-danmu-switch-c";
            tdplayer.ele.danmu_warp.style.opacity = "0";
        } else {
            this.className = "tp-danmu-switch";
            tdplayer.ele.danmu_warp.style.opacity = "1";
        }
    });
    //弹幕回车按下
    tdplayer.ele.tp_text.onkeydown = function (event) {
        var e = event || window.event || arguments.callee.caller.arguments[0];
        if (e.keyCode == 13) {
            tdplayer.ele.tp_up.click();
        } else if (e.keyCode == 32) {
            e.stopPropagation();
        }
    };
    //弹幕发送
    tdplayer.ele.tp_up.addEventListener("click", function () {
        tdplayer.send(tdplayer.ele.tp_text.value, tdplayer.ele.tp_color_bo.style.backgroundColor, tdplayer.dmplace, 1);
        tdplayer.ele.tp_text.readonly = "readonly";
        //$("tp-text").style.background = "#f4f4f4";
        tdplayer.ele.tp_up.disabled = "true";
        tdplayer.ele.tp_up.style.background = "#777479";
        setTimeout(function () {
            tdplayer.ele.tp_text.value = "";
            //$("tp-text").style.background = "#fff";
            tdplayer.ele.tp_up.disabled = "";
            tdplayer.ele.tp_up.style.background = "#8715EF";
        }, 500);
        var postData = {
            id: tdplayer.videoid,
            text: tdplayer.ele.tp_text.value,
            color: tdplayer.ele.tp_color_bo.style.backgroundColor,
            time: parseInt(tdplayer.Element.currentTime * 10),
            place: tdplayer.dmplace
        };
        postData = function (obj) {
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
        xhr.onreadystatechange = function () {
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
        console.log('弹幕速度调整为' + v);
        tdplayer.ele.css.innerText = ".tp-left {animation: dmleft " + v + "s linear;-webkit-animation: dmleft " + v + "s linear;}";
    }
    //视频播放
    tdplayer.ele.video_control_play.onclick = function () {
        tdplayer.ele.tp_oneplay.style.display = "none";
        if (tdplayer.dsq == 0) {
            tdplayer.Interval = setInterval(danmutime, 100);
            tdplayer.dsq = 1;
        }
        if (!tdplayer.phone) {
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
    tdplayer.ele.video_control_paused.onclick = function () {
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
    tdplayer.ele.tp_oneplay.addEventListener("click", function () {
        this.style.display = "none";
        tdplayer.ele.video_control_play.onclick();
    });
    //控件显示
    if (tdplayer.phone) {
        tdplayer.ele.danmu_warp.addEventListener("click", function () {
            var e = tdplayer.ele.video_con;
            if (e.style.display == "block") {
                console.log("隐藏");
                e.style.display = "none";
            } else {
                e.style.display = "block";
                console.log("显示");
            }
        });
    } else {
        tdplayer.ele.video_con.onmousemove = function () {
            showbar();
        };
    }
    function getCookie(Name) {
        var cookieName = encodeURIComponent(Name) + "=",
            returnvalue = "",
            cookieStart = document.cookie.indexOf(cookieName),
            cookieEnd = null;
        if (cookieStart > -1) {
            cookieEnd = document.cookie.indexOf(";", cookieStart);
            if (cookieEnd == -1) {
                cookieEnd = document.cookie.length;
            }
            returnvalue = decodeURIComponent(document.cookie.substring(cookieStart + cookieName.length, cookieEnd));
        }
        return returnvalue;
    }
    tdplayer.changersound = function () {
        var s = parseInt(tdplayer.ele.tp_syk_range.value) * .01;
        for (var i = 0; i < tdplayer.videoelearr.length; i++) {
            tdplayer.videoelearr[i].volume = s;
        }
        var Days = 7;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1e3);
        document.cookie = "tpsound=" + s + ";expires=" + exp.toGMTString() + "&path=/";
    };
    tdplayer.soundcookie = getCookie("tpsound");
    if (tdplayer.soundcookie) {
        tdplayer.ele.tp_syk_range.value = tdplayer.soundcookie * 100;
        tdplayer.Element.volume = parseInt(tdplayer.ele.tp_syk_range.value) * .01;
    } else {
        tdplayer.changersound();
    }
    //音量调节
    tdplayer.ele.tp_syk_range.addEventListener("input", function () {
        tdplayer.changersound();
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
        var oldduan = tdplayer.nowduan - 1,
            oldtime = 0,
            time2 = 0;
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
    setInterval(function () {
        var videotime = getnowtime(videotime);
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
        var oldduan = getduan(time) - 1,
            oldtime = 0;
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
    tdplayer.ele.tranger.onmousedown = function (event) {
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
        var ybl = 1 - y / elem.offsetHeight;
        return {
            x: x,
            y: y,
            w: elem.offsetWidth,
            h: elem.offsetHeight,
            xbl: xbl,
            ybl: ybl
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
        tdplayer.videoelearr[i].addEventListener("waiting", function () {
            videohc();
        });
        tdplayer.videoelearr[i].addEventListener("playing", function () {
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
    tdplayer.ele.tp_video_warp.addEventListener('click', function () {
        setTimeout(function () {
            tdplayer.ele.tp_video_warp.xz = true;
        }, 200);
        console.log('ccc');
    }, false);
    document.addEventListener('click', function (e) {
        if (e.target == tdplayer.ele.danmu_warp) {
            tdplayer.ele.tp_video_warp.xz = true;
        } else {
            tdplayer.ele.tp_video_warp.xz = false;
        }
    }, false);
    document.addEventListener("keydown", function (event) {
        var ev = event || window.event || arguments.callee.caller.arguments[0];
        if (tdplayer.ele.tp_video_warp.xz == true) {
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
            if (ev && ev.keyCode == 38) {
                // up 键
                event.preventDefault();
                tdplayer.ele.tp_syk_range.value = parseInt(tdplayer.ele.tp_syk_range.value) + 1;
                tdplayer.changersound();
            }
            if (ev && ev.keyCode == 40) {
                // down 键
                event.preventDefault();
                tdplayer.ele.tp_syk_range.value = parseInt(tdplayer.ele.tp_syk_range.value) - 1;
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
            m: m,
            s: tm
        };
    }
    tdplayer.ele.full.addEventListener("click", function () {
        var e = tdplayer.ele.tp_video_warp;
        document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement ? document.cancelFullScreen ? document.cancelFullScreen() : document.mozCancelFullScreen ? document.mozCancelFullScreen() : document.webkitCancelFullScreen && document.webkitCancelFullScreen() : e.requestFullscreen ? e.requestFullscreen() : e.mozRequestFullScreen ? e.mozRequestFullScreen() : e.webkitRequestFullscreen && e.webkitRequestFullscreen();
        setTimeout(function () {
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
        if (!tdplayer.phone) {
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
    tdplayer.ele.tp_color_bo.addEventListener("click", function () {
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
        color.addEventListener("click", function () {
            tdplayer.ele.tp_color_bo.style.backgroundColor = this.style.background;
        });
        colormain.appendChild(color);
        colorwarp.appendChild(colormain);
    }
    //设置
    //视频速度设置
    tdplayer.ele.tp_speend_con.addEventListener("click", function () {
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
            e.onclick = function () {
                var t = parseFloat(this.innerText).toFixed(2);
                for (var i = 0; i < tdplayer.videoelearr.length; i++) {
                    tdplayer.videoelearr[i].playbackRate = t;
                }
            };
        } else {
            e.onclick = function () {
                for (var i = 0; i < tdplayer.videoelearr.length; i++) {
                    tdplayer.videoelearr[i].playbackRate = 1;
                }
            };
        }
    }
    function tpeixtfull() {
        setTimeout(function () {
            tdplayer.width = tdplayer.ele.tdplayer.offsetWidth;
            dmspeend(tdplayer.width / 100);
            var e = tdplayer.ele.danmu_warp.getElementsByTagName("div");
            for (var i = e.length - 1; i >= 0; i--) {
                if (hasClass(e[i], "tp-left")) {
                    e[i].style.transform = "translateX(-" + tdplayer.width + "px)";
                }
            }
        }, 1000);
    }
    document.addEventListener('webkitfullscreenchange', function (c) {
        if (document.webkitFullscreenElement) {
            console.log('进入全屏');
        } else {
            console.log('退出全屏');
            tpeixtfull();
        }
    });
    document.addEventListener('mozfullscreenchange', function (c) {
        if (document.mozFullscreenElement) {
            console.log('进入全屏');
        } else {
            console.log('退出全屏');
            tpeixtfull();
        }
    });
    tdplayer.ele.danmu_warp.onmousedown = function (event) {
        var container = tdplayer.ele.tdplayer;
        var rightmenu = tdplayer.ele.tp_rightmenu;
        var ev = event || window.event || arguments.callee.caller.arguments[0];
        if (!tdplayer.phone) {
            if (ev.button == 2) {
                var target = ev.target || ev.srcElement;
                if (hasClass(target, "danmu")) {
                    tdplayer.ele.copytext.innerHTML = target.innerHTML;
                    tdplayer.ele.copy.style.display = "block";
                    tdplayer.ele.copy.onclick = function () {
                        tdplayer.ele.copytext.select();
                        document.execCommand("Copy");
                        rightmenu.style.display = "none";
                    };
                } else {
                    tdplayer.ele.copy.style.display = "none";
                }
                rightmenu.style.display = "block";
                var leftedge,
                    topedge,
                    danmuheight = tdplayer.ele.danmu_warp.offsetHeight,
                    danmuwidth = tdplayer.ele.danmu_warp.offsetWidth;
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
                    this.IContextmenuHander = function () {
                        return false;
                    };
                    document.attachEvent("oncontextmenu", this.IContextmenuHander);
                } else {
                    this.IContextmenuHander = document.oncontextmenu;
                    document.oncontextmenu = function () {
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
    tdplayer.ele.tp_place.addEventListener("click", function () {
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
        if (w) {
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
                span.onmousemove = function () {
                    if (d.style.display == "none") {
                        d.style.display = "block";
                    }
                };
                span.onmouseout = function () {
                    if (d.style.display == "block") {
                        d.style.display = "none";
                    }
                };
            }
        }
    }
    var thisurl = window.location.href;
    if (thisurl.indexOf("acfun.cn") < 0 || thisurl.indexOf("acfun.tv") < 0 || thisurl.indexOf("aixifan.com") < 0) {
        chadown();
        editor32();
    }

    function editor32() {
        if ($d('editor')) {
            $d('editor').addEventListener('keydown', function (event) {
                var e = event || window.event || arguments.callee.caller.arguments[0];
                if (e.keyCode == 32) {
                    e.stopPropagation();
                }
            });
        } else {
            setTimeout(editor32, 200);
        }
    }
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(4)(undefined);
// imports


// module
exports.push([module.i, "/*acfun*/\r\n.vdown {\r\n    width: 110px;\r\n    margin: 0;\r\n    padding: 20px 10px;\r\n    cursor: pointer;\r\n    position: relative;\r\n}\r\nsection.crumb .vdown .ico {\r\n    width: 36px;\r\n    height: 36px;\r\n    border-radius: 50%;\r\n    margin-right: 10px;\r\n}\r\nsection.player{\r\n\tposition: relative;\r\n\tmin-height:653px;\r\n}\r\n#vdown {\r\n\tposition: absolute;\r\n\tz-index: 5;\r\n\twidth: 300px;\r\n\tbackground: #fff;\r\n\tborder: 1px solid #eee;\r\n\tborder-radius: 5px;\r\n\tmargin-left: -150px;\r\n\tleft: 160px;\r\n\tpadding: 20px 10px;\r\n\tbox-shadow: 0 3px 8px rgba(0,0,0,0.1);\r\n\tbackground-color: #fff;\r\n\toverflow: hidden;\r\n}\r\n.down-btn, .down-btn>a {\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n}\r\n.down-btn {\r\n\tdisplay: inline-block;\r\n\tmargin: 10px 5px;\r\n\tpadding: 5px 10px;\r\n\tborder-radius: 5px;\r\n\tbackground-color: #d07878;\r\n\tbox-shadow: 1px 1px 5px #b5b5b5;\r\n\ttext-align: center;\r\n}\r\n/*player*/\r\n.tdplayer{\r\n\theight: 100%;\r\n\twidth: 100%;\r\n}\r\n\r\n.video-end {\r\n\tposition: absolute;\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tz-index: 8;\r\n\tbackground: #000 url(data:image/png;base64,/9j/4QAYRXhpZgAASUkqAAgAAAAAAAAAAAAAAP/sABFEdWNreQABAAQAAAA8AAD/7gAmQWRvYmUAZMAAAAABAwAVBAMGCg0AAAmxAAAO4QAAFwoAAB+s/9sAhAAGBAQEBQQGBQUGCQYFBgkLCAYGCAsMCgoLCgoMEAwMDAwMDBAMDg8QDw4MExMUFBMTHBsbGxwfHx8fHx8fHx8fAQcHBw0MDRgQEBgaFREVGh8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx//wgARCACfAfQDAREAAhEBAxEB/8QA5AABAAIDAQEAAAAAAAAAAAAAAAUGAgMEAQcBAQADAQEBAAAAAAAAAAAAAAABAgMEBQYQAAEEAQMCBAQFBQEAAAAAAAIBAwQFABAREiBQIRMUNCIzJBUwgCMlBmBwMUEyNREAAQICBgcGBAUEAwEAAAAAAQIDABEQITFBURIgYXGBIjIEscFCchMjMFCRUqHRYoIzcJKiU/DhFCQSAAECBQUAAAAAAAAAAAAAABEQUABggJAhIAFBYXETAQABAwIEBgICAwEAAAAAAAERACExQVEQYXGBIFCRobHB8NEw4UCA8XD/2gAMAwEAAhEDEQAAAflIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABkdhvMjWcpzAAAAAAAAAAAAAAAAAAAAAAAAAAAHpKEoZAAHMQ5ygAAAAAAAAAAAAAAAAAAAAAAAAAyJ46wAAAeEKR4AAAAAAAAAAAAAAAAAAAAAAAABOHeAexPkwAJKY6omCIA5AAAAAAAAAAAAAAAAAAAAAAAADrLAADdXrRHiN8byk1+gdfmRk3p3NauFcPAAAAAAAAAAAAengAAAAAAAAAABOncADfTrlOf2urPqzmM5dOnJf+n535GiIK+cgBmW46DEqxxFwO4gyuE4TR4UwxLKVoAGwvRQQCwkCbCxFWLMdhuKcbSzgqRpAAALmfRLROwyrPzLL1/MPUyhvtlPW4Yp0c+fbz9HkQG3kiKIkAGRcilgE4Zk6UgsZAlqKmc5dClgAnSylCNQO0sZkVk4y6lLPAd5JmBgQYAAPT6iXHu592aG4ParHP7HbOGKJyeOatxaI26lKTHdU+vxRHEKAAXoooBYzlLAU4sREFuKAYl2KSAC4kKdBAAFuMCqAu5gbSjkgWsxKSawAAeluPrsxO1n5/j7EPh6k1bzZC3PlNN7DXM7Ia5j5V0c4jSGAAL6UIAtBFlsKCWowIE5AXcpAAPoBGG0poBOmohwXUppieEkTpzlYAAABYztLAKdjl+juFvA4r889EZSh0zdbVXTL59tkIUjgAC/lAALaQhbj5+W4rBoALuUgsZAG4sBVS5lNPATxpIcF3KgbDjJI7CSK6cIAABKksDItPN7V/jz46UkpzJJ7UfJt8Im0eFZNYABYCvg9LUdBWDjJ0hjWAXI2nCVY6zM4SYIowBKGk4QWU7TEqR1HQcBMkAAAAZlkNgOuF+x3mM78cz2K9FZru2HzjagjCHAAAAAAAAAAAAAAAAAAAAAAAAB2E8egEjW1ry07qo29aTtnicxXzEAAAAAAAAAAAAAAAAAAAAAAAAA6ycNgAABxEIYAAAAAAAAAAAAAAAAAAAAAAAAAAGZInebz0wOUjjiAAAAAAAAAAAAAAAAAAAAAAAAAAAAB6DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//aAAgBAQABBQL+wqIq4MR5cSDnoUxYJYcd0e8tQ8ERFOlxhs8dYNvuqIqqxHRtPwZEfh3SKzxHXZemNXy5CPU1g0GSGfLPuMZvm50A6Q474kjTi56VzIESN6iVCB8QWDzt2mglvN+Y33GGGzXQDJFgtpiJp4ZGmOxXN477No/HelZJDi9qKIpDRNbDTQkTyKQcmDGR/IB1anJcrG3Z9YLYZVx23yIKqEiRoE9pUVFxqG09V9ACpnYxASu1hwY8qMQkJMtE87bsxmGcqoMeQ3yohz1tOiPK2rsRsHJP2mIwSRaqWjrRNOdcGI4+Y00OIw3XRPLODXiMkYzkj/SZwcLJdQTSRmUkEfIDkyZIxtJydPJcqU/b9aZN510v1tOXmwnB4uUKfUSVVZFAn6b/AM/InhS9FOz5kyPJSRJdBW3NIkko79tFF1uoji0zLkFIfyk9prB95dkqy6VFWbcbeu6/46SDZv8AmybA/u4Lcy3FHbI7XmPPMcHqkBMILpK05XgsiXEYkjOrpLLWk35fTVp+2a0afV2y/X0Pt3/n0HznYsg5LAJXwFXdcZ8KPoqE8qHWPcJ10zwl60srllzK21pB3hjRMpi1dcIZX+9l1SyZJPQq1pwycPrZdJs6qVGkt5fBtMBMqm+Uiwhm5lc0TL0n9Bx2ZL5MPziW2PjXaTl+Dpg/+RrQ/Ps13nVI+XXqu60H/bt3JE5Ep+QWi+FF0bxo1ekynbW3QXomtN7629/pXLxqlM11rvey5hx7W2hoi/gRy5MtOuNG1/IbIMetXppoWwwmiahtwbBVYZaaF/zuAhb8vHP5C+gxtJpfqdMXwp9aBPikCb06c4MSvyg/6f8Anav+FHlVB8w3FRTjNebIvT/UyF9RU60vvbb3+kJP2ZI7656OVtld76699USBealxTjPdcI9RJRLyPNYRPhOEr7gNttB6kSVpXeeWkr1M3FXZDLkfS3ZINfrFuQDPu0FvJUp2S5lXPbiqZcj1YtoiRvuVVkq55t5GfVh+ZJWS/kCwKJhLuWldJCPJmvo/J0g2oR4/38c+/wCGXI4byMybKQ2/JacJpyxntSm+sSUSA0MdI0p+M5Cu2JGSGEdRGRFeck0bBBS8shaa0mO7J3KO/wCWSKiprGsJcfI/8iaXPv8AXZL/AJEnEiIix55GxVVVe5syCbwDE063pIhhEpL3USIVCauDIZLN00UwTDltJjkpw/73/wD/2gAIAQIAAQUC/KRt3rbEzfOWb4Lm2KPeVXFXoQu7Ji6KvQqYmgr3VNkH4MJdE0ToT/Pdi/ATu6/gJ3gk607yqa76Ine9s45xxB/Ld//aAAgBAwABBQL8oe3fweIcdVFVGSXPTFhRyTFHvQMqWA2g9DrKFm3dV1aZ1I9sbfxwlHAJFyU33Vd9/iyOGji7IJeEj/K4h+AkqYb3Ie7Rl0fXAPbDLfoXu7BbFhruvSXeG39/6ARddtF73vnLN83/AC3f/9oACAECAgY/ArHftrH/2gAIAQMCBj8CqDxIfbznRmDwhdypUIHkQJ8G9eP/2gAIAQEBBj8C/oLICcYbYrXHPFShFafnM3P7YkkS0qxI4iMU4/NZC2JmtePwsyeXs+aZjzH4M2kVYkgdsZyjOm/Ic0qP0mz5lqFZ0cRhEwJTrioRdAPVn2xddvhD3TEZkjg+0jCMvUpV0r/mIG4x7awsKtUMYIvu+ZT+7R1QNVQ0Jprb8SMYDigFNkT4o/8AnTlZQMqdeug669AAmU74mXt4glSyoC0zEVqSf3GCOnM26EsobJWfEsR6LzQGvLVHrsHM1hhQ62sWpqVgYyuD1HL7z/1ClMJ9NxO6CDaKC7KTrc+LGWiEi1RlGVI/hrHfoHKop6hNuGqClQkRaIS2m1UMtoTJeN8tdC1uieU1RZP+4xIIEvJCi2JInwiG218qjIwpx9z2vCLPrBR05yuDb3wptfMmo/AbYb5iIzLT6rpszYwnOygqlXVBUplASLTKFLYRka8KaTksEs6sJ1Rn6clYHMk27RBbByuqrbNxlcYLbgyrFoj0ErkyTMj/AJdSk7tG2Htc+zQTqBjYkQW11gEp3GFJwJEOeXvhyf3GHTrEOeY9tDmxeiFXN8UdUwrl8OywwpBtSZUpcH7hqgdYzWJcezGFdW5VVVshThvsGqh7b3aDPmESnUEiQidwSZwqWAn8BIPiSoCPTbVJLFe+PCtOq2G+mNRkFvdwoba+5Vey+HGr0zy9vZD4VWlckmC0v+Rg5Fdx+kIfaORQVmUMY9wcQ5Vi0Qo87Q8f5ikbdJZxzaBOCYc3dkL8/dDnmPbDvlHbDgQ2o8Ru1wS4eO07bhE8aFeVXbovdQd26EE+IyO+M1zgnoHpV1g1p7xA6RupKebuFLoxV3RxumCM/FcoqoZ80eoV5USG2Chriewv3wVqrUqs/AQ6jmSQoQpxs+6ozdTeKEq+9HZQpy5AlvMJfaE3E8wxEPtKukRsMDq0irl6gfo+79sEdN0pcH+xRypOyJPdKED7gsdkP6xL60pGvSPlXoOeXvh7bGY3zVBOMO7BC0hKaiQIm6qeAup/b2nRab6jlWKx+MTQySRZV+cNdSizuOgNhhzd2UuqFvF2RWSaWfNGaftyAKdUf+pqttfN+fwU/SAttRQsXiK1BzzD8oSl1KRlnly0CX8ihmrxMEv9WUowSY4K52qJmTvj2Qkr/VZAHqNIb1J7IxhDHicM9wpAwGl+xWg8dkOJQJqUsx6Q5iMie+h3dDnmPboJ8qe2j13R7SLJ3mFEWEwhv7jDbY8InQ41emcu0aA8phzd2Ur1hcVNq+hifpKlsoZ80HyiFdI7XVw7ILZs8JxHwCjeKQoWiyA+xxNmpxF6FYbMIGyJvOEtjlaTUN8SSAhMSZHqnEcu9UOJcIOWUpaxQtY5Bwo2CiZgqx0ldMQc9iTqOh7rXFetF+2CWWjnVbdGde4YULzgkKw1QpWJnoIbcQeESItEfxf4CC2wjKDVmNCXQJ5boLspYChQy5kKugmydIWvllIyhbg5TZSGigkgmuKmfxj+H8YKsTOG3DYk1wXG+WQEJcTzJrENyRJabT8AKFogKF9OdlWU3i47YyO+05/iYTXWmsYb4r6UKOIII/yiQR6IxJCjuAqiQ+ptg9M0feXz6hT6YtNvzOvlNsTFmh7bnD9prESfbKT9ya/wjx/SMvSokf8AYr8oKlGajWTR+q4RM2/NJWpwiaT8CQrVEzb82mkyMcY3iOb601qAiriiXKNX9b//2gAIAQEDAT8h/wDBX5S2Kyodb9Un6CuY9P7rWzrb91c0Tcv5wCsF1wUzFjk+2oQBy8X341X15B+/NTRSsFZMGdnI/hQSEkcle+5+MeaWb2eR4OR4YVOVL0smo0QvGXUF6QSG45KwW5+vmUPP5kHh+TFQsgYFZloXMO9F1fQLn3xQwOM75FIjdrI88FMkmmDDqxad4ououv8AyoYGLOH/ACOZVPYtwkqThe8bqCTvHsZ+6KiMVGDRZpHljls1lw4AgazOIpYlZEjKWHN4Whi13/vwG8KBeCdagVo3gI+a0esAHWKLdTmnxTY4su+oOpRE3xrQc1xmUOrFSqKDay5l6vPN3KDqOpwBo9WJyUbLDYk3bFMDmWMtJC0NZ2iHqcAIWOGi6Hw4RwO9QiSBelvV4LmxwW7o2qdI4Tco45aOm72oQwzJyhnqeDCoJBjSalxBHKgv0M/9UxpUpoVOxiDDWMI333MvaoFVkT6ZFFxCfwBd2EuwF2oIrTMdmKIAETiXoPXywgCpLs9aNY0nag7CvlRaGvMFwWgJA6Z+EVFYCvJl9TQW+W0vZDrN9J+HH3fwrMSjrU0txeD6oftU7Nj91pMYdiY96ArHpjFTJt86MalzvWk2SfoNRsY4Iyd/CTAWldcHvTATgOQ+a9ZTguzxvNhbcWSr4gGGujs1rM6U3Q5e9YS1G0MHCxuernj+S3o6+xCaODKKm9d6qPGZKtwd1Z+qNsLKcS3pSCBmA+i1GbMQbv8A0ortsXav7KTXHslnrQ14AeUNIp3mh81IiNaKGU2WoFBsDvfVPuCzCyH4Y4/l8vFB+RDwT7p90qbkQ9lfjclOU34YCXCRso7sUczKLV4KZllS9+Hdvc8ILcmZcj+2kXZvz86sfA7yz8eCAeMy7fBQYTCT8IOOhExPaVlHvAHzNPaCLBZ6UkKZjWhPQU1LEQE2e1RGNmUp59A2pZZEnN/gf6FHmXohl1c2hzOfB9PCOrZ+as0mza/lpTllMOSxHMo5ou28ke1FdkgXXRDde1NK3AeY3UfmK7AHqaKdpHuOPUSfQ8Rjmp8+A3djToKPoUGCm3QsfFM5lT61+M3qAtcQ6Mb1KLHkDocfVHwpMm1AVVuxQS9Jbu6tZx35vc8H5favwuTizqLo86Iy5zV8CTYnYqRe29EMJYaLjof4ZBsS7WrD3B4aw/bD8wpNDIgzO11o1dqOyStrTnpasmIrvlgKjLdZIm6mkLlWvQm7ErU8iRmYNgxQQBZauJrexfL9rxk/6Z8WZ+d/B2IfdpWAAO8URSzLtdwN/kfd8KVp/OHDnRgLF9FZCAkdabYkemvtR6csOtj2OAlbxvAh2qfwuTiyIS2FZA9Kru3Zu4fkcuAbB6UHV5O2SrxuXoj/AAX31/s4pDDyuZUJHFH1CN2qoDiEBHamv7zL5Wot3eCxTLTsv2PSa1uBGDIhqxQatgutGzn9gd+AJYC7Ttap8VuipcSTfiKImTFCQAoiAw2WrX6FQSXdu0hfkeBscAMzIcpoQlhodXwOkoxhI60BoonMLLJHIMcJ9RXWo2aUUKBLMBwc1FZQia1bm4sbTxNNWtQTrQXwueYLcV5oQSL06h+elO27n/WrFhNAwSzQdzMhtipGGIUjFLDCSUfNfNgnIfwZkCSsVHsduMsuDIGw1pohfEvoOnelCxNVc7BJqZf0vhiUQs2oD8CWrjnVSUuVakahCNf7eN0NTp28zSK7E+6AJKw+Czt+NhoA1YsvVevyf3pKUuzbp+1OkbKyrw38v+1OklXXzRmV3P6VdoNdzr/BP9H0OtP3la+bSgbhRLT/AIYrAAdrKEwj04e+w1q5cserVqdH9vPJd/8AzP8A/9oACAECAwE/If8AUiXnTKsaTUaDTCHDSRJc85EpXjPAHzUy1l4cOABtSR5tXtzQs1niZVr4RjzUvglRxjhl5ubVHCeMnA+cQ34TxeA87Z4J88kNNZ/63v8A/9oACAEDAwE/If8AUOXhnzrGY2qY6grFFHKoKc1t2aPOeVFdeqeIFqMG/muFHAS/EVXmKuBvqoGSoGOvms1mCs9IqVlg4TtSGisrKkloaZtRKs+b2kqOAvlhqKPgx837pwunBoqOC84IakcXitPnSUnA0vOxFHBf9bv/2gAMAwEAAhEDEQAAEJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJBIBJJJJJJJJJJJJJJJJJJJJJJJJJJJIBJJIJJJJJJJJJJJJJJJJJJJJJJJJJJAJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJI5JEIJJJJJJJJJJJJJJJJJJJJJJJJJJJLscE4JJJJJJJJJJJJJJJJJJJJJJJJBAJHk8LJJJJIIJBJIJJAJJJBJAJJJJJIPn5aZPIJJJJJBABBJJIBJIJIBIABJJJBB+zKvpJJJBJAIBAJJJJJJAJJBBJJJJBBuzCwtIJJIJJIIJJJJJJJJBJIJAJJJJBIpPyd5JJJJJIBBJJJIBIJIJBJIIJJJIJKnhYPJJJJJIJJJJAJAJBJBJJIAJJJJBJOuBOJJJJJJJJJJJJJJJJJJJJJJJJJJBJBF5JBJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJBJJJJJJJJJJJJJJJJJJJJJJJJJJBAIAJJJJJJJJJJJJJJJJJJJJJJJJJJJJJBJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJJP/9oACAEBAwE/EP8AwUeg4BX2owS3qekq0R0V+UpjtJzNAkq7BoBQHl/bzg8aiAJVoRaMiX+joVysWInrv4hVkMWO7R709BIxgdBo+ap6bAZVopADcPwZ/hfmFCEicynkap31PmgitKx1/t8FiZRvD4UaAx36HcKelmQYLuybg0iAEiXEclNYrOm266eZHAz0lj5HwuAOGbluVKTTNGjaT0qAVDhSD3qIlLvL4pnNqaRNhDDfBQ8PAYhvteSYo0n9aTE1g86HdeIBydcJLJvUIbCbY49cUiKJCWT/ACU0okkLMZh/yAlF9LsPvhzCuYcGSG+/qhg2qIWCwO6zTcE82g2wmmMimmbhLdYjR0TvU4mTFDNg8yiBoCIhCWiW5cCioi+Z8vBMhamFQqNCnAUAOx1FVFSubNLsgxQrvg576gR8kqGsIeZVhJJXGYpSPtZgm4jQqzPN2GLj1bD5PnhF/p4TdzWJAx616DeyyedVWnQpq7IwQZM8uDJeiQhR7JDwKw5mvpabZs+E5pIYm7gorDeQmLmeRV8BjNYZF5EixOjTOnLYiQlR2jLoNTkL1LKsABwU1yk8Ho4JSF6YrZzJg29qXLnBMusJrLoeRWxRKoY2hHDeiV/N5GYC5pFHEOHC2Je8RU9wwMMYTklz+CVwAmDF+lPsQoMjRYGcVkeoKZLAGKQkE8ClVqGqki2COVyo8mIDsVol5KKAChEdBkOaDotULRddZz7aIIq21qbJISFxGrMwMk5jhHRKZEK3KAT3G7u44vnPon34bKwWCUVIzcc3EieAHuk9SP3X/S4H7UxaNbkk9CVThIhcw30rkDHoUqx5ElswomgJ1R90kmSL1cGw0o+PCssLGml9U9qju7OvpGgYY6vMcZoFweW+450ABvQ5p64UTOJbTLv6sg/upliQuW9LPPgt7H9DWTrxSRUGON6LJKsbtDa7CgQCeq1aBAo8v6jxmS3SmAFKNQEfR0WEddLIZsbzYqX0thzSLs1iwOIdJ2EV2qYILVYyQOW8ehqFan7laUFCOXlp91I2bI2CfRqMYTZMyQGFZ0daDNA2cjbUc1qM19PBMKYZjVxN/b5LxFzp9nwfhfBTXkw9KgXtKABXET1VC5pko8BYQIUzIId6LlUVTChesQUt8sbmpeF6w+8Twi2XOpLarFRgsGRL6GgUY/GXs8FhhbcSL/MXO9QpLNUsWeRfi0jZ+UTI96hGA0X7qFPZg6RZuCryEiQwxqVAOf6Xpnwk1kw5gUwYsQNJQtQKdVXqk+MYR2rqE8YBMaOGhNnwQpuGR0wailLilyYehpErUM+nTlOx96cs+HliUNfdK08LSZHfkh50dlAZZrAyye+oijpUN7tw6M3p6S6pRYr3pyuhbuL44gaj2A+/EcQiS6p4EuzHqP1So5DsFEyvO9Q9K5yg+qmry0fn1PFAVYYSWaUU0gcnZscTFp8Q/fhboAs4fwYvSM0A3AuJSSCgSsQGxDaLw++44hNAAlkEBGpwRlc92lXLPAz0nw0KBpkyvhhBuUexqnByH4z/AAjJy9w/VWSNOBOS2Tk013qnuaNfgJSJVgIetP8AbG9TYmbiBJhoIUjAKosPILT+yK+tgo3Ni1Px1sdAzB6CrGvryelYGJatJIENyLsGJoEMgP1b1OJltpHqz8R4oIDKesfBjlz1ifVCEWxLvPIoJ25BmHTifXgv4wpX4rd4JgGZO6cDTKbUCcOc7QvAG2AKSKFRJ3an5KctD3avgOmyd0T7JpEYbJxmbcewV7jiFBQgEq4sFNx10fBRaQMpOA5JPCVjZ8qMc34Gku9sg+b/AAKIlDGsvuaPP+ARn75YenGBFG0SSmXZiZfEBdZ9lp25BbIBFNjK3sDZlXaxFSRUqA1ys0rnCGQXmHzOVNm2n5t7lwLt6IFgSiwBdWpJzH0bcOqXgmENTYCWs6TA2NDseKSiR5mDqklOLtQgrmXpIOQtmDlPRoLKiW6pWe47UJaQ9Ap8uvBEQMNEkCKWZolkGWQZj38FtsjcYm7DzKSEBMJSbgVsA7JbSNZ4HkYwACE6Wc1pU6QcBMHXgszEs0oAw6WaA4g04kmDpxSpDCbGIa4pA1jWQgL1ieI5/IyHOtHyeoPhUUX3Rh9quk1q2jQORNKGg0SyFIchpeWTCqL2qOn/ADBo8nDSzqYOwhZdJJ/gWmBdjSnbsXNdRdOM6BPVAbCjvsauHNydqE+YSIYhIK2Rk0rC3mYk1PQCieLHsCY84DZoo19XZs2VofGxTri7do24gOEKaZHdnzNhIu1o7KBAWQuI+CAJOfasXaKOkS5leoD1aNRrWxsQ2NzW/V2pHQk5QlV4TKw/7XIpLzVGVfNIwLp1TnsqPbSamw0/gAWY4XXmPikr5682JkWEijD0me6tRxOuZ97UfJu6H4rGaDnoCfdAo9iY/ByoBQTOZOeXnYphil8r1/8AM//aAAgBAgMBPxD/AFDk8NiYt50dAkHSh5eCukF72qDLPcOtPnaZPBBZpdHzWAI60hUWOENilvwnvQ6UQrNIr1IR5q1BNk5FSKYUgIKWgNEhlYpWlJeab5pQRt5qqAtjgdaWhanBqOANWkKxeby0yozSIsVNTvToVNXp84RQxSUWVNBNAKKgPOEmkMVMVCmJahN6mu+d5ym04Go0Ef62/wD/2gAIAQMDAT8Q/wBQ7cwxvHhjMTfzqNFO99bVG6Bkc4vQErHO3zTS8O9W0ByqBmjdnNJHnF47r9UbYnc1Jam9TFSIR86ZAXKWfNHdFSi9BNihC+7UNooq0uUYpGgcNXwWw+6FLZqCwWPXzUHHGSixNBOU/JTSuM1P+lmm6ZQLjWhovRMnQ2xbHbzUNdeB7/NFJw7qLSb0o+RRQSRSoUT5xRU4sqwNSVAvek61dw4qU83GGSkNmSHehpUbVJaLFDJwHL5wMUDalNSa0eehjK3aTS0v+tv/2Q==) no-repeat right 40px bottom 30px;\r\n\tdisplay: none;\r\n}\r\n.video-end>.replay {\r\n\tposition: absolute;\r\n\tleft: 50%;\r\n\ttop: 50%;\r\n\tmargin-left: -50px;\r\n\tmargin-top: -50px;\r\n\ttransition:transform 2s;\r\n\t-moz-transition:transform 2s;\r\n\t-webkit-transition:transform 2s;\r\n}\r\n.video-end>.replay:hover {\r\n\ttransform: rotate(360deg);\r\n\t-webkit-transform: rotate(360deg);\r\n\t-moz-transform: rotate(360deg);\r\n}\r\n.danmu {\r\n\tcolor: #fff;\r\n\tline-height: 31px;\r\n\tz-index: 6;\r\n\tpadding: 0 4px;\r\n\tfont-family: Avenir Next,Helvetica,Arial,Lantinghei SC,Microsoft YaHei,sans-serif;\r\n}\r\n.tp-left {\r\n\tposition: absolute;\r\n\twill-change: transform;\r\n\tright: 0;\r\n\tfont-size: 24px;\r\n\tanimation: dmleft 10s linear;\r\n\t-webkit-animation: dmleft 10s linear;\r\n\tcursor: pointer;\r\n\twhite-space: nowrap;\r\n\ttext-shadow: #000 0 2px 0;\r\n}\r\n.tp-top {\r\n\tposition: absolute;\r\n\tleft: 0;\r\n\tright: 0;\r\n\tmargin: 0 auto;\r\n\ttext-align: center;\r\n\tdisplay: inline-block;\r\n\twhite-space: nowrap;\r\n\ttext-shadow: #000 0 2px 0;\r\n\tfont-size: 22px;\r\n}\r\n@keyframes dmleft {\r\n\t0% {\r\n\t-webkit-transform: translateX(100%);\r\n\ttransform: translateX(100%)\r\n}\r\n}\r\n@-webkit-keyframes dmleft {\r\n\t0% {\r\n\t-webkit-transform: translateX(100%);\r\n\ttransform: translateX(100%)\r\n}\r\n}\r\n.danmu-warp {\r\n\tposition: absolute;\r\n\ttop: 0px;\r\n\tleft: 0px;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tleft: 0px;\r\n\toverflow: hidden;\r\n}\r\n.tp-send {\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\tbottom: 10%;\r\n\tleft: 50%;\r\n\twidth: 60%;\r\n\theight: 35px;\r\n\tborder-radius: 5px;\r\n\tmargin: 0 0 0 -30%;\r\n\ttext-align: center;\r\n\tpadding: 4px 0;\r\n\tbackground-color: rgba(255, 255, 255, 0.79);\r\n\tz-index: 6;\r\n\tbox-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);\r\n}\r\n.tp-text {\r\n\tposition: relative;\r\n\ttop: -12px;\r\n\twidth: 50%;\r\n\tdisplay: inline-block;\r\n\tline-height: 20px;\r\n\tborder: none;\r\n\tbackground-color: transparent;\r\n\toutline: none;\r\n}\r\n.tp-up {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\ttop: -13px;\r\n\tleft: 20px;\r\n\tbackground-color: #8715EF;\r\n\tcolor: #fff;\r\n\tborder: 0px solid #000;\r\n\tline-height: 20px;\r\n\tborder-radius: 4px;\r\n\tpadding: 3px 20px;\r\n}\r\n.tp-logo-small {\r\n\twidth: 114px;\r\n\theight: 35px;\r\n\tdisplay: inline-block;\r\n}\r\n.tp-video-main {\r\n\tposition: absolute;\r\n\twidth: 100%;\r\n\theight: 100%;\r\n\tbackground-color: #000;\r\n\t-webkit-user-select: none;\r\n\t-moz-user-select: none;\r\n\tuser-select: none;\r\n}\r\n.tp-video {\r\n\tbackground-color: #000;\r\n    position: absolute;\r\n    left: 0px;\r\n    top: 0px;\r\n    min-width: 0px;\r\n    max-width: none;\r\n    min-height: 0px;\r\n    max-height: none;\r\n    width: 100%;\r\n    height: 100%;\r\n    display: block;\r\n    transform: none;\r\n    margin: 0px !important;\r\n    flex: 1 1 0% !important;\r\n\r\n}\r\n.tp-video-con {\r\n\topacity: 0;\r\n\ttransition: opacity 1s;\r\n\t-moz-transition: opacity 1s;\r\n\t-webkit-transition: opacity 1s;\r\n}\r\n.tp-control {\r\n\tposition: absolute;\r\n\tbottom: 0;\r\n\tpadding-bottom: 10px;\r\n\tleft: 0px;\r\n\twidth: 100%;\r\n\theight: 45px;\r\n\tbackground: linear-gradient(rgba(0, 0, 0, 0),rgba(0,0,0,0.8));\r\n\tcolor: #fff;\r\n\tline-height: 0px;\r\n\tuser-select: none;\r\n\tz-index: 888;\r\n}\r\n.tp-icon {\r\n\tposition: relative;\r\n\ttop: 6px;\r\n\tpadding-left: 10px;\r\n\tpadding-right: 2px;\r\n\twidth: 30px;\r\n\theight: 30px;\r\n\tcursor: pointer;\r\n\tfill: #fff;\r\n}\r\n.tp-danmu-switch {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tborder: 2px solid #fff;\r\n\tcolor: #fff;\r\n\tborder-radius: 50%;\r\n\twidth: 22px;\r\n\theight: 22px;\r\n\tline-height: 22px;\r\n\tfont-size: 14px;\r\n\ttext-align: center;\r\n\tcursor: pointer;\r\n}\r\n.tp-danmu-switch-c {\r\n\tcolor: #000 !important;\r\n\tborder: none !important;\r\n\tbackground-color: #fff;\r\n}\r\n.tp-syk {\r\n\tpadding: 10px 10px;\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tcolor: #fff;\r\n}\r\n/*ranger*/\r\n\tinput[type=range] {\r\n\t-webkit-appearance: none;\r\n\tborder-radius: 10px;\r\n}\r\ninput[type=range]:focus {\r\n\toutline: none;\r\n}\r\ninput[type=range]::-webkit-slider-runnable-track {\r\n\twidth: 100%;\r\n\theight: 11.1px;\r\n\tcursor: pointer;\r\n\tbox-shadow: 0px 0px 1px rgba(0, 0, 0, 0), 0px 0px 0px rgba(13, 13, 13, 0);\r\n\tborder-radius: 3px;\r\n\tborder: 0.2px solid rgba(0, 1, 1, 0);\r\n}\r\ninput[type=range]::-webkit-slider-thumb {\r\n\tbox-shadow: 0px 0px 1px #000000, 0px 0px 0px #0d0d0d;\r\n\theight: 9px;\r\n\twidth: 16px;\r\n\tborder-radius: 3px;\r\n\tbackground: rgba(0,0,0,0.4);\r\n\tcursor: pointer;\r\n\t-webkit-appearance: none;\r\n}\r\n.tp-tranger {\r\n\tposition: relative;\r\n\theight: 11px;\r\n\tbackground-color: rgba(0, 0, 0, 0.17);\r\n\tborder-radius: 6px;\r\n\tcursor: pointer;\r\n\toverflow: hidden;\r\n\tmargin-top: 18px;\r\n\tmargin-left: 80px;\r\n\tmargin-right: 170px;\r\n}\r\n.tp-tranger>.tp-tranger-a {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tbackground-color: rgba(255, 255, 255, 0.4);\r\n\theight: 100%;\r\n\twidth: 100%;\r\n\tborder-radius: 6px;\r\n\tz-index: 3;\r\n}\r\n.tp-tranger>.tp-tranger-b {\r\n\tposition: relative;\r\n\tdisplay: inline-block;\r\n\tbackground-color: #FFFFFF;\r\n\theight: 100%;\r\n\twidth: 11px;\r\n\tborder-radius: 50%;\r\n\tright: 7px;\r\n}\r\n.tp-tranger>.tp-tranger-c {\r\n\tposition: absolute;\r\n\ttop: 0px;\r\n\twidth: 0%;\r\n\theight: 100%;\r\n\tbackground-color: rgba(207, 198, 198, 0.47);\r\n\tborder-radius: 6px;\r\n\tz-index: 2;\r\n\toverflow: hidden;\r\n}\r\n.tp-syk-ico {\r\n\tposition: relative;\r\n\ttop: 9px;\r\n\tfont-size: 1.6em;\r\n}\r\n.tp-syk-range {\r\n\twidth: 60px;\r\n\tdisplay: block;\r\n\toverflow: hidden;\r\n\topacity: 0.5;\r\n\tmargin-left: 20px;\r\n}\r\n/*loding*/\r\n\t.tp-oneplay {\r\n\tmargin: auto;\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tleft: 0;\r\n\tbottom: 0;\r\n\tright: 0;\r\n\twidth: 200px;\r\n\theight: 200px;\r\n}\r\n.tp-spinner {\r\n\tmargin: 100px auto;\r\n\twidth: 50px;\r\n\theight: 40px;\r\n\ttext-align: center;\r\n\tfont-size: 10px;\r\n\tposition: absolute;\r\n\ttop: 40%;\r\n\tleft: 46%;\r\n\tz-index: 7;\r\n\tdisplay: none;\r\n}\r\n.tp-suspend {\r\n\t-webkit-animation-play-state: paused !important;\r\n\tanimation-play-state: paused !important;\r\n}\r\n.md-iframe {\r\n\tdisplay: none;\r\n}\r\n.tp-place2 {\r\n\tbackground-color: #3b3b3b;\r\n\tmargin: 2px 0 4px 0;\r\n\tcolor: #fff;\r\n\tcursor: pointer;\r\n}\r\n.tp-spinner > div {\r\n\tbackground-color: #fff;\r\n\theight: 100%;\r\n\twidth: 6px;\r\n\tdisplay: inline-block;\r\n\t-webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\r\n\tanimation: sk-stretchdelay 1.2s infinite ease-in-out;\r\n}\r\n.tp-spinner .rect2 {\r\n\t-webkit-animation-delay: -1.1s;\r\n\tanimation-delay: -1.1s;\r\n}\r\n.tp-spinner .rect3 {\r\n\t-webkit-animation-delay: -1.0s;\r\n\tanimation-delay: -1.0s;\r\n}\r\n.tp-spinner .rect4 {\r\n\t-webkit-animation-delay: -0.9s;\r\n\tanimation-delay: -0.9s;\r\n}\r\n.tp-spinner .rect5 {\r\n\t-webkit-animation-delay: -0.8s;\r\n\tanimation-delay: -0.8s;\r\n}\r\n@-webkit-keyframes sk-stretchdelay {\r\n\t0%, 40%, 100% {\r\n\t-webkit-transform: scaleY(0.4)\r\n}\r\n20% {\r\n\t-webkit-transform: scaleY(1.0)\r\n}\r\n}\r\n@keyframes sk-stretchdelay {\r\n\t0%, 40%, 100% {\r\n\ttransform: scaleY(0.4);\r\n\t-webkit-transform: scaleY(0.4);\r\n}\r\n20% {\r\n\ttransform: scaleY(1.0);\r\n\t-webkit-transform: scaleY(1.0);\r\n}\r\n}\r\n.video-full {\r\n\twidth: 20px;\r\n\tpadding-right: 30px;\r\n\ttop: 9px;\r\n\tposition: relative;\r\n\tpadding-left: 10px;\r\n\theight: 30px;\r\n\tcursor: pointer;\r\n\tfill: #fff;\r\n}\r\n:-webkit-full-screen .tp-video-main {\r\n\theight: 100% !important;\r\n\twidth: 100% !important;\r\n\tposition: fixed;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n}\r\n:-moz-full-screen .tp-video-main {\r\n\theight: 100% !important;\r\n\twidth: 100% !important;\r\n\tposition: fixed;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n}\r\n:-ms-fullscreen .tp-video-main {\r\n\theight: 100% !important;\r\n\twidth: 100% !important;\r\n\tposition: fixed;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n}\r\n:-full-screen .tp-video-main {\r\n\theight: 100% !important;\r\n\twidth: 100% !important;\r\n\tposition: fixed;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n}\r\n:fullscreen .tp-video-main {\r\n\theight: 100% !important;\r\n\twidth: 100% !important;\r\n\tposition: fixed;\r\n\tleft: 0;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tbottom: 0;\r\n}\r\n.tp-con {\r\n\tposition: absolute;\r\n\ttop: -90px;\r\n\tdisplay: none;\r\n\twidth: 150px;\r\n\tmargin: 0px auto;\r\n\tpadding: 6px;\r\n\tbackground-color: rgba(255, 255, 255, 0.75);\r\n\tborder-radius: 6px;\r\n\toverflow: hidden;\r\n}\r\n.tp-color {\r\n\tdisplay: inline-block;\r\n\tmargin-right: 2px;\r\n\tborder-radius: 4px;\r\n\tcursor: pointer;\r\n}\r\n.tp-color-warp {\r\n\theight: 60px;\r\n\tpadding-right: 16px;\r\n\toverflow: overlay;\r\n}\r\n.tp-color-main {\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tborder: 1px solid #8b8585;\r\n\tborder-radius: 2px;\r\n}\r\n.tp-color-bo {\r\n\tposition: relative;\r\n\tbottom: 8px;\r\n\twidth: 20px;\r\n\theight: 20px;\r\n\tborder-radius: 50%;\r\n\tborder: 1px solid #8b8585;\r\n}\r\n.tp-place {\r\n\ttext-align: center;\r\n\tpadding-bottom: 4px;\r\n}\r\n.tp-rightmenu {\r\n\tdisplay: none;\r\n\tposition: absolute;\r\n\twidth: 130px;\r\n\tborder: 1px solid #EEEEEE;\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tlist-style: none;\r\n\tbackground-color: rgba(0,0,0,0.8);\r\n\tcolor: #fff;\r\n\tz-index: 9999;\r\n}\r\n.tp-rightmenu a {\r\n\tcolor: #fff;\r\n\ttext-decoration: none;\r\n}\r\n.tp-rightmenu li {\r\n\tpadding: 2px 5px;\r\n\tcursor: pointer;\r\n}\r\n.tp-rightmenu li:hover {\r\n\tpadding-left: 7px;\r\n\tbackground-color: rgba(255,255,255,0.2);\r\n}\r\n.tp-speend {\r\n\tdisplay: none;\r\n\tmargin: 4px 0 4px 30px;\r\n}\r\n.tp-copy-input{\r\n    display: inline-block;\r\n    width: 100%;\r\n    height: 19px;\r\n    overflow: hidden;\r\n    padding: 0;\r\n    margin: 0;\r\n    background-color: transparent;\r\n    border: 0px;\r\n    color: #fff;\r\n    resize: none;\r\n    font-size: 1em;\r\n    cursor: pointer;\r\n    font-family: Avenir Next,Helvetica,Arial,Lantinghei SC,Microsoft YaHei,sans-serif;\r\n}\r\n.tp-control-alltime-phone{\r\n\tdisplay: none;\r\n}\r\n.tp-loding{\r\n\tpadding: 20px 0 0 20px;\r\n\tcolor: #FFFFFF;\r\n\tposition: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    z-index: 5;\r\n    box-sizing: border-box;\r\n}\r\n.tp-img-back{\r\n\tposition: absolute;\r\n    width: 100%;\r\n    height: 100%;\r\n    background-size: cover;\r\n    -webkit-filter: blur(10px);\r\n    -moz-filter: blur(10px);\r\n    -ms-filter: blur(10px);    \r\n    filter: blur(10px);    \r\n    z-index: 2;\r\n    overflow: hidden;\r\n}\r\n@media screen and (max-width: 700px) {\r\n\t.tp-tranger{\r\n\t\tposition: absolute;\r\n\t    width: 97%;\r\n\t    bottom: 4px;\r\n\t    margin: 0;\r\n\t}\r\n\t.tp-video-con>.tp-send{\r\n\t\tbottom: 60px;\r\n\t\tleft: initial;\r\n\t\tright: 10%;\r\n    \twidth: 80%;\r\n\t}\r\n\t.tp-control-alltime{\r\n\t\tdisplay: none;\r\n\t}\r\n\t.tp-control-alltime-phone{\r\n\t\tdisplay: inline-block;\r\n\t}\r\n}", ""]);

// exports


/***/ }),
/* 4 */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getElement = (function (fn) {
	var memo = {};

	return function(selector) {
		if (typeof memo[selector] === "undefined") {
			memo[selector] = fn.call(this, selector);
		}

		return memo[selector]
	};
})(function (target) {
	return document.querySelector(target)
});

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(6);

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton) options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
	if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement (style) {
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);

	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	options.attrs.type = "text/css";

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	options.attrs.type = "text/css";
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),
/* 6 */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ })
/******/ ]);