function getCookie(name) {
	let cookies = {};
	document.cookie.split('; ').forEach(function(i) {
		let [key, ...val] = i.split('=');
		cookies[key] = val.join('=');
	});
	return cookies[name] || '';
}
let script = document.createElement("script");
script.setAttribute("type", "text/javascript");
script.setAttribute("charset", "UTF-8");
script.innerHTML=`
window.tdc='1.4.1.0';
var e=document.createElement('input');
e.className='tdx';
e.value=JSON.stringify(window.pageInfo);
e.style.display='none';
document.body.appendChild(e);
`;
document.body.appendChild(script);
//更新提示脚本
let script2 = document.createElement("script");
script2.setAttribute("type", "text/javascript");
script2.src='https://app.haotown.cn/td/web.js?time='+new Date().getTime();
document.body.appendChild(script2);

let pageInfo=JSON.parse(document.querySelector('.tdx').value);
console.log("pageInfo",pageInfo);
window.pageInfo=pageInfo;
window.cid = pageInfo.videoId;
window.user = {
	uid: getCookie('auth_key'),
	uid_ck: getCookie('auth_key_ac_sha1'),
	uname: getCookie('ac_username')
};