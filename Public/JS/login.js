/**
 * Created by truemenhale on 15/9/15.
 */
var login_token = true;
$(function(){
	$('#loginBtn').on('tap',function(){
		if(login_token){
			login_token = false;
		}else{
			return;
		}
		var _usr = {};
		_usr.username = $('#usrName').val();
		_usr.password = $('#password').val();
		if(_usr.username && _usr.password){
			$.mobile.loading('show');
			$.post(login_path,_usr,function(data){
				if(data.status == 200){
					$.mobile.loading('hide');
					login_token = true;
					$.mobile.changePage('#commentInfo',{
						transition:'flow'
					});
				}
				else{
					alert(data.info);
				}
			});
		}
	})
});