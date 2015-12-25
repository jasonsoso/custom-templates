var HYD = HYD ? HYD: {};
HYD.Constant = HYD.Constant ? HYD.Constant: {},
HYD.popbox = HYD.popbox ? HYD.popbox: {},
//链接到哪里去
HYD.linkType = {
    1 : "选择商品",
    2 : "商品分组",
    3 : "专题页面",
    4 : "页面分类",
    5 : "营销活动",
    6 : "店铺主页",
    7 : "会员主页",
    8 : "分销申请",
    9 : "购物车",
    10 : "全部商品",
    12 : "商品分类",
    11 : "自定义链接",
    13 : "我的订单"
},
HYD.getTimestamp = function() {
    var e = new Date;
    return "" + e.getFullYear() + parseInt(e.getMonth() + 1) + e.getDate() + e.getHours() + e.getMinutes() + e.getSeconds() + e.getMilliseconds()
},
HYD.hint = function(e, i, o) {
    if (e && i) {
        var n = $("#tpl_hint").html(),
        t = _.template(n, {
            type: e,
            content: i
        }),
        c = $(t),
        l = 200,
        o = o || 1500;
        $("body").append(c.css({
            opacity: "0",
            zIndex: "999999"
        })),
        c.animate({
            opacity: 1,
            top: 200
        },
        l,
        function() {
            setTimeout(function() {
                c.animate({
                    opacity: 0,
                    top: 600
                },
                l,
                function() {
                    $(this).remove()
                })
            },
            o)
        })
    }
},
HYD.FormShowError = function(e, i, o) {
    e && i && (void 0 == o && (o = !0), e.addClass("error").siblings(".fi-help-text").addClass("error").text(i).show(), o && e.focus(), "select" == e[0].nodeName.toLowerCase() && e.siblings(".select-sim").addClass("error"), e.one("change",
    function() {
        HYD.FormClearError($(this))
    }))
},
HYD.FormClearError = function(e) {
    e && (e.removeClass("error").siblings(".fi-help-text").hide(), "select" == e[0].nodeName.toLowerCase() && e.siblings(".select-sim").removeClass("error"))
},
HYD.showQrcode = function(e) {
    var i = $("#qrcode");
    if (!i.length) {
        var o = _.template($("#tpl_qrcode").html(), {
            src: e
        });
        i = $(o),
        i.click(function() {
            i.fadeOut(300)
        }),
        $("body").append(i)
    }
    i.find("img").attr("src", e),
    i.fadeIn(300)
},
HYD.changeWizardStep = function(e, i) {
    var o = $(e),
    n = o.find(".wizard-item");
    n.removeClass("process complete");
    for (var t = 0; i - 1 >= t; t++) n.filter(":eq(" + t + ")").addClass("complete");
    n.filter(":eq(" + i + ")").addClass("process")
},
HYD.autoLocation = function(e, i) {
    if (e) {
        var i = i ? i: 2e3;
        timer = setInterval(function() {
            1e3 >= i ? (clearInterval(timer), window.location.href = e) : (i -= 1e3, $("#j-autoLocation-second").text(i / 1e3))
        },
        1e3)
    }
},
HYD.ajaxPopTable = function(e) {
    var i, o, n = {
        title: "",
        url: "",
        data: {
            p: 1
        },
        tpl: "",
        onOpen: null,
        onPageChange: null
    },
    t = $.extend(!0, {},
    n, e),
    c = $("<div></div>"),
    l = function(e) {
        var n = t.tpl,
        s = t.url,
        a = function(s) {
            i = s;
            var a = _.template(n, s),
            r = $(a);
            c.empty().append(r),
            c.find(".paginate a:not(.disabled,.cur)").click(function() {
                for (var e = $(this).attr("href"), i = e.split("/"), o = 0; o < i.length; o++) if ("p" == i[o]) {
                    t.data.p = i[o + 1],
                    l();
                    break
                }
                return ! 1
            }),
            e && e(),
            t.onPageChange && t.onPageChange(o, i)
        };
        $.ajax({
            url: s,
            type: "post",
            dataType: "json",
            data: t.data,
            success: function(e) {
                1 == e.status ? a(e) : HYD.hint("danger", "对不起，获取数据失败：" + e.msg)
            }
        })
    };
    l(function() {
        $.jBox.show({
            title: t.title,
            content: c,
            btnOK: {
                show: !1
            },
            btnCancel: {
                show: !1
            },
            onOpen: function(e) {
                o = e,
                t.onOpen && t.onOpen(e, i)
            }
        })
    })
},
HYD.popbox.ImgPicker = function(e) {
    var i, o = $("#tpl_popbox_ImgPicker").html(),
    n = $(o),
    t = function(e, o) {
        var c = function(e) {
            if (i = e.list, i && i.length) {
                var c = _.template($("#tpl_popbox_ImgPicker_listItem").html(), {
                    dataset: i
                }),
                l = $(c);
                l.filter("li").click(function() {
                    $(this).toggleClass("selected")
                }),
                n.find(".imgpicker-list").empty().append(l);
                var s = e.page,
                a = $(s);
                a.filter("a:not(.disabled,.cur)").click(function() {
                    var e = $(this).attr("href"),
                    i = e.split("/");
                    return i = i[i.length - 1],
                    i = i.replace(/.html/, ""),
                    t(i),
                    !1
                }),
                n.find(".paginate").empty().append(a)
            } else n.find(".imgpicker-list").append("<p class='txtCenter'>对不起，暂无图片</p>");
            o && o()
        };
        $.ajax({
            url: "/Design/getImg",
            type: "post",
            dataType: "json",
            data: {
                p: parseInt(e)
            },
            success: function(e) {
                1 == e.status ? c(e) : HYD.hint("danger", "对不起，获取数据失败：" + e.msg)
            }
        })
    },
    c = function(i) {
        var o = [];
        n.find("#imgpicker_upload_input").uploadify({
            debug: !1,
            auto: !0,
            formData: {
                PHPSESSID: $.cookie("PHPSESSID")
            },
            width: 60,
            height: 60,
            multi: !0,
            swf: "/demo/Public/plugins/uploadify/uploadify.swf",
            uploader: "http://localhost/demo/json/uploadFile.json",
            buttonText: "+",
            fileSizeLimit: "5MB",
            fileTypeExts: "*.jpg; *.jpeg; *.png; *.gif; *.bmp",
            onSelectError: function(e, i, o) {
                switch (i) {
                case - 100 : HYD.hint("danger", "对不起，系统只允许您一次最多上传10个文件");
                    break;
                case - 110 : HYD.hint("danger", "对不起，文件 [" + e.name + "] 大小超出5MB！");
                    break;
                case - 120 : HYD.hint("danger", "文件 [" + e.name + "] 大小异常！");
                    break;
                case - 130 : HYD.hint("danger", "文件 [" + e.name + "] 类型不正确！")
                }
            },
            onFallback: function() {
                HYD.hint("danger", "您未安装FLASH控件，无法上传图片！请安装FLASH控件后再试。")
            },
            onUploadSuccess: function(e, i, t) {
                var i = $.parseJSON(i),
                c = $("#tpl_popbox_ImgPicker_uploadPrvItem").html(),
                l = n.find(".imgpicker-upload-preview"),
                s = i.file_path;
                o.push(s);
                var a = _.template(c, {
                    url: s
                }),
                r = $(a);
                r.find(".j-imgpicker-upload-btndel").click(function() {
                    var e = n.find(".imgpicker-upload-preview li").index($(this).parent("li"));
                    r.fadeOut(300,
                    function() {
                        o.splice(e, 1),
                        $(this).remove()
                    })
                }),
                l.append(r)
            },
            onUploadError: function(e, i, o, n) {
                HYD.hint("danger", "对不起：" + e.name + "上传失败：" + n)
            }
        }),
        n.find("#j-btn-uploaduse").click(function() {
            e && e(o),
            $.jBox.close(i)
        })
    };
    t(1,
    function() {
        $.jBox.show({
            title: "选择图片",
            content: n,
            btnOK: {
                show: !1
            },
            btnCancel: {
                show: !1
            },
            onOpen: function(o) {
                var t = n.find("#j-btn-listuse");
                t.click(function() {
                    var t = [];
                    n.find(".imgpicker-list li.selected").each(function() {
                        t.push(i[$(this).index()])
                    }),
                    e && e(t),
                    $.jBox.close(o)
                }),
                n.find(".j-initupload").one("click",
                function() {
                    c(o)
                })
            }
        })
    })
},
HYD.popbox.IconPicker = function(e) {
    var i, o = $("#icon_imgPicker").html(),
    n = $(o);
    i = $.browser.chrome ? "body": document.documentElement || document.body,
    $(i).append(n);
    var t = $("#icon_imglist").html(),
    c = {
        style: "style1",
        color: "color0"
    },
    l = function(e) {
        c = e ? e: c;
        var i = _.template(t, {
            data: HYD.popbox.iconimgsrc.data[c.style][c.color]
        });
        n.find(".albums-icon-tab").html(i),
        n.find(".albums-icon-tab").find("li").click(function(e) {
            var i = $(this);
            i.hasClass("selected") || i.addClass("selected").siblings("li").removeClass("selected")
        })
    };
    l(c),
    n.find(".albums-cr-actions").children("a").click(function(e) {
        var i = $(this),
        o = i.data("style");
        c.style = o,
        i.addClass("cur").siblings("a").removeClass("cur"),
        l(c)
    }),
    n.find(".albums-color-tab").find("li").click(function(e) {
        var i = $(this),
        o = i.data("color");
        c.color = o,
        i.addClass("cur").siblings("li").removeClass("cur"),
        l(c),
        "color1" == o && $(".albums-icon-tab").find("li").css({
            background: "#333"
        })
    });
    var s = [];
    n.find("#j-useIcon").click(function(i) {
        var o = n.find(".albums-icon-tab").find("li.selected");
        if (0 == o.length) return HYD.hint("danger", "对不起，请选择一张小图标"),
        !1;
        var t = o.children("img").attr("src");
        t = t.replace("Public", "PublicMob"),
        s.push(t),
        a(),
        e && e(s)
    });
    var a = function() {
        n.remove()
    };
    n.find("#Jclose").click(function(e) {
        a()
    })
},
HYD.popbox.ModulePicker = function(e) {
    var i, o = $("#tpl_popbox_ModulePicker").html(),
    n = $(o),
    t = function(e, o) {
        var c = function(e) {
            if (i = e.list, i && i.length) {
                var c = $("#tpl_popbox_ModulePicker_item").html(),
                l = _.template(c, {
                    dataset: i
                }),
                s = $(l);
                n.find(".modulePicker-list").empty().append(s);
                var a = e.page,
                r = $(a);
                r.filter("a:not(.disabled,.cur)").click(function() {
                    var e = $(this).attr("href"),
                    i = e.split("/");
                    return i = i[i.length - 1],
                    i = i.replace(/.html/, ""),
                    t(i),
                    !1
                }),
                n.find(".paginate").empty().append(r)
            } else n.find(".modulePicker-list").append("<p class='txtCenter'>对不起，暂无自定义模块</p>");
            o && o()
        };
        $.ajax({
            url: "/Design/getModule",
            type: "post",
            dataType: "json",
            data: {
                p: parseInt(e)
            },
            success: function(e) {
                1 == e.status ? c(e) : HYD.hint("danger", "对不起，获取数据失败：" + e.msg)
            }
        })
    };
    t(1,
    function() {
        $.jBox.show({
            title: "选择自定义模块",
            content: n,
            btnOK: {
                show: !1
            },
            btnCancel: {
                show: !1
            },
            onOpen: function(o) {
                n.on("click", ".j-select",
                function() {
                    var n = $(".modulePicker-list li").index($(this).parent("li"));
                    e && e(i[n]),
                    $.jBox.close(o)
                })
            }
        })
    })
},
//1 : "选择商品"  2 : "商品分组"
HYD.popbox.GoodsAndGroupPicker = function(e, i) {
    var o, n, t = $("#tpl_popbox_GoodsAndGroupPicker").html(),
    c = $(t),
    l = [],
    s = [],
    a = function(e, i) {
        var n = function(e) {
            if (o = e.list, o && o.length) {
                var n = $("#tpl_popbox_GoodsAndGroupPicker_goodsitem").html(),
                t = _.template(n, {
                    dataset: o
                }),
                r = $(t);
                r.find(".j-select").click(function() {
                    var e, i = $(this),
                    n = i.parent("li"),
                    t = n.index(),
                    c = n.data("item"),
                    a = $(".j-verify").val();
                    if (e = "" != a ? a.split(",") : [], n.hasClass("selected")) {
                        if (n.removeClass("selected"), i.removeClass("btn-success").text("选取"), 0 != l.length) for (var r = 0; r < l.length; r++) if (c == l[r].item_id) {
                            l.splice(r, 1);
                            break
                        }
                        if (0 != s.length) for (var r = 0; r < s.length; r++) {
                            var g = s[r];
                            if (c == g) {
                                s.splice(r, 1);
                                break
                            }
                        }
                        if (0 != e.length) {
                            for (var r = 0; r < e.length; r++) {
                                var g = e[r];
                                if (c == g) {
                                    e.splice(r, 1);
                                    break
                                }
                            }
                            a = e.join(","),
                            $(".j-verify").val(a)
                        }
                    } else n.addClass("selected"),
                    i.addClass("btn-success").text("已选"),
                    l.push(o[t]),
                    s.push(c),
                    e.push(c),
                    a = e.join(","),
                    $(".j-verify").val(a)
                }),
                c.find(".gagp-goodslist").empty().append(r);
                var g = e.page,
                p = $(g);
                p.filter("a:not(.disabled,.cur)").click(function() {
                    var e = $(this).attr("href"),
                    i = e.split("/");
                    return i = i[i.length - 1],
                    i = i.replace(/.html/, ""),
                    a(i),
                    !1
                }),
                c.find(".paginate:eq(0)").empty().append(p)
            } else c.find(".gagp-goodslist").append("<p class='txtCenter'>对不起，暂无数据</p>");
            var d = [];
            "" != $(".j-verify").val() ? d = $(".j-verify").val().split(",") : $(".img-list li").not(".img-list-add").each(function(e, i) {
                var o = $(this).data("item");
                d.push(o)
            }),
            c.find("li").each(function(e, i) {
                var o = $(this),
                n = o.data("item");
                $.each(d,
                function(e, i) {
                    n == i && (o.addClass("selected"), o.children(".j-select").addClass("btn-success").text("已选"))
                })
            }),
            i && i()
        };
        $.ajax({
            url: "http://localhost/demo/json/getItem.json",
            type: "post",
            dataType: "json",
            data: {
                p: parseInt(e)
            },
            success: function(e) {
                1 == e.status ? n(e) : HYD.hint("danger", "对不起，获取数据失败：" + e.msg)
            }
        })
    },
    r = function(e, i) {
        var o = function(e) {
            if (n = e.list, n && n.length) {
                var o = $("#tpl_popbox_GoodsAndGroupPicker_groupitem").html(),
                t = _.template(o, {
                    dataset: n
                }),
                l = $(t);
                c.find(".gagp-grouplist").empty().append(l);
                var s = e.page,
                a = $(s);
                a.filter("a:not(.disabled,.cur)").click(function() {
                    var e = $(this).attr("href"),
                    i = e.split("/");
                    return i = i[i.length - 1],
                    i = i.replace(/.html/, ""),
                    r(i),
                    !1
                }),
                c.find(".paginate").empty().append(a)
            } else c.find(".gagp-grouplist").append("<p class='txtCenter'>对不起，暂无数据</p>");
            var g = $(".badge-success").data("group");
            void 0 != g && c.find(".gagp-grouplist li").each(function(e, i) {
                var o = $(this),
                n = o.data("group");
                g == n && o.find(".j-select").addClass("btn-success").text("已选")
            }),
            i && i()
        };
        $.ajax({
            url: "/Design/getGroup",
            type: "post",
            dataType: "json",
            data: {
                p: parseInt(e)
            },
            success: function(e) {
                1 == e.status ? o(e) : HYD.hint("danger", "对不起，获取数据失败：" + e.msg)
            }
        })
    },
    g = function(e, o) {
        c.on("click", ".j-btn-goodsuse",
        function() {
            var o = 1;
            i && i(l, o, s),
            $.jBox.close(e)
        })
    },
    p = function(e) {
        var n = 1;
        c.find(".j-btn-goodsuse").remove(),
        c.on("click", ".gagp-goodslist .j-select",
        function() {
            var t = $(".gagp-goodslist li").index($(this).parent("li"));
            i && i(o[t], n),
            $.jBox.close(e)
        })
    },
    d = function(e) {
        var o = 2;
        c.on("click", ".gagp-grouplist .j-select",
        function() {
            var t = $(".gagp-grouplist li").index($(this).parent("li"));
            i && i(n[t], o),
            $.jBox.close(e)
        })
    },
    u = function(e) {
        p(e),
        c.find(".j-tab-group").one("click",
        function() {
            r(1,
            function() {
                d(e)
            })
        })
    };
    switch (e) {
    case "goods":
    case "goodsMulti":
        c.find(".tabs").remove(),
        c.find(".gagp-goodslist").unwrap().unwrap(),
        c.find(".tc[data-index='2']").remove(),
        a(1,
        function() {
            var i = '<span class="fl">选择商品</span><div class="goodsearch"><input type="text" name="title" placeholder="请输入商品名称" /><select class="select small newselect" style="width:90px;"><option value="-1">在售中</option><option value="3">仓库中</option></select><a href="javascript:;" class="btn btn-primary jGetgood"><i class="gicon-search white"></i>查询</a></div>';
            $.jBox.show({
                title: i,
                content: c,
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function(i) {
                    if ("goodsMulti" == e) {
                        var n = [];
                        $(".img-list li").not(".img-list-add").each(function(e, i) {
                            var o = $(this).data("item");
                            n.push(o)
                        }),
                        c.find("li").each(function(e, i) {
                            var o = $(this),
                            t = o.data("item");
                            $.each(n,
                            function(e, i) {
                                t == i && (o.addClass("selected"), o.children(".j-select").addClass("btn-success").text("已选"))
                            })
                        }),
                        g(i, n)
                    } else p(i);
                    $(document).on("click", ".jGetgood",
                    function(e) {
                        var i = $(this).siblings("input").val(),
                        n = $(this).siblings("select").val(),
                        t = function(e, a) {
                            e = e ? e: 1;
                            var r = function(e) {
                                if (o = e.list, o && o.length) {
                                    var i = $("#tpl_popbox_GoodsAndGroupPicker_goodsitem").html(),
                                    n = _.template(i, {
                                        dataset: o
                                    }),
                                    r = $(n);
                                    r.find(".j-select").click(function() {
                                        var e, i = $(this),
                                        n = i.parent("li"),
                                        t = n.index(),
                                        c = n.data("item"),
                                        a = $(".j-verify").val();
                                        if (e = "" != a ? a.split(",") : [], n.hasClass("selected")) {
                                            if (n.removeClass("selected"), i.removeClass("btn-success").text("选取"), 0 != l.length) for (var r = 0; r < l.length; r++) if (c == l[r].item_id) {
                                                l.splice(r, 1);
                                                break
                                            }
                                            if (0 != s.length) for (var r = 0; r < s.length; r++) {
                                                var g = s[r];
                                                if (c == g) {
                                                    s.splice(r, 1);
                                                    break
                                                }
                                            }
                                            if (0 != e.length) {
                                                for (var r = 0; r < e.length; r++) {
                                                    var g = e[r];
                                                    if (c == g) {
                                                        e.splice(r, 1);
                                                        break
                                                    }
                                                }
                                                a = e.join(","),
                                                $(".j-verify").val(a)
                                            }
                                        } else n.addClass("selected"),
                                        i.addClass("btn-success").text("已选"),
                                        l.push(o[t]),
                                        s.push(c),
                                        e.push(c),
                                        a = e.join(","),
                                        $(".j-verify").val(a)
                                    }),
                                    c.find(".gagp-goodslist").empty().append(r);
                                    var g = e.page,
                                    p = $(g);
                                    p.filter("a:not(.disabled,.cur)").click(function() {
                                        var e = $(this).attr("href"),
                                        i = e.split("/");
                                        return i = i[i.length - 1],
                                        i = i.replace(/.html/, ""),
                                        t(i),
                                        !1
                                    }),
                                    c.find(".paginate:eq(0)").empty().append(p)
                                } else c.find(".gagp-goodslist").empty().append("<p class='txtCenter'>对不起，暂无数据</p>"),
                                c.find(".paginate").empty();
                                a && a()
                            };
                            $.ajax({
                                url: "http://localhost/demo/json/getItem.json",
                                type: "post",
                                dataType: "json",
                                data: {
                                    p: parseInt(e),
                                    title: i,
                                    status: n
                                },
                                success: function(e) {
                                    1 == e.status ? r(e) : HYD.hint("danger", "对不起，获取数据失败：" + e.msg)
                                }
                            })
                        };
                        t()
                    })
                }
            })
        });
        break;
    case "group":
        c.find(".tabs").remove(),
        c.find(".gagp-grouplist").unwrap().unwrap(),
        c.find(".tc[data-index='1']").remove(),
        r(1,
        function() {
            $.jBox.show({
                title: "选择商品分组",
                content: c,
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function(e) {
                    d(e)
                }
            })
        });
        break;
    case "all":
        a(1,
        function() {
            $.jBox.show({
                title: "选择商品或商品分组",
                content: c,
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function(e) {
                    u(e)
                }
            })
        })
    }
},
HYD.popbox.MgzAndMgzCate = function(e, i) {
    var o, n, t = $("#tpl_popbox_MgzAndMgzCate").html(),
    c = $(t),
    l = function(e, i) {
        var n = function(e) {
            if (o = e.list, o && o.length) {
                var n = $("#tpl_popbox_MgzAndMgzCate_item").html(),
                t = _.template(n, {
                    dataset: o
                }),
                s = $(t);
                s.find(".j-select").click(function() {
                    var e = $(this),
                    i = e.parent("li");
                    i.hasClass("selected") ? (i.removeClass("selected"), e.removeClass("btn-success").text("选取")) : (i.addClass("selected"), e.addClass("btn-success").text("已选"))
                }),
                c.find(".mgz-list-panel1").empty().append(s);
                var a = e.page,
                r = $(a);
                r.filter("a:not(.disabled,.cur)").click(function() {
                    var e = $(this).attr("href"),
                    i = e.split("/");
                    return i = i[i.length - 1],
                    i = i.replace(/.html/, ""),
                    l(i),
                    !1
                }),
                c.find(".paginate").empty().append(r)
            } else c.find(".mgz-list-panel1").empty().append("<p class='txtCenter'>对不起，暂无数据</p>");
            i && i()
        };
        $.ajax({
            url: "/Design/getMagazine",
            type: "post",
            dataType: "json",
            data: {
                p: parseInt(e)
            },
            success: function(e) {
                1 == e.status ? n(e) : HYD.hint("danger", "对不起，获取数据失败：" + e.msg)
            }
        })
    },
    s = function(e, i) {
        var o = function(e) {
            if (n = e.list, n && n.length) {
                var o = $("#tpl_popbox_MgzAndMgzCate_item").html(),
                t = _.template(o, {
                    dataset: n
                }),
                l = $(t);
                l.find(".j-select").click(function() {
                    var e = $(this),
                    i = e.parent("li");
                    i.hasClass("selected") ? (i.removeClass("selected"), e.removeClass("btn-success").text("选取")) : (i.addClass("selected"), e.addClass("btn-success").text("已选"))
                }),
                c.find(".mgz-list-panel2").empty().append(l);
                var a = e.page,
                r = $(a);
                r.filter("a:not(.disabled,.cur)").click(function() {
                    var e = $(this).attr("href"),
                    i = e.split("/");
                    return i = i[i.length - 1],
                    i = i.replace(/.html/, ""),
                    s(i),
                    !1
                }),
                c.find(".paginate").empty().append(r)
            } else c.find(".mgz-list-panel2").empty().append("<p class='txtCenter'>对不起，暂无数据</p>");
            i && i()
        };
        $.ajax({
            url: "/Design/getMagazineCategory",
            type: "post",
            dataType: "json",
            data: {
                p: parseInt(e)
            },
            success: function(e) {
                1 == e.status ? o(e) : HYD.hint("danger", "对不起，获取数据失败：" + e.msg)
            }
        })
    },
    a = function(e) {
        c.on("click", ".mgz-list-panel1 .j-select",
        function() {
            var n = $(".mgz-list-panel1 li").index($(this).parent("li"));
            i && i(o[n], 3),
            $.jBox.close(e)
        })
    },
    r = function(e) {
        c.on("click", ".mgz-list-panel2 .j-select",
        function() {
            var o = $(".mgz-list-panel2 li").index($(this).parent("li"));
            i && i(n[o], 4),
            $.jBox.close(e)
        })
    },
    g = function(e) {
        c.on("click", ".j-btn-use",
        function() {
            var o = [],
            t = 4;
            c.find(".mgz-list-panel2 li.selected").each(function() {
                o.push(n[$(this).index()])
            }),
            i && i(o, t),
            $.jBox.close(e)
        })
    },
    p = function(e) {
        a(e),
        c.find(".j-tab-mgzcate").one("click",
        function() {
            s(1,
            function() {
                r(e)
            })
        })
    };
    switch (e) {
    case "mgzCate":
        c.find(".tabs").remove(),
        c.find(".mgz-list-panel2").unwrap().unwrap(),
        c.find(".tc[data-index='1']").remove(),
        c.find(".j-btn-use").remove(),
        s(1,
        function() {
            $.jBox.show({
                title: "选择专题分类",
                content: c,
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function(e) {
                    r(e)
                }
            })
        });
        break;
    case "mgzCateMulti":
        c.find(".tabs").remove(),
        c.find(".mgz-list-panel2").unwrap().unwrap(),
        c.find(".tc[data-index='1']").remove(),
        s(1,
        function() {
            $.jBox.show({
                title: "选择专题分类",
                content: c,
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function(e) {
                    g(e)
                }
            })
        });
        break;
    case "mgz":
        c.find(".tabs").remove(),
        c.find(".mgz-list-panel1").unwrap().unwrap(),
        c.find(".tc[data-index='2']").remove(),
        c.find(".j-btn-use").remove(),
        l(1,
        function() {
            $.jBox.show({
                title: "选择专题页面",
                content: c,
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function(e) {
                    p(e)
                }
            })
        });
        break;
    case "all":
        c.find(".j-btn-use").remove(),
        l(1,
        function() {
            $.jBox.show({
                title: "选择专题页面或者分类",
                content: c,
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function(e) {
                    p(e)
                }
            })
        })
    }
    switch (e) {
    case "goods":
    case "goodsMulti":
        c.find(".tabs").remove(),
        c.find(".gagp-goodslist").unwrap().unwrap(),
        c.find(".tc[data-index='2']").remove(),
        showListRender_goods(1,
        function() {
            $.jBox.show({
                title: "选择商品",
                content: c,
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function(i) {
                    "goodsMulti" == e ? selectEvent_goods_multi(i) : selectEvent_goods(i)
                }
            })
        });
        break;
    case "group":
        c.find(".tabs").remove(),
        c.find(".gagp-grouplist").unwrap().unwrap(),
        c.find(".tc[data-index='1']").remove(),
        showListRender_group(1,
        function() {
            $.jBox.show({
                title: "选择商品分组",
                content: c,
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function(e) {
                    selectEvent_group(e)
                }
            })
        });
        break;
    case "all":
        showListRender_goods(1,
        function() {
            $.jBox.show({
                title: "选择商品或商品分组",
                content: c,
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function(e) {
                    selectEvent_goodsAndGroup(e)
                }
            })
        })
    }
},
HYD.popbox.GamePicker = function(e, i) {
    var o = $("#tpl_popbox_GamePicker").html(),
    n = $(o),
    t = {
        1 : [],
        2 : [],
        3 : [],
        4 : []
    },
    c = function(e, i, o) {
        var l = function(i) {
            if (t[e] = i.list, t[e] && t[e].length) {
                var l = $("#tpl_popbox_GamePicker_item").html(),
                s = _.template(l, {
                    dataset: t[e]
                }),
                a = $(s);
                a.find(".j-select").click(function() {
                    var e = $(this),
                    i = e.parent("li");
                    i.hasClass("selected") ? (i.removeClass("selected"), e.removeClass("btn-success").text("选取")) : (i.addClass("selected"), e.addClass("btn-success").text("已选"))
                }),
                n.find(".game-list-panel" + e).empty().append(a);
                var r = i.page,
                g = $(r);
                g.filter("a:not(.disabled,.cur)").click(function() {
                    var i = $(this).attr("href"),
                    o = i.split("/");
                    return o = o[o.length - 1],
                    o = o.replace(/.html/, ""),
                    c(e, o),
                    !1
                }),
                n.find(".paginate:eq(" + (e - 1) + ")").empty().append(g)
            } else n.find(".game-list-panel" + e).empty().append("<p class='txtCenter'>对不起，暂无数据</p>");
            o && o(e)
        },
        s = {
            1 : 1,
            2 : 4,
            3 : 3,
            4 : 5
        };
        $.ajax({
            url: "/Design/getGame",
            type: "post",
            dataType: "json",
            data: {
                p: parseInt(i),
                type: parseInt(s[e])
            },
            success: function(e) {
                1 == e.status ? l(e) : HYD.hint("danger", "对不起，获取数据失败：" + e.msg)
            }
        })
    },
    l = function(e, o) {
        n.on("click", ".game-list-panel" + o + " .j-select",
        function() {
            var n = $(".game-list-panel" + o + " li").index($(this).parent("li"));
            i && i(t[o][n], 5),
            $.jBox.close(e)
        })
    };
    c(1, 1,
    function(e) {
        $.jBox.show({
            title: "选择营销活动",
            content: n,
            btnOK: {
                show: !1
            },
            btnCancel: {
                show: !1
            },
            onOpen: function(i) {
                l(i, e),
                n.find(".j-tab-game").one("click",
                function() {
                    var e = $(this).data("index");
                    c(e, 1,
                    function(e) {
                        l(i, e)
                    })
                })
            }
        })
    })
},
HYD.popbox.dplPickerColletion = function(e) {
    var i = {
        linkType: 1,
        callback: null
    },
    o = $.extend(!0, {},
    i, e);
    switch (parseInt(o.linkType)) {
    case 1://1 : "选择商品"
        HYD.popbox.GoodsAndGroupPicker("goods", o.callback);
        break;
    case 2://2 : "商品分组"
        HYD.popbox.GoodsAndGroupPicker("group", o.callback);
        break;
    case 3://3 : "专题页面"
        HYD.popbox.MgzAndMgzCate("mgz", o.callback);
        break;
    case 4://4 : "页面分类"
        HYD.popbox.MgzAndMgzCate("mgzCate", o.callback);
        break;
    case 5://5 : "营销活动"
        HYD.popbox.GamePicker("all", o.callback);
        break;
    case 6://6 : "店铺主页"
        var n = {
            title: "店铺主页",
            link: "/Shop/index"
        };
        o.callback(n, 6);
        break;
    case 7://7 : "会员主页"
        var n = {
            title: "会员主页",
            link: "/User/index"
        };
        o.callback(n, 7);
        break;
    case 8://8 : "分销申请"
        var n = {
            title: "分销申请",
            link: "/User/dist_apply"
        };
        o.callback(n, 8);
        break;
    case 9://9 : "购物车"
        var n = {
            title: "购物车",
            link: " /Item/cart"
        };
        o.callback(n, 9);
        break;
    case 10://10 : "全部商品"
        var n = {
            title: "全部商品",
            link: " /Item/lists"
        };
        o.callback(n, 10);
        break;
    case 11://11 : "自定义链接"
        var n = {
            title: "",
            link: ""
        };
        o.callback(n, 11);
        break;
    case 12://12 : "商品分类"
        var n = {
            title: "商品分类",
            link: "/Item/item_class"
        };
        o.callback(n, 12);
    case 13://13 : "我的订单"
        var n = {
            title: "我的订单",
            link: "http://csj.cloudcall.cn/wshop/mobile/user.php?act=order_list"
        };
        o.callback(n, 13)
    }
},
HYD.ajaxPopTable = function(e) {
    var i, o, n = {
        title: "",
        url: "",
        width: "auto",
        minHeight: "auto",
        data: {
            p: 1
        },
        tpl: "",
        onOpen: null,
        onPageChange: null
    },
    t = $.extend(!0, {},
    n, e),
    c = $("<div></div>"),
    l = function(e) {
        var n = t.tpl,
        s = t.url,
        a = function(s) {
            i = s;
            var a = _.template(n, s),
            r = $(a);
            c.empty().append(r),
            c.find(".paginate a:not(.disabled,.cur)").click(function() {
                for (var e = $(this).attr("href"), i = e.split("/"), o = 0; o < i.length; o++) if ("p" == i[o]) {
                    t.data.p = i[o + 1].replace(/.html/, ""),
                    l();
                    break
                }
                return ! 1
            }),
            e && e(),
            t.onPageChange && t.onPageChange(o, i)
        };
        $.ajax({
            url: s,
            type: "post",
            dataType: "json",
            data: t.data,
            success: function(e) {
                1 == e.status ? a(e) : HYD.hint("danger", "对不起，获取数据失败：" + e.msg)
            }
        })
    };
    l(function() {
        $.jBox.show({
            title: t.title,
            width: t.width,
            minHeight: t.minHeight,
            content: c,
            btnOK: {
                show: !1
            },
            btnCancel: {
                show: !1
            },
            onOpen: function(e) {
                o = e,
                t.onOpen && t.onOpen(e, i)
            }
        })
    })
},
HYD.regRules = {
    email: /^[a-z]([a-z0-9]*[-_]?[a-z0-9]+)*@([a-z0-9]*[-_]?[a-z0-9]+)+[\.][a-z]{2,3}([\.][a-z]{2})?$/i,
    mobphone: /^(1(([35][0-9])|(47)|[8][01236789]))\d{8}$/,
    telphone: /^0\d{2,3}(\-)?\d{7,8}$/,
    integer: /^\d+$/,
    "float": /^[\d]*\.?[\d]+$/
},
HYD.popbox.iconimgsrc = {
    data: {
        style1: {
            color0: ["/Public/images/icon/style1/color0/icon_home.png", "/Public/images/icon/style1/color0/icon_allgoods.png", "/Public/images/icon/style1/color0/icon_newgoods.png", "/Public/images/icon/style1/color0/icon_user.png", "/Public/images/icon/style1/color0/icon_fx.png", "/Public/images/icon/style1/color0/icon_active.png", "/Public/images/icon/style1/color0/icon_hotsale.png", "/Public/images/icon/style1/color0/icon_subject.png", "/Public/images/icon/style1/color0/style1_gz0.png", "/Public/images/icon/style1/color0/style1_shopcar0.png"],
            color1: ["/Public/images/icon/style1/color1/icon_home.png", "/Public/images/icon/style1/color1/icon_allgoods.png", "/Public/images/icon/style1/color1/icon_newgoods.png", "/Public/images/icon/style1/color1/icon_user.png", "/Public/images/icon/style1/color1/icon_fx.png", "/Public/images/icon/style1/color1/icon_active.png", "/Public/images/icon/style1/color1/icon_hotsale.png", "/Public/images/icon/style1/color1/icon_subject.png", "/Public/images/icon/style1/color1/style1_gz1.png", "/Public/images/icon/style1/color1/style1_shopcar1.png"],
            color2: ["/Public/images/icon/style1/color2/icon_home.png", "/Public/images/icon/style1/color2/icon_allgoods.png", "/Public/images/icon/style1/color2/icon_newgoods.png", "/Public/images/icon/style1/color2/icon_user.png", "/Public/images/icon/style1/color2/icon_fx.png", "/Public/images/icon/style1/color2/icon_active.png", "/Public/images/icon/style1/color2/icon_hotsale.png", "/Public/images/icon/style1/color2/icon_subject.png", "/Public/images/icon/style1/color2/style1_gz2.png", "/Public/images/icon/style1/color2/style1_shopcar2.png"],
            color3: ["/Public/images/icon/style1/color3/icon_home.png", "/Public/images/icon/style1/color3/icon_allgoods.png", "/Public/images/icon/style1/color3/icon_newgoods.png", "/Public/images/icon/style1/color3/icon_user.png", "/Public/images/icon/style1/color3/icon_fx.png", "/Public/images/icon/style1/color3/icon_active.png", "/Public/images/icon/style1/color3/icon_hotsale.png", "/Public/images/icon/style1/color3/icon_subject.png", "/Public/images/icon/style1/color3/style1_gz3.png", "/Public/images/icon/style1/color3/style1_shopcar3.png"],
            color4: ["/Public/images/icon/style1/color4/icon_home.png", "/Public/images/icon/style1/color4/icon_allgoods.png", "/Public/images/icon/style1/color4/icon_newgoods.png", "/Public/images/icon/style1/color4/icon_user.png", "/Public/images/icon/style1/color4/icon_fx.png", "/Public/images/icon/style1/color4/icon_active.png", "/Public/images/icon/style1/color4/icon_hotsale.png", "/Public/images/icon/style1/color4/icon_subject.png", "/Public/images/icon/style1/color4/style1_gz4.png", "/Public/images/icon/style1/color4/style1_shopcar4.png"],
            color5: ["/Public/images/icon/style1/color5/icon_home.png", "/Public/images/icon/style1/color5/icon_allgoods.png", "/Public/images/icon/style1/color5/icon_newgoods.png", "/Public/images/icon/style1/color5/icon_user.png", "/Public/images/icon/style1/color5/icon_fx.png", "/Public/images/icon/style1/color5/icon_active.png", "/Public/images/icon/style1/color5/icon_hotsale.png", "/Public/images/icon/style1/color5/icon_subject.png", "/Public/images/icon/style1/color5/style1_gz5.png", "/Public/images/icon/style1/color5/style1_shopcar5.png"],
            color6: ["/Public/images/icon/style1/color6/icon_home.png", "/Public/images/icon/style1/color6/icon_allgoods.png", "/Public/images/icon/style1/color6/icon_newgoods.png", "/Public/images/icon/style1/color6/icon_user.png", "/Public/images/icon/style1/color6/icon_fx.png", "/Public/images/icon/style1/color6/icon_active.png", "/Public/images/icon/style1/color6/icon_hotsale.png", "/Public/images/icon/style1/color6/icon_subject.png", "/Public/images/icon/style1/color6/style1_gz6.png", "/Public/images/icon/style1/color6/style1_shopcar6.png"],
            color7: ["/Public/images/icon/style1/color7/icon_home.png", "/Public/images/icon/style1/color7/icon_allgoods.png", "/Public/images/icon/style1/color7/icon_newgoods.png", "/Public/images/icon/style1/color7/icon_user.png", "/Public/images/icon/style1/color7/icon_fx.png", "/Public/images/icon/style1/color7/icon_active.png", "/Public/images/icon/style1/color7/icon_hotsale.png", "/Public/images/icon/style1/color7/icon_subject.png", "/Public/images/icon/style1/color7/style1_gz7.png", "/Public/images/icon/style1/color7/style1_shopcar7.png"],
            color8: ["/Public/images/icon/style1/color8/icon_home.png", "/Public/images/icon/style1/color8/icon_allgoods.png", "/Public/images/icon/style1/color8/icon_newgoods.png", "/Public/images/icon/style1/color8/icon_user.png", "/Public/images/icon/style1/color8/icon_fx.png", "/Public/images/icon/style1/color8/icon_active.png", "/Public/images/icon/style1/color8/icon_hotsale.png", "/Public/images/icon/style1/color8/icon_subject.png", "/Public/images/icon/style1/color8/style1_gz8.png", "/Public/images/icon/style1/color8/style1_shopcar8.png"]
        },
        style2: {
            color0: ["/Public/images/icon/style2/color0/icon_home.png", "/Public/images/icon/style2/color0/icon_allgoods.png", "/Public/images/icon/style2/color0/icon_newgoods.png", "/Public/images/icon/style2/color0/icon_user.png", "/Public/images/icon/style2/color0/icon_fx.png", "/Public/images/icon/style2/color0/icon_active.png", "/Public/images/icon/style2/color0/icon_hotsale.png", "/Public/images/icon/style2/color0/icon_subject.png", "/Public/images/icon/style2/color0/style2_gz0.png", "/Public/images/icon/style2/color0/style2_shopcar0.png"],
            color1: ["/Public/images/icon/style2/color1/icon_home.png", "/Public/images/icon/style2/color1/icon_allgoods.png", "/Public/images/icon/style2/color1/icon_newgoods.png", "/Public/images/icon/style2/color1/icon_user.png", "/Public/images/icon/style2/color1/icon_fx.png", "/Public/images/icon/style2/color1/icon_active.png", "/Public/images/icon/style2/color1/icon_hotsale.png", "/Public/images/icon/style2/color1/icon_subject.png", "/Public/images/icon/style2/color1/style2_gz1.png", "/Public/images/icon/style2/color1/style2_shopcar1.png"],
            color2: ["/Public/images/icon/style2/color2/icon_home.png", "/Public/images/icon/style2/color2/icon_allgoods.png", "/Public/images/icon/style2/color2/icon_newgoods.png", "/Public/images/icon/style2/color2/icon_user.png", "/Public/images/icon/style2/color2/icon_fx.png", "/Public/images/icon/style2/color2/icon_active.png", "/Public/images/icon/style2/color2/icon_hotsale.png", "/Public/images/icon/style2/color2/icon_subject.png", "/Public/images/icon/style2/color2/style2_gz2.png", "/Public/images/icon/style2/color2/style2_shopcar2.png"],
            color3: ["/Public/images/icon/style2/color3/icon_home.png", "/Public/images/icon/style2/color3/icon_allgoods.png", "/Public/images/icon/style2/color3/icon_newgoods.png", "/Public/images/icon/style2/color3/icon_user.png", "/Public/images/icon/style2/color3/icon_fx.png", "/Public/images/icon/style2/color3/icon_active.png", "/Public/images/icon/style2/color3/icon_hotsale.png", "/Public/images/icon/style2/color3/icon_subject.png", "/Public/images/icon/style2/color3/style2_gz3.png", "/Public/images/icon/style2/color3/style2_shopcar3.png"],
            color4: ["/Public/images/icon/style2/color4/icon_home.png", "/Public/images/icon/style2/color4/icon_allgoods.png", "/Public/images/icon/style2/color4/icon_newgoods.png", "/Public/images/icon/style2/color4/icon_user.png", "/Public/images/icon/style2/color4/icon_fx.png", "/Public/images/icon/style2/color4/icon_active.png", "/Public/images/icon/style2/color4/icon_hotsale.png", "/Public/images/icon/style2/color4/icon_subject.png", "/Public/images/icon/style2/color4/style2_gz4.png", "/Public/images/icon/style2/color4/style2_shopcar4.png"],
            color5: ["/Public/images/icon/style2/color5/icon_home.png", "/Public/images/icon/style2/color5/icon_allgoods.png", "/Public/images/icon/style2/color5/icon_newgoods.png", "/Public/images/icon/style2/color5/icon_user.png", "/Public/images/icon/style2/color5/icon_fx.png", "/Public/images/icon/style2/color5/icon_active.png", "/Public/images/icon/style2/color5/icon_hotsale.png", "/Public/images/icon/style2/color5/icon_subject.png", "/Public/images/icon/style2/color5/style2_gz5.png", "/Public/images/icon/style2/color5/style2_shopcar5.png"],
            color6: ["/Public/images/icon/style2/color6/icon_home.png", "/Public/images/icon/style2/color6/icon_allgoods.png", "/Public/images/icon/style2/color6/icon_newgoods.png", "/Public/images/icon/style2/color6/icon_user.png", "/Public/images/icon/style2/color6/icon_fx.png", "/Public/images/icon/style2/color6/icon_active.png", "/Public/images/icon/style2/color6/icon_hotsale.png", "/Public/images/icon/style2/color6/icon_subject.png", "/Public/images/icon/style2/color6/style2_gz6.png", "/Public/images/icon/style2/color6/style2_shopcar6.png"],
            color7: ["/Public/images/icon/style2/color7/icon_home.png", "/Public/images/icon/style2/color7/icon_allgoods.png", "/Public/images/icon/style2/color7/icon_newgoods.png", "/Public/images/icon/style2/color7/icon_user.png", "/Public/images/icon/style2/color7/icon_fx.png", "/Public/images/icon/style2/color7/icon_active.png", "/Public/images/icon/style2/color7/icon_hotsale.png", "/Public/images/icon/style2/color7/icon_subject.png", "/Public/images/icon/style2/color7/style2_gz7.png", "/Public/images/icon/style2/color7/style2_shopcar7.png"],
            color8: ["/Public/images/icon/style2/color8/icon_home.png", "/Public/images/icon/style2/color8/icon_allgoods.png", "/Public/images/icon/style2/color8/icon_newgoods.png", "/Public/images/icon/style2/color8/icon_user.png", "/Public/images/icon/style2/color8/icon_fx.png", "/Public/images/icon/style2/color8/icon_active.png", "/Public/images/icon/style2/color8/icon_hotsale.png", "/Public/images/icon/style2/color8/icon_subject.png", "/Public/images/icon/style2/color8/style2_gz8.png", "/Public/images/icon/style2/color8/style2_shopcar8.png"]
        },
        style3: {
            color0: ["/Public/images/icon/style3/color0/icon_home.png", "/Public/images/icon/style3/color0/icon_allgoods.png", "/Public/images/icon/style3/color0/icon_newgoods.png", "/Public/images/icon/style3/color0/icon_user.png", "/Public/images/icon/style3/color0/icon_fx.png", "/Public/images/icon/style3/color0/icon_active.png", "/Public/images/icon/style3/color0/icon_hotsale.png", "/Public/images/icon/style3/color0/icon_subject.png", "/Public/images/icon/style3/color0/style3_gz0.png", "/Public/images/icon/style3/color0/style3_shopcar0.png"],
            color1: ["/Public/images/icon/style3/color1/icon_home.png", "/Public/images/icon/style3/color1/icon_allgoods.png", "/Public/images/icon/style3/color1/icon_newgoods.png", "/Public/images/icon/style3/color1/icon_user.png", "/Public/images/icon/style3/color1/icon_fx.png", "/Public/images/icon/style3/color1/icon_active.png", "/Public/images/icon/style3/color1/icon_hotsale.png", "/Public/images/icon/style3/color1/icon_subject.png", "/Public/images/icon/style3/color1/style3_gz1.png", "/Public/images/icon/style3/color1/style3_shopcar1.png"],
            color2: ["/Public/images/icon/style3/color2/icon_home.png", "/Public/images/icon/style3/color2/icon_allgoods.png", "/Public/images/icon/style3/color2/icon_newgoods.png", "/Public/images/icon/style3/color2/icon_user.png", "/Public/images/icon/style3/color2/icon_fx.png", "/Public/images/icon/style3/color2/icon_active.png", "/Public/images/icon/style3/color2/icon_hotsale.png", "/Public/images/icon/style3/color2/icon_subject.png", "/Public/images/icon/style3/color2/style3_gz2.png", "/Public/images/icon/style3/color2/style3_shopcar2.png"],
            color3: ["/Public/images/icon/style3/color3/icon_home.png", "/Public/images/icon/style3/color3/icon_allgoods.png", "/Public/images/icon/style3/color3/icon_newgoods.png", "/Public/images/icon/style3/color3/icon_user.png", "/Public/images/icon/style3/color3/icon_fx.png", "/Public/images/icon/style3/color3/icon_active.png", "/Public/images/icon/style3/color3/icon_hotsale.png", "/Public/images/icon/style3/color3/icon_subject.png", "/Public/images/icon/style3/color3/style3_gz3.png", "/Public/images/icon/style3/color3/style3_shopcar3.png"],
            color4: ["/Public/images/icon/style3/color4/icon_home.png", "/Public/images/icon/style3/color4/icon_allgoods.png", "/Public/images/icon/style3/color4/icon_newgoods.png", "/Public/images/icon/style3/color4/icon_user.png", "/Public/images/icon/style3/color4/icon_fx.png", "/Public/images/icon/style3/color4/icon_active.png", "/Public/images/icon/style3/color4/icon_hotsale.png", "/Public/images/icon/style3/color4/icon_subject.png", "/Public/images/icon/style3/color4/style3_gz4.png", "/Public/images/icon/style3/color4/style3_shopcar4.png"],
            color5: ["/Public/images/icon/style3/color5/icon_home.png", "/Public/images/icon/style3/color5/icon_allgoods.png", "/Public/images/icon/style3/color5/icon_newgoods.png", "/Public/images/icon/style3/color5/icon_user.png", "/Public/images/icon/style3/color5/icon_fx.png", "/Public/images/icon/style3/color5/icon_active.png", "/Public/images/icon/style3/color5/icon_hotsale.png", "/Public/images/icon/style3/color5/icon_subject.png", "/Public/images/icon/style3/color5/style3_gz5.png", "/Public/images/icon/style3/color5/style3_shopcar5.png"],
            color6: ["/Public/images/icon/style3/color6/icon_home.png", "/Public/images/icon/style3/color6/icon_allgoods.png", "/Public/images/icon/style3/color6/icon_newgoods.png", "/Public/images/icon/style3/color6/icon_user.png", "/Public/images/icon/style3/color6/icon_fx.png", "/Public/images/icon/style3/color6/icon_active.png", "/Public/images/icon/style3/color6/icon_hotsale.png", "/Public/images/icon/style3/color6/icon_subject.png", "/Public/images/icon/style3/color6/style3_gz6.png", "/Public/images/icon/style3/color6/style3_shopcar6.png"],
            color7: ["/Public/images/icon/style3/color7/icon_home.png", "/Public/images/icon/style3/color7/icon_allgoods.png", "/Public/images/icon/style3/color7/icon_newgoods.png", "/Public/images/icon/style3/color7/icon_user.png", "/Public/images/icon/style3/color7/icon_fx.png", "/Public/images/icon/style3/color7/icon_active.png", "/Public/images/icon/style3/color7/icon_hotsale.png", "/Public/images/icon/style3/color7/icon_subject.png", "/Public/images/icon/style3/color7/style3_gz7.png", "/Public/images/icon/style3/color7/style3_shopcar7.png"],
            color8: ["/Public/images/icon/style3/color8/icon_home.png", "/Public/images/icon/style3/color8/icon_allgoods.png", "/Public/images/icon/style3/color8/icon_newgoods.png", "/Public/images/icon/style3/color8/icon_user.png", "/Public/images/icon/style3/color8/icon_fx.png", "/Public/images/icon/style3/color8/icon_active.png", "/Public/images/icon/style3/color8/icon_hotsale.png", "/Public/images/icon/style3/color8/icon_subject.png", "/Public/images/icon/style3/color8/style3_gz8.png", "/Public/images/icon/style3/color8/style3_shopcar8.png"]
        }
    }
},
$(function() {
    $(".header-ctrl-item").hover(function() {
        var e = $(this);
        e.data("type"),
        e.data("cache");
        e.find(".header-ctrl-item-children").length && e.addClass("show")
    },
    function() {
        $(this).removeClass("show")
    }),
    $(".tips").tooltips();
    try {
        var e = $(".container .inner"),
        i = function() {
            HYD.Constant.windowHeight = $(this).height(),
            HYD.Constant.windowWidth = $(this).width(),
            HYD.Constant.containerOffset = e.offset(),
            HYD.Constant.containerWidth = e.outerWidth()
        },
        o = function() {
            $("#j-gotop").css("left", HYD.Constant.containerWidth + HYD.Constant.containerOffset.left + 10)
        };
        $(window).resize(function() {
            i(),
            o()
        }),
        i(),
        o()
    } catch(n) {}
    $(window).scroll(function() {
        $(this).scrollTop() >= 150 ? $("#j-gotop").fadeIn(300) : $("#j-gotop").fadeOut(300)
    }),
    $.ajaxSetup({
        timeout: 2e4,
        error: function(e, i, o) {
            "timeout" == i && (HYD && HYD.hint ? HYD.hint("warning", "请求超时，请重试！") : alert("请求超时，请重试！"), $.jBox.hideloading())
        }
    }),
    function() {
        var e = function() {
            $.jBox.show({
                title: "温馨提示",
                width: 520,
                content: $("#tpl_jbox_domain_tip").html(),
                btnOK: {
                    show: !1
                },
                btnCancel: {
                    show: !1
                },
                onOpen: function() {},
                onClosed: function() {}
            })
        };
        window.is_domain_tip && e()
    } ()
}),
$(function() {
    var e = $(".wxtables").find("input[type='checkbox'].table-ckbs");
    $(".btn_table_selectAll").click(function() {
        e.attr("checked", !0)
    }),
    $(".btn_table_Cancle").click(function() {
        e.attr("checked", !1)
    }),
    $(".paginate").each(function() {
        var e = $(this),
        i = e.find("input"),
        o = e.find(".goto"),
        n = window.location.href.toString();
        i.focus(function() {
            $(this).addClass("focus").siblings(".goto").addClass("focus")
        }),
        i.blur(function() {
            "" == $(this).val() && $(this).removeClass("focus").siblings(".goto").removeClass("focus")
        }),
        i.keypress(function(e) {
            var i = window.event ? e.keyCode: e.which;
            return 13 == i && (window.location.href = $(this).siblings("a.goto").attr("href")),
            8 == i || 46 == i || 37 == i || 39 == i ? !0 : 48 > i || i > 57 ? !1 : !0
        }),
        i.keyup(function(e) {
            var i = $(this).val(),
            t = n.split("/"),
            c = t.length,
            l = !1,
            s = !1;
            "" == t[c - 1] && (t.pop(), c = t.length, l = !0),
            (l || "p" != t[c - 2]) && (t.push("p"), c = t.length, s = !0),
            l || s ? t[c] = i + ".html": t[c - 1] = i + ".html",
            o.attr("href", t.join("/"))
        })
    })
}),
$(function() {
    $(document).on("click", ".tabs .tabs_a",
    function() {
        var e = $(this),
        i = e.data("origin"),
        o = 0;
        e.parent().hasClass("wizardstep") || e.parent().hasClass("nochange") || (e.addClass("active").siblings(".tabs_a").removeClass("active"), e.data("index") ? (o = e.data("index"), $(".tabs-content[data-origin='" + i + "']").find(".tc[data-index='" + o + "']").removeClass("hide").siblings(".tc").addClass("hide")) : (o = e.index(), $(".tabs-content[data-origin='" + i + "']").find(".tc:eq(" + o + ")").removeClass("hide").siblings(".tc").addClass("hide")))
    })
}),
$(function() {
    $(".alert.disable-del").each(function() {
        var e = $('<a href="javascript:;" class="alert-delete" title="隐藏"><i class="gicon-remove"></i></a>');
        e.click(function() {
            $(this).parent(".alert").fadeOut()
        }),
        $(this).append(e)
    })
}),
function(e, i, o) {
    var n = {
        trigger: "hover"
    };
    e.fn.tooltips = function() {
        return this.each(function() {
            var i = function() {
                var i = e(this),
                o = i.data("content"),
                n = i.offset(),
                t = {
                    width: i.outerWidth(!0),
                    height: i.outerHeight(!0)
                },
                c = i.data("placement");
                if (this.tip = null, o = void 0 == o || "" == o ? o = i.text() : o, null == this.$tip) {
                    var l = e("#tpl_tooltips").html();
                    if (void 0 == l || "" == l) return void console.log("Please check template!");
                    var s = _.template(l, {
                        content: o,
                        placement: c
                    });
                    this.$tip = e(s),
                    e("body").append(this.$tip);
                    var a = 0,
                    r = 0,
                    g = this.$tip.outerWidth(!0),
                    p = this.$tip.outerHeight(!0);
                    switch (c) {
                    case "top":
                        a = n.top + t.height + 5,
                        r = n.left - 5;
                        break;
                    case "bottom":
                        a = n.top - p - 5,
                        r = n.left - 5;
                        break;
                    case "left":
                        a = n.top - t.height / 2,
                        r = n.left + t.width + 5;
                        break;
                    case "right":
                        a = n.top + t.height / 2 - p / 2,
                        r = n.left - g - 5
                    }
                    this.$tip.css({
                        top: a,
                        left: r
                    })
                }
                this.$tip.stop(!0, !0).fadeIn(300)
            },
            o = function() {
                this.$tip && this.$tip.stop(!0, !0).fadeOut(300)
            },
            t = e(this).data("trigger");
            switch (t = void 0 != t && "" != t ? t: n.trigger) {
            case "hover":
                e(this).hover(i, o);
                break;
            case "click":
                e(this).click(i).mouseleave(o)
            }
        })
    }
} (jQuery, document, window),
$(function() {
    $(document).on("mouseover", ".droplist .j-droplist-toggle",
    function() {
        $(this).siblings(".droplist-menu").show()
    }),
    $(document).on("mouseleave", ".droplist .droplist-menu",
    function() {
        $(this).hide()
    }),
    $(document).on("mouseleave", ".droplist",
    function() {
        $(this).find(".droplist-menu").hide()
    }),
    $(document).on("click", ".droplist .droplist-menu a",
    function() {
        $(this).parents(".droplist-menu").hide()
    })
}),
function(e, i, o) {
    var n = {
        callback: null
    },
    t = {},
    c = {
        width: e(o).width(),
        height: e(o).height()
    },
    l = {
        main: e("#tpl_albums_main").html(),
        overlay: e("#tpl_albums_overlay").html(),
        tree: e("#tpl_albums_tree").html(),
        treeFn: e("#tpl_albums_tree_fn").html(),
        imgs: e("#tpl_albums_imgs").html()
    },
    s = {
        folderID: "",
        moveFolderID: 0,
        imgs: {}
    },
    a = {
        getFolderTree: "http://localhost/demo/json/getFolderTree.json",
        getImgList: "http://localhost/demo/json/getImgList.json",
        addImg: "http://localhost/demo/json/uploadFile.json",
        moveImg: "/Design/moveImg",
        delImg: "http://localhost/demo/json/delImg.json",
        addFolder: "/Design/addFolder",
        renameFolder: "/Design/renameFolder",
        delFolder: "/Design/delFolder",
        moveCateImg: "/Design/moveCateImg",
        renameImg: "http://localhost/demo/json/renameImg.json"
    },
    r = function(i, o, n, t) {
        var c = arguments.callee,
        r = i.find("#j-panelImgs"),
        g = i.find("#j-panelPaginate"),
        p = o >= 0 ? {
            id: o,
            p: n,
            file_name: t
        }: {
            p: n,
            file_name: t
        };
        e.ajax({
            url: a.getImgList + "?v=" + Math.round(100 * Math.random()),
            type: "post",
            dataType: "json",
            data: p,
            beforeSend: function() {
                r.find(".j-loading").show()
            },
            success: function(n) {
                if (1 == n.status) {
                    s.imgs = _.isArray(n.data) ? n.data: null;
                    var a = e(_.template(l.imgs, {
                        dataset: s.imgs
                    })),
                    p = e(n.page);
                    r.find(".j-loading").hide().end().find("ul,.j-noPic").remove().end().append(a),
                    g.empty().append(p),
                    p.filter("a:not(.disabled,.cur)").click(function() {
                        var n = e(this).attr("href"),
                        l = n.split("/");
                        return l = l[l.length - 1],
                        l = l.replace(/.html/, ""),
                        c(i, o, l, t),
                        !1
                    })
                } else HYD.hint("danger", "对不起，图片获取失败：" + n.msg)
            }
        })
    },
    g = function(i) {
        e.ajax({
            url: a.getFolderTree + "?v=" + Math.round(100 * Math.random()),
            type: "post",
            dataType: "json",
            success: function(e) {
                if (1 == e.status) {
                    var o = e.data.tree,
                    n = i.find("#j-panelTree");
                    o.push({
                        id: "-1",
                        picNum: e.data.total
                    });
                    var t = function(e) {
                        var i = arguments.callee;
                        _.each(e,
                        function(e) {
                            n.find("dt[data-id=" + e.id + "]").find(".j-num").text(e.picNum),
                            e.subFolder && e.subFolder.length && i(e.subFolder)
                        })
                    };
                    t(o)
                } else console.log("更新文件夹树图片数量失败")
            }
        })
    };
    e.albums = function(o) {
        t = e.extend(!0, {},
        n, o);
        var p = e("#albums"),
        d = e("#albums-overlay");
        if (!p.length) {
            p = e(l.main),
            d = e(l.overlay),
            e("body").append(p.hide(), d.hide());
            var u = p.find("#j-close"),
            m = p.find("#j-addFolder"),
            f = p.find("#j-renameFolder"),
            b = p.find("#j-delFolder"),
            h = p.find("#j-addImg"),
            y = p.find("#j-moveImg"),
            v = p.find("#j-cateImg"),
            P = p.find("#j-delImg"),
            $ = p.find("#j-panelTree"),
            j = function() {
                p.fadeOut("fast"),
                d.fadeOut("fast"),
                p.find("#j-panelImgs li").removeClass("selected")
            };
            e.ajax({
                url: a.getFolderTree + "?v=" + Math.round(100 * Math.random()),
                type: "post",
                dataType: "json",
                success: function(i) {
                    if (1 == i.status) {
                        var o = _.template(l.treeFn),
                        n = o({
                            dataset: i.data.tree,
                            templateFn: o
                        }),
                        t = e(_.template(l.tree, {
                            dataset: i.data,
                            nodes: n
                        }));
                        $.empty().append(t),
                        p.find(".j-albumsNodes > dt:first").click()
                    } else HYD.hint("danger", "对不起，文件夹获取失败：" + i.msg)
                }
            }),
            e(i).on("click", ".j-albumsNodes dt",
            function(i) {
                var o = e(this),
                n = o.data("id");
                if (o.parents(".j-albumsNodes").find("dt").removeClass("selected"), o.addClass("selected"), e(i.currentTarget).parents(".j-propagation").length) s.moveFolderID = n;
                else {
                    if (s.folderID == n) return;
                    s.folderID = n;
                    var t = o.data("add"),
                    c = o.data("rename"),
                    l = o.data("del");
                    1 == t ? m.show() : m.hide(),
                    1 == c ? f.show() : f.hide(),
                    1 == l ? b.show() : b.hide(),
                    r(p, s.folderID, 1)
                }
                return ! 1
            }),
            e(i).on("click", ".j-albumsNodes dt i",
            function() {
                var i = e(this),
                o = i.parent("dt").siblings("dd").find(" > dl"),
                n = o.length;
                if (n) return i.hasClass("open") ? (i.removeClass("open"), o.slideUp(200)) : (i.addClass("open"), o.slideDown(200)),
                !1
            });
            var x = 0;
            p.on("click", "#j-panelImgs li",
            function() {
                return e(this).toggleClass("selected"),
                e(this).find(".img-name-edit").hide(),
                e(this).data("selectindex", x++),
                !1
            }),
            p.on("click", "#j-panelImgs li .albums-edit",
            function() {
                return e(this).children(".img-name-edit").show(),
                !1
            }),
            p.on("click", "#j-useImg",
            function() {
                if (!p.find("#j-panelImgs li.selected").length) return void HYD.hint("warning", "请选择图片！");
                var i = {},
                o = [];
                p.find("#j-panelImgs li.selected").each(function() {
                    i[e(this).data("selectindex")] = s.imgs[e(this).index()].file
                });
                for (var n in i) o.push(i[n]);
                return t.callback && (t.callback(o), j()),
                !1
            }),
            m.click(function() {
                var i = [{
                    id: 0,
                    name: "未命名文件夹",
                    picNum: 0
                }];
                e.ajax({
                    url: a.addFolder,
                    type: "post",
                    dataType: "json",
                    data: {
                        name: i.name,
                        parent_id: s.folderID
                    },
                    success: function(o) {
                        if (1 == o.status) {
                            i[0].id = o.data;
                            var n = _.template(l.treeFn, {
                                dataset: i
                            });
                            $render = e(n),
                            $.find("dt[data-id='" + s.folderID + "']").siblings("dd").append($render),
                            $render.css("display", "block"),
                            $render.parent().siblings("dt").find(".icon-folder").addClass("open"),
                            $render.find("dt:first").click(),
                            f.click()
                        } else HYD.hint("danger", "对不起，添加失败：" + o.msg)
                    }
                })
            }),
            f.click(function() {
                var i = $.find("dt[data-id='" + s.folderID + "']"),
                o = i.find(".j-treeShowTxt"),
                n = i.find(".j-ip"),
                t = i.find(".j-loading");
                o.hide(),
                n.show().focus().select(),
                n.blur(function() {
                    var i = e(this).val();
                    e.ajax({
                        url: a.renameFolder,
                        type: "post",
                        dataType: "json",
                        data: {
                            name: i,
                            category_img_id: s.folderID
                        },
                        beforeSend: function() {
                            t.css("display", "inline-block")
                        },
                        success: function(e) {
                            1 == e.status ? o.find(".j-name").text(i) : HYD.hint("danger", "对不起，重命名失败：" + e.msg),
                            o.show(),
                            n.hide(),
                            t.hide()
                        }
                    })
                })
            }),
            b.click(function() {
                var i = e("#tpl_albums_delFolder").html(),
                o = e(i),
                n = o.find("input[name=isDelImgs]");
                e.jBox.show({
                    title: "提示",
                    content: o,
                    btnOK: {
                        onBtnClick: function(i) {
                            var o = n.filter(":checked").val();
                            e.ajax({
                                url: a.delFolder,
                                type: "post",
                                dataType: "json",
                                data: {
                                    type: o,
                                    id: s.folderID
                                },
                                success: function(e) {
                                    if (1 == e.status) {
                                        g(p);
                                        var i = $.find("dt[data-id=" + s.folderID + "]").parent("dl");
                                        i.parent("dd").siblings("dt").click(),
                                        i.remove()
                                    } else HYD.hint("danger", "对不起，删除失败失败：" + e.msg)
                                }
                            }),
                            e.jBox.close(i)
                        }
                    }
                })
            }),
            P.click(function() {
                if (!p.find("#j-panelImgs li.selected").length) return void HYD.hint("warning", "请选择要删除的图片！");
                var i = [];
                p.find("#j-panelImgs li.selected").each(function() {
                    i.push(e(this).data("id"))
                }),
                e.ajax({
                    url: a.delImg,
                    type: "post",
                    dataType: "json",
                    data: {
                        file_id: i
                    },
                    success: function(i) {
                        1 == i.status ? (p.find("#j-panelImgs li.selected").fadeOut(300,
                        function() {
                            e(this).remove()
                        }), g(p)) : HYD.hint("danger", "对不起，删除失败：" + i.msg)
                    }
                })
            }),
            h.uploadify({
                debug: !1,
                auto: !0,
                width: 86,
                height: 28,
                multi: !0,
                swf: "/demo/Public/plugins/uploadify/uploadify.swf",
                uploader: a.addImg,
                buttonText: "上传图片",
                fileSizeLimit: "5MB",
                fileTypeExts: "*.jpg; *.jpeg; *.png; *.gif; *.bmp",
                onUploadStart: function() {
                    h.uploadify("settings", "formData", {
                        cate_id: -1 == s.folderID ? 0 : s.folderID,
                        PHPSESSID: e.cookie("PHPSESSID")
                    })
                },
                onSelectError: function(e, i, o) {
                    switch (i) {
                    case - 100 : HYD.hint("danger", "对不起，系统只允许您一次最多上传10个文件");
                        break;
                    case - 110 : HYD.hint("danger", "对不起，文件 [" + e.name + "] 大小超出5MB！");
                        break;
                    case - 120 : HYD.hint("danger", "文件 [" + e.name + "] 大小异常！");
                        break;
                    case - 130 : HYD.hint("danger", "文件 [" + e.name + "] 类型不正确！")
                    }
                },
                onFallback: function() {
                    HYD.hint("danger", "您未安装FLASH控件，无法上传图片！请安装FLASH控件后再试。")
                },
                onQueueComplete: function(e) {
                    r(p, s.folderID, 1),
                    g(p)
                },
                onUploadError: function(e, i, o, n) {
                    HYD.hint("danger", "对不起：" + e.name + "上传失败：" + n)
                }
            }),
            y.click(function() {
                if (!p.find("#j-panelImgs li.selected").length) return void HYD.hint("warning", "请选择要移动的图片！");
                var i = e("<div class='albums-cl-tree j-albumsNodes j-propagation'></div>");
                i.append($.find("dd:first").contents().clone()),
                e.jBox.show({
                    title: "请选择移动文件夹",
                    content: i,
                    onOpen: function() {
                        i.find("dt:first").click()
                    },
                    btnOK: {
                        onBtnClick: function(i) {
                            var o = [];
                            p.find("#j-panelImgs li.selected").each(function() {
                                o.push(e(this).data("id"))
                            }),
                            e.ajax({
                                url: a.moveImg,
                                type: "post",
                                dataType: "json",
                                data: {
                                    file_id: o,
                                    cate_id: s.moveFolderID
                                },
                                success: function(i) {
                                    1 == i.status ? (p.find("#j-panelImgs li.selected").fadeOut(300,
                                    function() {
                                        e(this).remove()
                                    }), g(p), HYD.hint("success", "恭喜您，操作成功！")) : HYD.hint("danger", "对不起，移动失败：" + i.msg)
                                }
                            }),
                            e.jBox.close(i)
                        }
                    }
                })
            }),
            v.click(function() {
                if (!s.folderID) return void HYD.hint("warning", "请选择要移动的分类！");
                var i = e("<div class='albums-cl-tree j-albumsNodes j-propagation'></div>");
                i.append($.find("dd:first").contents().clone()),
                e.jBox.show({
                    title: "请选择移动文件夹",
                    content: i,
                    onOpen: function() {
                        i.find("dt:first").click()
                    },
                    btnOK: {
                        onBtnClick: function(i) {
                            e.ajax({
                                url: a.moveCateImg,
                                type: "post",
                                dataType: "json",
                                data: {
                                    cid: s.folderID,
                                    cate_id: s.moveFolderID
                                },
                                success: function(i) {
                                    1 == i.status ? (p.find("#j-panelImgs li.selected").fadeOut(300,
                                    function() {
                                        e(this).remove()
                                    }), g(p), HYD.hint("success", "恭喜您，操作成功！")) : HYD.hint("danger", "对不起，移动失败：" + i.msg)
                                }
                            }),
                            e.jBox.close(i)
                        }
                    }
                })
            }),
            u.click(j)
        }
        p.fadeIn("fast"),
        d.fadeIn("fast"),
        p.outerHeight() >= c.height && p.css({
            position: "absolute",
            marginTop: "0",
            top: e(i).scrollTop() + 10
        }),
        p.on("click", ".renameImg",
        function() {
            var i = e(this),
            o = i.closest("li").data("id"),
            n = i.siblings("input.file_name").val();
            return e.ajax({
                url: a.renameImg,
                type: "post",
                dataType: "json",
                data: {
                    file_id: o,
                    file_name: n
                },
                success: function(e) {
                    1 == e.status ? (i.closest(".albums-edit").children(".img-name-edit").hide(), i.closest(".albums-edit").children("p").html(n), i.closest(".albums-edit").children("input.file_name").val(n), HYD.hint("success", "恭喜您，操作成功！")) : HYD.hint("danger", "对不起，操作失败")
                }
            }),
            !1
        }),
        p.on("click", ".searchImg",
        function() {
            var i = e(this).prev().val();
            r(p, s.folderID, 1, i)
        })
    }
} (jQuery, document, window),
HYD.popbox.ImgPicker = function(e) {
    $.albums({
        callback: e
    })
};