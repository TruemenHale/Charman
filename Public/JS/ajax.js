/**
 * Created by truemenhale on 15/9/15.
 */
function pageView(data,name,school_id,a){
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
	if(comment_token){
		comment_token = false;
		$('.loadMore').on('tap',function(){
			a.page++;
			$.post(get_comment,a,function(data){
				commentView(data.data);
				comment_token = true;
			});
		});
	}
	else{
		return false;
	}
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
	$.mobile.changePage('#single',{
		transition:"turn"
	});
	$.mobile.loading('hide');
}
function commentView(data){
	var list = $('.List');
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