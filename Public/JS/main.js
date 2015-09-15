/**
 * Created by truemenhale on 15/9/15.
 */
$(function(){
	var oMask = $('.mask');
	var oSelector = $('.schoolSelector');
	var aSeBox = $('.schoolSelector li');
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
		var uName = $(this).html();
		$.mobile.changePage('#single',{
			transition:"flow"
		});
		$('.uName').html(uName);
	})
});