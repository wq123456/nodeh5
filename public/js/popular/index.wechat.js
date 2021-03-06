/**
 * 微信分享
 */

var _weChatInterface = 'http://www.yohoshow.com/api/wechat/getSignPackage';
var info = '2016春潮新势力!来YOHO!BUY变身潮流大神!';
var picpath = 'http://cdn.yoho.cn/yohodesiner/assets/img/gdmf/gdmfshare.jpg?v=1';
var shareTitle = '穿越时空,寻找潮流男/女神!原来TA是...';
var shareImg =  picpath;
var shareDesc = info;
var shareLink = 'http://'+location.host+'/popular' ;
if (typeof wx !== 'undefined') {
    $.getJSON(_weChatInterface + '?pageurl=' +
        encodeURIComponent(location.href.split('#')[0]) + '&callback=?',
        function(json) {
            var _appId, _timestamp, _nonceStr, _signature;

            if (json !== undefined && json !== '') {
                _appId = json.appId.toString();
                _timestamp = json.timestamp;
                _nonceStr = json.nonceStr.toString();
                _signature = json.signature.toString();

                wx.config({
                    debug: false,
                    appId: _appId,
                    timestamp: _timestamp,
                    nonceStr: _nonceStr,
                    signature: _signature,
                    jsApiList: [
                        'checkJsApi',
                        'onMenuShareTimeline',
                        'onMenuShareAppMessage',
                        'onMenuShareQQ',
                        'onMenuShareWeibo',
                        'hideMenuItems',
                        'showMenuItems',
                        'hideAllNonBaseMenuItem',
                        'showAllNonBaseMenuItem',
                        'translateVoice',
                        'startRecord',
                        'stopRecord',
                        'onRecordEnd',
                        'playVoice',
                        'pauseVoice',
                        'stopVoice',
                        'uploadVoice',
                        'downloadVoice',
                        'chooseImage',
                        'previewImage',
                        'uploadImage',
                        'downloadImage',
                        'getNetworkType',
                        'openLocation',
                        'getLocation',
                        'hideOptionMenu',
                        'showOptionMenu',
                        'closeWindow',
                        'scanQRCode',
                        'chooseWXPay',
                        'openProductSpecificView',
                        'addCard',
                        'chooseCard',
                        'openCard'
                    ]
                });
            }
        });

    wx.ready(function() {
        var shareData = {
            title: shareTitle,
            desc: shareDesc,
            imgUrl: shareImg,
            link: shareLink,
            success: function() {
            },
            cancel: function() {
                // 用户取消分享后执行的回调函数
            }
        };

        //分享给朋友
        wx.onMenuShareAppMessage(shareData);

        //分享到朋友圈
        wx.onMenuShareTimeline(shareData);

        //分享到QQ
        wx.onMenuShareQQ(shareData);

        //分享到微博
        wx.onMenuShareWeibo(shareData);
    });
}