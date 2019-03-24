mui.init({swipeBack: false
,gestureConfig: {tap:true,doubletap:true,longtap:true,hold:true,release:true}});

if(mui.os.plus){
    mui.plusReady(function() {
        主窗口_创建完毕();
        
    });
}else{
    window.onload=function(){ 
        主窗口_创建完毕();
        
    }
}

	var tbl;
	var 状态=0;
	var 时间;
	var 分数=0;
	var 当前方块;
	var 页面格子 = new Array(18);
	for (var i = 0; i < 18; i++) {
	    页面格子[i] = new Array(10);
	}
	for (var i = 0; i < 18; i++) {
	    for (var j = 0; j < 10; j++) {
	        页面格子[i][j] = 0;
	    }
	}

function 主窗口_创建完毕(){
	公用模块.引入css文件("css/css.css");
	画界面();
}

function 画界面(){
	var 头部;
	var 格子;
	var 开始;
	var 积分;
	var 操作;
	var 旋转;
	var 向左;
	var 向右;
	var 向下;
	var 全部;
	头部="<div class = \"tetrisContainer\"><table id=\"area\" cellspacing=\"0\" cellpadding=\"0\" border=\"1\" style=\"border-collapse:collapse\"><tr>";
	格子="<td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td>";
	格子=格子+"<td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td>";
	格子=格子+"<td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>";
	格子=格子+"<tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td>";
	格子=格子+"</td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td>";
	格子=格子+"</td><td></td><td></td><td></td><td></td></tr><tr><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr></table>";
	开始="<input type=\"button\" value=\"开始游戏\" onclick=\"开始游戏(this)\">";
	积分="<span class=\"defen\">得分: <span id=\"分数\"> 0</span></span>";
	操作="<div style=\"width:100%;height:10px;\"></div>";
	旋转="<input type=\"button\" value=\"旋转\" onclick=\"旋转方块()\">";
	向左="<input type=\"button\" value=\"向左\" onclick=\"向左移动()\">";
	向右="<input type=\"button\" value=\"向右\" onclick=\"向右移动()\">";
	向下="<input type=\"button\" value=\"向下\" onclick=\"向下移动()\"></div>";
	全部=头部+格子+开始+积分+操作+旋转+向左+向右+向下;
	document.body.innerHTML=document.body.innerHTML+全部;
}

function 生产方块(){
	当前方块 = null;
	当前方块 = new Array(4);
	var t = (Math.floor(Math.random() * 20) + 1) % 7;
	switch(t){
		case 0 :
			当前方块[0] = {
                x: 0,
                y: 4
            };
            当前方块[1] = {
                x: 1,
                y: 4
            };
            当前方块[2] = {
                x: 0,
                y: 5
            };
            当前方块[3] = {
                x: 1,
                y: 5
            };
		break;
		case 1 :
			当前方块[0] = {
                x: 0,
                y: 3
            };
            当前方块[1] = {
                x: 0,
                y: 4
            };
            当前方块[2] = {
                x: 0,
                y: 5
            };
            当前方块[3] = {
                x: 0,
                y: 6
            };
		break;
		case 2 :
			当前方块[0] = {
                x: 0,
                y: 5
            };
            当前方块[1] = {
                x: 1,
                y: 4
            };
            当前方块[2] = {
                x: 1,
                y: 5
            };
            当前方块[3] = {
                x: 2,
                y: 4
			};
		break;
		case 3 :
			当前方块[0] = {
                x: 0,
                y: 4
            };
            当前方块[1] = {
                x: 1,
                y: 4
            };
            当前方块[2] = {
                x: 1,
                y: 5
            };
            当前方块[3] = {
                x: 2,
                y: 5
            };
		break;
		case 4 :
			当前方块[0] = {
                x: 0,
                y: 4
            };
            当前方块[1] = {
                x: 1,
                y: 4
            };
            当前方块[2] = {
                x: 1,
                y: 5
            };
            当前方块[3] = {
                x: 1,
                y: 6
			};
		break;
		case 5 :
			当前方块[0] = {
                x: 0,
                y: 4
            };
            当前方块[1] = {
                x: 1,
                y: 4
            };
            当前方块[2] = {
                x: 2,
                y: 4
            };
            当前方块[3] = {
                x: 2,
                y: 5
            };
		break;
		case 6 :
			当前方块[0] = {
                x: 0,
                y: 5
            };
            当前方块[1] = {
                x: 1,
                y: 4
            };
            当前方块[2] = {
                x: 1,
                y: 5
            };
            当前方块[3] = {
                x: 1,
                y: 6
            };
		break;
	}

	for (var i = 0; i < 4; i++) {
		if(!检测是否存在(当前方块[i].x, 当前方块[i].y) ){
			return false;
		}
	}
	return true;
}

function 向下移动(){
	if(检查底边界() ){
		擦除掉();
		for (var i = 0; i < 4; i++) {
            当前方块[i].x = 当前方块[i].x + 1;
        }
		重画图形();
	}else{
		clearInterval(时间);
		更新格子();
		var lines = 消除行();
		if(lines != 0 ){
			分数 = 分数 + lines * 10;
			更新分数();
			擦除画面();
			重绘画面();
		}

		if(!生产方块() ){
			alert("游戏结束了,去蓝鸟交流群,给我提提意见吧！");
            状态 = 2;
            return;
		}
		重画图形();
		时间 = setInterval(向下移动, 1000);
	}
}

function 向左移动(){
	if(检查左边界() ){
		擦除掉();
		for (var i = 0; i < 4; i++) {
            当前方块[i].y = 当前方块[i].y - 1;
        }
        重画图形();
	}
}

function 向右移动(){
	if(检查右边界() ){
		擦除掉();
        for (var i = 0; i < 4; i++) {
            当前方块[i].y = 当前方块[i].y + 1;
        }
        重画图形();
	}
}

function 旋转方块(){




	var tmpBlock = new Array(4);
    for (var i = 0; i < 4; i++) {
        tmpBlock[i] = {
            x: 0,
            y: 0
        };
    }
    for (var i = 0; i < 4; i++) {
        tmpBlock[i].x = 当前方块[i].x;
        tmpBlock[i].y = 当前方块[i].y;
    }

	var cx = Math.round((tmpBlock[0].x + tmpBlock[1].x + tmpBlock[2].x + tmpBlock[3].x) / 4);
    var cy = Math.round((tmpBlock[0].y + tmpBlock[1].y + tmpBlock[2].y + tmpBlock[3].y) / 4);


    for (var i = 0; i < 4; i++) {
        tmpBlock[i].x = cx + cy - 当前方块[i].y;
        tmpBlock[i].y = cy - cx + 当前方块[i].x;
    }

    for (var i = 0; i < 4; i++) {
		if(!检测是否存在(tmpBlock[i].x, tmpBlock[i].y) ){
			return;
		}
    }

    擦除掉();

    for (var i = 0; i < 4; i++) {
        当前方块[i].x = tmpBlock[i].x;
        当前方块[i].y = tmpBlock[i].y;
    }
    重画图形();
}


function 检查左边界(){

    for (var i = 0; i < 当前方块.length; i++) {
		if(当前方块[i].y == 0 ){
			return false;
		}
		if(!检测是否存在(当前方块[i].x, 当前方块[i].y - 1) ){
			return false;
		}
    }
    return true;
}


function 检查右边界(){
    for (var i = 0; i < 当前方块.length; i++) {
		if(当前方块[i].y == 9 ){
			return false;
		}
        if(!检测是否存在(当前方块[i].x, 当前方块[i].y + 1) ){
			return false;
		}
    }
    return true;
}


function 检查底边界(){
    for (var i = 0; i < 当前方块.length; i++) {
		if(当前方块[i].x == 17 ){
			return false;
		}
		if(!检测是否存在(当前方块[i].x + 1, 当前方块[i].y) ){
			return false;
		}
    }
    return true;
}


function 检测是否存在(x, y){
	if(x > 17 || x < 0 || y > 9 || y < 0 ){
		return false;
	}
	if(页面格子[x][y] == 1 ){
		return false;
	}
    return true;
}

function 擦除掉(){
    for (var i = 0; i < 4; i++) {
        tbl.rows[当前方块[i].x].cells[当前方块[i].y].style.backgroundColor = "white";
    }
}

function 重画图形(){
    for (var i = 0; i < 4; i++) {
        tbl.rows[当前方块[i].x].cells[当前方块[i].y].style.backgroundColor = "#CC3333";
    }
}

function 更新格子(){
    for (var i = 0; i < 4; i++) {
        页面格子[当前方块[i].x][当前方块[i].y] = 1;
    }
}

function 消除行(){
	var lines=0;

    for (var i = 0; i < 18; i++) {
        var j = 0;
        for (; j < 10; j++) {
            if(页面格子[i][j] == 0 ){
                break;
            }
        }
        if(j == 10 ){
            lines++;
            if(i != 0 ){
                for (var k = i - 1; k >= 0; k--) {
                    页面格子[k + 1] = 页面格子[k];
                }
            }
            页面格子[0] = 空白行();
        }
    }
    return lines;
}


function 擦除画面(){
    for (var i = 0; i < 18; i++) {
        for (var j = 0; j < 10; j++) {
            tbl.rows[i].cells[j].style.backgroundColor = "white";
        }
    }
}


function 重绘画面(){
    for (var i = 0; i < 18; i++) {
        for (var j = 0; j < 10; j++) {
            if(页面格子[i][j] == 1 ){
                tbl.rows[i].cells[j].style.backgroundColor = "#CC3333";
            }
        }
    }
}


function 空白行(){
    var line = new Array(10);
    for (var i = 0; i < 10; i++) {
        line[i] = 0;
    }
    return line;
}


function 更新分数(){
    document.getElementById("分数").innerText = " " + 分数;
}


function 开始游戏(e){
    e.disabled = true;
    状态 = 1;
    tbl = document.getElementById("area");
    if(!生产方块() ){
        alert("游戏结束了！");
        状态 = 2;
        return;
    }
    重画图形();
    时间 = setInterval(向下移动, 1000);
}
