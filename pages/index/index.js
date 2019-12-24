//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '今天是个好天气~',
    userInfo: {},
    primarySize: 'default',
    disabled: false,
    plain: false,
    loading: false,
    imgUrl: '',
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      // url: '../logs/logs'
      url: 'logs/logs.js'
    })
  },
  fn_roll: function() {
    this.setData({
      loading: !this.data.loading
    });
    console.log(this.data)
  },
  onLoad: function () {
    console.log('onLoad...')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      console.log(userInfo)
    })
  }
})
