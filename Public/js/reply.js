/**
 * Created by truemenhale on 15/9/20.
 */
var reply_token = true;
function replyView(data){
	var list = $('.reply_list');
	list.html("<p class='chairman_title'>主席团</p>");
	var c = list.html();
	$.mobile.changePage('#commentInfo',{
		transition:'flow'
	});
	var _arr = [];
	for(var i = 0;i < data.all.length;i++){
		var _html =
			'<li>'+
				'<div class="touxiang" '+'style = "background-image: url(' + data.all[i].avatar + ')">'+
				'</div>'+
				'<div class="usrBack">'+
					'<p class="usrName">'+data.all[i].nickname+'</p>'+
					'<div class="words" data-role="none" style="word-wrap:break-word; word-break:break-all;">'+
						'<span class="comment_Content">'+data.all[i].content+
						'</span>'+
						'<br/>'+
						'<br/>'+
						'<input type="text" data-role="none" placeholder="请在这里回复同学们的留言..." class="commentInput">'+
						'<br/>'+
						'<br/>'+
						'<span class="reply"  comment_id="'+data.all[i].comment_id+'" >回复</span>'+
			        '</div>'+
				'</div>'+
			'<p class="ui-li-aside" class="apply_date">'+data.all[i].time+'</p>'+
			'</li>';
		_arr.push(_html);
	}
	var arr_ = [];
	for(var i = 0 ; i < data.seduce.length ; i++){
		var html_ = '<p class="chairman_title">'+data.seduce[i].president_name+'</p>'+
			'<li>'+
			'<div class="touxiang" '+'style = "background-image: url(' + data.seduce[i].avatar + ')">'+
			'</div>'+
			'<div class="usrBack">'+
			'<p class="usrName">'+data.seduce[i].nickname+'</p>'+
			'<div class="words" data-role="none" style="word-wrap:break-word; word-break:break-all;">'+
			'<span class="comment_Content">'+data.seduce[i].content+
			'</span>'+
			'<br/>'+
			'<br/>'+
			'<input type="text" data-role="none" placeholder="请在这里回复同学们的留言..." class="commentInput">'+
			'<br/>'+
			'<br/>'+
			'<span class="reply_seduce"  comment_id="'+data.seduce[i].comment_id+'" >回复</span>'+
			'</div>'+
			'</div>'+
			'<p class="ui-li-aside" class="apply_date">'+data.seduce[i].time+'</p>'+
			'</li>';
		arr_.push(html_);
	}
	list.html(c+_arr.join("")+arr_.join(""));
	list.listview('refresh');
	var aReplyBtn = $('.reply');
	var aSeduceBtn = $('.reply_seduce');
	aReplyBtn.on('tap',function(){
		if(reply_token){
			$.mobile.loading('show');
			var _this = $(this);
			var rInput = _this.siblings('.commentInput');
			var _data = {};
			_data.comment_id = _this.attr('comment_id');
			_data.content = rInput.val();
			if(_data.content.length != 0){
				$.post(reply_path,_data,function(data){
					$.mobile.loading('hide');
					reply_token = true;
					if(data.status == 200){
						alert('回复成功！');
						_this.parent('.words').parent('.usrBack').parent('li').remove();
					}
					else{
						alert(data.info);
					}
				});
			}
			else{
				$.mobile.loading('hide');
				alert('请输入回复内容！')
			}
		}
		else{
			return false;
		}
	});
	aSeduceBtn.on('tap',function(){
		if(reply_token){
			$.mobile.loading('show');
			var _this = $(this);
			var rInput = _this.siblings('.commentInput');
			var _data = {};
			_data.comment_id = _this.attr('comment_id');
			_data.content = rInput.val();
			if(_data.content.length != 0){
				$.post(replySeduce_path,_data,function(data){
					$.mobile.loading('hide');
					reply_token = true;
					if(data.status == 200){
						alert('回复成功！');
						_this.parent('.words').parent('.usrBack').parent('li').remove();
					}
					else{
						alert(data.info);
					}
				});
			}
			else{
				$.mobile.loading('hide');
				alert('请输入回复内容！')
			}
		}
		else{
			return false;
		}
	});
}