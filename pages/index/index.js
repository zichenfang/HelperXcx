//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //行业数据
    industries: ['计算机', '翻译', '医生', '教师'],
    selectedIndustryName:null,
    selectedIndustryId: null,
    //国家数据
    countries: ['美国', '中国', '巴西', '日本'],
    selectedCountryName: null,
    selectedCountryId: null,

  },
  onLoad: function () {
  },
  selectIndustry: function (e) {
    this.selectedIndustryName = this.data.industries[e.detail.value];
    console.log(this.selectedIndustryName);
    console.log(e);
    this.setData({
      selectedIndustryName: this.selectedIndustryName
    })
  },
  selectCountry: function (e) {
    this.selectedCountryName = this.data.countries[e.detail.value];
    console.log(this.selectedCountryName);
    console.log(e);
    this.setData({
      selectedCountryName: this.selectedCountryName
    })
  },
  //进入政策列表页面
  goPolicyList: function () {
    wx.navigateTo({
      url: 'docList?selectedIndustryId=' + this.data.selectedIndustryId + "&selectedCountryId=" + this.data.selectedCountryId,
    })
  },
  //定制建议书
  goCustomAdvice :function(){},
  //提供的服务
  goService: function (){},


})
