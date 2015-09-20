<?php
namespace Home\Controller;
use Think\Controller;
class LoginController extends Controller {
    public function login(){
        $input = I('post.');
        $map = [
            'openid' => $input['username'],
            'password' => md5(sha1($input['password'])),
            'role_id'  => 2
        ];
        $president = M('users');
        if($president->where($map)->count()) {
            $user = $president->where($map)->find();
            session('username', $user['username']);
            session('president_id', $user['id']);
            session('schoole_id', $user['school_id']);
            $this->ajaxReturn([
                'status' => 200,
                'info'   => '登录成功'
            ]);
        } else {
            $this->ajaxReturn([
                'status' => 403,
                'info'   => '用户名或密码错误',
            ]);
        }
    }
}