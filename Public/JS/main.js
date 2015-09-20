/**
 * Created by truemenhale on 15/9/15.
 */
//$(document).on("pageinit",'#mask',function(){
//	$.mobile.loading('show');
//	var img = new Image();
//	img.src = "Public/images/index_back.jpg";
//	img.onload = function(){
//		img.onload = null;
//		$('#index').css('background-image',"url('Public/images/index_back.jpg')");
//		$.mobile.loading('hide');
//		$.mobile.changePage('#index');
//	};
//
//});
var page_token = true;
var comment_token = true;
$(function(){
	var oMask = $('.mask');
	var oSelector = $('.schoolSelector');
	var aSeBox = $('.schoolSelector li');
	var oBigC = $('.bigCircle');
	var oSmallC = $('.smallCircle');
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
	aSeBox.on('tap',function(){
		if(page_token){
			page_token = false;
		}
		else{
			return;
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
				if(data.status == 200){
					var a = {};
					a.page = 1;
					a.school_id = school_id;
					$.post(get_comment,a,function(data){
						commentView(data.data);
					});
					pageView(data.data,uName,school_id,a);
					page_token = true;
				}
				else{
					alert(data.info);
					page_token = true;
				}
			});
		});
	});
	oBigC.css({"left":-$(window).width()*0.1});
	oSmallC.css({"left":-$(window).width()*0.4});
});