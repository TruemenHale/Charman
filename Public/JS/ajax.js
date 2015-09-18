/**
 * Created by truemenhale on 15/9/15.
 */
function ajaxView(data,name,school_id){
	console.log(data);
	var list = $('.List');
	var _arr = [];
	$('.uName').html(name);
	$('.Tname').html(name+'主席团');
	$('.prayNum').html();
	$('.pray').on('tap',function(school_id){
		$.post('',school_id,function(data){
			if(data.status == 200){
				alert('赏赞成功！谢谢支持！');
			}
			else if(data.status == 403){
				alert('每个账号每天只能赏赞一次！');
			}
			else{
				alert('网络故障请稍后再试！');
			}
		});
	});
	for(var i = 0;i<data.length;i++){
		var _html = "<li>";
	}
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