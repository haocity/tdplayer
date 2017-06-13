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
    return "<div class=\"tp-video-warp\">\n  <div class=\"tp-video-main\">\n    <ul class=\"tp-rightmenu\">\n      <li class=\"tp-copy-warp\">\n        <textarea rows=\"1\" class=\"tp-copy-input\">\u590D\u5236\u5F39\u5E55</textarea></li>\n      <li class=\"tp-speend-con\">\u64AD\u653E\u901F\u5EA6\n        <ul class=\"tp-speend\">\n          <li>0.5</li>\n          <li>0.75</li>\n          <li>\u6B63\u5E38</li>\n          <li>1.25</li>\n          <li>1.5</li>\n          <li>2</li></ul>\n      </li>\n      <a href=\"https://github.com/haocity/tdplayer/issues\" target=\"_blank\">\n        <li>\u610F\u89C1\u53CD\u9988</li></a>\n      <a href=\"https://www.haotown.cn/about.html\" target=\"_blank\">\n        <li>\u5173\u4E8E\u4F5C\u8005</li></a>\n      <a href=\"https://github.com/haocity/tdplayer\" target=\"_blank\">\n        <li>About tdplayer</li></a>\n    </ul>\n    <div class=\"video-end\">\n      <svg t=\"1493275296747\" class=\"replay\" viewBox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" p-id=\"3488\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"100\" height=\"100\">\n        <path d=\"M48.012564 368.005052 256.007345 368.005052C282.50851 368.005052 303.987849 346.493648 303.987849 319.992484 303.987849 293.459261 282.50851 272.011981 256.007345 272.011981L172.518731 272.011981C247.808645 165.585172 371.698941 95.994406 512.016029 95.994406 741.749327 95.994406 928.004256 282.249339 928.004256 511.981298 928.004256 741.731959 741.749327 927.954828 512.016029 927.954828 282.249335 927.954828 95.994406 741.730625 95.994406 511.981298 95.994406 485.481472 74.513729 464.00213 48.012564 464.00213 21.479342 464.00213 0 485.481472 0 511.981298 0 794.734285 229.213614 1023.981298 512.017367 1023.981298 794.75299 1023.981298 1024 794.734285 1024 511.981298 1024 229.214949 794.751652 0 512.017367 0 340.405743 0 188.81594 84.590769 95.99574 214.213612L95.99574 128.003676C95.99574 101.471785 74.515063 79.991108 48.013903 79.991108 21.480677 79.991108 0.001338 101.471785 0.001338 128.003676L0.001338 319.993822C0 346.493645 21.479339 368.005052 48.012564 368.005052\" p-id=\"3489\" fill=\"#ffffff\"></path>\n      </svg>\n    </div>\n    <div class=\"tdplayer\"></div>\n    <div class=\"danmu-warp\"></div>\n    <div class=\"tp-oneplay\">\n      <svg style=\"width: 200px;height:200px;\" class=\"tp-icon\" viewbox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n        <path fill=\"#fff\" d=\"M836.1152 512 194.2848 886.4v-748.8000000000001L836.1152 512z\" /></svg>\n    </div>\n    <div class=\"tp-spinner\">\n      <div class=\"rect1\"></div>\n      <div class=\"rect2\"></div>\n      <div class=\"rect3\"></div>\n      <div class=\"rect4\"></div>\n      <div class=\"rect5\"></div>\n    </div>\n    <div class=\"tp-video-set\">\n      <h4>\u8BBE\u7F6E</h4>\n      <span class='tp-closeset'>\xD7</span>\n      <table class=\"tp-settable\" width=\"300\" border=\"0\">\n      <tr>\n        <td>\u5F39\u5E55\u900F\u660E\u5EA6</td>\n        <td><input type=\"range\" class=\"tp-s-r1\" min=\"20\" max=\"100\" value=\"100\"/></td>\n      \n      </tr>\n      <tr>\n        <td>\u5F39\u5E55\u7F29\u653E</td>\n        <td><input type=\"range\" class=\"tp-s-r2\" min=\"20\" max=\"100\" value=\"50\"/></td>\n      </tr>\n      <tr>\n        <td colspan=\"2\"><input class=\"tp-s-r3\" type=\"checkbox\"/>\u5F39\u5E55\u52A0\u7C97</td>\n      </tr>\n    </table>\n    </div>\n    <div class=\"tp-video-con\">\n      <div class=\"tp-send\">\n        <div class=\"tp-logo-small\"></div>\n        <input type=\"text\" class=\"tp-text\" required=\"true\" placeholder=\"\u5BA2\u5B98\uFF0C\u4E0D\u6765\u5410\u69FD\u4E00\u4E0B\u5417?\" autocomplete=\"off\" />\n        <div class=\"tp-color\">\n          <div class=\"tp-color-bo\" style=\"background-color: rgb(255, 255, 255)\"></div>\n          <div class=\"tp-con\">\n            <div class=\"tp-place\">\u25C0\u6EDA\u52A8\u5F39\u5E55</div>\n            <div class=\"tp-color-warp\"></div>\n          </div>\n        </div>\n        <input class=\"tp-up\" type=\"submit\" value=\"\u53D1\u9001\" /></div>\n      <div class=\"tp-control\">\n        <div style=\"float:right;\">\n          <span class=\"tp-control-alltime\" style=\"padding:0 6px 0 12px\">0:00</span>\n          <div class=\"tp-danmu-switch\">\u5F39</div>\n          <div class=\"tp-set\"></div>\n          <div class=\"tp-vloop tp-vloop1\"></div>\n          <div class=\"tp-syk\">\n            <span class=\"tp-syk-ico\">\u266B</span>\n            <div class=\"tp-s-tranger\">\n              <div class=\"tp-s-tranger-a\" width=\"80%\"></div>\n            </div>\n          </div>\n          <svg class=\"video-full\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" class=\"tp-icon\" viewbox=\"0 0 1024 1024\" version=\"1.1\" p-id=\"1427\">\n            <path d=\"M971.862 52.538c-10.964-10.992-25.546-17.044-41.056-17.044L429.616 35.494l0 79.362 479.86 0 0 465.288 79.364 0L988.84 93.524C988.84 78.024 982.802 63.46 971.862 52.538z\" p-id=\"1428\" />\n            <path d=\"M115.092 429.62 35.728 429.62l0 500.854c0 15.5 6.038 30.066 16.982 40.994 10.966 10.988 25.544 17.04 41.05 17.04l469.182 0 0-79.364L115.092 909.144 115.092 429.62z\" p-id=\"1429\" />\n            <path d=\"M127.16 193.578l73.198 73.198-0.034 0.034 40.438 40.44 14.164 14.096 152.616 152.616c8.796 8.796 20.492 13.64 32.932 13.64 12.442 0 24.138-4.846 32.936-13.644 18.158-18.16 18.156-47.708-0.002-65.866l-141.318-141.318 0.094-0.094-40.484-40.486-14.162-13.97L192.812 127.492l146.47 0 0-92L101.16 35.492c-36.392 0-66 29.608-66 66l0 237.972 92 0L127.16 193.578z\" p-id=\"1430\" />\n            <path d=\"M896.578 830.358l-73.198-73.198 0.034-0.034-40.44-40.44-14.148-14.084-152.622-152.62c-8.796-8.8-20.496-13.648-32.942-13.648-12.444 0-24.14 4.848-32.94 13.646-18.148 18.156-18.148 47.702 0.004 65.866l141.31 141.306-0.094 0.094 40.492 40.494 14.16 13.974 84.728 84.726-146.734 0 0 92 238.386 0c36.392 0 66-29.608 66-66l0-237.96-92 0L896.574 830.358z\" p-id=\"1431\" /></svg>\n        </div>\n        <div style=\"float: left;\">\n          <svg class=\"tp-control-play tp-icon\" viewbox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill=\"#fff\" d=\"M836.1152 512 194.2848 886.4v-748.8000000000001L836.1152 512z\" /></svg>\n          <svg class=\"tp-control-paused tp-icon\" style=\"display:none\" viewbox=\"0 0 1024 1024\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n            <path fill=\"#fff\" d=\"M256.033769 192.014198l127.977743 0 0 639.933741-127.977743 0 0-639.933741ZM639.976 191.982l127.993 0 0 639.966-127.993 0 0-639.966z\" /></svg>\n          <span class=\"tp-control-nowtime\">0:00</span>\n          <span class=\"tp-control-alltime-phone\">/ 0:00</span></div>\n        <div class=\"tp-tranger\">\n          <div class=\"tp-tranger-a\"></div>\n          <div class=\"tp-tranger-b\"></div>\n          <div class=\"tp-tranger-c\"></div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<style class=\"css\" type=\"text/css\"></style>\n\n        ";
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
var html = __webpack_require__(0);
__webpack_require__(1);

var hasClass = function hasClass(elements, cName) {
    return !!elements.className.match(new RegExp("(\\s|^)" + cName + "(\\s|$)"));
};

var addClass = function addClass(elements, cName) {
    if (!hasClass(elements, cName)) {
        elements.className += " " + cName;
    }
};

var removeClass = function removeClass(elements, cName) {
    if (hasClass(elements, cName)) {
        elements.className = elements.className.replace(new RegExp("(\\s|^)" + cName + "(\\s|$)"), " ");
    }
};
window.$d = function (e) {
    return document.getElementById(e);
};
window.$c = function (e) {
    return document.querySelectorAll(e);
};

window.tdvidplay = function (ele, vid, coverimage) {
    var acflash = document.querySelector('section.player #player object') || document.querySelector('section.player #player #ACFlashPlayer');
    if (acflash) {
        acflash.style.display = 'none';
    }
    console.log('vid:' + vid);
    var damuurl = 'https://t5.haotown.cn/acfun/danmu/?vid=' + vid;
    var videourl = 'https://t5.haotown.cn/pyapi/vid/' + vid;
    var videosrcarr = [],
        danmudata = void 0,
        f1 = void 0,
        f2 = void 0;
    var e = document.createElement("div");
    e.className = "tp-loding";
    if (!coverimage) {
        if (pageInfo) {
            if (pageInfo.coverImage) {
                coverimage = pageInfo.coverImage;
            }
        }
    }
    var backimg = document.createElement("div");
    backimg.className = "tp-img-back";
    backimg.style.backgroundImage = "url(" + coverimage + ")";
    ele.appendChild(backimg);
    ele.appendChild(e);
    e.innerText += "正在加载中...";
    fetch(videourl).then(function (response) {
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
            if (document.querySelector(".noflash-alert")) {
                document.querySelector(".noflash-alert").style.display = "block";
            }
            try {
                $c('object')[0].style.display = 'block';
                e.style.display = 'none';
                $.info.error('替换失败 本视频不支持');
                backimg.style.display = 'none';
                acflash.style.display = 'block';
            } catch (e) {
                console.log('本视频不支持');
            }
        }
        console.log(vv);
        if (vv) {
            for (var i = 0; i < vv.segs.length; i++) {
                videosrcarr.push(vv.segs[i].url);
            }
            f1 = true;
            console.log(videosrcarr);
            checkend();
        }
    }).catch(function (e) {
        return console.log(" error", e);
    });
    fetch(damuurl).then(function (response) {
        return response.json();
    }).then(function (data) {
        danmudata = JSON.stringify(data);
        f2 = true;
        console.log(data);
        checkend();
    }).catch(function (e) {
        return console.log(" error", e);
    });
    function checkend() {
        if (f1 && f2) {
            console.log('end');
            tdplayer(ele, videosrcarr, danmudata, coverimage, null);
        }
    }
};
window.tdacplay = function (ele, acid) {
    function $d(e) {
        return ele.getElementById(e);
    }
    function $c(e) {
        return ele.querySelectorAll(e);
    }
    ele.innerHTML = null;
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
                                    tdplayer(ele, arr, data, null, null);
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
    } else if (tdplayer.videoinfo) {
        poster = tdplayer.videoinfo.coverImage;
    }
    tdplayer.vloop = false;
    tdplayer.vposter = poster;
    tdplayer.nowduan = 0;
    tdplayer.v = html.html();
    tdplayer.warp.innerHTML = tdplayer.v;
    tdplayer.css = new Object();
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
        this.alltime_phone = $c(".tp-control-alltime-phone")[0];
        this.vloop = $c('.tp-vloop')[0];
        this.setbox = $c('.tp-video-set')[0];
        this.setclose = $c('.tp-closeset')[0];
        this.setbtn = $c('.tp-set')[0];
        this.setr1 = $c(".tp-s-r1")[0];
        this.setr2 = $c(".tp-s-r2")[0];
        this.setr2 = $c(".tp-s-r3")[0];
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
                    tdplayer.changersound();
                } else {
                    console.log("播放完毕" + arg);
                    if (tdplayer.vloop) {
                        tiao(0);
                    } else {
                        tdplayer.ele.end.style.display = "block";
                    }
                }
            };
        })(i);
    }

    //弹幕开关
    tdplayer.ele.danmu_switch.addEventListener("click", function () {
        if (this.className == "tp-danmu-switch") {
            this.className = "tp-danmu-switch tp-danmu-switch-c";
            tdplayer.ele.danmu_warp.style.opacity = 0;
        } else {
            this.className = "tp-danmu-switch";
            tdplayer.ele.danmu_warp.style.opacity = null;
        }
    });

    //弹幕速度
    function dmspeend(v) {
        console.log('弹幕速度调整为' + v);
        tdplayer.css.v = v;
        changercss();
    }
    function changercss() {
        tdplayer.css.v = tdplayer.css.v || tdplayer.width / 100;
        tdplayer.css.danmusize = tdplayer.css.danmusize || 1;
        tdplayer.css.danmuo = tdplayer.css.danmuo || 1;
        tdplayer.css.danmchu = tdplayer.css.danmchu || 400;
        tdplayer.ele.css.innerText = '\n        .tp-left {animation: dmleft  ' + tdplayer.css.v + 's linear;-webkit-animation: dmleft ' + tdplayer.css.v + 's linear;}\n        .danmu-warp{font-weight:' + tdplayer.css.danmchu + ';zoom:' + tdplayer.css.danmusize + ';opacity:' + tdplayer.css.danmuo + '}\n        ';
    }
    tdplayer.ele.setr1.onchange = changerset;
    tdplayer.ele.setr2.onchange = changerset;
    tdplayer.ele.setclose.addEventListener('click', function () {
        tdplayer.ele.setbox.style.display = 'none';
        changerset();
    }, false);
    tdplayer.ele.setbtn.addEventListener('click', function () {
        tdplayer.ele.setbox.style.display = 'block';
    }, false);
    tdplayer.ele.setr2.onclick = function () {
        if (this.checked) {
            tdplayer.css.danmchu = 600;
        } else {
            tdplayer.css.danmchu = 400;
        }
        changercss();
    };
    function changerset() {
        var e = tdplayer.ele;
        tdplayer.css.danmuo = parseInt(e.setr1.value) / 100;
        tdplayer.css.danmusize = parseInt(e.setr2.value) / 50;
        changercss();
    }

    //视频播放
    tdplayer.ele.video_control_play.onclick = function () {
        addClass(tdplayer.ele.tp_oneplay, 'tp-zoomoutdown');
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
    tdplayer.ele.tp_oneplay.addEventListener("animationend", function () {
        removeClass(this, 'tp-zoomoutdown');
        this.style.display = 'none';
    }, false);
    tdplayer.ele.tp_oneplay.addEventListener("webkitAnimationEnd", function () {
        removeClass(this, 'tp-zoomoutdown');
        this.style.display = 'none';
    }, false
    //视频暂停
    );tdplayer.ele.video_control_paused.onclick = function () {
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
        addClass(this, 'tp-zoomoutdown');
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
        var s = parseInt(tdplayer.ele.tp_s.style.width) * .01;
        for (var i = 0; i < tdplayer.videoelearr.length; i++) {
            tdplayer.videoelearr[i].volume = s;
        }
        var Days = 7;
        var exp = new Date();
        exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1e3);
        document.cookie = "tpsound=" + s * 100 + ";expires=" + exp.toGMTString() + "&path=/";
    };
    tdplayer.soundcookie = getCookie("tpsound");
    if (tdplayer.soundcookie) {
        tdplayer.ele.tp_s.style.width = tdplayer.soundcookie + "%";
        tdplayer.Element.volume = parseInt(tdplayer.ele.tp_s.style.width) * .01;
    } else {
        tdplayer.ele.tp_s.style.width = "80%";
        tdplayer.changersound();
    }
    //循环按钮
    tdplayer.ele.vloop.onclick = function () {
        if (tdplayer.vloop) {
            tdplayer.vloop = false;
            this.className = 'tp-vloop tp-vloop1';
        } else {
            tdplayer.vloop = true;
            this.className = 'tp-vloop tp-vloop2';
        }
    };
    //音量调节
    tdplayer.ele.tp_s_w.addEventListener("click", function (event) {
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
            if (ev.keyCode == 39 || 37 || 32) {
                console.log(tdplayer.ele.end);
                if (tdplayer.ele.end.style.display == "block") {
                    tdplayer.ele.end.style.display = "none";
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
                    div.innerHTML = '<a href="' + tdplayer.videosrcarr[i] + '" download="[' + t + "]" + document.querySelector('#pageInfo').getAttribute("data-title") + '.mp4">下载' + t + "段</a>";
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
exports.push([module.i, "/*acfun*/\n.vdown {\n    width: 110px;\n    margin: 0;\n    padding: 20px 10px;\n    cursor: pointer;\n    position: relative;\n}\nsection.crumb .vdown .ico {\n    width: 36px;\n    height: 36px;\n    border-radius: 50%;\n    margin-right: 10px;\n}\nsection.player{\n\tposition: relative;\n\tmin-height:653px;\n}\n#vdown {\n\tposition: absolute;\n\tz-index: 5;\n\twidth: 300px;\n\tbackground: #fff;\n\tborder: 1px solid #eee;\n\tborder-radius: 5px;\n\tmargin-left: -150px;\n\tleft: 160px;\n\tpadding: 20px 10px;\n\tbox-shadow: 0 3px 8px rgba(0,0,0,0.1);\n\tbackground-color: #fff;\n\toverflow: hidden;\n}\n.down-btn, .down-btn>a {\n\tcolor: #fff;\n\ttext-decoration: none;\n}\n.down-btn {\n\tdisplay: inline-block;\n\tmargin: 10px 5px;\n\tpadding: 5px 10px;\n\tborder-radius: 5px;\n\tbackground-color: #d07878;\n\tbox-shadow: 1px 1px 5px #b5b5b5;\n\ttext-align: center;\n}\n/*player*/\n.tdplayer{\n\theight: 100%;\n\twidth: 100%;\n}\n.tp-video-warp{\n\tmin-height: 653px;\n}\n.video-end {\n\tposition: absolute;\n\theight: 100%;\n\twidth: 100%;\n\tz-index: 8;\n\tbackground: #000 url(" + __webpack_require__(8) + ") no-repeat right 40px bottom 30px;\n\tdisplay: none;\n\topacity: 1;\n\tanimation: tpshow 3s;\n\t-webkit-animation:tpshow 3s;\n}\n@keyframes tpshow\n{\n\tfrom {opacity: 0}\n\tto {opacity: 1}\n}\n@-webkit-keyframes tpshow\n{\n\tfrom {opacity: 0}\n\tto {opacity: 1}\n}\n.video-end>.replay {\n\tposition: absolute;\n\tleft: 50%;\n\ttop: 50%;\n\tmargin-left: -50px;\n\tmargin-top: -50px;\n\ttransition:transform 2s;\n\t-moz-transition:transform 2s;\n\t-webkit-transition:transform 2s;\n}\n.video-end>.replay:hover {\n\ttransform: rotate(360deg);\n\t-webkit-transform: rotate(360deg);\n\t-moz-transform: rotate(360deg);\n}\n.danmu {\n\tcolor: #fff;\n\tline-height: 31px;\n\tz-index: 6;\n\tpadding: 0 4px;\n\tfont-family: Avenir Next,Helvetica,Arial,Lantinghei SC,Microsoft YaHei,sans-serif;\n}\n.tp-left {\n\tposition: absolute;\n\twill-change: transform;\n\tright: 0;\n\tfont-size: 24px;\n\tanimation: dmleft 10s linear;\n\t-webkit-animation: dmleft 10s linear;\n\tcursor: pointer;\n\twhite-space: nowrap;\n\ttext-shadow: #000 0 2px 0;\n}\n.tp-top {\n\tposition: absolute;\n\tleft: 0;\n\tright: 0;\n\tmargin: 0 auto;\n\ttext-align: center;\n\tdisplay: inline-block;\n\twhite-space: nowrap;\n\ttext-shadow: #000 0 2px 0;\n\tfont-size: 22px;\n}\n@keyframes dmleft {\n\t0% {\n\t-webkit-transform: translateX(100%);\n\ttransform: translateX(100%)\n}\n}\n@-webkit-keyframes dmleft {\n\t0% {\n\t-webkit-transform: translateX(100%);\n\ttransform: translateX(100%)\n}\n}\n.danmu-warp {\n\tposition: absolute;\n\ttop: 0px;\n\tleft: 0px;\n\twidth: 100%;\n\theight: 100%;\n\tleft: 0px;\n\toverflow: hidden;\n}\n.tp-send {\n\tdisplay: none;\n\tposition: absolute;\n\tbottom: 10%;\n\tleft: 50%;\n\twidth: 60%;\n\theight: 35px;\n\tborder-radius: 5px;\n\tmargin: 0 0 0 -30%;\n\ttext-align: center;\n\tpadding: 4px 0;\n\tbackground-color: rgba(255, 255, 255, 0.79);\n\tz-index: 6;\n\tbox-shadow: 0 2px 2px 0 rgba(0,0,0,.14),0 3px 1px -2px rgba(0,0,0,.2),0 1px 5px 0 rgba(0,0,0,.12);\n}\n.tp-text {\n\tposition: relative;\n\ttop: -12px;\n\twidth: 50%;\n\tdisplay: inline-block;\n\tline-height: 20px;\n\tborder: none;\n\tbackground-color: transparent;\n\toutline: none;\n}\n.tp-up {\n\tposition: relative;\n\tdisplay: inline-block;\n\ttop: -13px;\n\tleft: 20px;\n\tbackground-color: #8715EF;\n\tcolor: #fff;\n\tborder: 0px solid #000;\n\tline-height: 20px;\n\tborder-radius: 4px;\n\tpadding: 3px 20px;\n}\n.tp-logo-small {\n\twidth: 114px;\n\theight: 35px;\n\tdisplay: inline-block;\n}\n.tp-video-main {\n\tposition: absolute;\n\twidth: 100%;\n\theight: 100%;\n\tbackground-color: #000;\n\t-webkit-user-select: none;\n\t-moz-user-select: none;\n\tuser-select: none;\n}\n.tp-video {\n\tbackground-color: #000;\n    position: absolute;\n    left: 0px;\n    top: 0px;\n    min-width: 0px;\n    max-width: none;\n    min-height: 0px;\n    max-height: none;\n    width: 100%;\n    height: 100%;\n    display: block;\n    transform: none;\n    margin: 0px !important;\n    flex: 1 1 0% !important;\n\n}\n.tp-video-con {\n\topacity: 0;\n\tposition: absolute;\n    bottom: 0;\n    height: 100px;\n    width: 100%;\n    background: linear-gradient(to top,rgba(0,0,0,.75),hsla(0,0%,100%,0));\n\ttransition: opacity 1s;\n\t-moz-transition: opacity 1s;\n\t-webkit-transition: opacity 1s;\n}\n.tp-control {\n\tposition: absolute;\n\tbottom: 0;\n\tpadding-bottom: 10px;\n\tleft: 0px;\n\twidth: 100%;\n\theight: 45px;\n\tcolor: #fff;\n\tline-height: 0px;\n\tuser-select: none;\n\tz-index: 888;\n}\n.tp-icon {\n\tposition: relative;\n\ttop: 6px;\n\tpadding-left: 10px;\n\tpadding-right: 2px;\n\twidth: 30px;\n\theight: 30px;\n\tcursor: pointer;\n\tfill: #fff;\n}\n.tp-danmu-switch {\n\tposition: relative;\n\tdisplay: inline-block;\n\tborder: 2px solid #fff;\n\tcolor: #fff;\n\tborder-radius: 50%;\n\twidth: 22px;\n\theight: 22px;\n\tline-height: 22px;\n\tfont-size: 14px;\n\ttext-align: center;\n\tcursor: pointer;\n}\n.tp-danmu-switch-c {\n\tcolor: #000 !important;\n\tborder: none !important;\n\tbackground-color: #fff;\n}\n\n.tp-vloop{\n\tdisplay: inline-block;\n    height: 25px;\n    width: 25px;\n    background-size: cover;\n    transform: translateY(8px);\n    cursor: pointer;\n}\n.tp-vloop1{\n\tbackground-image: url(" + __webpack_require__(9) + ")\n}\n.tp-vloop2{\n\tbackground-image: url(" + __webpack_require__(10) + ")\n}\n.tp-set{\n\tbackground-image: url(" + __webpack_require__(7) + ");\n\tdisplay: inline-block;\n    height: 24px;\n    width: 24px;\n    margin: 0 14px;\n    background-size: cover;\n    transform: translateY(8px);\n    cursor: pointer;\n}\n.tp-video-set{\n\tdisplay: none;\n\tposition: absolute;\n    top: 0;\n    left: 0;\n    bottom: 0;\n    right: 0;\n    width: 400px;\n    height: 300px;\n    margin: auto;\n    z-index: 999;\n    background-color: rgba(255, 255, 255, 0.85);\n    border-radius: 5px;\n    overflow:hidden\n}\n.tp-closeset{\n\tposition:absolute;\n\ttop: 0;\n\tright:0;\n\tpadding:4px;\n\tcursor:pointer;\n\tcolor:#000;\n\tfont-weight: 600;\n\n}\n\n.tp-settable{\n\tmargin:0 auto;\n\tcursor:default;\n}\n.tp-video-set>h4{\n\tmargin: 0;\n\tpadding: 10px 20px;\n    background-color: rgb(243, 93, 93);\n    color: #fff;\n}\n.tp-syk {\n\tpadding: 10px 10px;\n\tposition: relative;\n\tdisplay: inline-block;\n\tcolor: #fff;\n\ttop: -7px;\n}\n.tp-s-tranger {\n  position: relative;\n  height: 10px;\n  width:80px;\n  margin-left: 30px;\n  top: 10px;\n  background-color: rgba(142, 129, 129, 0.6);\n  border-radius: 4px;\n  cursor: pointer;\n  overflow:hidden;\n}\n.tp-s-tranger-a {\n  width: 10%;\n  height: 100%;\n  background-color: #e33d3d;\n  border-radius: 4px 0 0 4px;\n}\n.tp-tranger {\n\tposition: relative;\n\theight: 11px;\n\tbackground-color: rgba(0, 0, 0, 0.17);\n\tborder-radius: 6px;\n\tcursor: pointer;\n\toverflow: hidden;\n\tmargin-top: 18px;\n\tmargin-left: 80px;\n\tmargin-right: 170px;\n}\n.tp-tranger>.tp-tranger-a {\n\tposition: relative;\n\tdisplay: inline-block;\n\tbackground-color: rgb(248, 73, 73);\n\theight: 100%;\n\twidth: 0;\n\tborder-radius: 6px;\n\tz-index: 3;\n}\n.tp-tranger>.tp-tranger-b {\n\tposition: relative;\n\tdisplay: inline-block;\n\tbackground-color: #FFFFFF;\n\theight: 100%;\n\twidth: 11px;\n\tborder-radius: 50%;\n\tright: 16px;\n\tz-index: 5;\n}\n.tp-tranger>.tp-tranger-c {\n\tposition: absolute;\n\ttop: 0px;\n\twidth: 0%;\n\theight: 100%;\n\tbackground-color: rgba(207, 198, 198, 0.47);\n\tborder-radius: 6px;\n\tz-index: 2;\n\toverflow: hidden;\n}\n.tp-syk-ico {\n\tposition: absolute;\n\ttop: 22px;\n\tleft:12px;\n\tfont-size: 1.6em;\n\tcursor:default;\n}\n\n/*loding*/\n.tp-oneplay {\n\tmargin: auto;\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\tbottom: 0;\n\tright: 0;\n\twidth: 200px;\n\theight: 200px;\n\tz-index: 999;\n}\n.tp-spinner {\n\tmargin: 100px auto;\n\twidth: 50px;\n\theight: 40px;\n\ttext-align: center;\n\tfont-size: 10px;\n\tposition: absolute;\n\ttop: 40%;\n\tleft: 46%;\n\tz-index: 7;\n\tdisplay: none;\n}\n.tp-suspend {\n\t-webkit-animation-play-state: paused !important;\n\tanimation-play-state: paused !important;\n}\n.md-iframe {\n\tdisplay: none;\n}\n.tp-place2 {\n\tbackground-color: #3b3b3b;\n\tmargin: 2px 0 4px 0;\n\tcolor: #fff;\n\tcursor: pointer;\n}\n.tp-spinner > div {\n\tbackground-color: #fff;\n\theight: 100%;\n\twidth: 6px;\n\tdisplay: inline-block;\n\t-webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n\tanimation: sk-stretchdelay 1.2s infinite ease-in-out;\n}\n.tp-spinner .rect2 {\n\t-webkit-animation-delay: -1.1s;\n\tanimation-delay: -1.1s;\n}\n.tp-spinner .rect3 {\n\t-webkit-animation-delay: -1.0s;\n\tanimation-delay: -1.0s;\n}\n.tp-spinner .rect4 {\n\t-webkit-animation-delay: -0.9s;\n\tanimation-delay: -0.9s;\n}\n.tp-spinner .rect5 {\n\t-webkit-animation-delay: -0.8s;\n\tanimation-delay: -0.8s;\n}\n@-webkit-keyframes sk-stretchdelay {\n\t0%, 40%, 100% {\n\t-webkit-transform: scaleY(0.4)\n}\n20% {\n\t-webkit-transform: scaleY(1.0)\n}\n}\n@keyframes sk-stretchdelay {\n\t0%, 40%, 100% {\n\ttransform: scaleY(0.4);\n\t-webkit-transform: scaleY(0.4);\n}\n20% {\n\ttransform: scaleY(1.0);\n\t-webkit-transform: scaleY(1.0);\n}\n}\n.video-full {\n\twidth: 20px;\n\tpadding-right: 30px;\n\ttop: 9px;\n\tposition: relative;\n\tpadding-left: 10px;\n\theight: 30px;\n\tcursor: pointer;\n\tfill: #fff;\n}\n:-webkit-full-screen .tp-video-main {\n\theight: 100% !important;\n\twidth: 100% !important;\n\tposition: fixed;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n}\n:-moz-full-screen .tp-video-main {\n\theight: 100% !important;\n\twidth: 100% !important;\n\tposition: fixed;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n}\n:-ms-fullscreen .tp-video-main {\n\theight: 100% !important;\n\twidth: 100% !important;\n\tposition: fixed;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n}\n:-full-screen .tp-video-main {\n\theight: 100% !important;\n\twidth: 100% !important;\n\tposition: fixed;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n}\n:fullscreen .tp-video-main {\n\theight: 100% !important;\n\twidth: 100% !important;\n\tposition: fixed;\n\tleft: 0;\n\ttop: 0;\n\tright: 0;\n\tbottom: 0;\n}\n.tp-con {\n\tposition: absolute;\n\ttop: -90px;\n\tdisplay: none;\n\twidth: 150px;\n\tmargin: 0px auto;\n\tpadding: 6px;\n\tbackground-color: rgba(255, 255, 255, 0.75);\n\tborder-radius: 6px;\n\toverflow: hidden;\n}\n.tp-color {\n\tdisplay: inline-block;\n\tmargin-right: 2px;\n\tborder-radius: 4px;\n\tcursor: pointer;\n}\n.tp-color-warp {\n\theight: 60px;\n\tpadding-right: 16px;\n\toverflow: overlay;\n}\n.tp-color-main {\n\twidth: 20px;\n\theight: 20px;\n\tborder: 1px solid #8b8585;\n\tborder-radius: 2px;\n}\n.tp-color-bo {\n\tposition: relative;\n\tbottom: 8px;\n\twidth: 20px;\n\theight: 20px;\n\tborder-radius: 50%;\n\tborder: 1px solid #8b8585;\n}\n.tp-place {\n\ttext-align: center;\n\tpadding-bottom: 4px;\n}\n.tp-rightmenu {\n\tdisplay: none;\n\tposition: absolute;\n\twidth: 130px;\n\tborder: 1px solid #EEEEEE;\n\tmargin: 0;\n\tpadding: 0;\n\tlist-style: none;\n\tbackground-color: rgba(0,0,0,0.8);\n\tcolor: #fff;\n\tz-index: 9999;\n}\n.tp-rightmenu a {\n\tcolor: #fff;\n\ttext-decoration: none;\n}\n.tp-rightmenu li {\n\tpadding: 2px 5px;\n\tcursor: pointer;\n}\n.tp-rightmenu li:hover {\n\tpadding-left: 7px;\n\tbackground-color: rgba(255,255,255,0.2);\n}\n.tp-speend {\n\tdisplay: none;\n\tmargin: 4px 0 4px 30px;\n}\n.tp-copy-input{\n    display: inline-block;\n    width: 100%;\n    height: 19px;\n    overflow: hidden;\n    padding: 0;\n    margin: 0;\n    background-color: transparent;\n    border: 0px;\n    color: #fff;\n    resize: none;\n    font-size: 1em;\n    cursor: pointer;\n    font-family: Avenir Next,Helvetica,Arial,Lantinghei SC,Microsoft YaHei,sans-serif;\n}\n.tp-control-alltime-phone{\n\tdisplay: none;\n}\n.tp-loding{\n\tpadding: 20px 0 0 20px;\n\tcolor: #FFFFFF;\n\tposition: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 5;\n    box-sizing: border-box;\n}\n.tp-img-back{\n\tposition: absolute;\n    width: 100%;\n    height: 100%;\n    background-size: cover;\n    -webkit-filter: blur(10px);\n    -moz-filter: blur(10px);\n    -ms-filter: blur(10px);    \n    filter: blur(10px);    \n    z-index: 2;\n    overflow: hidden;\n}\n.noflash-alert{\n\tdisplay:none;\n}\n@media screen and (max-width: 700px) {\n\t.tp-tranger{\n\t\tposition: absolute;\n\t    width: 97%;\n\t    bottom: 4px;\n\t    margin: 0;\n\t}\n\t.tp-video-con>.tp-send{\n\t\tbottom: 60px;\n\t\tleft: initial;\n\t\tright: 10%;\n    \twidth: 80%;\n\t}\n\t.tp-control-alltime{\n\t\tdisplay: none;\n\t}\n\t.tp-control-alltime-phone{\n\t\tdisplay: inline-block;\n\t}\n}\n/*animation*/\n.tp-zoomoutdown{\n\tanimation:zoomOutDown .5s;\n\t-webkit-animation:zoomOutDown .5s;\n}\n@keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}\n@-webkit-keyframes zoomOutDown {\n  40% {\n    opacity: 1;\n    transform: scale3d(.475, .475, .475) translate3d(0, -60px, 0);\n    animation-timing-function: cubic-bezier(0.550, 0.055, 0.675, 0.190);\n  }\n\n  to {\n    opacity: 0;\n    transform: scale3d(.1, .1, .1) translate3d(0, 2000px, 0);\n    transform-origin: center bottom;\n    animation-timing-function: cubic-bezier(0.175, 0.885, 0.320, 1);\n  }\n}", ""]);

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
	if (style.parentNode === null) return false;
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


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACcklEQVRYR8VXgVEUQRDsjkAyECIQIhAjUCJQIlAjECIQI1AjECIQIxAiECJQI2irv3av7vZn9v6ox5+qr/q6293p7ZnpmSN2bNyxfywGIGkPwO8E+BHJmyWXegiANwA+J04+kXy3NQDlth8BfCV57YMlfQHwOnFyQ/KorDsG8BbAeY+VlIHi/DuAw+LMAM4BXAJ40rnlaQFoALY/AF5kIEIAgfMlrEZrUxBrAB7BeQUUgogA9GJcD/tbQnFXHuwDMOVPZ6i6JVlDuloaAfBBjn1kdnxB8ix6KckV4ncZkFOSvuBgWQ444Z43Tuz8eK7OSwi9/1mz/56kmZpYBuAVgG/N2o1FpoCwII2ZWLv9JARl00sAdu7f2FzLE9rLet/SyujY1nxY7SvhaAXLJWx2rur6gQFJ6iTQwdiBJCeSGaqUOsPft/GVZFBhPpBc+d4EwFrmJgcbhMM0MNFTzSUAfpCsqmZqfetfCVuTOEty2D5Eax8LwAlJx7nmwVYA3JE8GN9CUlam+yQdigogFbUlDPiwNgkdBt+01vq9K6fVCEkGEzauCIAPdflZzVoRcTv284mVakAkTkkZ3gIwK9d1TyZEkRxP4tsp2ZqoP4tG1KUu04tNlTCKnek0iNVgkllhxQI0aToA1nJpogOjxOmVmZcZnJWxVT4roicgj2T+H9l8M5JkmnzQnFnrzYp/djhoRWfjRu3Yh0XdbA7Q3Puwm/ZGsm2CSFv53FA6BuFat7JlI3llwEOpS7bOE905ovtdUFquk+6ydjpJFiC37ciGoUOSc8IJefagsbxTZv/vwyQCsfNPs7lUX/p+8bfhUgdz6/8BMgIlMGmen6gAAAAASUVORK5CYII="

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAACACAMAAAASwM/RAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAwBQTFRFqXVqos7mrSk2yjQ2d3N2mHlprTlBIyQk/Ny8XzI1/uLDrIt460tR6DhGc1FK5uXlKCgoiYSQ/fPd48m1qbbOW1mz++jLzJKH2cSy2Lmj9+bOgkpJ/fjgX3Xb1DxB/f37y9bs3uf15dG8+9/J9VFa8TUy/efQ/+7d+eLJ2NPVr257/Na7yaaS+eXOjWddTYvrra6szIZ9/NnB8UpS+DtC/v78/eS9Z0I+/uXN2zxDkJTIkaTZ69fE20JFSEZF/unRxztCnYR0+t3GyXR05ElNuaOSycfK/d3G+trAl6/jlJSk4z895/X460lO///+/uHK40VKLWnq6kVK1qeXs7OzPjs637qmWVhX8tzD3EVJ79W89EBJupaC0bik+9rF+eLNuENF/NvE/d6/+/3v58Kucpbpxbm78fPzvY1/+uXKeqTjvVdT+DtUVEdGvMjY5z5S/e7VoqK9ISIi9Nm81D9DoZ+dw5+L8E1Y4Nzaup6q6eztsmlg+t7B0svS08jJqF5n8vv8mUdA2bKa/Nu2/+zRxURL//LPzFNk/uXHtZeb0T1IqFxQGxsbdV9Y6z9F19LN4T9GJCgo8uXL+ejQ9OTDW5G6pERI/OPM4ExO/UJS8Mqs1ztH/urWu6aleLzm2D5b8/npxFxZ+tbA9ktUiJzm8EFS3TY/8tS3605R9OzO7OPcy62gtU9IJYj1gTY//f78LS4u/u3Hsa6w+v78MC8uwVBa8EBaSJjhwDtUrLzk1ENH9d7J+uvV+09Y/f38+vv5olFI0jNAICgn1yw4r4WE+dS5y7KfbVRp7M620jdK0GFf/P358tK+2zZJ+fr99eXR/P///fz7X05N9fj3ICEhKC4tAAAALCwsKisrvDA+Ry0uLiorJSYmHx8fHh4eJycnJygo+eXW2t3l0b6t9OzgzVRP89bU7TJG/fr2/zdK/ipOLDE3O3Kq3auc8O3sz6uo3yEcaZvYY2Vl1lNO0p+QTU1MNjIyTFhhWVJN0EZK1kxM++vQ/fDYsFBXp4yZAAAA7SRZngAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAABD0SURBVHja7N0JWFNnugBgGgJhCXqAlipiUIIYZVGD0WCFQAQTRU4olc1iIHGlVsWA4AgurWgpCgVxDBZaWxkoVSfolbGuWFEs1OJgTaNgFpR5xrm9U+der1h7oc39D2DVkOVkw3jv/+GDD2QhfG++fz3nYKeGYVNhB1MAQWBAEAgCA4JAEBgQBILAgCAQBAYEgQFBIAgMCAJBYNgQyB6NgMl8gSCIjoAJfQEgiP6AOR1ZEARHwLSOGAiCM2BiRwQEMSJgaq0OghgZMLlWBUGMD5hdK4IgJgXMr5VAEFMDJtgqIIgZAVNseRAEgSK2BIIgUMSWQBAEitgSCIJAEVsCQRAoYksgCAJFbAkEgSD/R0GgiEVATM+/XCRVKJUKORSxJIiqW1e+u7u79XGopMciepOJ7g9u7iENfYuUCHNtLshakq6sl5d3dzc3l+vyIIl+fnXiqg6U0bDJvVE69E0FzLW5IFJdHs0SQidB4nxbh4j0P/746TsLTs+fv3L+3UXzI5RDjdgtmGzzQB6RdFVAeRfh3o8//th5W67tVkXiq4teeXP8nzYsdCe+Rtyw5WfF4PeVyTDbZoHs0d1FNKu6JBff/dG5WcttiogtHScWrXhzxYSJE9a9usHdfeMx+VDHArNtDkgiSU+v3V0ud46cSWhWPf1G81D8vM7X9x/Lbiz45x9fQVG0o2PLxmTRUFMWAdNtBohc/7i2vPkRgTBQId0YQ/ntLmdnZ8k4yaiFq9AGILL91X++NufudQYD3UwkIbBEzAYhGZppqJolEmW3qrwZ6XKWSBx3rl+//uRJ8O/U1JXb0RMXrp5YN/41QHIN3ex+awhX2gvzbTKI4bmfqKukufmHLklnXZ3bzLffri0tXb++9uTJA+tPTd16Ar3KYKw6DUjc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"

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACcElEQVRYhe2WT4hNYRjGf2OYTIg0rmZjNZFrobHAbCZkITYG2bFVEyFLSrK0EWkiFsrCn8KGKamZUsyGCc1C/qwMmYkRYnSNn8X3HZ2Oe+eea6Zmc5966/bd873Pc97n+973QB11zDAakh/qVPIUgBIwlpu4IVDPmgprCruBQeAAqZfKg+kSMA60AGeAfmBtzRnUctGhnlVfqxPmx0/1cCpPm3pT3Z6sJZhdQc8c4CSwH5hH8Pc58BFoTD23GhAYAdpS/30GhoFFwDGCNU3AMuB2tQosUO/EN3mrHlQXVqhQEnvUb3FPj1pQu9XRuDahXlJbsxUoJ+BU3PRIXVWFOIm9UXSnukUdStnRp7Zn91QSsE19rw6r63OSJ1FUe1PEL9Wu1BnoU9+pmyYT0BM3H6qBuEU9p5bi3q/qUbU581x3yqKKAvrUcXVDDuIm9Yg6FhP/43MmOtVPar/aXE5AQX2qPlSXVyHP5XMmVqgD6hN1ScKbbkQCv+NapW5WBHpjFIFXwA5gI6ETTgZjNJbNH1Xei15uruLzWCx/Uw1nZY36Rh1UC5UEdKvn1ZUVfC5FIS01EKevquoVq/SBJLoMVylBr+Gq1UqMoZ88VkfUrdUEtMdDlWDIcOgWq9fUizWSL1Uvx1zXk/VyAloN1ygZOmmfd0X/VG/kJG42tOgXcd9ddX5WQPqDZABYB/wCLgDHgbnAaWBnSmsJeEDlUT5BGM1FwlADuArsA778JW7IXARDG8763Kbe9//wwTDKO8pVKM8hTJfyhPo9Jr6V04JJI0GeL6If0Y5O4Blhrk8bav0oXUzoZKNTJs6egTrqmCn8AeJNPXtlXJVpAAAAAElFTkSuQmCC"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAABsElEQVRYR+1W0U0CURCcqUA7UDrACtQKtASsQK1A7QArUCoQK1ArECuQErSCMZMsl+M47r3DAzRhv0h4u2/ezuzsEVsObvl+7AD8rw5IOiQ57VI3WR3wxQAeAJDkyUYBSLoFcAlgH8DbxgBI8oUvAPorvPgLwCuAMclRU34jBZLGAM5KBb4BTDIAGfRenDOQi2XaSWpAkjl/BHDQhoLIM33HANyRU5IL4OcARNsttnuSRl5EaKFP8jyjA+W8YWhoQvKomlsFYMQ3AK5JOrGTKFF5R9J3FFEF4FY5PO+z378GEWP8CWBKslcLQJKF8w7guW2bcxBKMqXWQ68syKIDIRqP3UKbci5InQkNmV6LsdDXnwQwIjlIvajt/0kKXFCShafgqTMRRu0ru2r1ccvG0D7ghLVHnRF53dpGbZ92wOyISXqK3DkjW1ZkwYqjiJMNwrvAU5Hj/6bQtu1Jchi8Da2RytpdECB8uf3f4SI5ILxBy9vTee6ka9VGaht6Guz95Y2YTUkcbKQyuQ3b3Fah4APAIEXfOgC43cPq0lmJgjavn51t++HaaQdWAbwDsOvAD/6OsiHZLcDYAAAAAElFTkSuQmCC"

/***/ })
/******/ ]);