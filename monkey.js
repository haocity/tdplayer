// ==UserScript==
// @name ACFUN H5 TDPLAYER播放器
// @namespace    http://tampermonkey.net/
// @description  替换HTML5播放器
// @author       疯狂减肥带
// @match        http://www.acfun.cn/*
// @grant        none
// ==/UserScript==
(function() {
    var thisurl = window.location.href;
    var warp = document.querySelector(".player>#player");
    if (warp) {
        tmp = thisurl.split("/");
        thisac = tmp[tmp.length - 1];
        console.log(thisac);
        warp.innerHTML = null;
        var script = document.createElement("script");
        script.setAttribute("type", "text/javascript");
        script.setAttribute("charset", "UTF-8");
        script.setAttribute('src', 'https://app.haotown.cn/td/tdplayer.min.js');
        document.head.appendChild(script);
        var link = document.createElement("link");
        link.setAttribute("type", "text/css");
        link.setAttribute("rel", "stylesheet");
        link.setAttribute('href', 'https://app.haotown.cn/td/style.css');
        document.head.appendChild(link);
        script.onload = function() {
            if (thisac.indexOf("ac") == 0) {
                var id = thisac.slice(2);
                Tdplayer(warp, id);
            } else {
                alert("暂时不支持的视频");
            }
        };
    }
})();