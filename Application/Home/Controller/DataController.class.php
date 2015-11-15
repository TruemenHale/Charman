<?php
namespace Home\Controller;
use Think\Controller;
use Think\Model;

class DataController extends Controller {

    public function index() {
        $school = M('school')->where(['status' => 1])->select();
        $this->assign('school', $school);
        $this->display();
    }

    public function school() {
        $school = M('school')->where(['status' => 1])->select();
        $model = new Model();
        $schoolData = $model->query('SELECT school_name, praise, count(*) as comment from school join comment on school.id = comment.school_id  GROUP BY school_id');
        $this->assign('school', $school);
        $this->assign('schooldata', $schoolData);
        $this->display();
    }

    public function editPresident() {
        $president = M('president')->join('join school on president.school_id = school.id')->field('president, president.id, school_name')->select();
        $model = new Model();
        $presidentData = $model->query('SELECT president, praise, count(*) as comment from president join user_president on president.id = user_president.president_id GROUP BY president_id');
        $this->assign('president', $president);
        $this->assign('presidentdata', $presidentData);
        $this->display();
    }

    public function delpresident() {
        $data = I('post.');
        M('president')->where(['id' => $data['id']])->delete();
        $this->success('ok');
    }

    public function president() {
        $data = I('post.');
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

        $data['praise'] = 0;
        M('president')->where(['id' => $data['id']])->save($data);
        $this->success('ok');
    }

    public function getData() {
        $data = I('post.');
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
//            $this->error('上传失败');
        }
        if($info['pic']['url']) {
            $data['school_pic'] = $info['pic']['url'].'?imageView2/0/w/1400';
        } else {
            $data['school_pic'] = '';
        }

        $data['school_introduce'] = $input['school_introduce'];
        $data['praise'] = 0;
        M('school')->where(['id' => $input['school_id']])->save($data);
        $this->success('ok');
    }
}