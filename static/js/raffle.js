var jsonData = []; // 要导出到excel的json数据
var candidate = []; // 一等奖候选人

if (localStorage.getItem("excel_data")) {
    temp = localStorage.getItem("excel_data");
    jsonData = $.parseJSON(temp);
}


// document.querySelector('html').style.filter = 'grayscale(100%)'


function changeReward(reward_str) {
    if(flag==0){
        changeBoardSize();
    }
    candidate = [];
    if(personArray.length-Obj.luckyResult_history.length <= 3){
        for (var i = 0; i < personArray.length-1; i++) {
            if (Obj.luckyResult_history.indexOf(i) == -1) {
                candidate.push(personArray[i].name);
            }
        }

    }
    myAuto.currentTime = 0;
    $(".lucky_people_title").text(reward_str);
    if (reward_str != '安慰奖') {
        $(".btn_circle").text('开始');
    }
    if (reward_str == '九等奖') {
        Obj.luckyPrize = 9;
        Obj.luckyNum = 33;
    }
    if (reward_str == '八等奖') {
        Obj.luckyPrize = 8;
        Obj.luckyNum = 30;
    }
    if (reward_str == '七等奖') {
        Obj.luckyPrize = 7;
        Obj.luckyNum = 20;
    }
    if (reward_str == '六等奖') {
        Obj.luckyPrize = 6;
        Obj.luckyNum = 15;
    }
    if (reward_str == '五等奖') {
        Obj.luckyPrize = 5;
        Obj.luckyNum = 10;
    }
    if (reward_str == '四等奖') {
        Obj.luckyPrize = 4;
        Obj.luckyNum = 5;
        myAuto.src = 'style/彩虹节拍（童声版）.mp3';    //MP3路径
    }
    if (reward_str == '三等奖') {
        Obj.luckyPrize = 3;
        Obj.luckyNum = 5;
    }
    if (reward_str == '二等奖') {
        Obj.luckyPrize = 2;
        Obj.luckyNum = 5;
    }
    if (reward_str == '一等奖') {
        $("#myvideo").fadeIn(1000);
        text = `一等奖将在 <span style="font-weight:bold; font-size:20px;">`+candidate+`</span> 中产生！加油！加油！`;
        showMessage(text, 7000, 9);
        Obj.luckyPrize = 1;
        Obj.luckyNum = 1;

    }
    if (reward_str == '安慰奖') {
        $("#myvideo").fadeOut(1000);
        document.body.style.backgroundImage = "url(style/年会背景1.jpg)"
        pausePlay();
        text = `<span style="font-weight:bold; font-size:20px;">`+candidate+`</span> 也别沮丧，还有安慰奖呢!`;
        showMessage(text, 7000, 9);
        myAuto.src = 'style/彩虹节拍.mp3';//MP3路径
        myAuto.currentTime = 60.5;
        Obj.luckyPrize = 0;
        Obj.luckyNum = 2;
        $(".btn_circle").text('安慰奖');
    }
    $('.lpl_list.active').children().remove()
}

function checkReward() {
    if (Obj.luckyResult_history.length >= 66) {
        $("#nine").css("color", "red");
        $("#nine").removeAttr('onclick');
    }
    if (Obj.luckyResult_history.length >= 126) {
        $("#eight").css("color", "red");
        $("#eight").removeAttr('onclick');
    }
    if (Obj.luckyResult_history.length >= 166) {
        $("#seven").css("color", "red");
        $("#seven").removeAttr('onclick');
    }
    if (Obj.luckyResult_history.length >= 196) {
        $("#six").css("color", "red");
        $("#six").removeAttr('onclick');
    }
    if (Obj.luckyResult_history.length >= 216) {
        $("#five").css("color", "red");
        $("#five").removeAttr('onclick');
    }
    if (Obj.luckyResult_history.length >= 231) {
        $("#four").css("color", "red");
        $("#four").removeAttr('onclick');
    }
    if (Obj.luckyResult_history.length >= 241) {
        $("#three").css("color", "red");
        $("#three").removeAttr('onclick');
    }
    if (Obj.luckyResult_history.length >= 246) {
        $("#two").css("color", "red");
        $("#two").removeAttr('onclick');
    }
    if (Obj.luckyResult_history.length >= 247) {
        $("#one").css("color", "red");
        $("#one").removeAttr('onclick');
    }
}


function tableToExcel() {
    // 列标题，逗号隔开，每一个逗号就是隔开一个单元格
    let str = `姓名,英文名,部门,获奖\n`;
    // 增加\t为了不让表格显示科学计数法或者其他格式
    for (let i = 0; i < jsonData.length; i++) {
        for (const key in jsonData[i]) {
            str += `${jsonData[i][key] + '\t'},`;
        }
        str += '\n';
    }
    // encodeURIComponent解决中文乱码
    const uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(str);
    // 通过创建a标签实现
    const link = document.createElement("a");
    link.href = uri;
    // 对下载的文件命名
    var tableName = $('#name').val();
    link.download = tableName + ".csv";
    link.click();
}

music_full = true;

// 音量控制
function music_control() {
    if (music_full) {
        myAuto.volume = 0.3;
        music_full = false;
    } else {
        myAuto.volume = 1;
        music_full = true;
    }
}
// 清除数据开关
function clearLocalData() {
    var sure = confirm('警告：确定清除所有数据？！');
    if (sure) {
        localStorage.clear();
        window.location.reload();
    }
}

//获奖名单放大
var flag = 1;
function changeBoardSize() {
    $(".lucky_people_title").removeAttr('onclick');
    if (flag==1){
        $("#open").hide();
        var width = $("#lucky_board").css("width").slice(0, -2)*1;
        linearAnimation('lucky_board',40, width*2.5);
        setTimeout(function () {
            $(".lpl_userInfo").css("width", "20%")
        }, 150)
        flag = 0;
    } else {
        var width = $("#lucky_board").css("width").slice(0, -2)*1;
        linearAnimation_reduce('lucky_board',40, width/2.5);
        $(".lpl_userInfo").css("width", "25%")      
        setTimeout(function () {
            $("#open").show();
        }, 100)
        flag = 1;
    }
    setTimeout(function () {
        $(".lucky_people_title").attr('onclick','changeBoardSize()');
    }, 500)
    
}

// 测试LocalStorage
function test_data() {
    console.log(live2d_path);

    console.log(localStorage.getItem('award_history'));
    console.log($.parseJSON(localStorage.getItem('excel_data')));
    console.log('personArray.length: '+personArray.length)
    console.log('Obj.luckyResult_history.length: '+Obj.luckyResult_history.length)
    
    $('#consolation').show();

    console.log('width:'+window.screen.width)
    console.log('height'+window.screen.height)
}

function caidan() {
    $(".lucky_list").fadeOut(300);
    $(".powerBy").fadeIn(7000);
    $(".toppan").fadeIn(5000);
    congratulation();
    var text = `<span style="font-weight:bold; font-size:24px;">我们明年再见！</span>`;
    showMessage(text, 20000, 9);

}

function congratulation(){
    var end = Date.now() + (15 * 1000);

    // go Buckeyes!
    var colors = ['#bb0000', '#ffffff'];

    (function frame() {
    confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
    });
    confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
    });

    if (Date.now() < end) {
        requestAnimationFrame(frame);
    }
    }());

    var duration = 15 * 1000;
    var animationEnd = Date.now() + duration;
    var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
    }

    var interval = setInterval(function() {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
        return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration);
    // since particles fall down, start a bit higher than random
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
    confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
    }, 250);
}

function linearAnimation( boxID, step, target){
    var box = document.getElementById(boxID);
    var width = $("#lucky_board").css("width").slice(0, -2)*1;
    var intervalID = null, begin = width, margin = 0, step_len = step||0 ;
    clearInterval(intervalID);
    intervalID = setInterval(function () {
        begin += step_len;
        margin += 1;
        if (begin >= target){
            begin = target;
            clearInterval(intervalID);
        }
        box.style.marginLeft = margin + 'px';
        box.style.width = begin + 'px';
    }, 10);
}

function linearAnimation_reduce( boxID, step, target){
    var box = document.getElementById(boxID);
    var width = $("#lucky_board").css("width").slice(0, -2)*1;
    var margin = $("#lucky_board").css("margin-left").slice(0, -2)*1;
    var intervalID = null, begin = width, step_len = step||0 ;
    clearInterval(intervalID);
    intervalID = setInterval(function () {
        begin -= step_len;
        margin -= 1;
        if (begin <= target){
            begin = target;
            clearInterval(intervalID);
        }
        box.style.marginLeft = margin + 'px';
        box.style.width = begin + 'px';
    }, 10);
}

function showMessage(text, timeout, priority) {
    let messageTimer;
    if (!text || (sessionStorage.getItem("waifu-text") && sessionStorage.getItem("waifu-text") > priority)) return;
    if (messageTimer) {
        clearTimeout(messageTimer);
        messageTimer = null;
    }
    sessionStorage.setItem("waifu-text", priority);
    const tips = document.getElementById("waifu-tips");
    tips.innerHTML = text;
    tips.classList.add("waifu-tips-active");
    messageTimer = setTimeout(() => {
        sessionStorage.removeItem("waifu-text");
        tips.classList.remove("waifu-tips-active");
    }, timeout);
}
