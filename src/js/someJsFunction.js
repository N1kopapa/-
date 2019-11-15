/*
* * 需引入JQuery
*/

$(document).ready(function () {
    //var _hmt = _hmt || [];
    (function () {
        console.log("into baidu");
        let hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?7c497f5027ec2dda9551ea61b635a677";
        let s = document.getElementsByTagName("script")[0];
        s.parentNode.insertBefore(hm, s);
    })();

    //fixed_ad
    $(".Ontrst").click(function () {
        window.open(
            'http://itlead.vicp.net:9908/im/text/0ntrst.html',
            '_blank',
            'width=850,height=610,menubar=no,toolbar=no,status=no,scrollbars=yes'
        );
    });

    $(".scroll_top").click(function () {
        let html = $("html");
        if (html[0].scrollTop !== 0) {
            html.animate({
                scrollTop: 0
            }, 300);
        }
    });

    $(".ad_qq").click(function () {
        window.open(
            "http://wpa.qq.com/msgrd?v=3&uin=1765739413&site=qq&menu=yes",
            "",
            "width=1000,height=610,menubar=no,toolbar=no,status=no,scrollbars=yes"
        );
    });
});