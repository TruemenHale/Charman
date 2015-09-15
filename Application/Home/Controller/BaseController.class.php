<?php
namespace Home\Controller;
use Think\Controller;
class BaseController extends Controller {
    public function _initialize(){
        if(!session('presdent_id')) {
            return redirect('Index/index');
        }
    }
}