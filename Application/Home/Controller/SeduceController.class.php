<?php
namespace Home\Controller;
use Think\Controller;
class SeduceController extends Controller {

    //勾搭首页
    public function index() {
        $school_id = I('post.school_id');
        $data = M('president')->where(['school_id' => $school_id])->field('id as president_id, president, introduce, pic, posization, praise')->select();
        $comment = M('user_president');
        foreach ($data as &$v) {
            $v['comment'] = $comment
                            ->where(['status' => 1, 'president_id' => $v['president_id'], 'father_id' => 0])
                            ->join('join users on user_president.user_id = users.id')
                            ->field('users.nickname, users.avatar, user_president.content, user_president.time, user_president.id as comment_id')
                            ->limit(4)
                            ->select();
            foreach($v['comment'] as &$va) {
                $va['reply'] = $comment
                    ->where(['status' => 1, 'president_id' => 0, 'father_id' => $va['comment_id']])
                    ->field('user_president.content, user_president.time')
                    ->find();
            }

        }
        $this->ajaxReturn([
            'status' => 200,
            'info'   => '成功',
            'data'   => $data
        ]);
    }

    //发布勾搭
    public function comment() {
        $content = I('post.content');
        $president_id = I('post.president_id');
        $school_id = M('president')->where(['id' => $president_id])->getField('school_id');
        if($content == '' || !is_numeric($president_id)) {
            $this->ajaxReturn([
                'status' => 403,
                'info'   => '参数错误'
            ]);
        }
        $data = [
            'user_id' => session('uid'),
            'content' => $content,
            'time'    => date('Y-m-d', time()),
            'president_id' => $president_id,
            'school_id' => $school_id,
            'father_id' => 0,
            'status'  => 0
        ];
        M('user_president')->add($data);
        $this->ajaxReturn([
            'status' => 200,
            'info'   => '成功'
        ]);
    }

    //点赞
    public function praise() {
        $president_id = I('post.president_id');
        if($president_id == '') {
            $this->ajaxReturn([
                'status' => 403,
                'info'   => '数据错误'
            ]);
        }
        $time = date('Y-m-d', time());
        $map = [
            'user_id' => session('uid'),
            'president_id' => $president_id,
            'time' => $time
        ];
        $praise = M('president_praise');
        if($praise->where($map)->count()) {
            $this->ajaxReturn([
                'status' => 403,
                'info'   => '您今天已赞过主席'
            ]);
        }
        $praise->add($map);
        M('president')->where(['id' => $president_id])->setInc('praise');
        $this->ajaxReturn([
            'status' => 200,
            'info'   => '成功'
        ]);
    }
}