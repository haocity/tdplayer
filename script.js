(function () {
	var thisurl=window.location.href;
	if(thisurl.indexOf("acfun.cn") < 0||thisurl.indexOf("acfun.tv") < 0||thisurl.indexOf("aixifan.com") < 0){
        tmp = thisurl.split("/");
        thisac = tmp[tmp.length - 1];
        console.log( thisac);
		var warp = document.getElementById('player');
		if(warp){
			warp.innerHTML=null;
		    var script = document.createElement('script');
		    script.setAttribute('type', 'text/javascript');
		    script.setAttribute('charset', 'UTF-8');
		    //script.setAttribute('src', 'http://127.0.0.1:8020/tdplayer/tdplayer.js');
		    script.setAttribute('src', 'https://app.haotown.cn/td/tdplayer.min.js');
		    document.head.appendChild(script);
		    var link = document.createElement('link');
		    link.setAttribute('type', 'text/css');
		    link.setAttribute('rel', 'stylesheet');
		    //link.setAttribute('href', 'http://127.0.0.1:8020/tdplayer/style.css');
		    link.setAttribute('href', 'https://app.haotown.cn/td/style.css');
		    document.head.appendChild(link);
		    script.onload=function(){
		    	loadtd(thisac);
		    }
	   }else{
	   	alert('暂时不支持的视频');
	   }
	}else{
		alert('请进入acfun再说。。');
	}
	
function loadtd(ac){
	var t=ac;
	if(t.indexOf("ac")==0){
		var id=ac.slice(2);
		console.log(id);
			acplay(warp,id);
		
	}else{
		alert('暂时不支持的视频');
	}
}
}());