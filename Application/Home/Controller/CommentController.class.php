<?php
namespace Home\Controller;
use Think\Controller;
class CommentController extends Controller {

    //获取评论
    public function getComment() {
        $input = I('post.');
        if(!is_numeric($input['school_id']) ) {
            $this->ajaxReturn([
                'status' => 403,
                'info'   => '参数错误!'
            ]);
        }
        $page = $input['page']>0?$input['page']:1;
        $data = M('comment')->where(['father_id' => 0, 'school_id' => $input['school_id'], 'status' => 1])
                            ->page($page, 4)
                            ->join('join users on comment.user_id = users.id')
                            ->order('comment.time desc')
                            ->field('users.nickname, users.avatar, comment.id as comment_id, comment.content, time')
                            ->select();
        foreach ($data as &$v) {
            $v['reply'] = M('comment')->where(['father_id' => $v['comment_id'], 'school_id' => $input['school_id'], 'status' => 1])
                                        ->join('join users on comment.user_id = users.id')
                                        ->field('users.nickname, users.avatar, comment.content, time')
                                        ->select();
        }
        $this->ajaxReturn([
            'status' => 200,
            'info'   => '成功',
            'data'   => $data
        ]);
    }

    //发表评论
    public function comment() {
        $input = I('post.');
        if(mb_strlen($input['content'], 'utf8') > 300) {
            $this->ajaxReturn([
                'status' => 403,
                'info'   => '内容过长'
            ]);
        }
        $result = $this->checkContent($input);
        if(!$result) {
            $this->ajaxReturn([
                'status' => 403,
                'info'   => '参数错误!'
            ]);
        }
        M('comment')->add($result);
        $this->ajaxReturn([
            'status' => 200,
            'info'   => '成功'
        ]);
    }

    //检查数据
    private function checkContent($input) {
        if(!is_numeric($input['father_id'])) {
            return false;
        }
        if($input['content'] == '') {
            return false;
        }
        $data = [
            'father_id' => $input['father_id'],
            'content'   => $input['content'],
            'user_id'   => session('uid'),
            'school_id' => session('school_id'),
            'time'      => date('Y-m-d', time())
        ];
        return $data;
    }
}