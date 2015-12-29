<?php

require '/libs/Smarty.class.php';
require 'IndexTemple.php';

$smarty = new Smarty;

//$smarty->force_compile = true;
$smarty->debugging = false;
$smarty->caching = true;
$smarty->cache_lifetime = 120;


$json = '{
  "page": {
    "title": "I淘你Jason", 
    "hasMargin": "0", 
    "backgroundColor": "#f8f8f8"
  }, 
  "PModules": [
    {
      "id": 9, 
      "type": 9, 
      "draggable": false, 
      "sort": 0, 
      "content": {
        "showType": "1", 
        "dataset": [
          {
            "link": "/User/dist_apply", 
            "linkType": 8, 
            "showtitle": "广告1", 
            "title": "分销申请", 
            "subtitle": "女装", 
            "pic": "http://mp.wxfenxiao.com/PublicMob/images/mob/31banner01.jpg"
          }, 
          {
            "link": "/Shop/index", 
            "linkType": 6, 
            "showtitle": "广告2", 
            "title": "", 
            "subtitle": "男装", 
            "pic": "http://mp.wxfenxiao.com/PublicMob/images/mob/31banner01.jpg"
          }, 
          {
            "link": "/Shop/index", 
            "linkType": 6, 
            "showtitle": "广告3", 
            "title": "", 
            "subtitle": "童装", 
            "pic": "http://mp.wxfenxiao.com/PublicMob/images/mob/31banner01.jpg"
          }
        ], 
        "modulePadding": 5
      }, 
      "dom_conitem": null, 
      "dom_ctrl": null, 
      "ue": null
    }
  ], 
  "LModules": [
    {
      "id": 10, 
      "type": 8, 
      "draggable": true, 
      "sort": 0, 
      "content": {
        "dataset": [
          {
            "link": "/Shop/index", 
            "linkType": 6, 
            "showtitle": "优惠券1", 
            "title": "", 
            "pic": "http://mp.wxfenxiao.com/PublicMob/images/mob/31nev01.jpg"
          }, 
          {
            "link": "/Shop/index", 
            "linkType": 6, 
            "showtitle": "优惠券2", 
            "title": "", 
            "pic": "http://mp.wxfenxiao.com/PublicMob/images/mob/31nev02.jpg"
          }
        ], 
        "modulePadding": 20, 
        "layout": "2", 
        "layout1_style": "1"
      }, 
      "dom_conitem": null, 
      "dom_ctrl": null, 
      "ue": null
    }, 
    {
      "id": 11, 
      "type": 8, 
      "draggable": true, 
      "sort": 1, 
      "content": {
        "dataset": [
          {
            "link": "/Shop/index", 
            "linkType": 6, 
            "showtitle": "尿片1", 
            "title": "", 
            "pic": "http://mp.wxfenxiao.com/PublicMob/images/mob/31sp01.jpg"
          }, 
          {
            "link": "/Shop/index", 
            "linkType": 6, 
            "showtitle": "尿片2", 
            "title": "", 
            "pic": "http://mp.wxfenxiao.com/PublicMob/images/mob/31sp02.jpg"
          }
        ], 
        "modulePadding": 5, 
        "layout": "2", 
        "layout1_style": "1"
      }, 
      "dom_conitem": null, 
      "dom_ctrl": null, 
      "ue": null
    }, 
    {
      "id": 12, 
      "type": 9, 
      "draggable": true, 
      "sort": 2, 
      "content": {
        "showType": 2, 
        "dataset": [
          {
            "link": "/Shop/index", 
            "linkType": 6, 
            "showtitle": "不知道什么模块", 
            "title": "", 
            "subtitle": "女装", 
            "pic": "http://mp.wxfenxiao.com/PublicMob/images/mob/31banner02.jpg"
          }
        ], 
        "modulePadding": 20, 
        "margin": 10
      }, 
      "dom_conitem": null, 
      "dom_ctrl": null, 
      "ue": null
    }, 
    {
      "id": 13, 
      "type": 8, 
      "draggable": true, 
      "sort": 3, 
      "content": {
        "dataset": [
          {
            "link": "/Shop/index", 
            "linkType": 6, 
            "showtitle": "品牌周1", 
            "title": "", 
            "pic": "http://mp.wxfenxiao.com/PublicMob/images/mob/31sp03.jpg"
          }, 
          {
            "link": "/Shop/index", 
            "linkType": 6, 
            "showtitle": "品牌周2", 
            "title": "", 
            "pic": "http://mp.wxfenxiao.com/PublicMob/images/mob/31sp04.jpg"
          }
        ], 
        "modulePadding": 5
      }, 
      "dom_conitem": null, 
      "dom_ctrl": null, 
      "ue": null
    }, 
     {
      "id": 14, 
      "type": 4, 
      "draggable": true, 
      "sort": 4, 
      "content": {
        "layout": "1", 
        "showPrice": true, 
        "showIco": true, 
        "showName": "1", 
        "goodslist": [
          {
            "item_id": "2511374", 
            "title": "白色的羽绒", 
            "price": "400.00", 
            "original_price": "490.00", 
            "create_time": "2015-12-24 00:01:19", 
            "link": "http://m.wxfenxiao.com/Item/detail/id/2511374/sid/2022220.html", 
            "pic": "http://img.wxfenxiao.com/2022220/2015-12/5677c89c7b555.jpg@!", 
            "is_compress": 1
          }, 
          {
            "item_id": "2511378", 
            "title": "黑色的羽绒", 
            "price": "500.00", 
            "original_price": "590.00", 
            "create_time": "2015-12-24 00:01:19", 
            "link": "http://m.wxfenxiao.com/Item/detail/id/2511374/sid/2022220.html", 
            "pic": "http://img.wxfenxiao.com/2022220/2015-12/567ac7a2f34cb.jpg@!", 
            "is_compress": 1
          }
        ], 
        "sale_num": 5, 
        "goodstyle": "1", 
        "goodstxt": "立即购买", 
        "titleLine": 1, 
        "version": 1, 
        "modulePadding": 12
      }, 
      "dom_conitem": null, 
      "dom_ctrl": null, 
      "ue": null
    }, 
	  {
      "id": "20151228154037140", 
      "type": 2, 
      "draggable": true, 
      "sort": 5, 
      "content": {
        "title": "衣服类别", 
        "style": 0, 
        "direction": "left", 
        "modulePadding": 5
      }, 
      "dom_conitem": null, 
      "dom_ctrl": null, 
      "ue": null
    },
	 {
      "id": "20151228155025687", 
      "type": 6, 
      "draggable": true, 
      "sort": 9, 
      "content": {
        "modulePadding": 10
      }, 
      "dom_conitem": null, 
      "dom_ctrl": null, 
      "ue": null
    },
	 {
      "id": "2015122816156916", 
      "type": 7, 
      "draggable": true, 
      "sort": 10, 
      "content": {
        "modulePadding": 5, 
        "dataset": [
          {
            "linkType": 9, 
            "link": " /Item/cart", 
            "title": "购物车", 
            "showtitle": "购物车"
          }, 
          {
            "linkType": 7, 
            "link": "/User/index", 
            "title": "会员主页", 
            "showtitle": "会员主页"
          }
        ]
      }, 
      "dom_conitem": null, 
      "dom_ctrl": null, 
      "ue": null
    },
	 {
      "id": "20151228161710466", 
      "type": 10, 
      "draggable": true, 
      "sort": 11, 
      "content": {
        "modulePadding": 6
      }, 
      "dom_conitem": null, 
      "dom_ctrl": null, 
      "ue": null
    },
	{
      "id": "20151228161710466", 
      "type": 10, 
      "draggable": true, 
      "sort": 11, 
      "content": {
        "modulePadding": 6
      }, 
      "dom_conitem": null, 
      "dom_ctrl": null, 
      "ue": null
    },
	{
      "id": "2015122817546774", 
      "type": 11, 
      "draggable": true, 
      "sort": 12, 
      "content": {
        "height": 26, 
        "modulePadding": 5
      }, 
      "dom_conitem": null, 
      "dom_ctrl": null, 
      "ue": null
    },
	{
      "id": "20151228171530219", 
      "type": 12, 
      "draggable": true, 
      "sort": 13, 
      "content": {
        "style": 0, 
        "marginstyle": 0, 
        "modulePadding": 5, 
        "dataset": [
          {
            "link": "/Shop/index", 
            "linkType": 6, 
            "showtitle": "首页", 
            "title": "店铺主页", 
            "pic": "/PublicMob/images/ind3_1.png", 
            "bgColor": "#07a0e7", 
            "cloPicker": "0", 
            "fotColor": "#fff"
          }, 
          {
            "link": "/Shop/index", 
            "linkType": 6, 
            "showtitle": "新品", 
            "title": "", 
            "pic": "/PublicMob/images/ind3_2.png", 
            "bgColor": "#72c201", 
            "cloPicker": "1", 
            "fotColor": "#fff"
          }, 
          {
            "link": "/Shop/index", 
            "linkType": 6, 
            "showtitle": "热卖", 
            "title": "店铺主页", 
            "pic": "/PublicMob/images/ind3_3.png", 
            "bgColor": "#ffa800", 
            "cloPicker": "2", 
            "fotColor": "#fff"
          }, 
          {
            "link": "/Shop/index", 
            "linkType": 6, 
            "showtitle": "推荐", 
            "title": "", 
            "pic": "/PublicMob/images/ind3_4.png", 
            "bgColor": "#d50303", 
            "cloPicker": "3", 
            "fotColor": "#fff"
          }
        ]
      }, 
      "dom_conitem": null, 
      "dom_ctrl": null, 
      "ue": null
    },
	 {
      "id": "20151228171530219", 
      "type": 12, 
      "draggable": true, 
      "sort": 13, 
      "content": {
        "style": "1", 
        "marginstyle": 0, 
        "modulePadding": 5, 
        "dataset": [
          {
            "link": "/Shop/index", 
            "linkType": 6, 
            "showtitle": "首页", 
            "title": "店铺主页", 
            "pic": "/PublicMob/images/ind3_1.png", 
            "bgColor": "#07a0e7", 
            "cloPicker": "0", 
            "fotColor": "#fff"
          }, 
          {
            "link": "/Shop/index", 
            "linkType": 6, 
            "showtitle": "新品", 
            "title": "", 
            "pic": "/PublicMob/images/ind3_2.png", 
            "bgColor": "#72c201", 
            "cloPicker": "1", 
            "fotColor": "#fff"
          }, 
          {
            "link": "/Shop/index", 
            "linkType": 6, 
            "showtitle": "热卖", 
            "title": "店铺主页", 
            "pic": "/PublicMob/images/ind3_3.png", 
            "bgColor": "#ffa800", 
            "cloPicker": "2", 
            "fotColor": "#fff"
          }, 
          {
            "link": "/Shop/index", 
            "linkType": 6, 
            "showtitle": "推荐", 
            "title": "", 
            "pic": "/PublicMob/images/ind3_4.png", 
            "bgColor": "#d50303", 
            "cloPicker": "3", 
            "fotColor": "#fff"
          }
        ]
      }, 
      "dom_conitem": null, 
      "dom_ctrl": null, 
      "ue": null
    },
	 {
      "id": "2015122817307360", 
      "type": 13, 
      "draggable": true, 
      "sort": 7, 
      "content": {
        "layout": "0", 
        "version": 2, 
        "modulePadding": 5, 
        "dataset": [
          {
            "linkType": 0, 
            "link": "#", 
            "showTitle": 1, 
            "title": "橱窗文字", 
            "pic": "/Public/images/diy/waitupload2.png"
          }, 
          {
            "linkType": 0, 
            "link": "#", 
            "showTitle": 1, 
            "title": "橱窗文字", 
            "pic": "/Public/images/diy/waitupload2.png"
          }, 
          {
            "linkType": 0, 
            "link": "#", 
            "showTitle": 1, 
            "title": "橱窗文字", 
            "pic": "/Public/images/diy/waitupload2.png"
          }
        ]
      }, 
      "dom_conitem": null, 
      "dom_ctrl": null, 
      "ue": null
    },
	{
      "id": "2015122818052883", 
      "type": 16, 
      "draggable": true, 
      "sort": 14, 
      "content": {
        "linkType": 0, 
        "title": "公告", 
        "showtitle": "请填写内容，如果过长，将会滚动显示", 
        "bgColor": "#ffffcc", 
        "cloPicker": "2", 
        "fontSize": "font14", 
        "modulePadding": 5
      }, 
      "dom_conitem": null, 
      "dom_ctrl": null, 
      "ue": null
    },
	{
      "id": "201512281887386", 
      "type": 17, 
      "draggable": true, 
      "sort": 14, 
      "content": {
        "layout": "1", 
        "modulePadding": 5, 
        "dataset": [
          {
            "linkType": 7, 
            "link": "/User/index", 
            "showtitle": "会员主页", 
            "bgColor": "#28c192", 
            "cloPicker": "2", 
            "fotColor": "#fff", 
            "title": "会员主页"
          }, 
          {
            "linkType": 0, 
            "link": "#", 
            "showtitle": "内容2", 
            "bgColor": "#28c192", 
            "cloPicker": "2", 
            "fotColor": "#fff"
          }, 
          {
            "linkType": 0, 
            "link": "#", 
            "showtitle": "内容3", 
            "bgColor": "#28c192", 
            "cloPicker": "2", 
            "fotColor": "#fff"
          }, 
          {
            "linkType": 0, 
            "link": "#", 
            "showtitle": "内容4", 
            "bgColor": "#28c192", 
            "cloPicker": "2", 
            "fotColor": "#fff"
          }, 
          {
            "linkType": 0, 
            "link": "#", 
            "showtitle": "内容5", 
            "bgColor": "#28c192", 
            "cloPicker": "2", 
            "fotColor": "#fff"
          }, 
          {
            "linkType": 0, 
            "link": "#", 
            "showtitle": "内容6", 
            "bgColor": "#28c192", 
            "cloPicker": "2", 
            "fotColor": "#fff"
          }
        ]
      }, 
      "dom_conitem": null, 
      "dom_ctrl": null, 
      "ue": null
    },
	{
      "id": "2015122813542786", 
      "type": 1, 
      "draggable": true, 
      "sort": 6, 
      "content": {
        "fulltext": "<p>『富文本编辑器』</p>", 
        "modulePadding": 5
      }, 
      "ue": null, 
      "dom_conitem": null, 
      "dom_ctrl": null
    }
  ]
}';

$indexTemple = new IndexTemple($json);
//$data = $indexTemple->getType9Obj();
$page = $indexTemple->getPageObj();
$PModules = $indexTemple->getPModulesObj();
$LModules = $indexTemple->getLModulesObj();

//拼装body的html
$html = "";
if(count($PModules)>0){
	$html.= '<div class="membersbox membersbox-box">';
	foreach ($PModules as $PModule) {
		$html.=($indexTemple->addTemple($PModule));
	}
	$html.= '</div>';
}
if(count($LModules)>0){
	if($page->{"hasMargin"} == 0 ){
		$html.= '<div class="members_con">';
	}else{
		$html.= '<div class="members_con noMargin">';
	}
	foreach ($LModules as $LModule) {
		$html.=($indexTemple->addTemple($LModule));
	}
	$html.= '</div>';
}



$smarty->assign("title", $page->{'title'}, true);
$smarty->assign("backgroundColor", $page->{'backgroundColor'}, true);
$smarty->assign("body", $html, true);

//$smarty->display('index.htm');
$output = $smarty->fetch('index.htm');

echo $output;



