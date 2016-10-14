<?php

namespace Admin\Controller;
use Think\Controller;

class SchoolController extends Controller {

    public function index () {
        $count = M('school')->count();

        $list = M('school')->page($_GET['p'].',20')->select();

        $page = new \Think\Page($count, 20);
        $show = $page->show();

        $this->assign([
            'title' => 'School',
            'list'  => $list,
            'page'  => $show
        ]);
        $this->display();
    }

    public function edit ($id) {
        if (IS_POST) {
            $data = I('post.');
            if (empty($data ['school_name']) || empty($data ['school_introduce'])) {
                $this->error('请务必将内容填写完整！');
            }

            $setting=C('UPLOAD_SITEIMG_QINIU');
            $Upload = new \Think\Upload($setting);
            $info = $Upload->upload();

            if($info['school_pic']['url']) {
                $data['school_pic'] = $info['school_pic']['url'].'?imageView2/0/w/1400';
            }

            M('school')->where("id = '$id'")->save($data);
            $this->success('修改成功！');
        } else {
            $info = M('school')->where("id = '$id'")->find();
            if ($info) {
                $this->assign([
                    'info'  => $info,
                    'title' => '学校编辑'
                ]);
                $this->display();
            } else {
                $this->error('这个ID不存在或者已被删除！');
            }

        }
    }

}