/**
 * Created by truemenhale on 15/9/15.
 */
$(document).on("pageinit",function(){
	$.mobile.loading('show');
	var img = new Image();
	img.src = "../Charman/public/images/index_back.jpg";
	img.onload = function(){
		img.onload = null;
		$('#index').css('background-image',"url('../Charman/public/images/index_back.jpg')");
		$.mobile.loading('hide');
		$.mobile.changePage('#index');
	};

});
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
		var _this = $(this);
		var uName = _this.html();
		var school_id = _this.attr('data-school');
		var _data = {};
		_data.page = 1;
		_data.school_id = school_id;
		oSelector.animate({"top":"100%"},function(){
			oMask.css('z-index',-999);
			oSelector.css('z-index',-1000);
			$.mobile.loading('show');
			$.post(school_path,_data,function(data){
				if(data.status == 200){
					ajaxView(data.data,uName,school_id);
				}
				else{
					alert('服务器连接失败！');
				}
			});
		});
	});
	oBigC.css({"left":-$(window).width()*0.1});
	oSmallC.css({"left":-$(window).width()*0.4});
});