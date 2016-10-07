<?php

namespace Admin\Controller;
use Think\Controller;

class PresidentController extends Controller {

    public function _initialize(){
        if (!session('login_status')) {
            $this->redirect('Login/index');
        }
    }

    public function index () {

        $count = M('president')->count();

        $list = M('president')->join('school ON school.id = president.school_id')->field('president.id,school_name,president,posization')->page($_GET['p'].',20')->select();

        $page = new \Think\Page($count, 20);
        $show = $page->show();

        $this->assign([
            'title' => 'President',
            'list'  => $list,
            'page'  => $show
        ]);
        $this->display();
    }

    public function add () {
        if (IS_POST) {
            $data = I('post.');
            if (empty($data ['president']) || empty($data ['introduce']) || empty($data ['posization'])) {
                $this->error('请务必将内容填写完整！');
            }

            $setting=C('UPLOAD_SITEIMG_QINIU');
            $Upload = new \Think\Upload($setting);
            $info = $Upload->upload();
            if(!$info) {
                var_dump($Upload->getError());
//            $this->error('上传失败');
            }
            if($info['pic']['url']) {
                $data['pic'] = $info['pic']['url'].'-tinyq30';
            } else {
                $data['pic'] = '';
            }

            M('president')->add($data);
            $this->success('添加成功！');

        } else {
            $school = M('school')->select();
            $this->assign([
                'school' => $school,
                'title'  => '主席添加'
            ]);
            $this->display();
        }
    }

    public function edit ($id) {
        if (IS_POST) {
            $data = I('post.');
            if (empty($data ['president']) || empty($data ['introduce']) || empty($data ['posization'])) {
                $this->error('请务必将内容填写完整！');
            }

            $setting=C('UPLOAD_SITEIMG_QINIU');
            $Upload = new \Think\Upload($setting);
            $info = $Upload->upload();

            if($info['pic']['url']) {
                $data['pic'] = $info['pic']['url'].'-tinyq30';
            }

            M('president')->where("id = '$id'")->save($data);
            $this->success('添加成功！');
        } else {
            $info = M('president')->where("id = '$id'")->find();
            if ($info) {
                $school = M('school')->select();
                $this->assign([
                    'info'   => $info,
                    'title'  => '主席编辑',
                    'school' => $school
                ]);
                $this->display();
            } else {
                $this->error('该ID不存在或者已被删除！');
            }
        }
    }

    public function delete ($id) {
        M('president')->where("id = '$id'")->delete();
        $this->success("删除成功！");
    }

}