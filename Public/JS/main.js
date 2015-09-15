/**
 * Created by truemenhale on 15/9/15.
 */
$(function(){
	var oMask = $('.mask');
	var oSelector = $('.schoolSelector');
	var aSeBox = $('.schoolSelector li');
	$(".selectorBtn").on('tap',function(){
		oMask.css('z-index',999);
		oSelector.css('z-index',1000);
	});
	oMask.on('tap',function(){
		oMask.css('z-index',-999);
		oSelector.css('z-index',-1000);
	});
	aSeBox.on('tap',function(){

	})
});