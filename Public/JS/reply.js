/**
 * Created by truemenhale on 15/9/20.
 */
function replyView(data){
	$.mobile.changePage('#commentInfo',{
		transition:'flow'
	});
	var list = $('.reply_list');
	var _arr = [];
	for(var i = 0;i < data.length;i++){
		var _html =
			'<li>'+
				'<div class="touxiang" '+'style = "background-image: '+'url("'+data[i].avatar+'")">'+
				'</div>'+
				'<div class="usrBack">'+
					'<p class="usrName">'+data[i].nickname+'</p>'+
					'<div class="words" data-role="none" style="word-wrap:break-word; word-break:break-all;">'+
						'<span class="comment_Content">'+
						+data[i].content+
						'</span>'+
						'<br/>'+
						'<br/>'+
						'<input type="text" data-role="none" placeholder="请在这里回复同学们的留言..." class="commentInput">'+
						'<br/>'+
						'<br/>'+
						'<span class="reply"  comment_id="'+data.comment_id+'" >回复</span>'+
			        '</div>'+
				'</div>'+
			'<p class="ui-li-aside" class="apply_date">'+data[i].time+'</p>'+
			'</li>';
		_arr.push(_html);
	}
	list.html(_arr.join(""));
	list.listview('refresh');
	var aReplyBtn = $('.reply');
	aReplyBtn.on('tap',function(){
		$.mobile.loading('show');
		var _this = $(this);
		var rInput = _this.siblings('.commentInput');
		var _data = {};
		_data.comment_id = _this.attr('comment_id');
		_data.content = rInput.val();
		$.post(reply_path,_data,function(data){
			$.mobile.loading('hide');
			if(data.status == 200){
				alert('回复成功！')
			}
			else{
				alert(data.info);
			}
		});
	});
}