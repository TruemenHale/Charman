<?php
namespace Home\Controller;
use Think\Controller;
class UserBaseController extends Controller {
    public function _initialize(){
        if(!session('uid')) {
            $tools = new ToolController();
            $userInfo = $tools->GetOpenid();
            if($userInfo) {
                $this->error('未知错误!');
            }
            $users = M('users');
            if($users->where(['openid' => $userInfo['openid']])->count()) {
                $uid = $users->where(['openid' => $userInfo['openid']])->getField('id');
                session('uid', $uid);
            }
        }
    }
}