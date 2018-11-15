//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
     {
        id:1,
        link:'/pages/index/index',
        url:'../../images/banner1.png',
        tap:'tapClass'
     },
     {
        id:2,
        link:'../../pages/presentation/shareView/shareView',
        url:'../../images/banner2.png'
     },
     {
        id:3,
        link:'../../pages/presentation/shareView/shareView',
        url:'../../images/banner3.png'
     }
  ],
    classUrl:[
      {
        id: 1,
        link:'/pages/index/index',
        name: '百能橱柜',
        image: "../../images/class1.png",
        tap:"tapClass"
      },
      {
        id: 2,
        link:'/pages/presentation/caseShare/caseShare',
        name: '设计案例',
        image: "../../images/class2.png"
      },
      {
        id: 3,
        link:'/pages/index/index',
        name: '品牌介绍',
        image: "../../images/class3.png",
        tap:"tapAboutus"
      },
      {
        id: 4,
        link:'/pages/index/index',
        name: '电话询价',
        image: "../../images/class4.png",
        tap:"tell"
      }
  ],
    detailData:[
      {
        image:'../../images/zhuye.jpg'
      }

  ],
  indicatorDots: true,
  autoplay: true,
  interval: 5000,
  duration: 1000,
  userInfo: {}
},
  //事件处理函数
  tapClass:function(){
    wx.switchTab({
      url: "/pages/portfolio/portfolio"
    });
  },
  tapAboutus:function(){
    wx.switchTab({
      url: "/pages/aboutus/aboutus"
    });
  },
  tell:function(){
    wx.makePhoneCall({
      phoneNumber: '000000000000000',
    })
  },
  onLoad: function () {

  },
  onShareAppMessage(){
    return{
      title:'',
      path:'/pages/index/index'
    }
  }
})
