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
    allImgs: [],
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
  fn_img_loadfinish: function (e) {
    let currentUrl = e.currentTarget.dataset.src;
    this.setData({
      loading: false,
      allImgs: this.data.allImgs.concat(currentUrl),
    });
    console.log('load success: ', currentUrl);
  },
  //预览图片，放大预览
  fn_img_preview: function(event) {
    console.log(event.currentTarget.dataset.src)
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.allImgs, // 需要预览的图片http链接列表
    })
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
