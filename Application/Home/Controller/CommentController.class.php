<?php
namespace Home\Controller;
use Think\Controller;
class CommentController extends Controller {

    //获取评论

    //发表评论
    public function comment(){
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
    private function checkContent($input){
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
            'time'      => date('Y-m-d H:i:s', time())
        ];
        return $data;
    }
}