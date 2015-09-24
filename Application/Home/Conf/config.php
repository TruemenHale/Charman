<?php
return array(
	//'配置项'=>'配置值'
    'UPLOAD_SITEIMG_QINIU' => array (
        'maxSize' => 10240000000,//文件大小
        'rootPath' => './',
        'saveName' => array ('uniqid', ''),
        'driver' => 'Qiniu',
        'exts' => array('jpg', 'jpeg', 'JPG', 'png', 'PNG'),
        'driverConfig' => array (
            'secrectKey' => 'uFey5CF4lSC-ZGCteJeJNImm74v9vBFarIuNBfU3',
            'accessKey' => 'TTU6xupHknOIxrMD_ak_QWj5y-eydJrSw10hEoYt',
            'domain' => 'redrock.u.qiniudn.com',
            'bucket' => 'redrock',
        )
    )
);