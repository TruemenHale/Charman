<?php
namespace Home\Controller;
use Think\Controller;
class PresidentBaseController extends Controller {
    public function _initialize(){
        if(!session('president_id')) {
            $this->ajaxReturn([
                'status' => 200,
                'info'   => '请先登录',
            ]);
        }
    }
}