<?php

namespace Admin\Controller;
use Think\Controller;
use Think\Model;

class PresidentController extends Controller {

    public function index () {

        $count = M('president')->count();

        $list = M('president')->join('school ON school.id = president.school_id')->field('school_name,president,posization')->page($_GET['p'].',20')->select();

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
                'school' => $school
            ]);
            $this->display();
        }
    }

    public function edit () {

    }

    public function delete () {

    }

}