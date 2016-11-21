<?php
namespace Admin\Controller;
use Think\Controller;

class IndexController extends Controller {
    public function index () {
        if (!session('login_status')) {
            $this->redirect('Login/index');
        }
        $this->assign([
            'title' => 'Index'
        ]);
        $this->display();
    }

    public function changePass () {
        $str = 'abcdefghijklnmopqrstwvuxyz1234567890ABCDEFGHIJKLNMOPQRSTWVUXYZ';

        for ($i = 63;$i < 82;$i++) {
            $string='';
            for($j=0;$j<6;$j++){
                $num = mt_rand(0,61);
                $string .= $str[$num];
            }
            M('users')->where("id = '$i'")->save([
                'password' => md5(sha1($string))
            ]);
            echo "$i : $string\n";
        }
    }
}