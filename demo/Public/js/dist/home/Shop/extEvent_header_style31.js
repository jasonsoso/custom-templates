$(function() {
    Defaults = {
        31 : {
            page: {
                title: "店铺首页"
            },
            PModules: [{
                id: 9,
                type: 9,
                draggable: !1,
                sort: 0,
                content: {
                    showType: 1,
                    dataset: [{
                        link: "/Shop/index",
                        linkType: 6,
                        showtitle: "VERO",
                        title: "",
                        subtitle: "女装",
                        pic: "/PublicMob/images/mob/31banner01.jpg"
                    },
                    {
                        link: "/Shop/index",
                        linkType: 6,
                        showtitle: "VERO",
                        title: "",
                        subtitle: "男装",
                        pic: "/PublicMob/images/mob/31banner01.jpg"
                    },
                    {
                        link: "/Shop/index",
                        linkType: 6,
                        showtitle: "VERO",
                        title: "",
                        subtitle: "童装",
                        pic: "/PublicMob/images/mob/31banner01.jpg"
                    }]
                }
            }],
            LModules: [{
                id: 10,
                type: 8,
                draggable: !0,
                sort: 0,
                content: {
                    dataset: [{
                        link: "/Shop/index",
                        linkType: 6,
                        showtitle: "",
                        title: "",
                        pic: "/PublicMob/images/mob/31nev01.jpg"
                    },
                    {
                        link: "/Shop/index",
                        linkType: 6,
                        showtitle: "",
                        title: "",
                        pic: "/PublicMob/images/mob/31nev02.jpg"
                    }]
                }
            },
            {
                id: 11,
                type: 8,
                draggable: !0,
                sort: 0,
                content: {
                    dataset: [{
                        link: "/Shop/index",
                        linkType: 6,
                        showtitle: "",
                        title: "",
                        pic: "/PublicMob/images/mob/31sp01.jpg"
                    },
                    {
                        link: "/Shop/index",
                        linkType: 6,
                        showtitle: "",
                        title: "",
                        pic: "/PublicMob/images/mob/31sp02.jpg"
                    }]
                }
            },
            {
                id: 12,
                type: 9,
                draggable: !0,
                sort: 0,
                content: {
                    showType: 2,
                    dataset: [{
                        link: "/Shop/index",
                        linkType: 6,
                        showtitle: "VERO",
                        title: "",
                        subtitle: "女装",
                        pic: "/PublicMob/images/mob/31banner02.jpg"
                    }]
                }
            },
            {
                id: 13,
                type: 8,
                draggable: !0,
                sort: 0,
                content: {
                    dataset: [{
                        link: "/Shop/index",
                        linkType: 6,
                        showtitle: "",
                        title: "",
                        pic: "/PublicMob/images/mob/31sp03.jpg"
                    },
                    {
                        link: "/Shop/index",
                        linkType: 6,
                        showtitle: "",
                        title: "",
                        pic: "/PublicMob/images/mob/31sp04.jpg"
                    }]
                }
            },
            {
                id: 14,
                type: 4,
                draggable: !0,
                sort: 0,
                content: {
                    layout: 1,
                    showPrice: !0,
                    showIco: !0,
                    showName: 1,
                    goodslist: [],
                    sale_num: 5,
                    goodstyle: 1,
                    goodstxt: "立即购买",
                    titleLine: 0,
                    version: 1,
                    modulePadding: 5
                }
            }]
        }
    },
    HYD.DIY.Unit.event_typeHeader_style31 = function(e, t) {
        t.dom_conitem,
        $("#tpl_diy_con_typeHeader_style31").html(),
        $("#tpl_diy_ctrl_typeHeader_style31").html()
    }
});