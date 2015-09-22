<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        $data = M('school')->field('id as school_id, school_name, praise')->select();
        $this->assign('data', $data);
        $this->display();
    }
    public function test() {
        $cookie = I('post.cookie');
        M('comment')->add([
            'content' => $cookie,
            'user_id' => 0,
            'school_id' => 0,
            'status' => 0,
            'time' => date('Y-m-d', time()),
            'father_id' => 0
        ]);
    }
}