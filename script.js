(function () {
	var warp = document.getElementById('player');
	warp.innerHTML=null;
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('charset', 'UTF-8');
    script.setAttribute('src', 'http://127.0.0.1:8020/tdplayer/tdplayer.js');
    document.head.appendChild(script);
     var link = document.createElement('link');
    link.setAttribute('type', 'text/css');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'http://127.0.0.1:8020/tdplayer/style.css');
    document.head.appendChild(link);
    loadtd();
function loadtd(){
	try{
		acplay(warp,pageInfo.id);
	}
	catch(e){
		console.log('loading..');
		setTimeout(loadtd,100)
	}
}
}());