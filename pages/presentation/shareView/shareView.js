// pages/presentation/shareView/shareView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    case: [
      {
        cate_id: 1,
        cate_name: "格瑞斯",
        text:"百能火岩抗菌板系列-定做家用环保厨房装修现代简约开放式橱柜定做",
        swiper:
        [
          {
            child_id: 1,
            image: "../../../images/shareView/s1.jpg"
          },
          {
            child_id: 2,
            image: "../../../images/shareView/s2.jpg"
          },
          {
            child_id: 3,
            image: "../../../images/shareView/s3.jpg"
          },
        ],
        images:
        [
          {
            child_id: 1,
            image: "../../../images/shareView/s2.jpg"
          },
          {
            child_id: 2,
            image: "../../../images/shareView/s3.jpg"
          },
          {
            child_id: 3,
            image: "../../../images/shareView/s4.jpg"
          },
          {
            child_id: 4,
            image: "../../../images/shareView/s5.jpg"
          },
          {
            child_id: 5,
            image: "../../../images/shareView/s6.jpg"
          },
          {
            child_id: 6,
            image: "../../../images/shareView/s7.jpg"
          },
          {
            child_id: 7,
            image: "../../../images/shareView/s8.jpg"
          },
          {
            child_id: 8,
            image: "../../../images/shareView/s9.jpg"
          },
        ]
      },
    ],
  },
  tell:function(){
    wx.makePhoneCall({
      phoneNumber:"111-1111-1111"
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})