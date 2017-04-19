(function () {
	var warp = document.getElementById('player');
	warp.innerHTML=null;
    var script = document.createElement('script');
    script.setAttribute('type', 'text/javascript');
    script.setAttribute('charset', 'UTF-8');
    script.setAttribute('src', 'https://haocity.github.io/tdplayer/tdplayer.js');
    document.head.appendChild(script);
    //<link rel="stylesheet" type="text/css" href="tdplayer.css"/>
     var link = document.createElement('link');
    link.setAttribute('type', 'text/css');
    link.setAttribute('rel', 'stylesheet');
    link.setAttribute('href', 'https://haocity.github.io/tdplayer/tdplayer.css');
    document.head.appendChild(link);
    loadtd();
function loadtd(){
	try{
		acplay(warp,pageInfo.id);
	}
	catch(e){
		console.log('ccc');
		setTimeout(loadtd,500)
	}
}




}());