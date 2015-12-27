<?php
/* Smarty version 3.1.30-dev/9, created on 2015-12-27 16:58:00
  from "D:\xampp\work\demo\underscorephp\templates\index.htm" */

if ($_smarty_tpl->_decodeProperties($_smarty_tpl, array (
  'has_nocache_code' => true,
  'version' => '3.1.30-dev/9',
  'unifunc' => 'content_56800a8867b5b1_33186209',
  'file_dependency' => 
  array (
    'fefddb6ae0af5e5075322802080629bba1174e1a' => 
    array (
      0 => 'D:\\xampp\\work\\demo\\underscorephp\\templates\\index.htm',
      1 => 1451231811,
      2 => 'file',
    ),
  ),
  'includes' => 
  array (
  ),
),false)) {
function content_56800a8867b5b1_33186209 ($_smarty_tpl) {
$_smarty_tpl->compiled->nocache_hash = '1541556800a88477b47_63811849';
?>

<!DOCTYPE html>
<html lang="en-US">
<head>
    <meta charset="UTF-8"/>
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=1" name="viewport" />
    <meta http-equiv="content-script-type" content="text/javascript">
    <meta name="format-detection" content="telephone=no" />
    <!-- uc强制竖屏 -->
    <meta name="screen-orientation" content="portrait">
    <!-- QQ强制竖屏 -->
    <meta name="x5-orientation" content="portrait">
    
    <meta http-equiv="Cache-Control" content="no-cache, no-store, must-revalidate" />
    <meta http-equiv="Pragma" content="no-cache" />
    <meta http-equiv="Expires" content="0" />

    <title><?php echo '/*%%SmartyNocache:1541556800a88477b47_63811849%%*/<?php echo $_smarty_tpl->tpl_vars[\'title\']->value;?>
/*/%%SmartyNocache:1541556800a88477b47_63811849%%*/';?>
</title>

    <link rel="stylesheet" href="../PublicMob/css/dist/style.css">
    <link rel="stylesheet" href="../PublicMob/css/dist/SpsBtn.css">
    
	<link rel="stylesheet" href="../PublicMob/css/dist/index/header_style31.css" />

    </head>
<body style="background-color: #f8f8f8;width:100%; margin:10px auto;">

<div class="membersbox pad50">
	<?php echo '/*%%SmartyNocache:1541556800a88477b47_63811849%%*/<?php echo $_smarty_tpl->tpl_vars[\'body\']->value;?>
/*/%%SmartyNocache:1541556800a88477b47_63811849%%*/';?>


</div>



<div class="nav">
        <section class="inner">
            <section class="nav-lists clearfix hasmenu9">
                <dl class="nav-item j-showNavSub wid4 style1 fl">

                            <dt><a href='#' style="background-color:#fff;color:#333"><img src="http://mp.wxfenxiao.com/PublicMob/images/icon/style1/color0/icon_home.png" width="20" alt=""><h2>店铺主页</h2></a></dt>
                                                    </dl><dl class="nav-item j-showNavSub wid4 style1 fl">

                            <dt><a href='#' style="background-color:#fff;color:#333"><img src="http://mp.wxfenxiao.com/PublicMob/images/icon/style1/color0/icon_user.png" width="20" alt=""><h2>会员主页</h2></a></dt>
                                                    </dl><dl class="nav-item j-showNavSub wid4 style1 fl">

                            <dt><a href='/Item/lists' style="background-color:#fff;color:#333"><img src="http://mp.wxfenxiao.com/PublicMob/images/icon/style1/color0/icon_allgoods.png" width="20" alt=""><h2>所有商品</h2></a></dt>
                                                    </dl><dl class="nav-item j-showNavSub wid4 style1 fl">

                            <dt><a href='#' style="background-color:#fff;color:#333"><img src="http://mp.wxfenxiao.com/PublicMob/images/icon/style1/color0/icon_fx.png" width="20" alt=""><h2>申请分销</h2></a></dt>
                                                    </dl>                                </section>

        </section>
    </div>

<div id="mmexport"><img src="http://mp.wxfenxiao.com/PublicMob/images/mmexport.png" width="100%" alt=""></div>
<div id="mmexport-pl" style="display: none;"><img src="http://mp.wxfenxiao.com/PublicMob/images/mmexport1.png" width="100%" alt=""></div>
<div id="mmexport-share" style="display: none;"><img src="http://mp.wxfenxiao.com/PublicMob/images/mmexport2.png" width="100%" alt=""></div>

<!--关注-->
<!-- 悬浮按钮 -->
<div class="mask_menu" id="menubtn" style="display: none;"></div>
    <div class="menu" id="menufloat"><i class="icon-menu"></i></div>
        <div class="menu-c notel nofocus" id="menufloat-c" style="">
            <div class="menu-c-out">
                <div class="menu-c-inner">
                    <a class="a-home" href="/Shop/index" title="首页" style="display: block;"></a>
                    <a class="a-tel" href="tel://13750357236" title="联系店主" style="display: inline;"></a>
                    <a class="a-member" href="/Item/cart" title="购物车" style="display: block;"></a>
                    <a class="a-search" href="/User/index" title="会员" style="display: block;"></a>
                    <a class="a-cart" href="javascript:;" id="share-link" title="分享" style="display: block;"></a>
                    <a class="a-collect" href="javascript:void(0)" id="collect-link" title="收藏" style="display: block;"></a>
                    <a class="a-server" href="/Item/lists" title="搜索" style="display: block;"></a>
                </div>
            </div>
        </div>    
    <!-- 收藏 -->
    <div class="collectbg"><img src="http://mp.wxfenxiao.com/PublicMob/images/collectbg.png" width="100%" alt=""><a href="javascript:;" class="a-know">我知道了</a></div>
    <!-- 分享 -->
    <div class="sharebg"><img src="http://mp.wxfenxiao.com/PublicMob/images/mmexport.png" width="100%" alt=""><a href="javascript:;" class="a-know">我知道了</a></div>
<sectoin class="loading" id="j-loading"></sectoin>



<?php echo '<script'; ?>
 src="../PublicMob/js/dist/lib-min.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="../PublicMob/js/jquery/jquery.lazyload.min.js"><?php echo '</script'; ?>
>
<?php echo '<script'; ?>
 src="../PublicMob/js/dist/main.js"><?php echo '</script'; ?>
>
<!--<?php echo '<script'; ?>
 src="http://mp.wxfenxiao.com/PublicMob/js/dist/cbb_jssdk.js?v=20151221211620"><?php echo '</script'; ?>
>-->
<!--<?php echo '<script'; ?>
 src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"><?php echo '</script'; ?>
>-->
<?php echo '<script'; ?>
>
    var IsShop="";//是否是首页

    $(function(){
        // 邀请好友代付
        $(document).on('click','#fxBtn-share',function(){
            $("#mmexport-share").show();
        });
        // 邀请好友一起玩
        $(document).on('click','#fxBtn-play',function(){
            $("#mmexport-pl").show();
        });
        // 点击我要分销功能
        $(document).on('click','#fxBtn',function(){
            $("#mmexport").show();
        });
        // $(document).on('touchend','#fxBtn',function(){
        //     $('#fxBtn').click();
        // })
        $(document).on('touchend',"#mmexport",function(){
            $(this).hide();
        });
        $(document).on('touchend',"#mmexport-pl",function(){
            $(this).hide();
        });
        $(document).on('touchend',"#mmexport-share",function(){
            $(this).hide();
        });

        // 分享信息
        window.shareOpentions = {
            title : "Jason机器人",   // 分享标题
            desc  : "",    // 分享描述
            link  : "http://m.wxfenxiao.com/Shop/index/tid/31/sid/2022220.html",     // 分享链接
            imgUrl: ""      // 分享图标
        };

        (function(){
            // 控制添加商品的图片显示高度，确保商品布局正常
            $('.b_mingoods,.mingoods').each(function(index, el) {
                var me = $(this),
                    imgHeight = me.find('img').width();
                me.find('img').closest('a').height(imgHeight);
            });
            $('.board3').each(function(index, el) {
                var me = $(this);
                var bwidth = me.width();
                if(me.hasClass('small_board') || !me.hasClass('big_board')){
                    me.children('span').attr('style', 'height:'+bwidth+'px !important;overflow:hidden;');
                }
                if(me.hasClass('big_board')){
                    me.children('span').attr('style', 'height:'+(bwidth*2+9)+'px !important;overflow:hidden;');
                }
            });

            // 悬浮按钮
            var SpsBtn = {
                config:{
                    menu:document.getElementById('menufloat'),
                    menusub:document.getElementById('menufloat-c'),
                    menubtn:document.getElementById('menubtn')
                },
                init:function(){
                    this.SpsbtnClick();
                    this.touchMove();
                },
                touchMove:function(){
                    var _this = this;
                    _this.config.menu.addEventListener('touchmove',function(e){
                        e.preventDefault();
                        var touch = e.touches[0],
                            moveX,moveY,
                            winWh = window.innerWidth - 50,
                            winHt = window.innerHeight - 50;
                        moveX = touch.clientX -25;
                        moveY = touch.clientY -25;
                        moveY  = moveY  < 0 ? 0 : moveY ;
                        moveX = moveX < 0 ? 0 : moveX;
                        moveY = moveY > winHt ? winHt : moveY;
                        moveX = moveX > winWh ? winWh :moveX;
                         _this.config.menu.style.left = moveX + 'px';
                         _this.config.menu.style.top = moveY + 'px';
                         _this.config.menusub.style.left = moveX + 10 + 'px';
                         _this.config.menusub.style.top = moveY -190 + 'px';
                    },false)
                    
                    
                },
                SpsbtnClick:function(){
                    var _this = this;
                    this.config.menu.addEventListener('click',function(){
                        var me = $(this);
                        // console.log(me)
                        if(!me.hasClass('show')){
                            me.addClass('show');
                            me.siblings('.mask_menu,#menufloat-c').show();
                            me.siblings('#menufloat-c').find('.menu-c-inner').addClass('in').removeClass('outer')
                        }else{
                            me.removeClass('show');
                            me.siblings('.mask_menu,#menufloat-c').hide();
                            me.siblings('#menufloat-c').find('.menu-c-inner').removeClass('in').addClass('outer')
                        }
                    },false);
                    this.config.menubtn.addEventListener('click',function(){
                        $(_this.config.menu).removeClass('show');
                        $(_this.config.menu).siblings('.mask_menu,#menufloat-c').hide();
                        $(_this.config.menu).siblings('#menufloat-c').find('.menu-c-inner').removeClass('in').addClass('outer')
                    })
                }
            }
            SpsBtn.init();            // 收藏按钮
            $('#collect-link').click(function(event) {
                $('.menu').removeClass('show');
                $('.mask_menu').hide();
                $('.menu-c-inner').removeClass('in').addClass('outer')
                $('.collectbg').show();
            });
            $('.a-know').click(function(event) {
                $(this).parent('.collectbg,.sharebg').hide();
            });
            // 分享
            $('#share-link').click(function(event) {
                $('.menu').removeClass('show');
                $('.mask_menu').hide();
                $('.menu-c-inner').removeClass('in').addClass('outer')
                $('.sharebg').show();
            });
        })();

    });
<?php echo '</script'; ?>
>


	<?php echo '<script'; ?>
 type="text/javascript" src="../PublicMob/plugins/swipe/swipe.js"><?php echo '</script'; ?>
>
	<?php echo '<script'; ?>
>
		$('.j-swipe').each(function(index, el) {
			var me = $(this);
			me.attr('id', 'Swiper'+index);
			var id=me.attr('id');
			// alert(id)
			var elem = document.getElementById(id);
			window.mySwipe = Swipe(elem, {
			   startSlide: 0,
			   auto: 3000,
			   callback: function(m) {
			   	 $(elem).find('.members_flash_time').children('span').eq(m).addClass('cur').siblings().removeClass('cur')
			   },
			});
		});
	<?php echo '</script'; ?>
>


<?php echo '<script'; ?>
>
//image lazyload
$(function(){
    $(".lazyload").lazyload({
        threshold:0,
        effect : "fadeIn"
    });
});
<?php echo '</script'; ?>
>

</body>
</html><?php }
}
