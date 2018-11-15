Page({
  data: {
    address:
        [
          {
            id: 1,
            name: '地址一',
            address:"北京"
          },
          {
            id: 2,
            name: '地址二',
            address:"上海"
          },
          {
            id: 3,
            name: '地址三',
            address:"深圳"
          },
        ]
  },
  openMap: function () {
    var that = this;
    wx.getLocation({
      type: 'gcj02', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
      success: function (res) {
        // success
        console.log(res.latitude);
        console.log(res.longitude);
        wx.openLocation({
          latitude: res.latitude, // 纬度，范围为-90~90，负数表示南纬
          longitude: res.longitude, // 经度，范围为-180~180，负数表示西经
          scale: 28, // 缩放比例
          name:"123",
          address:"地址：要去的地点详细描述"
        })
      }
    })
  },
  tel:function(){
    wx.makePhoneCall({
      phoneNumber: '15103733823',
    })
  },
  onShareAppMessage: function () {

  }
})
