/**
 * Created by truemenhale on 15/9/15.
 */
function pageView(data,name,school_id,a){
	$('.perSchool').on('tap',function(){
		if(chairman_token){
			chairman_token = false;
			$.mobile.loading('show');
			var b = {};
			b.school_id = school_id;
			$.post(chairman_path,b,function(data) {
					chairman_token = true;
					$.mobile.loading('hide');
					if (data.status == 200) {
						viewChariman(data.data);
					}else{
						alert(data.info);
					}
				}
			);
		}
	});
	var img = new Image();
	img.src = data.school_pic;
	img.onload = function(){
		img.onload = null;
		$('.uPhoto').css('background-image',"url('"+data.src+")");
	};
	var tName = name+'主席团';
	$.mobile.changePage('#single',{
		transition:"turn"
	});
	$('.uName').html(name);
	$('.Tname').html(tName);
	$('.prayNum').html(data.school_praise);
	$('.uDire').html(data.school_introduce);
	$('.pray').on('tap',function(){
		var _data = {};
		_data.school_id = school_id;
		$.post(praise_path,_data,function(data){
			if(data.status == 200){
				$('.pray').off('tap');
			}
			alert(data.info);
		});
	});
	$('.loadMore').on('tap',function(){
			if(comment_token){
				$.mobile.loading('show');
				comment_token = false;
				a.page++;
				$.post(get_comment,a,function(data){
					$.mobile.loading('hide');
					if(data.status == 200){
						commentView(data.data);
					}
					else{
						alert(data.info)
					}
					comment_token = true;
				});
			}else{
				return false;
			}
		});
	$('.applyBtn').on('tap',function(){
		var words = {};
		$.mobile.loading('show');
		words.school_id = school_id;
		words.content = $('.wordsInput').val();
		$.post(apply_comment,words,function(data){
			$.mobile.loading('hide');
			if(data.status == 200){
				alert("留言成功！主席团回复后将显示在下方。");
			}else{
				alert(data.info);
			}
		});
	});
	$.mobile.loading('hide');
}
function commentView(data){
	var list = $('#List');
	var b = list.html();
	var _arr = [];
	if(data.length != 0){
		for(var i = 0;i < data.length;i++){
			var _html =
				'<li>'+
				'<div class="touxiang" '+'style = "background-image: '+'url("'+data[i].avatar+'")">'+
				'</div>'+
				'<div class="usrBack">'+
				'<p class="usrName">'+data[i].nickname+'</p>'+
				'<div class="words" data-role="none" style="word-wrap:break-word; word-break:break-all;">'
				+data[i].content+
				'</div>'+
				'<br/>'+
				'<div class="reply" style="word-wrap:break-word; word-break:break-all;white-space: normal;">'+
				'回复：“<span class="reWords">'+data[i].reply.content+'</span>”'+
				'</div>'+
				'</div>'+
				'<p class="ui-li-aside" class="apply_date">'+data[i].time+'</p>'+
				'</li>';
			_arr.push(_html);
		}
		list.html(b+_arr.join(""));
		list.listview('refresh');
	}
}