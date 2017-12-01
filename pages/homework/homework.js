//homework.js
const util = require('../../utils/util.js');
var app = getApp();

Page({
  data: {
    timeLine: app.globalData.timeline.data,
  },
  onLoad: function(options) {
  },
  touchEntry: function(e) {
    console.log('homework # touchEntry');
    wx.navigateTo({
      url: '../entry/entry?index=' + e.currentTarget.dataset.index
    })
  },
})
