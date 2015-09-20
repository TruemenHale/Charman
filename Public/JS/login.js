/**
 * Created by truemenhale on 15/9/15.
 */
$(function(){
	$('#loginBtn').on('tap',function(){
		$.mobile.loading('show');
		var _usr = {};
		_usr.usrname = $('#usrName');
		_usr.password = $('#password');
		_usr = JSON.stringify(_usr);
		$.post(login_path,_usr,function(data){
			if(data.status == 200){
				$.mobile.loading('hide');
				$.mobile.changePage('#');
			}
			else if(data.status == 403){
				alert('用户名或密码错误！');
			}
			else{
				alert('服务器连接失败！');
			}
		});
	})
});