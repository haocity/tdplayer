(function() {
    var thisurl = window.location.href;
	    var warp = document.querySelector(".player>#player");
	    if (warp) {
	        tmp = thisurl.split("/");
	        thisac = tmp[tmp.length - 1];
	        warp.innerHTML = null;
	        var script = document.createElement("script");
	        script.setAttribute("type", "text/javascript");
	        script.setAttribute("charset", "UTF-8");
	        script.setAttribute('src', 'https://app.haotown.cn/td/tdplayer.min.js');
	        //script.setAttribute('src', 'http://127.0.0.1:8020/tdplayer/tdplayer.js');
	        document.head.appendChild(script);
	        var link = document.createElement("link");
	        link.setAttribute("type", "text/css");
	        link.setAttribute("rel", "stylesheet");
	        link.setAttribute('href', 'https://app.haotown.cn/td/style.css');
	        //link.setAttribute('href', 'http://127.0.0.1:8020/tdplayer/style.css');
	        document.head.appendChild(link);
	        script.onload = function() {
	            if (thisac.indexOf("ac") == 0) {
	                var id = thisac.slice(2);
	                Tdplayer(warp, id);
	            } else {
	                $.info("不支持。 /(ㄒoㄒ)/~~");
	            }
	        };
	    }else{
	    	alert('没有找到acfun视频')
	    }
})();