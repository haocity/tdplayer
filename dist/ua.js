//来源Boomfun https://boomfun.work/tool/10
var requestRules = [{
		'data': {
			'name': 'User-Agent',
			'value': 'yk_acfun;440;Android;7.0;MI 6'
		},
		'mandatory': true,
		'fn': false
	},{
		'data': {
			'name': 'Referer',
			'value': ''
		},
		'mandatory': true,
		'fn': false
	}, {
		'data': {
			'name': 'Access-Control-Request-Headers',
			'value': null
		},
		'mandatory': false,
		'fn': function(rule, header, details) {
			if(accessControlRequests[details.requestId] === void 0) {
				accessControlRequests[details.requestId] = {};
			}
			accessControlRequests[details.requestId].headers = header.value;
		}
	}
];


chrome.webRequest.onBeforeSendHeaders.addListener(function(details) {
	requestRules.forEach(function(rule) {
		var flag = false;

		details.requestHeaders.forEach(function(header) {
			if(header.name === rule.data.name) {
				flag = true;
				if(rule.fn) {
					rule.fn.call(null, rule, header, details);
				} else {
					header.value = rule.data.value;
				}
			}
		});

		//add this rule anyway if it's not present in request headers
		if(!flag && rule.mandatory) {
			if(rule.data.value) {
				details.requestHeaders.push(rule.data);
			}
		}
	});
	
	//console.log(JSON.stringify(details, null, 2));
	return {
		requestHeaders: details.requestHeaders
	};
}, {
	urls: ["http://video.acfun.cn/*","http://player.acfun.cn/route_m3u8*","http://edge.ivideo.sina.com.cn/*.hlv*"]
}, ['blocking', 'requestHeaders']);