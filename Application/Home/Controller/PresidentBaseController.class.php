<?php
namespace Home\Controller;
use Think\Controller;
class PresidentBaseController extends Controller {
    public function _initialize(){
        if(!session('presdent_id')) {
            return redirect('Index/index');
        }
    }
}