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
	            	var e=document.querySelector('.primary');
	            	if (e.getAttribute("data-from")=='ac') {
	            		document.querySelector('.ui-draggable').innerHTML=null;
	            		tdvidplay(document.querySelector('.ui-draggable'),e.getAttribute("data-vid"))
	            	}else{
	            		console.log("不支持。 /(ㄒoㄒ)/~~");
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
