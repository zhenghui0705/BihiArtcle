var exportModle = (function () {
    // 定义变量
    var lis = $(".listBar2")
    var res = $(".reportResTitle")
    var u = navigator.userAgent, app = navigator.appVersion;
    var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
    // 函数写在这个里面
    var mainFunction = function () {
        $('input').on('click', function () {
            var target = this;
            // 使用定时器是为了让输入框上滑时更加自然
            setTimeout(function () {
                target.scrollIntoView(true);
            }, 100);
        });
        // 评论框事件
        function monitor() {
            var winH = window.innerHeight || document.documentElement.clientHeight; //获取浏览器窗口高度
            var winST = $(window).scrollTop(); //获取scrollTop
            var docH = $(document).height(); //获取文档高度
            var arr = [winH, winST, docH];
            return arr;
        }
        monitor();
        $(window).scroll(function () { //页面滑动时
            var winSTbefore = 0;
            var arr = monitor();
            var winH = arr[0]; //声明winH 浏览器窗口高度
            var winST = arr[1]; //声明winST scrollTop
            var docH = arr[2]; //声明docH 文档高度
            if (winST <= winH / 10) {
                $('.commentBox').removeClass('navbarhide'); //在首屏时显示导航条
            } else if (winST + winH >= docH) {
                $('.commentBox').removeClass('navbarhide'); //到达底部时显示
            } else if (winST > winSTbefore) {
                $('.commentBox').addClass('navbarhide'); //向下滑动时隐藏
            } else if (winST < winSTbefore) {
                $('.commentBox').removeClass('navbarhide'); //向上滑动时显示
            }
            winSTbefore = winST; //更新winSTbefore的值
            console.log(winSTbefore, 'fafa')
        })
        //  不喜欢标签
        for (var i = 0; i < lis.length; i++) {
            lis[i].onclick = function () {
                $(this).toggleClass('active');
            }
        }
        // 举报标签
        for (var j = 0; j < res.length; j++) {
            res[j].onclick = function () {
                $(this).toggleClass('reportx');
            }
        }
        // 排序方式
        $(".select_info").on("click", function (e) {
            $(".dropdown-content").show();
            $(document).one("click", function () {
                $(".dropdown-content").hide();
            });
            e.stopPropagation();
        });
        $(".dropdown-content").on("click", function (e) {
            e.stopPropagation();
        });
        // 显示举报弹窗
        $('#hateBtn').click(function () {
            $('.NolikeViewContent').show()
        })
        // 关闭
        $('.open_View').click(function () {
            $('.NolikeViewContent').hide()
        })
        // 显示喜欢弹窗
        $('#likeBtn').click(function () {
            $('.likeViewContent').show()
        })
        $('.open_hoit, .BtnNo').click(function () {
            $('.likeViewContent').hide()
        })
        // 举报
        $('#makeknown').click(function () {
            $('.jblikeViewContent').show()
            $('.ReplyContent, .SubContent').hide()
        });
        $('#cancel').click(function () {
            $('.ReplyContent').hide()
        })
        $('.open_report, .repNo').click(function () {
            $('.jblikeViewContent').hide()
        })
        $('.report').click(function () {
            $('.ReplyContent').show()
        })
        // 回复评论
        $(".reviewText").click(function () {
            $('.commentBox').hide();
            $(".ReplyboxContent").show().find('input').focus();
        });

        $('.section').on('touchend', function () {
            $('.ReplyboxContent').hide();
            $('.commentBox').show();
        });
        
        if (isiOS) {
            $('textarea').focus(function () {
                window.setTimeout('scrollBottom()', 500);
            });
        }

        function scrollBottom() {
            window.scrollTo(0, $('body').height());
        }


    }
    // 执行函数
    var startLoad = function () {
        mainFunction()
    }
    return {
        startLoad: startLoad
    }
})();
$(function () {
    exportModle.startLoad()
})