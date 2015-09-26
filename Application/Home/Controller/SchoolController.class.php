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

    //获取学校详情
    public function detailSchool() {
        $school_id = I('post.school_id');
        $data = M('school')->where(['id' => $school_id])->field('school_introduce, praise as school_praise, school_pic')->find();
        $this->ajaxReturn([
            'status' => 200,
            'info'   => '成功',
            'data'   => $data
        ]);
    }

    //点赞
    public function praise() {
        $school_id = I('post.school_id');
        if($school_id == '') {
            $this->ajaxReturn([
                'status' => 403,
                'info'   => '数据错误'
            ]);
        }
        $time = date('Y-m-d', time());
        $map = [
            'user_id' => session('uid'),
            'school_id' => $school_id,
            'time' => $time
        ];
        $praise = M('user_praise');
        if($praise->where($map)->count()) {
            $this->ajaxReturn([
                'status' => 403,
                'info'   => '您今天已赞过该学校'
            ]);
        }
        $praise->add($map);
        $m = ['id' => $school_id];
        M('school')->where($m)->setInc('praise');
        $this->ajaxReturn([
            'status' => 200,
            'info'   => '成功'
        ]);
    }
}