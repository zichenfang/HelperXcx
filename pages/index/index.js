//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array: ['美国', '中国', '巴西', '日本'],
  },
  onLoad: function () {
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value);
    console.log(e);
    this.setData({
      index: e.detail.value
    })
  },

})
