(function () {
	var warp = document.getElementById('player');
	warp.innerHTML=null;
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('charset', 'UTF-8');
    script.setAttribute('src', 'https://app.haotown.cn/td/tdplayer.min.js');
    document.head.appendChild(script);
     var link = document.createElement('link');
    link.setAttribute('type', 'text/css');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'https://app.haotown.cn/td/style.css');
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