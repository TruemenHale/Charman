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
				$.mobile.loading('hide');
				login_token = true;
				if(data.status == 200){
					$.post(get_unreply,1,function(data){
						$.mobile.loading('hide');
						if(data.status == 200){
							replyView(data.data);
						}
						else{
							alert(data.info);
						}
					});
				}else{
					alert(data.info);
				}
			});
		}
	})
});