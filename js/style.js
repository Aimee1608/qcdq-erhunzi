//init.js

var mpenshui = document.getElementById('mpenshui');
var mshiguan = document.getElementById('mshiguan');
var mjiguanqiang = document.getElementById('mjiguanqiang');
var mfenglangsheng = document.getElementById('mfenglangsheng');
var mmiaobiao = document.getElementById('mmiaobiao');
var myunsankai = document.getElementById('myunsankai');
var mdeyu = document.getElementById('mdeyu');
var mxishui = document.getElementById('mxishui');
var mfang = document.getElementById('mfang');
var mriyu = document.getElementById('mriyu');

var musicArray = ['mpenshui','mshiguan','mjiguanqiang','mfenglangsheng','mmiaobiao','myunsankai','mdeyu','mxishui','mfang','mriyu'];
function initMusic(musicIDArray){
    if(musicIDArray.length>0){
        for(var i=0;i<musicIDArray.length;i++){
            var player =document.getElementById(musicIDArray[i]);
            player.load();
        }
    }
}
function ImgLoadingByFile(imgArray,loadPageID,loadTxtID,readyID,musicID,showpageID){
    if(sessionStorage.getItem("pageloaded")){
        $('#'+loadTxtID).html('100%');
        $('#'+loadTxtID).hide();
        $('#'+readyID).show();
        $('#'+loadPageID).unbind('click').bind('click',function(){
            var timer = setTimeout(function(){
                //$('#'+loadPageID).addClass('loadfadeOut');
                $('#'+loadPageID).fadeOut(800);
                $('#'+showpageID).show();
                initMusic(musicArray);
                var player = document.getElementById(musicID);
                player.load();
                player.play();
                clearTimeout(timer);
            },500);
        });
    }else{
        var imgLoad = 0;
        if(imgArray.length>0){
            var imgTotal = imgArray.length;
            var percent = 0;
            var img = [];
            for(var i = 0;i<imgArray.length;i++){
                img[i] = new Image();
                //console.log(imgArray[i],img[i]);
                img[i].src=imgArray[i];
                img[i].onload = function(){
                    imgLoad++;
                    percent = parseInt(imgLoad/imgTotal*100);
                    $('#'+loadTxtID).html(percent+'%');
                    //console.log(percent);
                    //console.log($('#'+loadTxtID).html());
                    if(percent>=100){
                      $('#'+loadTxtID).hide();
                        $('#'+readyID).show();
                        $('#'+loadPageID).unbind('click').bind('click',function(){
                            var timer = setTimeout(function(){
                                initMusic(musicArray);
                                var player = document.getElementById(musicID);
                                player.play();
                                if(player.paused){
                                    player.play();
                                }
                                //$('#'+loadPageID).addClass('loadfadeOut');
                                $('#'+loadPageID).fadeOut(800);
                                $('#'+showpageID).show();
                                clearTimeout(timer);
                            },500);
                        });
                        sessionStorage.setItem("pageloaded", "true");

                    }
                }
            }
        }
    }
}
(function(win){
    var remCalc = {};
    var docEl = win.document.documentElement,
        tid,
        hasRem = true;
    hasZoom = true;
    designWidth = 750;
    function refresh(){
        var width = docEl.getBoundingClientRect().width;
        if(hasRem){
            var rem = width/10;
            docEl.style.fontSize = rem + "px";
            remCalc.rem = rem;
            var actualSize = parseFloat(window.getComputedStyle(document.documentElement)["font-size"]);
            if(actualSize!== rem && actualSize>0 && Math.abs(actualSize-rem)>1){
                var remScaled = rem*rem/actualSize;
                docEl.style.fontSize = remScaled + "px";
            }
        }
        if(hasZoom){
            var style = document.getElementById('y_style');
            if(!style){
                style = document.createElement('style');
                style.id = 'y_style';
            }
            style.innerHTML = '._z{zoom:'+ width/designWidth + '}';
            document.getElementsByTagName('head')[0].appendChild(style);
        }
    }
    function dbcRefresh(){
        clearTimeout(tid);
        tid = setTimeout(refresh,100);
    }
    win.addEventListener("resize",function(){
        dbcRefresh()
    },false);
    win.addEventListener("pageshow",function(e){
        if(e.persisted){
            dbcRefresh()
        }
    },false);
    refresh();
    if(hasRem){
        remCalc.refresh = refresh;
        remCalc.rem2px = function(d){
            var val = parseFloat(d)/this.rem;
            if(typeof d==="string" && d.match(/px$/)){
                val+="rem";
            }
            return val
        };
        win.remCalc = remCalc;
    }
})(window);
//横屏
function landscape(){
    //var w = window.innerWidth;
    //var h = window.innerHeight;
    var w = window.Utils.windowW();
    var h = window.Utils.windowH();
    $("body").css({"width":w,"height":h});
    $('#page-landscape').css({"width":w,"height":h});
    //$('#page-portrait').css({"width":w,"height":h});
    $('#page-landscape').show();
    $('#page-portrait').hide();
}
var firstInit = true;

//竖屏
function portrait02(){
    var w = window.Utils.windowW();
    var h = window.Utils.windowH();
    $("body").css({"width":w});
    $('#page-portrait').css({"width":w});
    $('.load-page').css({"width":w,"height":h});
    $('#page-landscape').hide();
    $('#page-portrait').show();
    //初始化加载
    if(firstInit){
        var imgFile = [
            './img/bg01.png',
            './img/bg02.png',
            './img/bg03.png',
            './img/bg04.png',
            './img/bg05.png',
            './img/bg06.png',
            './img/aiyinsitan.gif',
            './img/anniu.png',
            './img/share.jpg',
            './img/music-close.png',
            './img/music-open.png',
            './img/page01/car01.png',
            './img/page01/car02.png',
            './img/page01/car03.png',
            './img/page01/car01-qi.png',
            './img/page01/car02-save.png',
            './img/page01/car03-big.png',
            './img/page01/hair.png',
            './img/page01/shanzi.gif',
            './img/page01/yous.png',
            './img/page01/yousyd.png',
            './img/page01/youx.png',
            './img/page01/zuos.png',
            './img/page01/zuosyd.png',
            './img/page01/zuox.png',
            './img/page02/dream.png',
            './img/page02/ditu.gif',
            './img/page02/deguo.gif',
            './img/page02/shanguang.gif',
			'./img/page02/gebo.png',
			'./img/page02/gebo02.png',
			'./img/page02/people.png',
			'./img/page02/ren.png',
			'./img/page02/what.png',
			'./img/page02/yun.png',
			'./img/page02/zhong.png',
			'./img/page02/beer.png',
			'./img/page02/chuang.gif',
			'./img/page02/rennan.png',
			'./img/page02/xiaorenyun.png',
            './img/page03/aiyinsitan.gif',
            './img/page03/art.png',
            './img/page03/beiduofen.gif',
			'./img/page03/black-text01.png',
			'./img/page03/black-text02.png',
			'./img/page03/black-text03.png',
			'./img/page03/gebo01.png',
			'./img/page03/gebo02.png',
            './img/page03/guang.png',
			'./img/page03/idea.png',
			'./img/page03/ioea.png',
            './img/page03/jiantou.png',
            './img/page03/makesi.gif',
            './img/page03/quan.png',
            './img/page03/science.png',
            './img/page03/shan01.png',
            './img/page03/shan02.png',
            './img/page03/wa.png',
			'./img/page03/yinfu01.png',
			'./img/page03/yinfu02.png',
			'./img/page03/yun01.png',
			'./img/page03/yun02.png',
			'./img/page03/yun03.png',
			'./img/page04/daqiang1.gif'  ,
			'./img/page04/daqiang2.gif'  ,
			'./img/page04/daqiangA.gif'  ,
			'./img/page04/feichuan.png'  ,
			'./img/page04/huoyan.png'  ,
			'./img/page04/maozi.gif'  ,
			'./img/page04/meicar.png'  ,
			'./img/page04/meiguo.gif'  ,
			'./img/page04/uspeople.png',
			'./img/page04/toujin.gif'  ,
			'./img/page04/xingxingA.gif'  ,
			'./img/page04/xingxingb.png'  ,
			'./img/page05/AA.gif'  ,
			'./img/page05/AAA.png'  ,
            './img/page05/canglaoshi.gif',
            './img/page05/canglaoshishou.png',
			'./img/page05/chuanren.png'  ,
			'./img/page05/haoerlang.png',
			'./img/page05/heirenAshen.png'  ,
			'./img/page05/heirenAtou.gif'  ,
			'./img/page05/heirenB.gif'  ,
			'./img/page05/heirenBchen.png'  ,
			'./img/page05/heirenBkulou.png'  ,
			'./img/page05/heirenchuan.png'  ,
			'./img/page05/heirenlang.png'  ,
			'./img/page05/heirenniao.png'  ,
			'./img/page05/heirenpenshui.png'  ,
			'./img/page05/heirenpenshuiaaa.png'  ,
			'./img/page05/huomiao.png'  ,
			'./img/page05/japan.png'  ,
			'./img/page05/guoqi.gif'  ,
			'./img/page05/yunyun.png',
			'./img/page05/mupai.png'  ,
			'./img/page06/111.png',
			'./img/page06/222.png',
			'./img/page06/qicheA.gif',
			'./img/page06/qicheB.gif',
            './img/page06/reyrdd.png',
			'./img/page06/ribenren.gif',
			'./img/page06/youping.gif',
			'./img/page06/arrowbottom.png',
			"./img/footer/bottom-logo.jpg",
			'./img/footer/erweima.jpg',
			'./img/footer/footer-left.png',
        ];
        ImgLoadingByFile(imgFile,'loadingPage','img-loading-txt','readyGo','musicStar','pageContainer');
       
        firstInit = false;
    }
    //音乐
    $(".open").click(function(){
        musicStar.pause();
        $(this).css("display","none");
        $(".clock").css("display","block");
    });
    $(".clock").click(function(){
        musicStar.play();
        $(this).css("display","none");
        $(".open").css("display","block");
    });
    var time01 = true,time02=true,time03=true,time04=true,time05=true,time06=true,time07=true,time08=true,time09=true,time10=true,time11=true;
    $(window).scroll( function() {
        /* ...do something... */
        var sh = $(window).scrollTop();
        var rem = parseInt($('body').css('width'))/10;
        function addClass(classID,showClass){
            if(!$('.'+classID).hasClass(showClass)){
                $('.'+classID).addClass(showClass);
            }
        }
        /******音效******/

        if(sh>(80/75*rem)) {//云声2
            if (time01) {
                myunsankai.play();
                time01 = false;
            }
        }
        if(sh>(8950/75*rem)&&sh<(10020/75*rem)){//水管喷水
            if(time02){
                mpenshui.play();
                time02 = false;
            }
        }else{
            mpenshui.pause();
        }
        if(sh>(4600/75*rem)){//试管
            if(time03){
                mshiguan.play();
                time03 = false;
            }
        }else{
            mshiguan.pause();
        }
        if(sh>(7700/75*rem)&&sh<(8906/75*rem)){//机关枪
            if(time04){
                mjiguanqiang.play();
                time04 = false;
            }
        }else{
            mjiguanqiang.pause();
        }
        if(sh>(8400/75*rem)){//浪声
            if(time05){
                mfenglangsheng.play();
                time05 = false;
            }
        }
        if(sh>(1800/75*rem)) {//德语
            if (time06) {
                mdeyu.play();
                time06 = false;
            }
        }
        if(sh>(1700/75*rem)&&sh<(2906/75*rem)){//秒表
            if(time07){
                mmiaobiao.play();
                time07 = false;
            }
        }else{
            mmiaobiao.pause();
        }
        if(sh>(13120/75*rem)) {//云声
            if (time08) {
                myunsankai.play();
                time08 = false;
            }
        }
        if(sh>(11706/75*rem)) {//吸水
            if (time09) {
                mxishui.play();
                time09 = false;
            }
        }
        if(sh>(6200/75*rem)){//我好方
        	if(time10){
        		mfang.play();
        		time10 = false;
        	}
        }
        if(sh>(11000/75*rem)){//日语
            if(time11){
                mriyu.play();
                time11 = false;
            }
        }
        /********动画**********/
        if(sh>(100/75*rem)){//page01云散开
            addClass('zuosyd','fadeOutLeft');
            addClass('yousyd','fadeOutRight');
        } else{
            $('.zuosyd').removeClass('fadeOutLeft') ;
            $('.yousyd').removeClass('fadeOutRight') ;
        }
        if(sh>(1700/75*rem)){//page03小人冒出来
              addClass('peopleshow','people');
              addClass('whatshow','what');
        } else{
             $('.peopleshow').removeClass('people') ;
             $('.whatshow').removeClass('what') ;
        }
        if(sh>(8300/75*rem)){//page04美国船开出来
            addClass('chuanrenbox img','chuanren');
            addClass('haoerlang','fadeIn');
            $('.chuanrenbox img').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
                $('.chuanrenbox img').addClass('meichuanmove');
            });
        } else{
            $('.chuanrenbox img').removeClass('chuanren').removeClass('meichuanmove') ;
            $('.haoerlang').removeClass('fadeIn').css('opacity',0) ;
        }
        if(sh>(13150/75*rem)){//page06云散开
            addClass('footer-left','fadeOutLeft');
            addClass('footer-right','fadeOutRight');
        } else{
            $('.footer-left').removeClass('fadeOutLeft') ;
            $('.footer-right').removeClass('fadeOutRight') ;
        }
        if (sh>(4720/75*rem)) {         //冒泡的试管
        	addClass('yun01show','yun01');
        	addClass('yun02show','yun02');
        	addClass('yun03show','yun03');
        	addClass('ideashow','idea');
        	addClass('artshow','art');
        	addClass('scienceshow','science');

        }else{
        	$(".yun01show").removeClass('yun01');
        	$(".yun02show").removeClass('yun02');
        	$(".yun03show").removeClass('yun03');
        }

    } );

}
(function() {
    "use strict";

    function Utils() {
    }

    Utils.isWeiXin = function(){
        return navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/);
    };
    Utils.isQQ = function(){
        return navigator.userAgent.ua.match(/QQ\/([\d\.]+)/);
    };
    Utils.isQZone = function(){
        return navigator.userAgent.ua.indexOf("Qzone/") !== -1;
    };

    Utils.isIos = function() {
        return !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    };
    Utils.isIPhone = function() {
        return navigator.userAgent.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1;
    };
    Utils.isIpad = function() {
        return navigator.userAgent.indexOf('iPad') > -1;
    };
    Utils.isAndroid = function() {
        var u = navigator.userAgent;
        return navigator.userAgent.indexOf('Android') > -1 || u.indexOf('Linux') > -1;
    };
    Utils.isMobile = function() {
        // var u = navigator.userAgent;
        return navigator.userAgent.match(/(iPhone|iPod|Android|ios|SymbianOS)/i) != null;
    };

    // ## 屏幕方向
    Utils.isPortrait = function() {
        if (!Utils.isMobile()) {
            //alert(111);
            return true;

        }
        // 安卓版 微信里面 只用判断 width 和 height
        if (Utils.isAndroid() && Utils.isWeiXin()) {
            if (Utils.windowW() < Utils.windowH()) {
                //alert(22);
                return true;

            } else {
                //alert(331);
                return false;

            }
        }
        var orientation = window['orientation'];
        if (orientation||orientation==0) {
            if (orientation == 90 || orientation == -90) {
                //alert(4442);
                return false;

            }else{
                //alert(555111);
                return true;

            }
        } else {
            if (Utils.windowW() < Utils.windowH()) {
                //alert(666111);
                return true;

            } else {
                //alert(777111);
                return false;

            }
        }
    };
    // ## jquery 获取 window 的宽度
    Utils.windowW = function() {
        // var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
        return $(window).width();
    };
    // ## jquery 获取 window 的高度
    Utils.windowH = function() {
        return $(window).height();
    };
    window.Utils = Utils;
}());
$(function(){
    onResize();
    if (!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)) {
        window.addEventListener("onorientationchange" in window ? "orientationchange" : "resize", onResize, false);
    }else{
        window.addEventListener( "resize", onResize, false);
    }
});

function  onResize() {

    if(Utils.isPortrait()){
        if(!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){

            var timer = setTimeout(function(){
                portrait02();

                clearTimeout(timer);
            },100);
        }else{
            portrait02();
        }
    } else {
        if(!!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)){
            var timer = setTimeout(function(){
                landscape();
                clearTimeout(timer);
            },100);
        }else{
            landscape();
        }
    }
}



