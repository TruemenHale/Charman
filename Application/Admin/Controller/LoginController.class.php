<?php
namespace Admin\Controller;
use Think\Cache\Driver\Memcache;
use Think\Controller;

class LoginController extends Controller {
    public function index(){
        if (IS_POST) {
            $info = I('post.');
            $map = [
                'username' => $info ['username'],
                'password' => sha1(md5($info['password']).$info['username'])
            ];
            $res = M('admin')->where($map)->find();
            if ($res) {
                session('login_status', 1);
                session('login_user', $res);
                $this->success('登陆成功！', U('Index/index'));
            } else {
                $this->error('用户名或密码错误！登陆失败！');
            }
        } else {
            $this->display();
        }
    }

    public function logout () {
        session('login_status', null);
        session('login_user', null);
    }


}