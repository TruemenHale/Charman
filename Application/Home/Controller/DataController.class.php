<?php
namespace Home\Controller;
use Think\Controller;
class DataController extends Controller {

    public function index() {
        $school = M('school')->select();
        $this->assign('school', $school);
        $this->display();
    }

    public function school() {
        $school = M('school')->select();
        $this->assign('school', $school);
        $this->display();
    }

    public function getData() {
        $data = I('post.');
        $setting=C('UPLOAD_SITEIMG_QINIU');
        $Upload = new \Think\Upload($setting);
        $info = $Upload->upload();
        if(!$info) {
            var_dump($Upload->getError());
            $this->error('上传失败');
        }
        $data['pic'] = $info['pic']['url'].'-tinyq30';
        $data['praise'] = 0;
        M('president')->add($data);
        $this->success('ok');
    }

    public function getSchool() {
        $input = I('post.');
        $setting=C('UPLOAD_SITEIMG_QINIU');
        $Upload = new \Think\Upload($setting);
        $info = $Upload->upload();
        if(!$info) {
            var_dump($Upload->getError());
            $this->error('上传失败');
        }
        $data['school_pic'] = $info['pic']['url'].'-tinyq30';
        $data['school_introduce'] = $input['school_introduce'];
        $data['praise'] = 0;
        M('school')->where(['id' => $input['school_id']])->save($data);
        $this->success('ok');
    }
}