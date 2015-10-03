<?php
namespace Home\Controller;
use Think\Controller;
class UserBaseController extends Controller {
    public function _initialize(){
//        $session_uid = session('uid');
//        if($session_uid == null || $session_uid == '') {
            $tools = new ToolController();
            $userInfo = $tools->GetOpenid();
            if(!$userInfo) {
                $this->error('未知错误!');
            }
            $users = M('users');
            if($users->where(['openid' => $userInfo['openid']])->count()) {
                $uid = $users->where(['openid' => $userInfo['openid']])->getField('id');
                session('uid', $uid);
            } else {
                $data = [
                    'openid' => $userInfo['openid'],
                    'nickname' => $userInfo['nickname'],
                    'avatar' => $userInfo['headimgurl'],//todo
                    'role_id' => 1,
                    'password' => ''
                ];
                $users->add($data);
                $uid = $users->where(['openid' => $userInfo['openid']])->getField('id');
                session('uid', $uid);
            }
//        }
    }
}