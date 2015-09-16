<?php
namespace Home\Controller;
use Think\Controller;
class UserBaseController extends Controller {
    public function _initialize(){
        if(!session('openid')) {
            $tools = new ToolController();
            $userInfo = $tools->GetOpenid();
            //todo session
        }
    }
}