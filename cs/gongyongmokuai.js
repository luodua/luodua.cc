(function (){ 
window["公用模块"] = {}
function 引入css文件(文件){
	var CSS;
	CSS = document.createElement("link");
    CSS.href = 文件;
    CSS.rel = "stylesheet";
    CSS.type = "text/css";
	document.getElementsByTagName("head").item(0).appendChild(CSS);
}


window["公用模块"]["引入css文件"]=引入css文件;
})();