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
    imgUrl: 'http://tvax4.sinaimg.cn/mw600/5423373agy1ga881jphvij20m80rsk51.jpg',
    imgMode: 'aspectFit',
    imgLazyLoadMode: true,
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
  fn_img_err: function (e) {
    console.error('image发生error事件，携带值为', e.detail.errMsg)
  },
  fn_img_loadfinish: function () {
    this.setData({
      loading: false
    });
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
