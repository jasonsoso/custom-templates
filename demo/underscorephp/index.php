<?php

require '/libs/Smarty.class.php';
require 'IndexTemple.php';

$smarty = new Smarty;

//$smarty->force_compile = true;
$smarty->debugging = false;
$smarty->caching = true;
$smarty->cache_lifetime = 120;


$json = '{"page":{"title":"I淘你Jason","hasMargin":"1","backgroundColor":"#f8f8f8"},"PModules":[{"id":9,"type":9,"draggable":false,"sort":0,"content":{"showType":"1","dataset":[{"link":"/User/dist_apply","linkType":8,"showtitle":"广告1","title":"分销申请","subtitle":"女装","pic":"http://mp.wxfenxiao.com/PublicMob/images/mob/31banner01.jpg"},{"link":"/Shop/index","linkType":6,"showtitle":"广告2","title":"","subtitle":"男装","pic":"http://mp.wxfenxiao.com/PublicMob/images/mob/31banner01.jpg"},{"link":"/Shop/index","linkType":6,"showtitle":"广告3","title":"","subtitle":"童装","pic":"http://mp.wxfenxiao.com/PublicMob/images/mob/31banner01.jpg"}],"modulePadding":5},"dom_conitem":null,"dom_ctrl":null,"ue":null}],"LModules":[{"id":10,"type":8,"draggable":true,"sort":0,"content":{"dataset":[{"link":"/Shop/index","linkType":6,"showtitle":"优惠券1","title":"","pic":"http://mp.wxfenxiao.com/PublicMob/images/mob/31nev01.jpg"},{"link":"/Shop/index","linkType":6,"showtitle":"优惠券2","title":"","pic":"http://mp.wxfenxiao.com/PublicMob/images/mob/31nev02.jpg"}],"modulePadding":20,"layout":"2","layout1_style":"1"},"dom_conitem":null,"dom_ctrl":null,"ue":null},{"id":11,"type":8,"draggable":true,"sort":1,"content":{"dataset":[{"link":"/Shop/index","linkType":6,"showtitle":"尿片1","title":"","pic":"http://mp.wxfenxiao.com/PublicMob/images/mob/31sp01.jpg"},{"link":"/Shop/index","linkType":6,"showtitle":"尿片2","title":"","pic":"http://mp.wxfenxiao.com/PublicMob/images/mob/31sp02.jpg"}],"modulePadding":5,"layout":"2","layout1_style":"1"},"dom_conitem":null,"dom_ctrl":null,"ue":null},{"id":12,"type":9,"draggable":true,"sort":2,"content":{"showType":2,"dataset":[{"link":"/Shop/index","linkType":6,"showtitle":"不知道什么模块","title":"","subtitle":"女装","pic":"http://mp.wxfenxiao.com/PublicMob/images/mob/31banner02.jpg"}],"modulePadding":20,"margin":10},"dom_conitem":null,"dom_ctrl":null,"ue":null},{"id":13,"type":8,"draggable":true,"sort":3,"content":{"dataset":[{"link":"/Shop/index","linkType":6,"showtitle":"品牌周1","title":"","pic":"http://mp.wxfenxiao.com/PublicMob/images/mob/31sp03.jpg"},{"link":"/Shop/index","linkType":6,"showtitle":"品牌周2","title":"","pic":"http://mp.wxfenxiao.com/PublicMob/images/mob/31sp04.jpg"}],"modulePadding":5},"dom_conitem":null,"dom_ctrl":null,"ue":null},{"id":14,"type":4,"draggable":true,"sort":4,"content":{"layout":"1","showPrice":true,"showIco":true,"showName":"1","goodslist":[],"sale_num":5,"goodstyle":"3","goodstxt":"立即购买","titleLine":0,"version":1,"modulePadding":12},"dom_conitem":null,"dom_ctrl":null,"ue":null},{"id":"20151222134740859","type":3,"draggable":true,"sort":5,"content":{"custom_module_id":"2011122","title":"jason 自定义","create_time":"2015-12-22 13:47:57","link":"http://m.wxfenxiao.com/Shop/module/id/2011122/sid/2022220.html","modulePadding":5},"dom_conitem":null,"dom_ctrl":null,"ue":null}]}';

$indexTemple = new IndexTemple($json);
//$data = $indexTemple->getType9Obj();
$page = $indexTemple->getPageObj();
$PModules = $indexTemple->getPModulesObj();
$LModules = $indexTemple->getLModulesObj();
//print $page->{'title'};
//print $page->{'hasMargin'};
//print $page->{'backgroundColor'};
$html = "";
foreach ($PModules as $PModule) {
	$html.=($indexTemple->getType9Obj($PModule));
}
foreach ($LModules as $LModule) {
	//$html.= "LModules:".$LModule->{'id'}.";";
}


$smarty->assign("name", "<h1>Jason</h1>", true);
$smarty->assign("title", "我淘你Jason", true);
$smarty->assign("body", $html, true);

//$smarty->display('index.htm');
$output = $smarty->fetch('index.htm');

echo $output;



