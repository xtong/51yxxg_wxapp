// pages/newhomework/newhomework.js
var classlist = require('../../test/newhomework_test.js')
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hwimg: '',
    expiration: '',
    ownership: classlist.data,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var timestamp = Date.parse(new Date());
    timestamp = timestamp / 1000;
    var tomrrow_timestamp = timestamp + 24 * 60 * 60;
    var n_to = tomrrow_timestamp * 1000;
    var tomorrow_date = new Date(n_to);
    var Y_tomorrow = tomorrow_date.getFullYear();
    var M_tomorrow = (tomorrow_date.getMonth() + 1 < 10 ? '0' + (tomorrow_date.getMonth() + 1) : tomorrow_date.getMonth() + 1);
    var D_tomorrow = tomorrow_date.getDate() < 10 ? '0' + tomorrow_date.getDate() : tomorrow_date.getDate();
    this.setData({
      expiration: Y_tomorrow+'-'+M_tomorrow+'-'+D_tomorrow
    })
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
  
  },

  takeHomeworkImg: function(e) {
    var _this = this;
    wx.chooseImage({
      sourceType: ['album', 'camera'],
      sizeType: ['original', 'compressed'],
      count: 1,
      success: function (res) {
        app.globalData.rawImagePath = res.tempFilePaths;
        wx.navigateTo({
          url: '../wx-cropper/cropper',
        })
      },
    })
    
  },
  bindDateChange: function(e) {
    this.setData({
      expiration: e.detail.value
    })
  },
  selectClass: function(e) {
  }
})