/**
 * Created by truemenhale on 15/9/15.
 */
$(function(){
	$('#loginBtn').on('tap',function(){
		var _usr = {};
		_usr.username = $('#usrName').val();
		_usr.password = $('#password').val();
		if(_usr.username && _usr.password){
			$.mobile.loading('show');
			$.post(login_path,_usr,function(data){
				if(data.status == 200){
					$.mobile.loading('hide');
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