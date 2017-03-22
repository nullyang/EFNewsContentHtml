var SNJavascriptBridge = (function(){
	var scheme = "effundlocal";
                          
	var makeURL = function(funcName, argsDict) {
		var URL = scheme+":"+funcName;
		if(argsDict!=null){
			var argsString = encodeURIComponent(JSON.stringify(argsDict));
		    URL += "("+argsString;
            URL += ")";
		}
		return URL;
	};

	var _callNativeBlock = function(funcName, argsDict){
		var messagingIframe = document.createElement('iframe');
		messagingIframe.style.display = 'none';
		messagingIframe.setAttribute("src", makeURL(funcName,argsDict));
		document.documentElement.appendChild(messagingIframe);
		document.documentElement.removeChild(messagingIframe);
		messagingIframe = null;
	};

	return {
		callNativeBlock: _callNativeBlock
	};

})();
