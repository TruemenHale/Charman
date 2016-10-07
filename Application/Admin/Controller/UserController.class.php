<?php

namespace Admin\Controller;
use Think\Cache\Driver\Memcache;
use Think\Controller;

class UserController extends Controller {
    public function _initialize(){
        if (!session('login_status')) {
            $this->redirect('Login/index');
        }
    }

    public function index () {
        redirect('password');
    }

    public function password () {
        if (IS_POST) {
            $info = I('post.');
            $res = M('admin')->where('id = 1')->find();
            if ($res ['password'] == $this->trans($info ['oldPass'])) {
                if ($info ['newPass'] == $info ['confirmPass'] && $info ['newPass'] != '') {
                    M('admin')->where('id = 1')->save([
                        'password' => $this->trans($info ['newPass'])
                    ]);
                    $this->success('密码修改成功！');
                } else {
                    $this->error('两次密码不相同！');
                }
            } else {
                $this->error('原密码错误！');
            }
        } else {
            $this->assign([
                'title' => '修改密码'
            ]);
            $this->display();
        }
    }

    private function trans ($pwd) {
        return sha1(md5($pwd).'admin');
    }
}