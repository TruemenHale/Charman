<?php
namespace Home\Controller;
use Think\Controller;
//todo UserBaseController
class IndexController extends Controller {
    public function index(){
        $data = M('school')->where(['status' => 1])->field('id as school_id, school_name, praise')->select();
        $this->assign('data', $data);
        $this->display();
    }
//    public function editdata(){
//        $a = 'ancong.jpg,bianxiaowei.png,caijibin.jpg,caijunyao.jpg,caomengyuan.jpg,changjiangshifanxueyuan.jpg,chengyujie.png,chenhao.jpg,chenhong.jpg,chenpeng.JPG,chenxi.jpg,chenxiao.png,chenyunhua.jpg,chenzhihui.png,chian.png,chongqingcaijingzhiye.JPG,chongqingchengshiguanlizhiye.png,chongqingdianligaodengzhuankexuexiao.png,chongqingdianzigongchengzhiyexueyuan.png,chongqingdiershifanxueyuan.jpg,chongqinggongchengxueyuan.jpg,chongqinggonggongyunshuzhiyexueyuan.jpg,chongqinggongmaozhiyejishuxueyuan.JPG,chongqinggongshangdaxuerongzhixueyuan.JPG,chongqinggongshangzhiye.jpg,chongqinggongyezhiyejishuxueyuan.png,chongqinghangtianzhiyejishuxueyuan.png,chongqingjiaotongzhiyexueyuan.JPG,chongqingjidianzhiyejishuxueyuan.png,chongqingjingchaxueyuan.JPG,chongqinglvyouzhiyexueyuan.jpeg,chongqingqinggongzhiyexueyuan.jpg,chongqingsanxiagaodengzhuankexuexiao.jpg,chongqingsanxiaxueyuan.JPG,chongqingshifandaxue.png,chongqingshifandaxueshewaishangmaoxueyuan.JPG,chongqingxinxijishuzhiyexueyuan.JPG,chongqingyikedaxue.png,chongqingyoudiandaxue.jpg,chongqingyoudiandaxueyidongxueyuan.JPG,chongqingyouershifangaodengzhuankexuexiao.jpg,chunlikun.JPG,dengmeiqing.jpg,dengshuai.JPG,dongmengying.jpg,douyilin.png,duanjiali.jpg,duanminting.jpg,dumeicai.jpg,fengyanqing.png,fudexi.png,fuxueling.jpg,ganlin.jpg,gaodaiqing.png,gaojinbei.JPG,gaomingze.jpg,gongmao.jpg,guimei.png,guoqiuxia.png,guoxinyi.png,guoyongliang.png,hanxiaoyu.png,heliangshuang.JPG,hesheng.jpg,hexinru.jpg,huangguocan.jpg,huangjiawei.jpg,huangxiao.jpg,hubingbing.png,hubingqing.png,huhaiyan.JPG,hujunan.jpg,hurui.jpg,huyawen.jpg,huzhicheng.jpg,jianchuanyi.png,jianghao.jpg,jiangruicai.jpg,jiangwei.jpg,kanyang.JPG,laiqiu.JPG,leiqian.jpg,liangjiani.jpg,liangyanqiu.jpg,liaoshan.jpg,liaozefeng.png,lihong.png,lijia.png,lijian.jpg,lijinze.jpg,likexing.jpg,lilin.png,lipengcheng.jpg,lishuang.jpg,lisihao.png,liufutai.jpg,liugang.jpg,liujiang.png,liujiaxiu.png,liulin.png,liulingzhi.png,liuqing.png,liuyanxin.jpg,liuyiming.png,liuyu.jpg,liuyueting.png,liuyujie.jpg,liuyulong.png,lixin.png,liyang.JPG,luohan.png,luohongshneg.jpg,luolin.png,luozhongjun.jpg,muchengyang.png,ningyuru.jpg,pangqian.png,panlumin.jpg,pengjun.JPG,pengzeng.png,qingchunsong.jpg,qinlang.jpg,qinxiaofeng.png,renguowen.JPG,shaoluyao.jpg,shaoyuan.JPG,shenjunliang.jpg,shiwenshu.jpg,sichuanwaiguoyudaxue.jpg,songhaiping.png,songwanrong.jpg,sunruijie.png,tangdaozhen.jpg,tanqianxia.png,tanqianyin.png,tanshuqin.jpg,tanyaoyao.jpg,tanyoutao.JPG,taoheling.png,tianlan.jpg,tukesong.jpg,wangdapeng.png,wangjiangyin.png,wangjunxiang.jpg,wanglei.JPG,wangliwei.jpg,wangxin.jpg,wangxinzi.jpg,wangyang.jpg,wangyuxin.jpg,weifeng.png,wenyunling.jpg,wudaimin.JPG,wudingyue.png,wujianyu.jpg,wupeng.jpg,wushumei.png,wuxia.jpg,wuyong.png,xiajingsong.JPG,xiangheng.png,xiangruyi.png,xiaobiya.jpg,xiaoqiaowei.jpg,xiaoxiao.jpg,xiaxiaohan.JPG,xieyuwei.jpg,xinandaxue.png,xinanzhengfa.jpg,xionghuangjiachen.jpg,xuanlinyun.jpg,xubo.png,xulin.jpg,xuruoman.png,xutaochen.jpg,xuyishan.jpg,yangen.jpg,yangrui.png,yangyi.png,yinyifan.jpg,yuanfang.png,yufuqiang.JPG,yuhuayan.png,yushihua.jpg,zengpan.jpg,zengwanni.png,zhangbeili.jpg,zhangfan.jpg,zhangheng.png,zhangqing.jpg,zhangruifeng.png,zhangxiao.png,zhangxiaolin.jpg,zhangxinghui.png,zhangxueying.jpg,zhangyifan.JPG,zhangzhongwei.jpg,zhaotianliang.png,zhaoxuejiao.png,zhaoying.JPG,zhengbowen.jpg,zhengsisi.jpg,zhongmingjing.jpg,zhouganping.jpg,zhouguangshuang.jpg,zhoujinshan.jpg,zhoutian.jpg,zhurui.png,zoujinghui.JPG';
//        $arr = explode(',', $a);
//        foreach($arr as $v) {
//            $len = strlen($v)-4;
//            $nv = substr($v, 0, $len);
//            $new_data[] = $nv;
//        }
//        $president = M('president');
//        $count = $president->count();
//        for($i = 1; $i <= $count; $i++) {
//            $data = $president->where(['id' => $i])->find();
//            $key = array_search($data['pinyin'], $new_data);
//            if($key) {
//                $president->where(['id' => $data['id']])->save(['pic' => 'http://77uc6m.com1.z0.glb.clouddn.com/photo/photo/'.$arr[$key].'-tinyq30']);
//            }
//        }
//        echo 'ok';
//    }
//    public function test() {
//        $cookie = I('post.cookie');
//        M('comment')->add([
//            'content' => $cookie,
//            'user_id' => 0,
//            'school_id' => 0,
//            'status' => 0,
//            'time' => date('Y-m-d', time()),
//            'father_id' => 0
//        ]);
//    }
//    public function ripage() {
//        $school = M('school')->select();
//        $this->assign('school', $school);
//        $this->display();
//    }
//    public function ri() {
//        $data = I('post.');
//        foreach($data as $v) {
//            if(empty($v)) {
//                $this->error('no!');
//            }
//        }
//        $data['praise'] = 0;
//        M('president')->add($data);
//        $this->success('ok');
//    }
}