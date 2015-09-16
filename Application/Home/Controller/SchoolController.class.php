<?php
namespace Home\Controller;
use Think\Controller;
class SchoolController extends Controller {
    public function index(){
        $this->display();
    }

    //获取学校列表
    public function getSchool(){
        $data = M('school')->select();
        $this->ajaxReturn([
            'status' => 200,
            'info'   => '成功',
            'data'   => $data
        ]);
    }
}