//homework.js
const util = require('../../utils/util.js');
var app = getApp();

Page({
  data: {
    timeLine: app.globalData.timeline.data,
  },
  onLoad: function(options) {
  },
  reviewHomework: function(e) {
    console.log(e.detail.value);
  },
  replicateHomework: function(e) {
    console.log('homework # replicateHomework');
  },
  modifyHomework: function(e) {
    console.log('homework # modifyHomework');
  },
  newHomework: function(e) {
    wx.navigateTo({
      url: '../newhomework/newhomework',
    })
  }
})
