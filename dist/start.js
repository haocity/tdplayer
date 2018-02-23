
function getvideop(){
	if(pageInfo&&pageInfo.videoId){
		for (var i = 0; i < pageInfo.videoList.length; i++) {
			if(pageInfo.videoList[i].id==pageInfo.videoId){
				return i;
				break;
			}
		}
	}
}

var info = document.querySelector('#pageInfo');
if(info) {
	var p = getvideop();
	console.log("这是第" + p + "p");
	if(pageInfo.videoList[p].source_type == 'zhuzhan') {
		tdvidplay({
			ele: '#player',
			vid: pageInfo.videoList[p].id,
			pic: pageInfo.coverImage,
			ab: false
		})
	} else if(info.getAttribute("data-from") == 'youku') {
		$.info.show("优酷 ");
		tdvidplay({
			ele: '#player',
			ab: false,
			vid: pageInfo.videoList[p].id,
			yk: pageInfo.videoList[p].source_id,
			pic: pageInfo.coverImage
		})

	}
} else {
	var e = pageInfo.video.videos[0];
	pageInfo.videoId=e.danmakuId;
	window.cid = pageInfo.videoId;
	if(e.sourceType == 'zhuzhan') {
		document.querySelector('#player').innerHTML = null;
		tdvidplay({
			ele: '#player',
			vid: e.danmakuId,
			pic: pageInfo.album.coverImageH,
			ab: true
		})
	} else if(e.sourceType == 'youku') {
		//优酷规则
		document.querySelector('#player').innerHTML = null;
		tdvidplay({
			ele: '#player',
			ab: true,
			vid: e.danmakuId,
			yk: e.sourceId,
			pic: pageInfo.album.coverImageH
		});

	} 
}

