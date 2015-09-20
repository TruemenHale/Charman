/**
 * Created by truemenhale on 15/9/15.
 */
function ajaxView(data,name,school_id){
	var img = new Image();
	img.src = data.school_pic;
	img.onload = function(){
		img.onload = null;
		$('.uPhoto').css('background-image',"url('../Charman/public/images/index_back.jpg')");
	};
	$('.uName').html(name);
	$('.Tname').html(name+'主席团');
	$('.prayNum').html(data.school_praise);
	$('.pray').on('tap',function(school_id){
		$.post(praise_path,school_id,function(data){
			if(data.status == 200){
				alert('赏赞成功！谢谢支持！');
			}
			else{
				alert(data.info);
			}
		});
	});
	$('.applyBtn').on('tap',function(){
		var words = {};
		words.school_id = school_id;
		words.comtent = $('.wordsInput').val();
		$.post(apply_comment,words,function(data){
			if(data.status == 200){
				alert("留言成功！主席团回复后将显示在下方。");
			}else{
				alert(data.info);
			}
		});
	});
	$.mobile.changePage('#single',"turn");
	$.mobile.loading('hide');
}
function commentView(data){
	var list = $('.List');
	var _arr = [];
}
//<li>
//<div class="touxiang">
//
//</div>
//<div class="usrBack">
//<p class="usrName">相二八</p>
//<div class="words" data-role="none" style="word-wrap:break-word; word-break:break-all;">
//是是是是是是是是是是是是是是是是是是是是是是是
//是是是是是是是是是是是是是是是是是是是是是是是
//是是是是是是是是是是是是是是是是是是是是是是是
//是是是是是是是是是是是是是是是是是是是是是是是
//</div>
//<br/>
//<div class="reply" style="word-wrap:break-word; word-break:break-all;white-space: normal;">
//回复：“<span class="reWords">啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</span>”
//</div>
//</div>
//<p class="ui-li-aside" class="apply_date">9月16日</p>
//</li>