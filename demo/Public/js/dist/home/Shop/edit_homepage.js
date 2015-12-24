$(function() {
    var n = $("#j-initdata").val(), o = $("#j-pageID").val();
    n = n.length ? $.parseJSON(n) : Defaults[o];
    //设置店铺主页标题
    $(".j-pagetitle").text(n.page.title);
    $(".j-pagetitle-ipt").val(n.page.title);
    //初始化 页面模块
    _.each(n.PModules,function(n, o) {
            HYD.DIY.add(n)
        }
    );
    //初始化 自定义模块列表
    _.each(n.LModules, function(n) {
        HYD.DIY.add(n)
    }),
    function() {
        //页面设置点击事件
        $(".diy-actions").find(".j-page-addModule").click(function() {
            $(".diy-ctrl-item").each(function() {
                var n = $(this),
                o = n.data("origin");
                "pagetitle" == o && ($("html,body").animate({
                    scrollTop: "85px"
                },
                300), n.show().siblings().remove())
            })
        });
        //页面布局change事件：有边距,无边距
        var o = $(".j-page-hasMargin"),
        a = $("#diy-phone");
        o.length && 
        (
            1 == n.page.hasMargin || "undefined" == typeof n.page.hasMargin ? 
                (o.filter("[value=1]").attr("checked", !0), a.removeClass("noMargin")) : 
                (o.filter("[value=0]").attr("checked", !0), a.addClass("noMargin")), 
            o.change(function() {
                var n = $(this).val();
                1 == n ? a.removeClass("noMargin") : a.addClass("noMargin")
            })
        );
        //页面背景色
        var e = $("#j-page-backgroundColor");
        if (e.length) {
            var t = "#f8f8f8",
            i = $("#diy-contain");
            n.page.backgroundColor && (t = n.page.backgroundColor),
            e.css("backgroundColor", t).data("color", t),
            i.css("backgroundColor", t),
            e.ColorPicker({
                color: t,
                onShow: function(n) {
                    return $(n).fadeIn(500),
                    !1
                },
                onHide: function(n) {
                    return $(n).fadeOut(500),
                    !1
                },
                onChange: function(n, o, a) {
                    var o = "#" + o;
                    e.css("backgroundColor", o).data("color", o),
                    i.css("backgroundColor", o)
                }
            })
        }
    } (),
    //保存
    $("#j-savePage").click(function() {
        return HYD.DIY.Unit.getData() ? ($.ajax({
            url: window.location.href,
            type: "post",
            dataType: "json",
            data: {
                content: JSON.stringify(HYD.DIY.Unit.getData()),
                id: o,
                is_preview: 0
            },
            beforeSend: function() {
                $.jBox.showloading()
            },
            success: function(n) {
                1 == n.status ? HYD.hint("success", "恭喜您，保存成功！") : HYD.hint("danger", "对不起，保存失败：" + n.msg),
                $.jBox.hideloading()
            }
        }), !1) : void 0
    }),
    //保存并预览
    $("#j-saveAndPrvPage").click(function() {
        return HYD.DIY.Unit.getData() ? ($.ajax({
            url: window.location.href,
            type: "post",
            dataType: "json",
            data: {
                content: JSON.stringify(HYD.DIY.Unit.getData()),
                id: o,
                is_preview: 1
            },
            beforeSend: function() {
                $.jBox.showloading()
            },
            success: function(n) {
                1 == n.status ? (HYD.hint("success", "恭喜您，保存成功！"), setTimeout(function() {
                    window.open(n.link)
                },1e3)) : HYD.hint("danger", "对不起，保存失败：" + n.msg),
                $.jBox.hideloading()
            }
        }), !1) : void 0
    }),
    //还原
    $("#j-homeRecover").click(function() {
        var n = ($(this), $("#j-pageID").val());
        return $.jBox.show({
            title: "还原模板",
            content: "确认还原为初始状态吗？你的装修内容将被清空且无法还原，请谨慎操作！",
            btnOK: {
                text:"确定",//按钮显示文字
                show:true,//是否显示按钮
                extclass:"btn btn-blue",//按钮追加的样式
                onBtnClick: function(o) {
                    $.jBox.close(o),
                    $.ajax({
                        url: "/Shop/home_page_recover",
                        type: "post",
                        dataType: "json",
                        data: {
                            id: n
                        },
                        beforeSend: function() {
                            $.jBox.showloading()
                        },
                        success: function(n) {
                            1 == n.status ? (HYD.hint("success", "恭喜您，恢复成功！"), setTimeout(function() {
                                window.location.reload()
                            },
                            1e3)) : HYD.hint("danger", "对不起，恢复失败：" + n.msg),
                            $.jBox.hideloading()
                        }
                    })
                }
            }
        }),
        !1
    });
});