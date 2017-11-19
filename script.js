(function() {
    var thisurl = window.location.href;
    var tmp = thisurl.split("/");
    if (tmp[2].indexOf('acfun')||tmp[2].indexOf('aixifan')) {
	        thisac = tmp[tmp.length - 1];
	        var script = document.createElement("script");
	        script.setAttribute("type", "text/javascript");
	        script.setAttribute("charset", "UTF-8");
	        script.setAttribute('src', 'http://127.0.0.1:8020/tdplayer/dist/tdplayer.js');  
	        document.head.appendChild(script);
	        script.onload = function() {
	            if (thisac.indexOf("ac") == 0) {
	               	var info=document.querySelector('#pageInfo');
	                if (info) {
	                	if (info.getAttribute("data-from")=='zhuzhan') {
	                		console.log('ac源视频');
	                		tdvidplay(document.querySelector('#player'),info.getAttribute("data-vid"),info.getAttribute("data-pic"))
	                	}else if(info.getAttribute("data-from")=='youku'){
	                		tdyoukuplay(document.querySelector('#player'),document.querySelector('#pageInfo').getAttribute("data-aid"))
	                	}
	                }
	            } else if(thisac.indexOf('ab')==0){
	            	var e=pageInfo.video.videos[0];
	            	if (e.sourceType=='zhuzhan') {
	            		document.querySelector('#player').innerHTML=null;
	            		tdvidplay(document.querySelector('#player'),e.videoId,e.danmakuId);
	            	}else if(e.sourceType=='youku'){
	            		//优酷规则
	            		$.info.show("解析番剧区优酷中 ");
	            		document.querySelector('#player').innerHTML=null;
	            		tdyoukuplay(document.querySelector('#player'),e.danmakuId,e.sourceId);
	            	}else{
	            		$.info.show("不支持。 /(ㄒoㄒ)/~~" );
	            	}
	            }else{
					try{
						$.info.error('酷似没有支持的视频唉')
					}catch(e){
						console.log("不支持。 /(ㄒoㄒ)/~~");
					}    
	            }
	        };
	    }else{
	    	alert('请进入acfun再说..')
	    }
})();
