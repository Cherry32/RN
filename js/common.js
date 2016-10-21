(function (doc_01, win_01) {
var docEl_01 = doc_01.documentElement;
var resizeEvt_01 = 'orientationchange' in window ? 'orientationchange' : 'resize';
var recalc_01 = function () {
var clientWidth_01 = docEl_01.clientWidth;
var clientheight_01 = docEl_01.clientHeight;
if (!clientWidth_01) return;
if(clientWidth_01<721)
{
docEl_01.style.fontSize = (clientWidth_01 /640*100).toFixed(1)+'px';
}
else
{
	docEl_01.style.fontSize = 100+'px';

}
};
recalc_01();
if (!doc_01.addEventListener) return;
win_01.addEventListener(resizeEvt_01, recalc_01, false);
})(document, window);
//返回上一步
$(function(){
 $("#fanhui_btn").bind("click",function(){
   history.go(-1);
 })
});
//评星用
function pingfen(type,id){
for(var i=1;i<=id;i++){
$("#"+type+i).attr("src","images/wx_a.png");
}
for(var j=5;j>id;j--){
$("#"+type+j).attr("src","images/wx_b.png");
}
$("#hide_"+type).val(id);
}
//滑动函数
(function(a){
    a.fn.touchwipe=function(c){
        var b={
            drag:false,
            min_move_x:20,
            min_move_y:20,
            wipeLeft:function(){/*向左滑动*/},
            wipeRight:function(){/*向右滑动*/},
            wipeUp:function(){/*向上滑动*/},
            wipeDown:function(){/*向下滑动*/},
            wipe:function(){/*点击*/},
            wipehold:function(){/*触摸保持*/},
peDrag:function(x,y){/*拖动*/},
            preventDefaultEvents:true
        };
        if(c){a.extend(b,c)};
        this.each(function(){
            var h,g,j=false,i=false,e;
            var supportTouch = "ontouchstart" in document.documentElement;
            var moveEvent = supportTouch ? "touchmove" : "mousemove",
            startEvent = supportTouch ? "touchstart" : "mousedown",
            endEvent = supportTouch ? "touchend" : "mouseup"
             
             
            /* 移除 touchmove 监听 */
            function m(){
                this.removeEventListener(moveEvent,d);
                h=null;
                j=false;
                clearTimeout(e)
            };
             
            /* 事件处理方法 */
            function d(q){
                if(b.preventDefaultEvents){
                    q.preventDefault()
                };
                if(j){
                    var n = supportTouch ? q.touches[0].pageX : q.pageX;
                    var r = supportTouch ? q.touches[0].pageY : q.pageY;
                    var p = h-n;
                    var o = g-r;
                    if(b.drag){
                        h = n;
                        g = r;
                        clearTimeout(e);
                        b.wipeDrag(p,o);
                    }
                    else{
                        if(Math.abs(p)>=b.min_move_x){
                            m();
                            if(p>0){b.wipeLeft()}
                            else{b.wipeRight()}
                        }
                        else{
                            if(Math.abs(o)>=b.min_move_y){
                                m();
                                if(o>0){b.wipeUp()}
                                else{b.wipeDown()}
                            }
                        }
                    }
                }
            };
             
            /*wipe 处理方法*/
            function k(){clearTimeout(e);if(!i&&j){b.wipe()};i=false;j=false;};
            /*wipehold 处理方法*/
            function l(){i=true;b.wipehold()};
             
            function f(n){
                //if(n.touches.length==1){
                    h = supportTouch ? n.touches[0].pageX : n.pageX;
                    g = supportTouch ? n.touches[0].pageY : n.pageY;
                    j=true;
                    this.addEventListener(moveEvent,d,false);
                    e=setTimeout(l,750)
                //}
            };
             
            //if("ontouchstart"in document.documentElement){
                this.addEventListener(startEvent,f,false);
                this.addEventListener(endEvent,k,false)
            //}
        });
        return this
    };
})(jQuery);
//付款用
			function xianshi_je(divDisplay)
								{
									document.getElementById(divDisplay).style.display = "block";
								}
								function yincang_je(divDisplay)
								{
									document.getElementById(divDisplay).style.display = "none";
								}
//优惠券选择
function yhj_qz(yjh_html,yc_yhj,yhj_mc)
{
	$("#"+yc_yhj).hide();
	$("#"+yjh_html).html($("#"+yhj_mc).html());
	$("#"+yjh_html).removeClass("this_xz");
}
//显示隐藏
function xianshi_yincang(cs_01,cs_02)
{
var div_01=document.getElementById(cs_01);
var div_02=document.getElementById(cs_02);
if(div_02.style.display != "block")
            {
                div_02.style.display = "block";
				div_01.className='this_xz';
            }
            else
            {
				div_01.className='';
                div_02.style.display = "none";
            }
}
//选择标签取值函数
function biaoqian_xz(id_1,id_2)
{
$("#"+id_2).slideDown(50);
//$("#"+id_1).mouseleave(function(){
//$("#"+id_2).slideUp(50);
//})
}
function value_qz(id_1,id_2,id_3){
    var v1=document.getElementById(id_1).innerHTML;
    document.getElementById(id_2).value=v1;
	document.getElementById(id_3).style.display = "none";
}
//切换选项卡
function tab_hanshu(bqxx,nrxx,ssxx_id,idgsxx)
{
	for (zs_id=0;zs_id<idgsxx;zs_id++)
{
	document.getElementById(bqxx+zs_id).className = "moren";
	document.getElementById(nrxx+zs_id).style.display = "none";
}
	document.getElementById(bqxx+ssxx_id).className = "this";
	document.getElementById(nrxx+ssxx_id).style.display = "block";
}
//商品列表筛选
$(document).ready(function(){
$("#ss_shaixuan").click(function(){
$("#ss_beijing").fadeIn(500);
$("#ss_neirong").animate({width:'80%'});
//$("html").addClass("sidebar_move");
$(document.body).css("overflow","hidden");
$(document.body).css("height",$(window).height()-80);
$("#shangpin_nr").css("height",$(window).height()-80);
$("#shangpin_nr").css("overflow","hidden");

});
$(".duo_checkbox01").click(function(){
$("#ss_beijing").fadeOut(500);
$("#ss_neirong").animate({width:'0'});
$(document.body).css("overflow","auto");
$(document.body).css("height","auto");
$("#shangpin_nr").css("height","auto");
$("#shangpin_nr").css("overflow","auto");
});
$("#ss_beijing").click(function(){
$("#ss_beijing").fadeOut(500);
$("#ss_neirong").animate({width:'0'});
$(document.body).css("overflow","auto");
$(document.body).css("height","auto");
$("#shangpin_nr").css("height","auto");
$("#shangpin_nr").css("overflow","auto");
});
});
//ktv等商家首页加载
function shouqi_hanshu(ob,fang_boxid02){
$("#"+fang_boxid02+" .ul_01:gt(2)").hide();
$(ob).hide().prev('.gengduo').show();
}
function gengduo_hanshu(ob,fang_boxid02){
$(ob).hide().next('.shouqi').show();
$("#"+fang_boxid02+" .ul_01:gt(2)").show();
}
//商品团购详细用到打开关闭选择
function dakai_caidan(beijing,neirong){
//$('#top_div01').fadeIn();//淡出淡入效果
$("#"+neirong).slideDown(1000);
$("#"+beijing).height($(document).height());
$("#"+beijing).show();
$('body').css("overflow","hidden");	
}
function guanbi_caidan(beijing,neirong){
$("#"+neirong).slideUp(1000);
$("#"+beijing).hide();
$("body").css("overflow","");
//$('#top_div01').fadeIn();//淡出淡入效果
}
//这里的单选不需要input
$.fn.danxuan_no = function(options) {
		var $labels = $('label', this).click(function(event) {
			$labels.removeClass("danxuan_Checked");
			$(this).addClass("danxuan_Checked");
			event.stopPropagation();
		}).addClass('danxuan');
	}
	//公用滑出隐藏和显示
function gong_show(id){
$("#"+id).show();
};
function gong_hide(id){
$("#"+id).hide();
};
//倒记时函数
var shuzu_target=[]
var datetime_id=[]
function duoge_daojishi(){
    setTimeout("duoge_daojishi()", 1000);
for (var i=0,j=shuzu_target.length;i<j;i++){
    today=new Date();
    timeold=shuzu_target[i]-today.getTime();
    sectimeold=timeold/1000;
    secondsold=Math.floor(sectimeold);
    msPerDay=24*60*60*1000;
    e_daysold=timeold/msPerDay;
    daysold=Math.floor(e_daysold);
    e_hrsold=(e_daysold-daysold)*24;
    hrsold=Math.floor(e_hrsold);
    e_minsold=(e_hrsold-hrsold)*60;
    minsold=Math.floor((e_hrsold-hrsold)*60);
    seconds=Math.floor((e_minsold-minsold)*60);
    if (daysold<0) {
        document.getElementById(datetime_id[i]).innerHTML="过期失效";
    }
else {
document.getElementById(datetime_id[i]).innerHTML="<span class='sfmsj'>"+hrsold+"</span><span class='fhgk'>:</span><span class='sfmsj'>"+minsold+"</span><span class='fhgk'>:</span><span class='sfmsj'>"+seconds+"</span>";
//if (daysold<3) {
//document.getElementById(datetime_id[i]).innerHTML="<font color=red>"+daysold+" 天 "+hrsold+" 时 "+minsold+" 分 "+seconds+" 秒</font>" 
//}
//else {
//document.getElementById(datetime_id[i]).innerHTML=daysold+" 天 "+hrsold+" 时 "+minsold+" 分 "+seconds+" 秒";
//}
}
}
}
setTimeout("duoge_daojishi()", 100);
//全选反选
function quanxuan_xz(xzid,input_id)
{
var checklist=$("#"+input_id+" input[type=checkbox]");
if(document.getElementById(xzid).checked)
{
for(var i=0;i<checklist.length;i++)
{
checklist[i].checked = 1;
}
}
else
{
for(var j=0;j<checklist.length;j++)
{
checklist[j].checked = 0;
}
}
}
//文本点击变日期
function time_mrz(node){
if(node.type=="text"){
	var inputps = document.createElement('input');
	inputps.setAttribute("name","time");
	inputps.setAttribute("type","time");
	node.parentNode.replaceChild(inputps,node);
	inputps.focus();
	inputps.select();
}
}
  function changepasswd(node){
if(node.type=="text"){
	var inputps = document.createElement('input');
	inputps.setAttribute("name","date");
	inputps.setAttribute("type","date");
	node.parentNode.replaceChild(inputps,node);
	inputps.focus();
	inputps.select();
}
}
//弹出框
function guanbi_div(div_cs1,div_cs2)
{
$("#"+div_cs1).stop().fadeOut(100);
$("#"+div_cs2).stop().fadeOut(100);
$(document.body).css("overflow","auto");
}
function tanchu_div(div_cs1,div_cs2)
{
$(document.body).css("overflow","hidden");
$("#"+div_cs1).css({ 'height': $(document).height() });
$("#"+div_cs1).stop().show();
$("#"+div_cs2).tanchu_ctyle();
$("#"+div_cs2).stop().show();
}
jQuery.fn.tanchu_ctyle=function(loaded) {
var tanchu_obj01 = this;
body_width01 = parseInt($(window).width());
body_height01 = parseInt($(window).height());
block_width01 = parseInt(tanchu_obj01.width());
block_height02 = parseInt(tanchu_obj01.height());
left_position01 = parseInt((body_width01/2) - (block_width01/2)  + $(window).scrollLeft());
if (body_width01<block_width01) { left_position01 = 0 + $(window).scrollLeft(); };
top_position = parseInt((body_height01/2) - (block_height02/2) + $(window).scrollTop());
if (body_height01<block_height02) { top_position = 0 + $(window).scrollTop(); };
if(!loaded) {
tanchu_obj01.css({'position': 'absolute'});
tanchu_obj01.css({ 'top': top_position, 'left': left_position01 });
$(window).bind('resize', function() { 
tanchu_obj01.tanchu_ctyle(!loaded);
});
$(window).bind('scroll', function() { 
tanchu_obj01.tanchu_ctyle(!loaded);
});
} else {
tanchu_obj01.stop();
tanchu_obj01.css({'position':'absolute'});
tanchu_obj01.animate({ 'top':top_position },0,'linear');
}
}