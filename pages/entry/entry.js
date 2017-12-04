var timeline = require('../../test/homework_test.js')

Page({
  // data
  data: {
    item: {}
  },
  // lifecycle
  onLoad: function (options) {
    this.setData({
      item: timeline.data[Number(options.index)]
    })
  },
  // methods

})