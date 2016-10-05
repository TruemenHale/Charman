<?php
namespace Admin\Controller;
use Think\Controller;

class IndexController extends Controller {
    public function index () {
        if (!session('login_status')) {
            $this->redirect('Login/index');
        }
        $this->assign([
            'title' => 'Index'
        ]);
        $this->display();
    }
}