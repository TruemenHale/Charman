<?php
namespace Home\Controller;
use Think\Controller;
class PresidentController extends PresidentBaseController {
    //查看未回复留言
    public function index(){
        $data['all'] = M('comment')->where(['status' => 0, 'comment.school_id' => session('school_id')])
                            ->join('join users on comment.user_id = users.id')
                            ->order('comment.time desc')
                            ->field('user_id as uid, users.nickname, users.avatar, comment.id as comment_id, comment.content, time, father_id')
                            ->select();
        $data['seduce'] = $this->seduceIndex();
        $this->ajaxReturn([
            'status' => 200,
            'info'   => '成功',
            'data'   => $data
        ]);
    }

    //查看未回复勾搭
    public function seduceIndex(){
        return $data = M('user_president')->where(['status' => 0, 'user_president.school_id' => session('school_id')])
                        ->join('join users on user_president.user_id = users.id')
                        ->join('join president on user_president.president_id = president.id')
                        ->order('user_president.time desc')
                        ->field('president.president as president_name, user_id as uid, users.nickname, users.avatar, user_president.id as comment_id, user_president.content, time')
                        ->select();
    }

    //回复勾搭
    public function replySeduce(){
        $content = I('post.content');
        $comment_id = I('post.comment_id');
        $data = [
            'user_id' => session('president_id'),
            'content' => $content,
            'time'    => date('Y-m-d', time()),
            'president_id' => 0,
            'school_id' => session('school_id'),
            'father_id' => $comment_id,
            'status'  => 1
        ];
        $user_president = M('user_president');
        $user_president->where(['id' => $comment_id])->save(['status' => 1]);
        $user_president->add($data);
        $this->ajaxReturn([
            'status' => 200,
            'info'   => '成功'
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
        if(!is_numeric($input['comment_id'])){
            $this->ajaxReturn([
                'status' => 403,
                'info'   => '非法参数'
            ]);
        }
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