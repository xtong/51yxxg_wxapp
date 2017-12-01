//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    phone: '',
    password: ''
  },
  login: function(event) {
    wx.showToast({
      title: '身份验证中',
      icon: 'loading',
      duration: 2000
    })
    app.globalData.userRole = 'parent';
    wx.hideToast();
    wx.switchTab({
      url: '../target/target',
    })
  },
  register: function(event) {
    console.log('login # register:')
    console.log(this.data.phone, this.data.password);
  },
  forgetPassword: function(event) {
    console.log('login # forget password:')
    console.log(event);
  },
  bindPhone: function(event) {
    this.setData({
      phone: event.detail.value
    })
  },
  bindPassword: function(event) {
    this.setData({
      password: event.detail.value
    })
  }
})
