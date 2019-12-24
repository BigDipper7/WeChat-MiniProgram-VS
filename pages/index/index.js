//index.js
// import ...
var util = require('../../utils/util.js')

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
  // 点击随机按钮绑定函数
  fn_roll: function() {
    this.setData({
      loading: true|!this.data.loading,
    });
    console.log(this.data);

    // TODO: to finish...
    // simulate network time cost...
    let m = 0;
    for(let i=0; i<300000000; i++) {
      m+=i;
    }
    // simulation finish..

    const db = wx.cloud.database();
    db.collection('images').get().then(res => {
      // res.data 是一个包含集合中有权限访问的所有记录的数据，不超过 20 条
      console.log('all images:', res.data);
      const _data = res.data
      const cur_idx = util.getRndInt_PARTIAL(0, _data.length)
      const cur_img_url = _data[cur_idx]['url']

      this.setData({
        // loading: false, //等图片加载完，就去掉loading
        imgUrl: cur_img_url,
        // allImgs: this.data.allImgs.concat(cur_img_url) // 图片加载成功的时候，就可以加入到图片列表啦
      });
    });
  },
  // 图片加载错误绑定函数
  fn_img_err: function (e) {
    console.error('image发生error事件，携带值为', e.detail.errMsg)
    this.setData({
      loading: false, // 图片加载失败 去除loading
    });
  },
  // 图片加载成功绑定函数
  fn_img_loadfinish: function (e) {
    let currentUrl = e.currentTarget.dataset.src;
    this.setData({
      loading: false, // 图片加载成功 去除loading
      allImgs: this.data.allImgs.concat(currentUrl),
    });
    console.log('load success: ', currentUrl);
  },
  // 预览图片，放大预览，绑定函数
  fn_img_preview: function(event) {
    console.log(event.currentTarget.dataset.src)
    let currentUrl = event.currentTarget.dataset.src
    wx.previewImage({
      current: currentUrl, // 当前显示图片的http链接
      urls: this.data.allImgs, // 需要预览的图片http链接列表
    })
  },

  // Load主函数
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

    // 初始化云平台
    // const cloud = require('wx-server-sdk')
    // cloud.init({
    //   env: cloud.DYNAMIC_CURRENT_ENV
    // })
    wx.cloud.init({
      env: wx.cloud.DYNAMIC_CURRENT_ENV,
      traceUser: true,
    })
  }
})
