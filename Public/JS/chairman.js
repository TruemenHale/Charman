/**
 * Created by truemenhale on 15/9/21.
 */
function viewChariman(data){
	var list = $('.comment_holder');
	var arr_ = [];
	var cBox = [];
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
		'<i style="font-family: iconfont;color: #ff5148;font-size: 16px">&#xe6d1;</i>赏赞'+ '<span class="praiseNum">'+data[i].praise+'</span>'+
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
		'<ul data-role="listview" data-inset="true" class="comment_list">'+
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
				'<p class="ui-li-aside comment_date">'+data[i].comment[j].time+'</p>'+
				'</li>';
				_arr.push(html_);
		}
		console.log(_arr);
		cBox.push(_arr);
	}
	console.log(cBox.length);
	list.html(arr_.join(""));
	var aCommentList = $('.comment_list');
	for(var i = 0;i < cBox.length;i++){
		aCommentList.eq(i).html(cBox[i].join(""));
	}
	var oP = $('#charman');
	var oBigC = oP.find('.bigCircle');
	var oSmallC = oP.find('.smallCircle');
	oBigC.css({"left":-$(window).width()*0.1});
	oSmallC.css({"left":-$(window).width()*0.4});
	$.mobile.changePage('#charman',{
		transition:'flow'
	})
}
//'<li>'+
//'<div class="comment_a">'+
//
//'</div>'+
//'<div class="usrBack">'+
//'<p class="commenter">'+
//'</p>'+
//'<div class="words_content" data-role="none" style="word-wrap:break-word; word-break:break-all;">'+
//'</div>'+
//'<br/>'+
//'<div class="reply_content" style="word-wrap:break-word; word-break:break-all;white-space: normal;">'+
//'回复：“<span class="reWords">'+'</span>”'+
//'</div>'+
//'</div>'+
//'<p class="ui-li-aside comment_date">'+'</p>'+
//'</li>'+