(function() {
    var thisurl = window.location.href;
	    var warp = document.querySelector(".player>#player");
	    if (warp) {
	        tmp = thisurl.split("/");
	        thisac = tmp[tmp.length - 1];
	        var script = document.createElement("script");
	        script.setAttribute("type", "text/javascript");
	        script.setAttribute("charset", "UTF-8");
	        script.setAttribute('src', 'https://app.haotown.cn/td/tdplayer.min.js?v=2.2.035');
	        //script.setAttribute('src', 'http://127.0.0.1:8020/tdplayer/tdplayer.js');
	        document.head.appendChild(script);
	        script.onload = function() {
	            if (thisac.indexOf("ac") == 0) {
	               	var info=document.querySelector('#pageInfo');
	                if (info) {
	                	if (info.getAttribute("data-from")=='zhuzhan') {
	                		console.log('ac源视频');
	                		tdvidplay(document.querySelector('#player'),document.querySelector('#pageInfo').getAttribute("data-vid"))
	                	}else if(info.getAttribute("data-from")=='youku'){
	                		tdacplay(document.querySelector('#player'),document.querySelector('#pageInfo').getAttribute("data-aid"))
	                	}
	                }
	            } else {
					try{
						$.info.error('替换失败')
					}catch(e){
						console.log("不支持。 /(ㄒoㄒ)/~~");
					}    
	            }
	        };
	    }else{
	    	alert('没有找到acfun视频')
	    }
})();