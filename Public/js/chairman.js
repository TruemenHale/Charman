/**
 * Created by truemenhale on 15/9/21.
 */
var applyChairman_token = true;
$(document).on("pagebeforehide","#charman",function(){
	$('.comment_holder').html(" ");
});
$(document).on("pagebeforeshow","#index",function(event){
	$('#List').html(" ");
	$('.loadMore').off('tap');
	$('.perSchool').off('tap');
});
function viewChariman(data){
	var list = $('.comment_holder');
	var arr_ = [];
	var cBox = [];
	var oBack = $('.backSingle');
	oBack.on('tap',function(){
		list.html(" ");
		$.mobile.changePage('#single',{
			transition:'flow'
		});
	});
	for(var i = 0; i<data.length; i++){
		var pic = data[i].pic;
		if(!data[i].introduce){
			data[i].introduce = '暂未提交个人介绍';
		}
		var _html = '<li>'+
			'<div class="cPhoto" style="background-image: url(' + pic + ')">'+
		'</div>'+
		'<p class="cTitle">'+
		'<span class="Cname">'+
				data[i].president+
			'</span>&nbsp;'+
	'<span class="position">'+data[i].posization+'</span>'+
		'<span class="praise" id-praise="'+data[i].president_id+'">'+
		'<i style="font-family: iconfont;color: #ff5148;font-size: 16px;margin-right: 5px">&#xe6d1;</i>赏赞'+ '<span class="praiseNum" data-num="'+i+'">'+data[i].praise+'</span>'+
		'</span>'+
		'</p>'+
		'<div class="cIntro">'+
		'&nbsp;&nbsp;&nbsp;'+
	'<span class="cDire">'+
			data[i].introduce+
	'</span>'+
		'</div>'+
		'<div class="wordsBoard">'+
		'<div class="bigCircle"></div>'+
		'<div class="smallCircle"></div>'+
		'<div class="wordsHolder">'+
		'<h5>留言板</h5>'+
		'<textarea name="" id="" class="wordsContent" data-role="none" placeholder="请在这里输入你的留言..."></textarea>'+
		'<div class="applyChairman" apply-id="'+data[i].president_id+'">'+
		'提交'+
		'</div>'+
		'</div>'+
		'<div class="comment_List">'+
		'<ul class="comment_ul">'+
		'</ul>'+
		'</div>'+
		'</div>'+
		'</li>'
		arr_.push(_html);
		var _arr = [];
		for(var j = 0;j < data[i].comment.length;j++){
			var html_ =
				'<li>'+
				'<div class="comment_a" style="background-image: url('+data[i].comment[j].avatar+')">'+

				'</div>'+
				'<div class="usrBack">'+
				'<p class="commenter">'+
				data[i].comment[j].nickname+
				'</p>'+
				'<div class="words_content" data-role="none" style="word-wrap:break-word; word-break:break-all;">'+
					data[i].comment[j].content+
				'</div>'+
				'<br/>'+
				'<div class="reply_content" style="word-wrap:break-word; word-break:break-all;white-space: normal;">'+
				'回复：“<span class="reWords">'+data[i].comment[j].reply.content+'</span>”'+
				'</div>'+
				'</div>'+
				'<p class="comment_date">'+data[i].comment[j].time+'</p>'+
				'</li>';
			_arr.push(html_);
			html = null;
		}
		if(_arr.length){
			cBox.push(_arr);
			_arr = null;
		}else{
			var x = [];
			cBox.push(x);
		}
	}
	list.html(arr_.join(""));
	var aComment = $('.comment_ul');
	for(var i = 0;i < cBox.length;i++){
		aComment.eq(i).html(cBox[i].join(""));
	}
	var oP = $('#charman');
	var oBigC = oP.find('.bigCircle');
	var oSmallC = oP.find('.smallCircle');
	oBigC.css({"left":-$(window).width()*0.1});
	oSmallC.css({"left":-$(window).width()*0.4});
	$('.applyChairman').on('tap',function(){
		if(applyChairman_token){
			applyChairman_token = false;
			var _this = $(this);
			$.mobile.loading('show');
			var _data = {};
			var _input = _this.prev();
			_data.president_id = _this.attr('apply-id');
			_data.content = _input.val();
			$.post(apply_chairman,_data,function(data){
				$.mobile.loading('hide');
				applyChairman_token = true;
				if(data.status == 200){
					_input.val("");
					alert('留言成功，主席大大会按时查看并回复！')
				}else{
					alert(data.info);
				}
			})
		}
	});
	$('.praise').on('tap',function(){
		var _this = $(this);
		var _data = {};
		_data.president_id = _this.attr('id-praise');
		$.post(praise_chairman,_data,function(data){
			alert(data.info);
			if(data.status == 200){
				var num = parseInt(_this.find('.praiseNum').html())+1;
				_this.find('.praiseNum').html(num);
			}
		});
	});
	var last = list.children('li');
	last.eq(last.length-1).css('margin-bottom',0);
	$.mobile.changePage('#charman',{
		transition:'flow'
	});
}