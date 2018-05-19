// pages/coming/coming.js
import { requetCommon } from '../../utils/common.js';
Page({

  /**
   * 页面的初始数据
   */
  data: {
    coming: [],
    allCount: 10,
    count: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(123123123);
     this.getComing();
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
    // console.log("qweqwe");
    // this.getComing();
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
  getComing() {
    let vm = this;
    wx.showLoading({
      title: '加载中',
    });
    // requetCommon('/v2/movie/coming_soon', { start: 0, count: 10 }, 'GET').then(res => {
    //   wx.hideLoading();
    //   // console.log('req', res);
    //   this.setData({
    //     coming: res.data.subjects,
    //     allCount: res.data.total
    //   });
    // }).catch(e => {
    //   wx.hideLoading();
    //   wx.showToast({
    //     icon: 'none',
    //     title: e && e.errMsg ? e.errMsg : 'error'
    //   });
    // })
    setTimeout(() => {
      vm.setData({
        coming: [
        {
          "rating": {
            "max": 10,
            "average": 8.6,
            "stars": "45",
            "min": 0
          },
          "genres": [
            "剧情",
            "喜剧"
          ],
          "title": "完美陌生人",
          "casts": [
            {
              "alt": "https://movie.douban.com/celebrity/1094143/",
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1467861590.48.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1467861590.48.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1467861590.48.webp"
              },
              "name": "马可·贾利尼",
              "id": "1094143"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1022632/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p24501.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p24501.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p24501.webp"
              },
              "name": "卡夏·斯穆特尼亚克",
              "id": "1022632"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1045775/",
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1355459107.48.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1355459107.48.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1355459107.48.webp"
              },
              "name": "爱德华多·莱奥",
              "id": "1045775"
            }
          ],
          "collect_count": 183176,
          "original_title": "Perfetti sconosciuti",
          "subtype": "movie",
          "directors": [
            {
              "alt": "https://movie.douban.com/celebrity/1023888/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1468232704.84.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1468232704.84.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1468232704.84.webp"
              },
              "name": "保罗·格诺维塞",
              "id": "1023888"
            }
          ],
          "year": "2016",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522331945.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522331945.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522331945.webp"
          },
          "alt": "https://movie.douban.com/subject/26614893/",
          "id": "26614893"
        },
        {
          "rating": {
            "max": 10,
            "average": 0,
            "stars": "00",
            "min": 0
          },
          "genres": [
            "动作",
            "科幻",
            "冒险"
          ],
          "title": "游侠索罗：星球大战外传",
          "casts": [
            {
              "alt": "https://movie.douban.com/celebrity/1040705/",
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18959.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18959.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p18959.webp"
              },
              "name": "阿尔登·埃伦瑞奇",
              "id": "1040705"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1314668/",
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366635541.39.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366635541.39.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366635541.39.webp"
              },
              "name": "艾米莉亚·克拉克",
              "id": "1314668"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1053560/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p501.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p501.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p501.webp"
              },
              "name": "伍迪·哈里森",
              "id": "1053560"
            }
          ],
          "collect_count": 82,
          "original_title": "Solo: A Star Wars Story",
          "subtype": "movie",
          "directors": [
            {
              "alt": "https://movie.douban.com/celebrity/1031844/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366641135.85.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366641135.85.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366641135.85.webp"
              },
              "name": "朗·霍华德",
              "id": "1031844"
            }
          ],
          "year": "2018",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521436880.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521436880.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521436880.webp"
          },
          "alt": "https://movie.douban.com/subject/25900947/",
          "id": "25900947"
        },
        {
          "rating": {
            "max": 10,
            "average": 7.1,
            "stars": "35",
            "min": 0
          },
          "genres": [
            "剧情",
            "家庭"
          ],
          "title": "西小河的夏天",
          "casts": [
            {
              "alt": "https://movie.douban.com/celebrity/1314329/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1499715582.42.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1499715582.42.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1499715582.42.webp"
              },
              "name": "张颂文",
              "id": "1314329"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1312976/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p38291.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p38291.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p38291.webp"
              },
              "name": "谭卓",
              "id": "1312976"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1285575/",
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1374577000.57.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1374577000.57.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1374577000.57.webp"
              },
              "name": "顾宝明",
              "id": "1285575"
            }
          ],
          "collect_count": 498,
          "original_title": "西小河的夏天",
          "subtype": "movie",
          "directors": [
            {
              "alt": "https://movie.douban.com/celebrity/1272065/",
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1505024076.78.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1505024076.78.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1505024076.78.webp"
              },
              "name": "周全",
              "id": "1272065"
            }
          ],
          "year": "2017",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522331711.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522331711.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522331711.webp"
          },
          "alt": "https://movie.douban.com/subject/26799232/",
          "id": "26799232"
        },
        {
          "rating": {
            "max": 10,
            "average": 7,
            "stars": "35",
            "min": 0
          },
          "genres": [
            "剧情",
            "喜剧",
            "犯罪"
          ],
          "title": "命运速递",
          "casts": [
            {
              "alt": "https://movie.douban.com/celebrity/1326947/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525685466.03.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525685466.03.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525685466.03.webp"
              },
              "name": "赵炳锐",
              "id": "1326947"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1321008/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519454680.72.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519454680.72.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1519454680.72.webp"
              },
              "name": "吕晓霖",
              "id": "1321008"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1313809/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51592.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51592.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p51592.webp"
              },
              "name": "余皑磊",
              "id": "1313809"
            }
          ],
          "collect_count": 548,
          "original_title": "命运速递",
          "subtype": "movie",
          "directors": [
            {
              "alt": "https://movie.douban.com/celebrity/1327361/",
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366638230.07.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366638230.07.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1366638230.07.webp"
              },
              "name": "李非",
              "id": "1327361"
            }
          ],
          "year": "2015",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522418412.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522418412.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522418412.webp"
          },
          "alt": "https://movie.douban.com/subject/25918677/",
          "id": "25918677"
        },
        {
          "rating": {
            "max": 10,
            "average": 0,
            "stars": "00",
            "min": 0
          },
          "genres": [
            "喜剧",
            "悬疑",
            "古装"
          ],
          "title": "神谕通天",
          "casts": [
            {
              "alt": "https://movie.douban.com/celebrity/1315837/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33831.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33831.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p33831.webp"
              },
              "name": "敖犬",
              "id": "1315837"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1377497/",
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500714832.87.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500714832.87.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500714832.87.webp"
              },
              "name": "蔡诗芸",
              "id": "1377497"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1377264/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500219177.14.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500219177.14.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500219177.14.webp"
              },
              "name": "阮颂扬",
              "id": "1377264"
            }
          ],
          "collect_count": 15,
          "original_title": "神谕通天",
          "subtype": "movie",
          "directors": [
            {
              "alt": "https://movie.douban.com/celebrity/1377900/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pt2XUHwVovGgcel_avatar_uploaded1500714911.34.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pt2XUHwVovGgcel_avatar_uploaded1500714911.34.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pt2XUHwVovGgcel_avatar_uploaded1500714911.34.webp"
              },
              "name": "李军",
              "id": "1377900"
            }
          ],
          "year": "2018",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521437600.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521437600.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521437600.webp"
          },
          "alt": "https://movie.douban.com/subject/27041538/",
          "id": "27041538"
        },
        {
          "rating": {
            "max": 10,
            "average": 0,
            "stars": "00",
            "min": 0
          },
          "genres": [
            "犯罪",
            "悬疑"
          ],
          "title": "时间暗局",
          "casts": [
            {
              "alt": "https://movie.douban.com/celebrity/1391851/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524563926.51.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524563926.51.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524563926.51.webp"
              },
              "name": "王宇泽",
              "id": "1391851"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1342668/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524562625.66.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524562625.66.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524562625.66.webp"
              },
              "name": "秦鸣悦",
              "id": "1342668"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1377507/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524563537.73.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524563537.73.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524563537.73.webp"
              },
              "name": "贾子宸",
              "id": "1377507"
            }
          ],
          "collect_count": 4,
          "original_title": "时间暗局",
          "subtype": "movie",
          "directors": [
            {
              "alt": "https://movie.douban.com/celebrity/1391841/",
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524562421.19.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524562421.19.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524562421.19.webp"
              },
              "name": "陈亮言",
              "id": "1391841"
            }
          ],
          "year": "2018",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522325726.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522325726.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522325726.webp"
          },
          "alt": "https://movie.douban.com/subject/30197981/",
          "id": "30197981"
        },
        {
          "rating": {
            "max": 10,
            "average": 0,
            "stars": "00",
            "min": 0
          },
          "genres": [
            "剧情",
            "冒险"
          ],
          "title": "雾都神探之绝情箭",
          "casts": [
            {
              "alt": "https://movie.douban.com/celebrity/1316820/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p37563.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p37563.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p37563.webp"
              },
              "name": "孙骁潇",
              "id": "1316820"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1354788/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1455944693.1.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1455944693.1.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1455944693.1.webp"
              },
              "name": "余薇薇",
              "id": "1354788"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1361754/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525406410.24.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525406410.24.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525406410.24.webp"
              },
              "name": "孙丹丹",
              "id": "1361754"
            }
          ],
          "collect_count": 2,
          "original_title": "雾都神探之绝情箭",
          "subtype": "movie",
          "directors": [
            {
              "alt": "https://movie.douban.com/celebrity/1322652/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509965837.12.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509965837.12.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1509965837.12.webp"
              },
              "name": "孙铎",
              "id": "1322652"
            }
          ],
          "year": "2018",
          "images": {
            "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2522163938.webp",
            "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2522163938.webp",
            "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2522163938.webp"
          },
          "alt": "https://movie.douban.com/subject/30197104/",
          "id": "30197104"
        },
        {
          "rating": {
            "max": 10,
            "average": 0,
            "stars": "00",
            "min": 0
          },
          "genres": [
            "剧情",
            "战争",
            "悬疑"
          ],
          "title": "策反",
          "casts": [
            {
              "alt": "https://movie.douban.com/celebrity/1376605/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500202090.03.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500202090.03.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1500202090.03.webp"
              },
              "name": "刘端端",
              "id": "1376605"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1392447/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pqTeisCR--Occel_avatar_uploaded1525677424.54.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pqTeisCR--Occel_avatar_uploaded1525677424.54.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/pqTeisCR--Occel_avatar_uploaded1525677424.54.webp"
              },
              "name": "尹玲",
              "id": "1392447"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1386829/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515498594.81.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515498594.81.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1515498594.81.webp"
              },
              "name": "韩夫一",
              "id": "1386829"
            }
          ],
          "collect_count": 3,
          "original_title": "策反",
          "subtype": "movie",
          "directors": [
            {
              "alt": "https://movie.douban.com/celebrity/1318494/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p44224.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p44224.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p44224.webp"
              },
              "name": "韦廉",
              "id": "1318494"
            }
          ],
          "year": "2018",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521613911.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521613911.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521613911.webp"
          },
          "alt": "https://movie.douban.com/subject/30212356/",
          "id": "30212356"
        },
        {
          "rating": {
            "max": 10,
            "average": 0,
            "stars": "00",
            "min": 0
          },
          "genres": [
            "剧情",
            "爱情"
          ],
          "title": "给19岁的我自己",
          "casts": [
            {
              "alt": "https://movie.douban.com/celebrity/1275324/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1425307712.95.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1425307712.95.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1425307712.95.webp"
              },
              "name": "林柏宏",
              "id": "1275324"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1346306/",
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525936494.88.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525936494.88.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525936494.88.webp"
              },
              "name": "石安妮",
              "id": "1346306"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1392325/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525664797.31.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525664797.31.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525664797.31.webp"
              },
              "name": "王芊",
              "id": "1392325"
            }
          ],
          "collect_count": 43,
          "original_title": "给19岁的我自己",
          "subtype": "movie",
          "directors": [
            {
              "alt": "https://movie.douban.com/celebrity/1336729/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1495007099.03.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1495007099.03.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1495007099.03.webp"
              },
              "name": "黄朝亮",
              "id": "1336729"
            }
          ],
          "year": "2018",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521030550.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521030550.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521030550.webp"
          },
          "alt": "https://movie.douban.com/subject/26931155/",
          "id": "26931155"
        },
        {
          "rating": {
            "max": 10,
            "average": 0,
            "stars": "00",
            "min": 0
          },
          "genres": [
            "剧情",
            "爱情"
          ],
          "title": "爱是永恒",
          "casts": [
            {
              "alt": "https://movie.douban.com/celebrity/1391996/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524800325.16.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524800325.16.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524800325.16.webp"
              },
              "name": "史振凯",
              "id": "1391996"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1364073/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1477751113.94.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1477751113.94.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1477751113.94.webp"
              },
              "name": "孙童心",
              "id": "1364073"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1374091/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524800372.83.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524800372.83.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524800372.83.webp"
              },
              "name": "曲博",
              "id": "1374091"
            }
          ],
          "collect_count": 1,
          "original_title": "爱是永恒",
          "subtype": "movie",
          "directors": [
            {
              "alt": "https://movie.douban.com/celebrity/1391994/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524800301.56.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524800301.56.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1524800301.56.webp"
              },
              "name": "陈烈",
              "id": "1391994"
            },
            {
              "alt": null,
              "avatars": null,
              "name": "邹丰",
              "id": null
            }
          ],
          "year": "2018",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522423565.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522423565.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522423565.webp"
          },
          "alt": "https://movie.douban.com/subject/30206391/",
          "id": "30206391"
        },
        {
          "rating": {
            "max": 10,
            "average": 0,
            "stars": "00",
            "min": 0
          },
          "genres": [
            "动画",
            "冒险",
            "家庭"
          ],
          "title": "魔镜奇缘2",
          "casts": [

          ],
          "collect_count": 12,
          "original_title": "魔镜奇缘2",
          "subtype": "movie",
          "directors": [
            {
              "alt": "https://movie.douban.com/celebrity/1390460/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522123651.83.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522123651.83.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1522123651.83.webp"
              },
              "name": "陈设",
              "id": "1390460"
            }
          ],
          "year": "2018",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522162944.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522162944.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522162944.webp"
          },
          "alt": "https://movie.douban.com/subject/30166791/",
          "id": "30166791"
        },
        {
          "rating": {
            "max": 10,
            "average": 4,
            "stars": "20",
            "min": 0
          },
          "genres": [
            "动作",
            "冒险",
            "家庭"
          ],
          "title": "我的宠物恐龙",
          "casts": [
            {
              "alt": "https://movie.douban.com/celebrity/1381341/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/prmilA6Xl_nYcel_avatar_uploaded1505207515.14.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/prmilA6Xl_nYcel_avatar_uploaded1505207515.14.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/prmilA6Xl_nYcel_avatar_uploaded1505207515.14.webp"
              },
              "name": "Jordan Dulieu",
              "id": "1381341"
            },
            {
              "alt": null,
              "avatars": null,
              "name": "Annabel Wolfe",
              "id": null
            },
            {
              "alt": null,
              "avatars": null,
              "name": "Scott Irwin",
              "id": null
            }
          ],
          "collect_count": 201,
          "original_title": "My Pet Dinosaur",
          "subtype": "movie",
          "directors": [
            {
              "alt": "https://movie.douban.com/celebrity/1309160/",
              "avatars": {
                "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
              },
              "name": "Matt Drummond",
              "id": "1309160"
            }
          ],
          "year": "2017",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522418974.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522418974.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522418974.webp"
          },
          "alt": "https://movie.douban.com/subject/27043980/",
          "id": "27043980"
        },
        {
          "rating": {
            "max": 10,
            "average": 0,
            "stars": "00",
            "min": 0
          },
          "genres": [
            "剧情"
          ],
          "title": "阳台上",
          "casts": [
            {
              "alt": "https://movie.douban.com/celebrity/1274224/",
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36798.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36798.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p36798.webp"
              },
              "name": "周冬雨",
              "id": "1274224"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1381513/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1505964712.56.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1505964712.56.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1505964712.56.webp"
              },
              "name": "王锵",
              "id": "1381513"
            }
          ],
          "collect_count": 21,
          "original_title": "阳台上",
          "subtype": "movie",
          "directors": [
            {
              "alt": "https://movie.douban.com/celebrity/1314120/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21865.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21865.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p21865.webp"
              },
              "name": "张猛",
              "id": "1314120"
            }
          ],
          "year": "2018",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519521022.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519521022.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2519521022.webp"
          },
          "alt": "https://movie.douban.com/subject/27135473/",
          "id": "27135473"
        },
        {
          "rating": {
            "max": 10,
            "average": 0,
            "stars": "00",
            "min": 0
          },
          "genres": [
            "动画",
            "奇幻",
            "冒险"
          ],
          "title": "潜艇总动员：海底两万里",
          "casts": [
            {
              "alt": "https://movie.douban.com/celebrity/1321911/",
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1501821131.88.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1501821131.88.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1501821131.88.webp"
              },
              "name": "范楚绒",
              "id": "1321911"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1328170/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/ptkt9Jive6AAcel_avatar_uploaded1366255850.41.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/ptkt9Jive6AAcel_avatar_uploaded1366255850.41.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/ptkt9Jive6AAcel_avatar_uploaded1366255850.41.webp"
              },
              "name": "洪海天",
              "id": "1328170"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1326522/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498555670.36.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498555670.36.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498555670.36.webp"
              },
              "name": "李晔",
              "id": "1326522"
            }
          ],
          "collect_count": 12,
          "original_title": "潜艇总动员：海底两万里",
          "subtype": "movie",
          "directors": [
            {
              "alt": "https://movie.douban.com/celebrity/1374801/",
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1496307826.17.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1496307826.17.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1496307826.17.webp"
              },
              "name": "申宇",
              "id": "1374801"
            }
          ],
          "year": "2018",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522417650.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522417650.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522417650.webp"
          },
          "alt": "https://movie.douban.com/subject/30146980/",
          "id": "30146980"
        },
        {
          "rating": {
            "max": 10,
            "average": 0,
            "stars": "00",
            "min": 0
          },
          "genres": [
            "悬疑",
            "惊悚"
          ],
          "title": "毛骨悚然之红衣男孩",
          "casts": [
            {
              "alt": "https://movie.douban.com/celebrity/1361754/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525406410.24.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525406410.24.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525406410.24.webp"
              },
              "name": "孙丹丹",
              "id": "1361754"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1375907/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498185806.53.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498185806.53.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1498185806.53.webp"
              },
              "name": "陈奕鸣",
              "id": "1375907"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1356413/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525410581.0.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525410581.0.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525410581.0.webp"
              },
              "name": "孙家文",
              "id": "1356413"
            }
          ],
          "collect_count": 14,
          "original_title": "毛骨悚然之红衣男孩",
          "subtype": "movie",
          "directors": [
            {
              "alt": null,
              "avatars": null,
              "name": "孙杰",
              "id": null
            }
          ],
          "year": "2018",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520957706.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520957706.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2520957706.webp"
          },
          "alt": "https://movie.douban.com/subject/30210411/",
          "id": "30210411"
        },
        {
          "rating": {
            "max": 10,
            "average": 0,
            "stars": "00",
            "min": 0
          },
          "genres": [
            "科幻",
            "奇幻"
          ],
          "title": "光影之战",
          "casts": [
            {
              "alt": "https://movie.douban.com/celebrity/1382047/",
              "avatars": {
                "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
              },
              "name": "向俞星",
              "id": "1382047"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1382048/",
              "avatars": {
                "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
              },
              "name": "陈怡凡",
              "id": "1382048"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1362181/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1473524711.85.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1473524711.85.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1473524711.85.webp"
              },
              "name": "范薇",
              "id": "1362181"
            }
          ],
          "collect_count": 88,
          "original_title": "光影之战",
          "subtype": "movie",
          "directors": [
            {
              "alt": "https://movie.douban.com/celebrity/1382045/",
              "avatars": {
                "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
              },
              "name": "陈钺晖",
              "id": "1382045"
            }
          ],
          "year": "2017",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2500310362.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2500310362.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2500310362.webp"
          },
          "alt": "https://movie.douban.com/subject/27155186/",
          "id": "27155186"
        },
        {
          "rating": {
            "max": 10,
            "average": 0,
            "stars": "00",
            "min": 0
          },
          "genres": [
            "剧情"
          ],
          "title": "寻找雪山",
          "casts": [
            {
              "alt": "https://movie.douban.com/celebrity/1392678/",
              "avatars": {
                "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
              },
              "name": "蒋济远",
              "id": "1392678"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1392679/",
              "avatars": {
                "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
              },
              "name": "王馨月",
              "id": "1392679"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1392680/",
              "avatars": {
                "small": "https://img1.doubanio.com/f/movie/ca527386eb8c4e325611e22dfcb04cc116d6b423/pics/movie/celebrity-default-small.png",
                "large": "https://img3.doubanio.com/f/movie/63acc16ca6309ef191f0378faf793d1096a3e606/pics/movie/celebrity-default-large.png",
                "medium": "https://img1.doubanio.com/f/movie/8dd0c794499fe925ae2ae89ee30cd225750457b4/pics/movie/celebrity-default-medium.png"
              },
              "name": "王馨云",
              "id": "1392680"
            }
          ],
          "collect_count": 0,
          "original_title": "寻找雪山",
          "subtype": "movie",
          "directors": [
            {
              "alt": "https://movie.douban.com/celebrity/1392677/",
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1526038181.29.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1526038181.29.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1526038181.29.webp"
              },
              "name": "何志涛",
              "id": "1392677"
            }
          ],
          "year": "2018",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521787362.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521787362.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521787362.webp"
          },
          "alt": "https://movie.douban.com/subject/30215891/",
          "id": "30215891"
        },
        {
          "rating": {
            "max": 10,
            "average": 0,
            "stars": "00",
            "min": 0
          },
          "genres": [
            "爱情",
            "冒险"
          ],
          "title": "蓝色金鱼",
          "casts": [
            {
              "alt": "https://movie.douban.com/celebrity/1015278/",
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9299.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9299.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p9299.webp"
              },
              "name": "朱孝天",
              "id": "1015278"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1314763/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p28162.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p28162.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p28162.webp"
              },
              "name": "蓝燕",
              "id": "1314763"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1364130/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525685062.32.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525685062.32.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525685062.32.webp"
              },
              "name": "曲木古火·秋风",
              "id": "1364130"
            }
          ],
          "collect_count": 0,
          "original_title": "蓝色金鱼",
          "subtype": "movie",
          "directors": [
            {
              "alt": "https://movie.douban.com/celebrity/1339304/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1526367197.0.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1526367197.0.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1526367197.0.webp"
              },
              "name": "唐明智",
              "id": "1339304"
            }
          ],
          "year": "2018",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522261261.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522261261.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2522261261.webp"
          },
          "alt": "https://movie.douban.com/subject/30215189/",
          "id": "30215189"
        },
        {
          "rating": {
            "max": 10,
            "average": 0,
            "stars": "00",
            "min": 0
          },
          "genres": [
            "剧情",
            "悬疑"
          ],
          "title": "暗夜良人",
          "casts": [
            {
              "alt": "https://movie.douban.com/celebrity/1359158/",
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1475063188.89.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1475063188.89.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1475063188.89.webp"
              },
              "name": "何乙轩",
              "id": "1359158"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1392482/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525847775.84.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525847775.84.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1525847775.84.webp"
              },
              "name": "李运佳",
              "id": "1392482"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1274709/",
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6009.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6009.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p6009.webp"
              },
              "name": "周舟",
              "id": "1274709"
            }
          ],
          "collect_count": 5,
          "original_title": "暗夜良人",
          "subtype": "movie",
          "directors": [
            {
              "alt": "https://movie.douban.com/celebrity/1359155/",
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1475062971.79.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1475062971.79.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1475062971.79.webp"
              },
              "name": "王俊潾",
              "id": "1359155"
            }
          ],
          "year": "2018",
          "images": {
            "small": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521623353.webp",
            "large": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521623353.webp",
            "medium": "https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2521623353.webp"
          },
          "alt": "https://movie.douban.com/subject/27157647/",
          "id": "27157647"
        },
        {
          "rating": {
            "max": 10,
            "average": 0,
            "stars": "00",
            "min": 0
          },
          "genres": [
            "爱情",
            "奇幻"
          ],
          "title": "暮光·巴黎",
          "casts": [
            {
              "alt": "https://movie.douban.com/celebrity/1362491/",
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510801858.18.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510801858.18.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510801858.18.webp"
              },
              "name": "塞缪尔·默瑟",
              "id": "1362491"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1374013/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510198827.73.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510198827.73.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1510198827.73.webp"
              },
              "name": "西里尔·迪雷尔",
              "id": "1374013"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1374011/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1495167603.35.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1495167603.35.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1495167603.35.webp"
              },
              "name": "苏珊娜·罗尔特-巴利特",
              "id": "1374011"
            }
          ],
          "collect_count": 128,
          "original_title": "Lumière Amoureuse",
          "subtype": "movie",
          "directors": [
            {
              "alt": "https://movie.douban.com/celebrity/1373912/",
              "avatars": {
                "small": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1495006529.55.webp",
                "large": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1495006529.55.webp",
                "medium": "https://img3.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1495006529.55.webp"
              },
              "name": "万沥方",
              "id": "1373912"
            },
            {
              "alt": "https://movie.douban.com/celebrity/1316326/",
              "avatars": {
                "small": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1496405956.9.webp",
                "large": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1496405956.9.webp",
                "medium": "https://img1.doubanio.com/view/celebrity/s_ratio_celebrity/public/p1496405956.9.webp"
              },
              "name": "董方辰",
              "id": "1316326"
            }
          ],
          "year": "2017",
          "images": {
            "small": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2504312398.webp",
            "large": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2504312398.webp",
            "medium": "https://img1.doubanio.com/view/photo/s_ratio_poster/public/p2504312398.webp"
          },
          "alt": "https://movie.douban.com/subject/26878103/",
          "id": "26878103"
        }
        ]
      });
      vm.setData({
        allCount: 130
      });
      wx.hideLoading();
      
    },1500);
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
  getPerson:function(index){
    console.log(index, new Date());
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})