if(!window.jsSHA){var elem=document.createElement("script");elem.setAttribute("src","//book.yunzhan365.com/resourceFiles/js/check.js?"+(new Date).getTime()),document.head.appendChild(elem)}var link=window.location.href;link=link.replace(/^https?:/,location.protocol),wx.ready(function(){title=""==title?link:title,wx.onMenuShareTimeline({title:title,link:link,imgUrl:imgUrl.replace(/^https?:/,location.protocol),success:function(){sendvisitinfo("7")},cancel:function(){}}),wx.onMenuShareAppMessage({title:title,desc:""==desc.trim()?title:desc,link:link,imgUrl:imgUrl.replace(/^https?:/,location.protocol),success:function(){sendvisitinfo("7")},cancel:function(){}}),wx.onMenuShareQQ({title:title,desc:""==desc.trim()?title:desc,link:link,imgUrl:imgUrl.replace(/^https?:/,location.protocol),success:function(){sendvisitinfo("7")},cancel:function(){}}),wx.onMenuShareWeibo({title:title,desc:""==desc.trim()?title:desc,link:link,imgUrl:imgUrl.replace(/^https?:/,location.protocol),success:function(){sendvisitinfo("7")},cancel:function(){}}),wx.onMenuShareQZone({title:title,desc:""==desc.trim()?title:desc,link:link,imgUrl:imgUrl.replace(/^https?:/,location.protocol),success:function(){sendvisitinfo("7")},cancel:function(){}}),$("#BGSound").length>0&&window.isPlaying&&document.getElementById("BGSound").play(),window.bgSound&&window.bgSound.play&&window.bgSound.prepareAudios&&(window.bgSound.prepareAudios(),window.isPlaying&&window.bgSound.play()),$("#flipSound").length>0&&(document.getElementById("flipSound").play(),document.getElementById("flipSound").pause())}),wx.error(function(a){}),window.shareData={imgUrl:imgUrl,tImgUrl:imgUrl,fImgUrl:imgUrl,wImgUrl:imgUrl,timeLineLink:link,sendFriendLink:link,weiboLink:link,tTitle:title,tContent:""==desc?title:desc,fTitle:title,fContent:""==desc?title:desc,wContent:title};var _weixinSendAppMessage=function(){WeixinJSBridge.on("menu:share:appmessage",function(a){WeixinJSBridge.invoke("sendAppMessage",{img_url:window.shareData.imgUrl,img_width:"220",img_height:"220",link:window.shareData.sendFriendLink,desc:window.shareData.fContent,title:window.shareData.fTitle},function(a){})})},_weixinShareTimeline=function(){WeixinJSBridge.on("menu:share:timeline",function(a){WeixinJSBridge.invoke("shareTimeline",{img_url:window.shareData.imgUrl,img_width:"220",img_height:"220",link:window.shareData.timeLineLink,desc:window.shareData.tContent,title:window.shareData.tTitle},function(a){})})},_yixinSendAppMessage=function(){YixinJSBridge.on("menu:share:appmessage",function(a){YixinJSBridge.invoke("sendAppMessage",{img_url:window.shareData.imgUrl,img_width:"220",img_height:"220",link:window.shareData.sendFriendLink,desc:window.shareData.fContent,title:window.shareData.fTitle},function(a){})})},_yixinShareTimeline=function(){YixinJSBridge.on("menu:share:timeline",function(a){YixinJSBridge.invoke("shareTimeline",{img_url:window.shareData.imgUrl,img_width:"220",img_height:"220",link:window.shareData.timeLineLink,desc:window.shareData.tContent,title:window.shareData.tTitle},function(a){})})},_yixinShareWeibo=function(){YixinJSBridge.on("menu:share:weibo",function(a){YixinJSBridge.invoke("shareWeibo",{content:window.shareData.wContent,url:window.shareData.weiboLink},function(a){})})};navigator.userAgent.toLowerCase().indexOf("micromessenger")>0?window.WeixinJSBridge?(_weixinSendAppMessage(),_weixinShareTimeline()):document.addEventListener("WeixinJSBridgeReady",function(){_weixinSendAppMessage(),_weixinShareTimeline()},!1):navigator.userAgent.toLowerCase().indexOf("yixin")>0&&(window.YixinJSBridge?(_yixinSendAppMessage(),_yixinShareTimeline()):document.addEventListener("YixinJSBridgeReady",function(){_yixinSendAppMessage(),_yixinShareTimeline()},!1));