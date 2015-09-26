/**
 * Created by truemenhale on 15/9/15.
 */
var page_token = true;
var comment_token = true;
var chairman_token = true;
$("document").on("pageshow","#charman",function(){
	var aUl = $('.comment_ul');
	console.log(1);
	for(var i = 0 ; i < aUl.length;i++){
		aUl.eq(i).listview('refresh');
	}
});
$(function(){
	var oMask = $('.mask');
	var oSelector = $('.schoolSelector');
	var aSeBox = $('.schoolSelector li');
	var oBigC = $('.bigCircle');
	var oSmallC = $('.smallCircle');
	var oBack = $('.backIndex');
	oBack.on('tap',function(){
		var list = $('#List');
		list.html("");
		$('.perSchool').off('tap');
		$.mobile.changePage('#index',{
			transition:'flow'
		});
	});
	$.mobile.loading('show');
	var img = new Image();
	img.src = "Public/images/index_back.jpg";
	img.onload = function(){
		img.onload = null;
		$('#index').css('background-image',"url('Public/images/index_back.jpg')");
		$.mobile.loading('hide');
		$.mobile.changePage('#index');
	};
	$(".selectorBtn").on('click',function(){
		oMask.css('z-index',999);
		oSelector.css('z-index',1000);
		oSelector.animate({"top":"60%"});
	});
	oMask.on('tap',function(){
		oSelector.animate({"top":"100%"},function(){
			oMask.css('z-index',-999);
			oSelector.css('z-index',-1000);
		});
	});
	$('.reply').on('tap',function(){
		$.mobile.loading('show');
		var reply = $('.commentInput').val();
		var _data = {};
		_data.comment_id = 0;
		_data.content = reply;
		$.post(reply_path,reply,function(data){
			if(data.status == 200){
				alert('留言成功！');
				$.mobile.loading('hide');
			}else{
				alert(data.info);
				$.mobile.loading('hide');
			}
		});
	});
	aSeBox.on('tap',function(){
		if(page_token){
			page_token = false;
		}
		else{
			return false;
		}
		var _this = $(this);
		var uName = _this.html();
		var school_id = _this.attr('data-school');
		var _data = {};
		_data.school_id = school_id;
		oSelector.animate({"top":"100%"},function(){
			oMask.css('z-index',-999);
			oSelector.css('z-index',-1000);
			$.mobile.loading('show');
			$.post(school_path,_data,function(data){
				$.mobile.loading('hide');
				page_token = true;
				if(data.status == 200){
					var a = {};
					a.page = 1;
					a.school_id = school_id;
					$.post(get_comment,a,function(data){
						commentView(data.data);
					});
					pageView(data.data,uName,school_id,a);
				}
				else{
					alert(data.info);
				}
			});
		});
	});
	oBigC.css({"left":-$(window).width()*0.1});
	oSmallC.css({"left":-$(window).width()*0.4});
});