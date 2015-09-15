/**
 * Created by truemenhale on 15/9/15.
 */
$(function(){
	$('.backRow').on('tap',function(){
		//写死了url;
		$.mobile.changePage("http://localhost/charman/index.php/Home/Index/index.html");
	});
});