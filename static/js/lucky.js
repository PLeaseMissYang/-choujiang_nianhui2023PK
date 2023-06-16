var Obj = {};
Obj.luckyResult = [];
Obj.luckyResult_history = [];

if (localStorage.getItem("award_history")) {
    temp_arr = localStorage.getItem('award_history').split(",")
    for(var item of temp_arr) {
        Obj.luckyResult_history.push(item*1)
    }
}
console.log(Obj.luckyResult_history)
$(function () {

    function loadImage(arr, callback) {
        var loadImageLen = 1;
        var arrLen = arr.length;
        $('.all_number').html("/" + arrLen);
        for (var i = 0; i < arrLen; i++) {
            var img = new Image();
            img.onload = function () {
                img.onload = null;
                ++loadImageLen;
                $(".current_number").html(loadImageLen);
                if (loadImageLen == arrLen) {
                    callback(img);
                }
            }
            img.src = arr[i].image;
        }
    }

    Obj.M = $('.container').lucky({
        row: 4, //每排显示个数
        col: 4, //每列显示个数
        depth: 5, //纵深度
        iconW: 28, //图片的宽
        iconH: 28, //图片的高
        iconRadius: 8, //图片的圆角
        data: personArray //数据的地址数组
    });

    loadImage(personArray, function (img) {
        $('.loader_file').hide();
    });

    $('#stop').click(async function () {
        Obj.M.stop();
        $(".container").hide();
        $(this).hide();
        var i = 0;
        if (Obj.luckyPrize == 9) {
            for (; i < 13; i=i+6) {
                showLuckyPeople_6(i);
            }
            for (; i < Obj.luckyResult.length; i=i+5) {
                showLuckyPeople_5(i);
            }
            await sleep(20000);
        } else if (Obj.luckyPrize == 8) {
            for (; i < Obj.luckyResult.length; i=i+5) {
                showLuckyPeople_5(i);
            }
            await sleep(18000);
        } else if (Obj.luckyPrize == 7) {
            for (; i < Obj.luckyResult.length; i=i+5) {
                showLuckyPeople_5(i);
            }
            await sleep(12000);
        } else if (Obj.luckyPrize == 6) {
            for (; i < Obj.luckyResult.length; i=i+5) {
                showLuckyPeople_5(i);
            }
            await sleep(10000);
        } else if (Obj.luckyPrize == 5) {
            for (; i < Obj.luckyResult.length; i=i+2) {
                showLuckyPeople_2(i);
            }
            await sleep(16000);
        } else if (Obj.luckyPrize == 1) {
            for (; i < Obj.luckyResult.length; i=i+2) {
                showLuckyPeople_big(i);
            }
            var FPWinner = personArray[Obj.luckyResult[0]].name
            var text = `恭喜 <span style="font-weight:bold; font-size:20px;">`+FPWinner+`</span> 获得一等奖,价值￥5000购物卡!`;
            congratulation();
            showMessage(text, 10000, 9);
            await sleep(15000);
            $("#consolation").show();
        } else {
            for (; i < Obj.luckyResult.length; i++) {
                showLuckyPeople(i);
            }
            await sleep(Obj.luckyNum * 3000);
        }
        $(".mask").fadeOut(100);
        await sleep(300);
        changeBoardSize()
        if (Obj.luckyPrize != 1) {
            pausePlay();
        }
    })

    var if_first = true;
    $('#open').click(async function () {
        //抽奖检查
        if(checkBeforeRun() == 0){
            return;
        } else {
            // 抽奖waifu发言
            remain_num = personArray.length-Obj.luckyResult_history.length;
            new_messageArray = ["<span style=\"font-weight:bold; font-size:25px;\">年会抽奖现在开始!!</span>"];           
            if (if_first){
                if_first = false;
            } else {
                new_messageArray = ["<span>"+ remain_num +"</span> 位没中奖的哦, 奖品可是越来越好哦~",
                "<span style=\"font-weight:bold; font-size:20px;\">来看看"+$(".lucky_people_title").text()+"的得主是谁吧~!</span>",
                "<span style=\"font-weight:bold; font-size:20px;\">到底谁能获得"+$(".lucky_people_title").text()+"呢~？</span>"];
            }
            showMessage(randomSelection(new_messageArray), 3000, 9);
            
            autoPlay();
            $("#open").hide();
            $(".container").show();
            Obj.M.open();
            randomLuckyArr();
            add_export();
            // 安慰奖
            if (Obj.luckyPrize == 0) {
                $(".container").hide();
                showLuckyPeople_2(0);
                $("#consolation").css("color", "red");
                candidate = personArray[Obj.luckyResult[0]].name + "," + personArray[Obj.luckyResult[1]].name;
                var text = `恭喜<span style="font-weight:bold; font-size:20px;">`+candidate+`</span> 获得安慰奖，价值￥900购物卡！`;
                showMessage(text, 7000, 9);
                await sleep(3500);
                $(".mask").fadeOut(100);
                // 2秒后彩蛋
                await sleep(2000);
                caidan();
                return;
            }
            if (Obj.luckyPrize==1){
                setTimeout(function () {
                    Obj.M = $('.container').lucky({
                        row: 5, //每排显示个数  必须为奇数
                        col: 5, //每列显示个数  必须为奇数
                        depth: 5, //纵深度
                        iconW: 28, //图片的宽
                        iconH: 28, //图片的高
                        iconRadius: 8, //图片的圆角
                        data: personArray //数据的地址数组
                    });
                }, 8000)
                setTimeout(function () {
                    $("#stop").show();
                }, 10000)
            } else if (Obj.luckyPrize<5){
                setTimeout(function () {
                    $("#stop").show();
                }, 3000)
            } else {
                setTimeout(function () {
                    $("#stop").show();
                }, 1000)
            }

        }
    })

    function randomSelection(obj) {
		return Array.isArray(obj) ? obj[Math.floor(Math.random() * obj.length)] : obj;
	}

    function randomLuckyArr() {
        Obj.luckyResult = [];
        for (var i = 0; i < Obj.luckyNum; i++) {
            var random = Math.floor(Math.random() * personArray.length);
            if (Obj.luckyResult.indexOf(random) == -1 && Obj.luckyResult_history.indexOf(random) == -1) {
                Obj.luckyResult.push(random)
                Obj.luckyResult_history.push(random)
                localStorage.setItem("award_history", Obj.luckyResult_history);
            } else {
                i--;
            }
        }
    }
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    //抽奖检查
    function checkBeforeRun() {
        if (personArray.length - Obj.luckyResult_history.length < Obj.luckyNum) {
            alert($(".lucky_people_title").text() + '-名额不足！');
            return 0;
        }
        if (personArray.length == Obj.luckyResult_history.length) {
            alert('抽奖结束！');
            return 0;
        }
        if (null == Obj.luckyNum) {
            alert('请选择奖项');
            return 0;
        }    
        if (Obj.luckyPrize == 9 && Obj.luckyResult_history.length >= 66) {
            alert('九等奖-已抽完');
            return 0;
        }
        if (Obj.luckyPrize == 8 && Obj.luckyResult_history.length >= 126) {
            alert('八等奖-已抽完');
            return 0;
        }
        if (Obj.luckyPrize == 7 && Obj.luckyResult_history.length >= 166) {
            alert('七等奖-已抽完');
            return 0;
        }
        if (Obj.luckyPrize == 6 && Obj.luckyResult_history.length >= 196) {
            alert('六等奖-已抽完');
            return 0;
        }
        if (Obj.luckyPrize == 5 && Obj.luckyResult_history.length >= 216) {
            alert('五等奖-已抽完');
            return 0;
        }
        if (Obj.luckyPrize == 4 && Obj.luckyResult_history.length >= 231) {
            alert('四等奖-已抽完');
            return 0;
        }
        if (Obj.luckyPrize == 3 && Obj.luckyResult_history.length >= 241) {
            alert('三等奖-已抽完');
            return 0;
        }
        if (Obj.luckyPrize == 2 && Obj.luckyResult_history.length >= 246) {
            alert('二等奖-已抽完');
            return 0;
        }
        if (Obj.luckyPrize == 1 && Obj.luckyResult_history.length >= 247) {
            alert('一等奖-已抽完');
            return 0;
        } 
        return 1;
    }

    function showLuckyPeople(num) {
        setTimeout(function () {
            var $luckyEle = $('<img class="lucky_icon" />');
            var $userName = $('<p class="lucky_userName"></p>');
            var $fragEle = $('<div class="lucky_userInfo"></div>');
            $fragEle.append($luckyEle, $userName);
            $('.mask').append($fragEle);
            $(".mask").fadeIn(200);
            $luckyEle.attr('src', personArray[Obj.luckyResult[num]].image);
            $userName.html(personArray[Obj.luckyResult[num]].name+"<br/>"+personArray[Obj.luckyResult[num]].name_en);
            $fragEle.animate({
                'left': '50%',
                'top': '50%',
                'height': '200px',
                'width': '200px',
                'margin-left': '-100px',
                'margin-top': '-100px',
            }, 1000, function () {
                setTimeout(function () {
                    $fragEle.animate({
                        'height': '100px',
                        'width': '100px',
                        'margin-left': '-300px',
                        'margin-top': '-100px',
                    }, 400, function () {
                        // $(".mask").fadeOut(100);
                        $luckyEle.attr('class', 'lpl_userImage').attr('style', '');
                        $userName.attr('class', 'lpl_userName').attr('style', '');
                        $fragEle.attr('class', 'lpl_userInfo').attr('style', '');
                        $('.lpl_list.active').append($fragEle);
                    })
                }, 2000)
            })
        }, num * 3000)
    
    }
    
    function showLuckyPeople_big(num) {
        var $luckyEle = $('<img class="lucky_icon" />');
        var $userName = $('<p class="lucky_userName"></p>');
        var $fragEle = $('<div class="lucky_userInfo"></div>');
        $fragEle.append($luckyEle, $userName);
        $('.mask').append($fragEle);
        $(".mask").fadeIn(200);
        $luckyEle.attr('src', personArray[Obj.luckyResult[num]].image);
        $userName.html(personArray[Obj.luckyResult[num]].name+"<br/>"+personArray[Obj.luckyResult[num]].name_en);
        $fragEle.animate({
            'left': '50%',
            'top': '50%',
            'height': '200px',
            'width': '200px',
            'margin-left': '-100px',
            'margin-top': '-100px',
        }, 2000, function () {
            setTimeout(function () {
                $fragEle.animate({
                    'height': '100px',
                    'width': '100px',
                    'margin-left': '-300px',
                    'margin-top': '-100px',
                }, 400, function () {
                    // $(".mask").fadeOut(100);
                    $luckyEle.attr('class', 'lpl_userImage').attr('style', '');
                    $userName.attr('class', 'lpl_userName').attr('style', '');
                    $fragEle.attr('class', 'lpl_userInfo').attr('style', '');
                    $(".lpl_userInfo").css("position", "absolute"); 
                    $(".lpl_userInfo").css("left", "40%"); 
                    $(".lpl_userInfo").css("top", "30%"); 
                    $(".lpl_userImage").css("width", "120px");
                    $(".lpl_userImage").css("height", "120px");
                    $(".lpl_userName").css("font-size", "24px");
                    $('.lpl_list.active').append($fragEle);
                })
            }, 10000)
        })
    
    }
    
    function showLuckyPeople_2(num) {
        setTimeout(function () {
                // 1
                var $luckyEle = $('<img class="lucky_icon" />');
                var $userName = $('<p class="lucky_userName"></p>');
                var $fragEle = $('<div class="lucky_userInfo"></div>');
                $fragEle.append($luckyEle, $userName);
                $('.mask').append($fragEle);
                $(".mask").fadeIn(200);
                $luckyEle.attr('src', personArray[Obj.luckyResult[num]].image);
                $userName.html(personArray[Obj.luckyResult[num]].name+"<br/>"+personArray[Obj.luckyResult[num]].name_en);
                $fragEle.animate({
                    'left': '35%',
                    'top': '50%',
                    'height': '200px',
                    'width': '200px',
                    'margin-left': '-100px',
                    'margin-top': '-100px',
                }, 1000, function () {
                    setTimeout(function () {
                        $fragEle.animate({
                            'height': '100px',
                            'width': '100px',
                            'margin-left': '-300px',
                            'margin-top': '-100px',
                        }, 400, function () {
                            // $(".mask").fadeOut(100);
                            $luckyEle.attr('class', 'lpl_userImage').attr('style', '');
                            $userName.attr('class', 'lpl_userName').attr('style', '');
                            $fragEle.attr('class', 'lpl_userInfo').attr('style', '');
                            $('.lpl_list.active').append($fragEle);
                        })
                    }, 2000)
                })
                // 2
                var $luckyEle2 = $('<img class="lucky_icon" />');
                var $userName2 = $('<p class="lucky_userName"></p>');
                var $fragEle2 = $('<div class="lucky_userInfo"></div>');
                $fragEle2.append($luckyEle2, $userName2);
                $('.mask').append($fragEle2);
                $(".mask").fadeIn(200);
                $luckyEle2.attr('src', personArray[Obj.luckyResult[num+1]].image);
                $userName2.html(personArray[Obj.luckyResult[num+1]].name+"<br/>"+personArray[Obj.luckyResult[num+1]].name_en);
                $fragEle2.animate({
                    'left': '65%',
                    'top': '50%',
                    'height': '200px',
                    'width': '200px',
                    'margin-left': '-100px',
                    'margin-top': '-100px',
                }, 1000, function () {
                    setTimeout(function () {
                        $fragEle2.animate({
                            'height': '100px',
                            'width': '100px',
                            'margin-left': '-300px',
                            'margin-top': '-100px',
                        }, 400, function () {
                            // $(".mask").fadeOut(100);
                            $luckyEle2.attr('class', 'lpl_userImage').attr('style', '');
                            $userName2.attr('class', 'lpl_userName').attr('style', '');
                            $fragEle2.attr('class', 'lpl_userInfo').attr('style', '');
                            $('.lpl_list.active').append($fragEle2);
                        })
                    }, 2000)
                })
    
        }, num * 1600)
    }
    
    function showLuckyPeople_5(num) {
        setTimeout(function () {
                // 1
                var $luckyEle = $('<img class="lucky_icon" />');
                var $userName = $('<p class="lucky_userName"></p>');
                var $fragEle = $('<div class="lucky_userInfo"></div>');
                $fragEle.append($luckyEle, $userName);
                $('.mask').append($fragEle);
                $(".mask").fadeIn(200);
                $luckyEle.attr('src', personArray[Obj.luckyResult[num]].image);
                $userName.html(personArray[Obj.luckyResult[num]].name+"<br/>"+personArray[Obj.luckyResult[num]].name_en);
                $fragEle.animate({
                    'left': '15%',
                    'top': '50%',
                    'height': '200px',
                    'width': '200px',
                    'margin-left': '-100px',
                    'margin-top': '-100px',
                }, 1000, function () {
                    setTimeout(function () {
                        $fragEle.animate({
                            'height': '100px',
                            'width': '100px',
                            'margin-left': '-300px',
                            'margin-top': '-100px',
                        }, 400, function () {
                            // $(".mask").fadeOut(100);
                            $luckyEle.attr('class', 'lpl_userImage').attr('style', '');
                            $userName.attr('class', 'lpl_userName').attr('style', '');
                            $fragEle.attr('class', 'lpl_userInfo').attr('style', '');
                            $('.lpl_list.active').append($fragEle);
                        })
                    }, 2000)
                })
                // 2
                var $luckyEle2 = $('<img class="lucky_icon" />');
                var $userName2 = $('<p class="lucky_userName"></p>');
                var $fragEle2 = $('<div class="lucky_userInfo"></div>');
                $fragEle2.append($luckyEle2, $userName2);
                $('.mask').append($fragEle2);
                $(".mask").fadeIn(200);
                $luckyEle2.attr('src', personArray[Obj.luckyResult[num+1]].image);
                $userName2.html(personArray[Obj.luckyResult[num+1]].name+"<br/>"+personArray[Obj.luckyResult[num+1]].name_en);
                $fragEle2.animate({
                    'left': '33%',
                    'top': '50%',
                    'height': '200px',
                    'width': '200px',
                    'margin-left': '-100px',
                    'margin-top': '-100px',
                }, 1000, function () {
                    setTimeout(function () {
                        $fragEle2.animate({
                            'height': '100px',
                            'width': '100px',
                            'margin-left': '-300px',
                            'margin-top': '-100px',
                        }, 400, function () {
                            // $(".mask").fadeOut(100);
                            $luckyEle2.attr('class', 'lpl_userImage').attr('style', '');
                            $userName2.attr('class', 'lpl_userName').attr('style', '');
                            $fragEle2.attr('class', 'lpl_userInfo').attr('style', '');
                            $('.lpl_list.active').append($fragEle2);
                        })
                    }, 2000)
                })
                // 3
                var $luckyEle3 = $('<img class="lucky_icon" />');
                var $userName3 = $('<p class="lucky_userName"></p>');
                var $fragEle3 = $('<div class="lucky_userInfo"></div>');
                $fragEle3.append($luckyEle3, $userName3);
                $('.mask').append($fragEle3);
                $(".mask").fadeIn(200);
                $luckyEle3.attr('src', personArray[Obj.luckyResult[num+2]].image);
                $userName3.html(personArray[Obj.luckyResult[num+2]].name+"<br/>"+personArray[Obj.luckyResult[num+2]].name_en);
                $fragEle3.animate({
                    'left': '50%',
                    'top': '50%',
                    'height': '200px',
                    'width': '200px',
                    'margin-left': '-100px',
                    'margin-top': '-100px',
                }, 1000, function () {
                    setTimeout(function () {
                        $fragEle3.animate({
                            'height': '100px',
                            'width': '100px',
                            'margin-left': '-300px',
                            'margin-top': '-100px',
                        }, 400, function () {
                            // $(".mask").fadeOut(100);
                            $luckyEle3.attr('class', 'lpl_userImage').attr('style', '');
                            $userName3.attr('class', 'lpl_userName').attr('style', '');
                            $fragEle3.attr('class', 'lpl_userInfo').attr('style', '');
                            $('.lpl_list.active').append($fragEle3);
                        })
                    }, 2000)
                })
                // 4
                var $luckyEle4 = $('<img class="lucky_icon" />');
                var $userName4 = $('<p class="lucky_userName"></p>');
                var $fragEle4 = $('<div class="lucky_userInfo"></div>');
                $fragEle4.append($luckyEle4, $userName4);
                $('.mask').append($fragEle4);
                $(".mask").fadeIn(200);
                $luckyEle4.attr('src', personArray[Obj.luckyResult[num+3]].image);
                $userName4.html(personArray[Obj.luckyResult[num+3]].name+"<br/>"+personArray[Obj.luckyResult[num+3]].name_en);
                $fragEle4.animate({
                    'left': '68%',
                    'top': '50%',
                    'height': '200px',
                    'width': '200px',
                    'margin-left': '-100px',
                    'margin-top': '-100px',
                }, 1000, function () {
                    setTimeout(function () {
                        $fragEle4.animate({
                            'height': '100px',
                            'width': '100px',
                            'margin-left': '-300px',
                            'margin-top': '-100px',
                        }, 400, function () {
                            // $(".mask").fadeOut(100);
                            $luckyEle4.attr('class', 'lpl_userImage').attr('style', '');
                            $userName4.attr('class', 'lpl_userName').attr('style', '');
                            $fragEle4.attr('class', 'lpl_userInfo').attr('style', '');
                            $('.lpl_list.active').append($fragEle4);
                        })
                    }, 2000)
                })
                // 5
                var $luckyEle5 = $('<img class="lucky_icon" />');
                var $userName5 = $('<p class="lucky_userName"></p>');
                var $fragEle5 = $('<div class="lucky_userInfo"></div>');
                $fragEle5.append($luckyEle5, $userName5);
                $('.mask').append($fragEle5);
                $(".mask").fadeIn(200);
                $luckyEle5.attr('src', personArray[Obj.luckyResult[num+4]].image);
                $userName5.html(personArray[Obj.luckyResult[num+4]].name+"<br/>"+personArray[Obj.luckyResult[num+4]].name_en);
                $fragEle5.animate({
                    'left': '85%',
                    'top': '50%',
                    'height': '200px',
                    'width': '200px',
                    'margin-left': '-100px',
                    'margin-top': '-100px',
                }, 1000, function () {
                    setTimeout(function () {
                        $fragEle5.animate({
                            'height': '100px',
                            'width': '100px',
                            'margin-left': '-300px',
                            'margin-top': '-100px',
                        }, 400, function () {
                            // $(".mask").fadeOut(100);
                            $luckyEle5.attr('class', 'lpl_userImage').attr('style', '');
                            $userName5.attr('class', 'lpl_userName').attr('style', '');
                            $fragEle5.attr('class', 'lpl_userInfo').attr('style', '');
                            $('.lpl_list.active').append($fragEle5);
                        })
                    }, 2000)
                })
    
        }, num * 600)
    }
    
    function showLuckyPeople_6(num) {
        setTimeout(function () {
                // 1
                var $luckyEle = $('<img class="lucky_icon" />');
                var $userName = $('<p class="lucky_userName"></p>');
                var $fragEle = $('<div class="lucky_userInfo"></div>');
                $fragEle.append($luckyEle, $userName);
                $('.mask').append($fragEle);
                $(".mask").fadeIn(200);
                $luckyEle.attr('src', personArray[Obj.luckyResult[num]].image);
                $userName.html(personArray[Obj.luckyResult[num]].name+"<br/>"+personArray[Obj.luckyResult[num]].name_en);
                $fragEle.animate({
                    'left': '12%',
                    'top': '50%',
                    'height': '200px',
                    'width': '200px',
                    'margin-left': '-100px',
                    'margin-top': '-100px',
                }, 1000, function () {
                    setTimeout(function () {
                        $fragEle.animate({
                            'height': '100px',
                            'width': '100px',
                            'margin-left': '-300px',
                            'margin-top': '-100px',
                        }, 400, function () {
                            // $(".mask").fadeOut(100);
                            $luckyEle.attr('class', 'lpl_userImage').attr('style', '');
                            $userName.attr('class', 'lpl_userName').attr('style', '');
                            $fragEle.attr('class', 'lpl_userInfo').attr('style', '');
                            $('.lpl_list.active').append($fragEle);
                        })
                    }, 2000)
                })
                // 2
                var $luckyEle2 = $('<img class="lucky_icon" />');
                var $userName2 = $('<p class="lucky_userName"></p>');
                var $fragEle2 = $('<div class="lucky_userInfo"></div>');
                $fragEle2.append($luckyEle2, $userName2);
                $('.mask').append($fragEle2);
                $(".mask").fadeIn(200);
                $luckyEle2.attr('src', personArray[Obj.luckyResult[num+1]].image);
                $userName2.html(personArray[Obj.luckyResult[num+1]].name+"<br/>"+personArray[Obj.luckyResult[num+1]].name_en);
                $fragEle2.animate({
                    'left': '27%',
                    'top': '50%',
                    'height': '200px',
                    'width': '200px',
                    'margin-left': '-100px',
                    'margin-top': '-100px',
                }, 1000, function () {
                    setTimeout(function () {
                        $fragEle2.animate({
                            'height': '100px',
                            'width': '100px',
                            'margin-left': '-300px',
                            'margin-top': '-100px',
                        }, 400, function () {
                            // $(".mask").fadeOut(100);
                            $luckyEle2.attr('class', 'lpl_userImage').attr('style', '');
                            $userName2.attr('class', 'lpl_userName').attr('style', '');
                            $fragEle2.attr('class', 'lpl_userInfo').attr('style', '');
                            $('.lpl_list.active').append($fragEle2);
                        })
                    }, 2000)
                })
                // 3
                var $luckyEle3 = $('<img class="lucky_icon" />');
                var $userName3 = $('<p class="lucky_userName"></p>');
                var $fragEle3 = $('<div class="lucky_userInfo"></div>');
                $fragEle3.append($luckyEle3, $userName3);
                $('.mask').append($fragEle3);
                $(".mask").fadeIn(200);
                $luckyEle3.attr('src', personArray[Obj.luckyResult[num+2]].image);
                $userName3.html(personArray[Obj.luckyResult[num+2]].name+"<br/>"+personArray[Obj.luckyResult[num+2]].name_en);
                $fragEle3.animate({
                    'left': '43%',
                    'top': '50%',
                    'height': '200px',
                    'width': '200px',
                    'margin-left': '-100px',
                    'margin-top': '-100px',
                }, 1000, function () {
                    setTimeout(function () {
                        $fragEle3.animate({
                            'height': '100px',
                            'width': '100px',
                            'margin-left': '-300px',
                            'margin-top': '-100px',
                        }, 400, function () {
                            // $(".mask").fadeOut(100);
                            $luckyEle3.attr('class', 'lpl_userImage').attr('style', '');
                            $userName3.attr('class', 'lpl_userName').attr('style', '');
                            $fragEle3.attr('class', 'lpl_userInfo').attr('style', '');
                            $('.lpl_list.active').append($fragEle3);
                        })
                    }, 2000)
                })
                // 4
                var $luckyEle4 = $('<img class="lucky_icon" />');
                var $userName4 = $('<p class="lucky_userName"></p>');
                var $fragEle4 = $('<div class="lucky_userInfo"></div>');
                $fragEle4.append($luckyEle4, $userName4);
                $('.mask').append($fragEle4);
                $(".mask").fadeIn(200);
                $luckyEle4.attr('src', personArray[Obj.luckyResult[num+3]].image);
                $userName4.html(personArray[Obj.luckyResult[num+3]].name+"<br/>"+personArray[Obj.luckyResult[num+3]].name_en);
                $fragEle4.animate({
                    'left': '58%',
                    'top': '50%',
                    'height': '200px',
                    'width': '200px',
                    'margin-left': '-100px',
                    'margin-top': '-100px',
                }, 1000, function () {
                    setTimeout(function () {
                        $fragEle4.animate({
                            'height': '100px',
                            'width': '100px',
                            'margin-left': '-300px',
                            'margin-top': '-100px',
                        }, 400, function () {
                            // $(".mask").fadeOut(100);
                            $luckyEle4.attr('class', 'lpl_userImage').attr('style', '');
                            $userName4.attr('class', 'lpl_userName').attr('style', '');
                            $fragEle4.attr('class', 'lpl_userInfo').attr('style', '');
                            $('.lpl_list.active').append($fragEle4);
                        })
                    }, 2000)
                })
                // 5
                var $luckyEle5 = $('<img class="lucky_icon" />');
                var $userName5 = $('<p class="lucky_userName"></p>');
                var $fragEle5 = $('<div class="lucky_userInfo"></div>');
                $fragEle5.append($luckyEle5, $userName5);
                $('.mask').append($fragEle5);
                $(".mask").fadeIn(200);
                $luckyEle5.attr('src', personArray[Obj.luckyResult[num+4]].image);
                $userName5.html(personArray[Obj.luckyResult[num+4]].name+"<br/>"+personArray[Obj.luckyResult[num+4]].name_en);
                $fragEle5.animate({
                    'left': '73%',
                    'top': '50%',
                    'height': '200px',
                    'width': '200px',
                    'margin-left': '-100px',
                    'margin-top': '-100px',
                }, 1000, function () {
                    setTimeout(function () {
                        $fragEle5.animate({
                            'height': '100px',
                            'width': '100px',
                            'margin-left': '-300px',
                            'margin-top': '-100px',
                        }, 400, function () {
                            // $(".mask").fadeOut(100);
                            $luckyEle5.attr('class', 'lpl_userImage').attr('style', '');
                            $userName5.attr('class', 'lpl_userName').attr('style', '');
                            $fragEle5.attr('class', 'lpl_userInfo').attr('style', '');
                            $('.lpl_list.active').append($fragEle5);
                        })
                    }, 2000)
                })
                // 6
                var $luckyEle6 = $('<img class="lucky_icon" />');
                var $userName6 = $('<p class="lucky_userName"></p>');
                var $fragEle6 = $('<div class="lucky_userInfo"></div>');
                $fragEle6.append($luckyEle6, $userName6);
                $('.mask').append($fragEle6);
                $(".mask").fadeIn(200);
                $luckyEle6.attr('src', personArray[Obj.luckyResult[num+5]].image);
                $userName6.html(personArray[Obj.luckyResult[num+5]].name+"<br/>"+personArray[Obj.luckyResult[num+5]].name_en);
                $fragEle6.animate({
                    'left': '88%',
                    'top': '50%',
                    'height': '200px',
                    'width': '200px',
                    'margin-left': '-100px',
                    'margin-top': '-100px',
                }, 1000, function () {
                    setTimeout(function () {
                        $fragEle6.animate({
                            'height': '100px',
                            'width': '100px',
                            'margin-left': '-300px',
                            'margin-top': '-100px',
                        }, 400, function () {
                            // $(".mask").fadeOut(100);
                            $luckyEle6.attr('class', 'lpl_userImage').attr('style', '');
                            $userName6.attr('class', 'lpl_userName').attr('style', '');
                            $fragEle6.attr('class', 'lpl_userInfo').attr('style', '');
                            $('.lpl_list.active').append($fragEle6);
                        })
                    }, 2000)
                })
    
        }, num * 600)
    }

})

music_bool = false;

//音乐自动播放
function autoPlay() {

    myAuto.volume = 1;
    var defaultVol=myAuto.volume;
    myAuto.volume=0;
    var vol=0;
    myAuto.play();
    var t=setInterval(function(){
        vol+=0.01;
        if(vol<=defaultVol){
            myAuto.volume=vol;
        }else{
        clearInterval(t);
        }
    },10);
    music_bool = true;
}
//音乐自动暂停
function pausePlay() {

    var vol=myAuto.volume;
    var t=setInterval(function(){
        vol-=0.01;
        if(vol>0){
            myAuto.volume=vol;
        }else{
        clearInterval(t);
        myAuto.pause();
        }
    },10);
    music_bool = false;
}
// 添加导出的数据
function add_export() {
    for (var index of Obj.luckyResult) {
        data = {
            name: personArray[index].name,
            name_en: personArray[index].name_en,
            department: personArray[index].department,
            reward: $(".lucky_people_title").text()
        }
        jsonData.push(data)
    }
    localStorage.setItem("excel_data", JSON.stringify(jsonData));
}

