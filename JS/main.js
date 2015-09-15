/**
 * Created by truemenhale on 15/9/15.
 */
$(function(){
	$(".selectorBtn").on('tap',function(){
		$('.mask').css('z-index',999);
		$('.schoolSelector').css('z-index',1000);
	});
});