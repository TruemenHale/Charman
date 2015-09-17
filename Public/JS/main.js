/**
 * Created by truemenhale on 15/9/15.
 */
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
		var _data = {};
		_data.page = 1;
		_data.school_id = _this.attr('data-school');
		oSelector.animate({"top":"100%"},function(){
			oMask.css('z-index',-999);
			oSelector.css('z-index',-1000);
			$.mobile.loading('show');
			$.post(school_path,_data,function(data){
				console.log(data);
			});
		});
	});
	oBigC.css({"left":-$(window).width()*0.1});
	oSmallC.css({"left":-$(window).width()*0.4});
});