/*
function success(){
		g_alert('success','操作成功？','images/duihao.png','http://www.qq.com');
}

function error(){
		g_alert('error','用户名不能为空？','images/cuohao.png');//url可不写
}
function confirm(){
	g_alert('confirm','您确定要退出？','images/tuichu.png','http://www.qq.com');
}
function warn(){
		g_alert('warn','用户名不能为空？','images/tanhao.png');
}
*/
function g_alert(type,cont,tubiao_dz,url,zhs){
//html
var html = '<div id="g_all"></div><div id="g_box" style="z-index:10000; position:fixed"><div id="g_cont"><ul class="imgxx"><img></ul><ul class="ul_sm"><span>'+cont+'</span></ul></div><div id="g_buttom"><div id="g_button"><ul><a class="butt" id="ok">确定</a> <a class="butt" id="false">取消</a></ul></div></div></div>';
$('body').append(html);
//css
var css = "<style id='g_css'>#g_cont{width:100%; float:left; background:#fff;}";
css += "#g_cont ul{float:left;}";
css += "#g_cont .imgxx{margin-top:0.4rem; padding-left:0.4rem}";
css += "#g_cont .imgxx img{width:1.48rem; height:1.28rem; float:left;}";
if (zhs==1)
{
	css += "#g_cont .ul_sm{width:3.2rem; margin-top:0.4rem; color:#da0100; font-size:0.45rem; height:1.28rem; line-height:1.28rem; font-weight:bold;}";
}
else
{
	css += "#g_cont .ul_sm{width:3.2rem; margin-top:0.58rem; color:#df8c02; font-size:0.25rem; height:1rem; line-height:0.4rem;}";
}
css += "#g_all{width:100%; height:100%; z-index:1000; position:fixed;filter:Alpha(opacity=50); background:#000;top:0;left:0;opacity: 0.6}";
css += "#g_buttom{width:100%; float:left; text-align:center; padding-top:0.1rem; background:#fff; padding-bottom:0.15rem;}";
css += "#g_button{width:100%; float:left;}";
css += "#g_button ul{width:100%; float:left; text-align:center; padding-bottom:0.1rem; margin-top:-0.5rem;}";
css += ".butt{display:inline-block; cursor:pointer; padding:0px 28px; height:28px; line-height:28px; text-align:center; border-radius:5px; font-size:14px; margin-left:5px; margin-right:5px;}"
css += "#ok{background:#fff; border:1px solid #ccc; color:#101011;}";
css += "#false{background:#ff6900; color:#FFFFFF;}";
css += "#g_box{width:5.4rem; border:0.08rem solid #fffcb1; border-radius:0.08rem; background:#fff;}</style>";	
$('head').append(css);
//类型为alert
if(type == 'success'){
$('#g_cont img').attr('src',tubiao_dz);
$('#false').hide();
}
if(type == 'error'){
$('#g_cont img').attr('src',tubiao_dz);
$('#false').hide();
}
//类型为confirm
if(type == 'warn'){
$('#g_cont img').attr('src',tubiao_dz);
$('#false').hide();
}
//类型为confirm
if(type == 'confirm'){
$('#g_cont img').attr('src',tubiao_dz);
}
//点击OK
$('#ok').click(function(){
$('#g_all').remove();
$('#g_box').remove();
$('#g_css').remove();
if(url){
window.location = url;
}
return true;
});
//点击false
$('#false').click(function(){
$('#g_all').remove();
$('#g_box').remove();
$('#g_css').remove();
if(type != 'confirm'){
if(url){
window.location = url;
}}
return false;
});
//居中
var _widht = document.documentElement.clientWidth; //屏幕宽
var _height = document.documentElement.clientHeight; //屏幕高
var boxWidth = $("#g_box").width();
var boxHeight = $("#g_box").height();
$("#g_box").css({ top: (_height - boxHeight) / 4 + "px", left: (_widht - boxWidth) / 2 + "px" });
}