/**
 * Created by truemenhale on 15/9/21.
 */
var applyChairman_token = true;
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
	for(var i = 0;i<data.length;i++){
		var _html = '<li>'+
			'<div class="cPhoto" style="background-image: url("'+data[i].pic+'")">'+
		'</div>'+
		'<p class="cTitle">'+
		'<span class="Cname">'+
				data[i].president+
			'</span>&nbsp;'+
	'<span class="position">'+data[i].posization+'</span>'+
		'<span class="praise">'+
		'<i style="font-family: iconfont;color: #ff5148;font-size: 16px;margin-right: 5px">&#xe6d1;</i>赏赞'+ '<span class="praiseNum">'+data[i].praise+'</span>'+
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
		for(var j = 0;j < data[i].comment.length;j++){
			var _arr = [];
			var html_ =
				'<li>'+
				'<div class="comment_a" style="background-image: url("'+data[i].comment[j].avatar+'")">'+

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
		}
		cBox.push(_arr);
	}
	list.html(arr_.join(""));
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
			_data.president_id = _this.attr('apply-id');
			_data.content = _this.sibling('.wordsContent').val();
			$.post(apply_chairman,_data,function(data){
				$.mobile.loading('hide');
				applyChairman_token = true;
				if(data.status == 200){
					alert('留言成功，主席大大会按时查看并回复！')
				}else{
					alert(data.info);
				}
			})
		}
	});
	var aComment = $('.comment_ul');
	for(var i = 0;i < cBox.length;i++){
		aComment.eq(i).html(cBox[i].join(""));
	}
	$.mobile.changePage('#charman',{
		transition:'flow'
	});
}