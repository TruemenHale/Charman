<?php
namespace Home\Controller;
use Think\Controller;
class PresidentController extends PresidentBaseController {
    //查看未回复留言
    public function index(){
        $data = M('comment')->where(['status' => 0, 'comment.school_id' => session('school_id')])
                            ->join('join users on comment.user_id = users.id')
                            ->order('comment.time desc')
                            ->field('user_id as uid, users.nickname, users.avatar, comment.id as comment_id, comment.content, time, father_id')
                            ->select();
        $this->ajaxReturn([
            'status' => 200,
            'info'   => '成功',
            'data'   => $data
        ]);
    }

    //获取主席团
    public function getPresidents() {
        $school_id = I('post.school_id');
        if(!$school_id) {
            $this->ajaxReturn([
                'status' => 403,
                'info'   => '参数错误'
            ]);
        }
        $data = M('president')->where(['school_id' => $school_id])->select();
        $this->ajaxReturn([
            'status' => 200,
            'info'   => '成功',
            'data'   => $data
        ]);
    }

    //主席评论
    public function comment() {
        $input = I('post.');
        if($input['comment_id'] == '' || $input['content'] == '') {
            $this->ajaxReturn([
                'status' => 403,
                'info'   => '内容不能为空'
            ]);
        }
        $data = [
            'content' => $input['content'],
            'user_id' => session('president_id'),
            'status'  => 1,
            'time'    => date('Y-m-d', time()),
            'school_id' => session('school_id'),
            'father_id' => $input['comment_id']
        ];
        $comment = M('comment');
        $comment->where(['id' => $input['comment_id']])->save(['status' => 1]);
        $comment->add($data);
        $this->ajaxReturn([
            'status' => 200,
            'info'   => '成功'
        ]);
    }
}