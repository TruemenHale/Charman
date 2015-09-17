<?php
namespace Home\Controller;
use Think\Controller;
class IndexController extends Controller {
    public function index(){
        $data = M('school')->field('school_name')->select();
        $this->assign('data', $data);
        $this->display();
    }
}