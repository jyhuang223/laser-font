/* ==================================================
   1. 雷雕參數模板資料庫 (單一顏色/參數為獨立 ID)
================================================== */
const laserPresets = {
  "basic": {
    presetName: "基本功率",
    laserValue: "500/20/10",
	times: "1次"
  },
  "remove_coating": {
    presetName: "打掉烤漆用",
    laserValue: "300/50/30",
	times: "1次"
  },
  "stainless_steel": {
    presetName: "不鏽鋼功率",
    laserValue: "300/90/30",
	times: "1次"
  },
  "ES-520": {
    presetName: "黑琵鋼筆",
    laserValue: "500/20/10",
	times: "1次"
  },
  "wooden_pen_metal_cap": {
    presetName: "木頭筆金屬筆蓋",
    laserValue: "300/60/30",
	times: "1次"
  },
  "plastic": {
    presetName: "IB-1006",
    laserValue: "300/17.5/20",
	times: "1次"
  },
  "IP-8002": {
    presetName: "IP-8002 鉛筆",
    laserValue: "500/15/10",
	times: "2~3次"
  },
  "IP-8002_white": {
    presetName: "IP-8002 鉛筆（白桿）",
    laserValue: "500/30/10",
	times: "2次"
  },
  "W-0156_RS-902": {
    presetName: "W-0156、RS-902",
    laserValue: "300/50/30",
	times: "1次"
  },
  "IP-1003": {
    presetName: "IP-1003",
    laserValue: "300/12.5/20",
	times: "迴圈方向，刻多次一點"
  },
  "wooden_pen": {
    presetName: "木頭精品筆",
    laserValue: "200/10/10",
	times: "多次"
  }
};


/* ==================================================
   2. 產品資料庫
   presetId: ["preset_metal_black", "preset_metal_white"], // ★ 可帶入多個模板 ID
================================================== */
const products = [
  {
    "model": "B-140 馬口鐵盒",
    "material": "馬口鐵",
    "productType": "盒子",
    "position": "置中 / 注意蓋子有無彈起，壓一下調整密合度，確保平整。<br>⚠注意：如果鐵盒（邊緣）有明顯氧化就不要刻，去換一個。",
    "image": "https://cdn-general.cybassets.com/media/W1siZiIsIjM1OTMyL3Byb2R1Y3RzLzY3ODU5NTg3LzE3NzkxNzA3MzJfMzZhMTA5NmExNjkzOGYzMGMxMWIuanBlZyJdLFsicCIsInRodW1iIiwiNjAweDYwMCJdXQ.jpeg?sha=91c0a56ad028f67e",
    "url": "https://www.hepi.com.tw/products/4710677049269",
    "presetId": ["stainless_steel"],
    "times": null,
    "note": "座標位置設定(0, -25)<br>．拿游標卡尺量上下左右確認置中<br>．用重物抵住上和左方<br>．刻完用布沾水蠟擦拭"
  },
  {
    "model": "ES-520、ES-380",
    "material": "環保回收料",
    "productType": "精品筆",
    "position": "筆蓋側面置中",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/%E5%88%BB%E5%AD%97%E8%A6%8F%E7%AF%84/1013cebf604eecf40c5fc1b68fa23c96.jpg",
    "url": "https://www.skb.com.tw/product/product&product_id=499",
    "presetId": ["ES-520"],
    "times": null,
    "note": null
  },
  {
    "model": "G-1204",
    "material": "塑膠",
    "productType": "筆",
    "position": "筆夾側面",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/%E8%AA%9E%E9%8C%84%E6%8C%89%E5%8B%95%E9%8B%BC%E7%8F%A0%E7%AD%86_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F_1.png",
    "url": "https://www.skb.com.tw/product/product&product_id=569",
    "presetId": ["plastic"],
    "times": null,
    "note": null
  },
  {
    "model": "IB-1006 白桿",
    "material": "塑膠",
    "productType": "筆",
    "position": "筆夾側面",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data//%E5%AE%A2%E8%A3%BD%E5%8C%96%E5%95%86%E5%93%81/%E9%9B%B7%E5%B0%84%E9%9B%95%E5%88%BB_IB-1006.png",
    "url": "https://www.skb.com.tw/product/product&product_id=71",
    "presetId": ["plastic"],
    "times": null,
    "note": null
  },
  {
    "model": "IP-1003",
    "material": "木頭",
    "productType": "筆",
    "position": "筆桿末端、黑色條碼的上一面",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data//%E5%AE%A2%E8%A3%BD%E5%8C%96%E5%95%86%E5%93%81/%E9%9B%B7%E5%B0%84%E9%9B%95%E5%88%BB_IP-1003.png",
    "url": "https://www.skb.com.tw/product/product&product_id=70",
    "presetId": ["IP-1003"],
    "times": null,
    "note": null
  },
  {
    "model": "IP-1502",
    "material": "木頭",
    "productType": "筆",
    "position": "筆桿末端、只有一面沒有字可以刻",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/2023/06/15/0c9a9cfbcaec61110f6193a3a898630d.jpeg",
    "url": "https://www.skb.com.tw/product/product&product_id=493",
    "presetId": null,
    "times": null,
    "note": "桌面有 IP-1502 檔案，分顏色，刻 2 次。"
  },
  {
    "model": "IP-8002",
    "material": "金屬+烤漆",
    "productType": "筆",
    "position": "筆夾側面",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/2024/05/16/3dad9af691d3bf7f26122edc126980e3.jpg",
    "url": "https://www.skb.com.tw/product/product&product_id=528",
    "presetId": ["IP-8002","IP-8002_white"],
    "times": null,
    "note": "白桿：刻完用布擦拭"
  },
  {
    "model": "JEP-100 六角黃銅可擦筆",
    "material": "黃銅",
    "productType": "精品筆",
    "position": null,
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/commodity/pencillestscene1_02_1.jpg",
    "url": "https://www.skb.com.tw/product/product&product_id=300",
    "presetId": ["W-0156_RS-902"],
    "times": null,
    "note": "很少遇到"
  },
  {
    "model": "JH-6068",
    "material": "木頭",
    "productType": "精品筆/檯筆",
    "position": null,
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/2021/06/11/eee184810c9ededbd16a01944518ba27.jpg",
    "url": "https://www.skb.com.tw/product/product&product_id=41",
    "presetId": ["wooden_pen"],
    "times": null,
    "note": null
  },
  {
    "model": "JH-60N",
    "material": "鋁合金",
    "productType": "筆",
    "position": null,
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/%E5%88%BB%E5%AD%97%E8%A6%8F%E7%AF%84/jh-60n___1.jpg",
    "url": "https://www.skb.com.tw/product/product&product_id=306",
    "presetId": ["basic"],
    "times": null,
    "note": null
  },
  {
    "model": "RS-101 槍灰/黑色",
    "material": "鋁合金",
    "productType": "精品筆",
    "position": "筆蓋置中",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/2024/03/06/9b99cdc6641dc1ea7b9ff82ab7065b50.png",
    "url": "https://www.skb.com.tw/product/product&product_id=504",
    "presetId": ["basic"],
    "times": null,
    "note": null
  },
  {
    "model": "RS-101 黃銅",
    "material": "黃銅",
    "productType": "精品筆",
    "position": "筆蓋置中",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/2024/03/06/9407acba3ccd9b77c451f159e0c64aea.png",
    "url": "https://www.skb.com.tw/product/product&product_id=504",
    "presetId": ["stainless_steel"],
    "times": null,
    "note": "筆夾可轉"
  },
  {
    "model": "RS-102 槍灰/黑色",
    "material": "鋁合金",
    "productType": "精品筆",
    "position": null,
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/2024/03/06/249f5923f727a545bbc1d8001c35d891.png",
    "url": "https://www.skb.com.tw/product/product&product_id=505",
    "presetId": ["basic"],
    "times": null,
    "note": null
  },
  {
    "model": "RS-102 黃銅",
    "material": "黃銅",
    "productType": "精品筆",
    "position": "筆夾可轉",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/2024/03/06/f1a1490f0a1c9f79a2f82658b2166a75.png",
    "url": "https://www.skb.com.tw/product/product&product_id=505",
    "presetId": ["stainless_steel"],
    "times": null,
    "note": null
  },
  {
    "model": "RS-302",
    "material": "鋁合金",
    "productType": "精品筆",
    "position": "筆夾側面",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/commodity/05_img_9636_1m_1.jpg",
    "url": "https://www.skb.com.tw/product/product&product_id=10",
    "presetId": null,
    "times": null,
    "note": null
  },
  {
    "model": "RS-305",
    "material": "不鏽鋼",
    "productType": "精品筆",
    "position": "筆夾側面",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/%E5%88%BB%E5%AD%97%E8%A6%8F%E7%AF%84/514abcd3500721542b5f96426f946f01.jpg",
    "url": "https://www.skb.com.tw/product/product&product_id=47",
    "presetId": ["stainless_steel","IP-8002_white"],
    "times": null,
    "note": null
  },
  {
    "model": "RS-306 知性系列鋼筆",
    "material": "金屬/刀雕",
    "productType": "精品筆",
    "position": "筆蓋環",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/%E5%88%BB%E5%AD%97%E8%A6%8F%E7%AF%84/0439f022a9578b59e7191b1716550e96.jpg",
    "url": "https://www.skb.com.tw/product/product&product_id=8",
    "presetId": null,
    "times": null,
    "note": "刀雕2號夾頭"
  },
  {
    "model": "RS-306G 知性系列鋼筆(金爵黑)",
    "material": "金屬/刀雕",
    "productType": "精品筆",
    "position": "筆蓋環",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/%E5%88%BB%E5%AD%97%E8%A6%8F%E7%AF%84/04f9606122ab293e4c7c4b1321ebaa9a.jpg",
    "url": "https://www.skb.com.tw/product/product&product_id=272",
    "presetId": null,
    "times": null,
    "note": "刀雕2號夾頭"
  },
  {
    "model": "RS-306C",
    "material": "金屬+烤漆",
    "productType": "精品筆",
    "position": "筆夾側面",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/2022/06/30/2a53e06c721067edd563f363d56cfb35.png",
    "url": "https://www.skb.com.tw/product/product&product_id=277",
    "presetId": ["remove_coating"],
    "times": null,
    "note": null
  },
  {
    "model": "RS-306S",
    "material": "鋁合金",
    "productType": "精品筆",
    "position": "筆夾側面",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data//%E5%AE%A2%E8%A3%BD%E5%8C%96%E5%95%86%E5%93%81/%E5%96%AE%E8%89%B2%E5%8D%B0%E5%88%B7_12.png",
    "url": "https://www.skb.com.tw/product/product&product_id=6",
    "presetId": ["basic"],
    "times": null,
    "note": null
  },
  {
    "model": "RS-306ST",
    "material": "鋁合金",
    "productType": "精品筆/檯筆",
    "position": null,
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/2021/06/10/7c9023ff2b1c110903ab0dcfe1c6ea1a.png",
    "url": "https://www.skb.com.tw/product/product&product_id=11",
    "presetId": ["basic"],
    "times": null,
    "note": null
  },
  {
    "model": "RS-307",
    "material": "金屬+烤漆",
    "productType": "精品筆",
    "position": "筆夾側面",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/%E5%88%BB%E5%AD%97%E8%A6%8F%E7%AF%84/34e36be8389e060bdf03aaf2ac96ffe9.jpg",
    "url": "https://www.skb.com.tw/product/product&product_id=34",
    "presetId": ["basic"],
    "times": null,
    "note": null
  },
  {
    "model": "RS-308N 紳士系列鋼筆",
    "material": "黃銅",
    "productType": "精品筆",
    "position": "筆夾側面",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/%E5%88%BB%E5%AD%97%E8%A6%8F%E7%AF%84/rs-308n___1.jpg",
    "url": "https://www.skb.com.tw/product/product&product_id=255",
    "presetId": ["stainless_steel"],
    "times": null,
    "note": null
  },
  {
    "model": "RS-308N 黃銅版鋼筆",
    "material": "黃銅",
    "productType": "精品筆",
    "position": "筆夾側面",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/%E5%88%BB%E5%AD%97%E8%A6%8F%E7%AF%84/rs-308n__1.jpg",
    "url": "https://www.skb.com.tw/product/product&product_id=260",
    "presetId": ["stainless_steel"],
    "times": null,
    "note": null
  },
  {
    "model": "RS-309",
    "material": "鋁合金",
    "productType": "精品筆",
    "position": null,
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/%E5%88%BB%E5%AD%97%E8%A6%8F%E7%AF%84/rs-309___1.jpg",
    "url": "https://www.skb.com.tw/product/product&product_id=263",
    "presetId": ["basic"],
    "times": null,
    "note": null
  },
  {
    "model": "RS-309S",
    "material": "鋁合金",
    "productType": "精品筆",
    "position": null,
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/commodity/01_6.jpg",
    "url": "https://www.skb.com.tw/product/product&product_id=261",
    "presetId": ["basic"],
    "times": null,
    "note": null
  },
  {
    "model": "RS-501、RS-501N",
    "material": "鋁合金",
    "productType": "精品筆",
    "position": null,
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/%E5%88%BB%E5%AD%97%E8%A6%8F%E7%AF%84/0eceed7c0c5ec2c043484ef35ee8000f.jpg",
    "url": "https://www.skb.com.tw/product/product&product_id=297",
    "presetId": ["basic"],
    "times": null,
    "note": null
  },
  {
    "model": "RS-501G",
    "material": "黃銅",
    "productType": "精品筆",
    "position": "筆夾正面",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data//%E5%AE%A2%E8%A3%BD%E5%8C%96%E5%95%86%E5%93%81/%E5%96%AE%E8%89%B2%E5%8D%B0%E5%88%B7_2020_%E4%BA%A4%E9%80%9A%E9%83%A8%E8%88%AA%E6%B8%AF%E5%B1%80.png",
    "url": "https://www.skb.com.tw/product/product&product_id=266",
    "presetId": ["stainless_steel"],
    "times": null,
    "note": null
  },
  {
    "model": "RS-702",
    "material": "鋁合金",
    "productType": "精品筆",
    "position": "筆蓋",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data//%E5%AE%A2%E8%A3%BD%E5%8C%96%E5%95%86%E5%93%81/%E5%96%AE%E8%89%B2%E5%8D%B0%E5%88%B7_002.png",
    "url": "https://www.skb.com.tw/product/product&product_id=122",
    "presetId": ["basic"],
    "times": null,
    "note": null
  },
  {
    "model": "RS-901",
    "material": "鋁合金",
    "productType": "精品筆",
    "position": "筆夾正面",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/%E5%88%BB%E5%AD%97%E8%A6%8F%E7%AF%84/4b220f09bdd6dfd81e1ed9ed3562d050.jpg",
    "url": "https://www.skb.com.tw/product/product&product_id=37",
    "presetId": ["basic"],
    "times": null,
    "note": null
  },
  {
    "model": "RS-901i 國旗",
    "material": null,
    "productType": "精品筆",
    "position": null,
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/commodity/04_img_2417_1.jpg",
    "url": "https://www.skb.com.tw/product/product&product_id=296",
    "presetId": ["basic"],
    "times": null,
    "note": null
  },
  {
    "model": "RS-902",
    "material": "鋁合金",
    "productType": "精品筆",
    "position": null,
    "image": "https://down-tw.img.susercontent.com/file/tw-11134207-7r98r-lom3wib5dmgq36.webp",
    "url": "https://www.skb.com.tw/product/product&product_id=31",
    "presetId": ["W-0156_RS-902"],
    "times": null,
    "note": null
  },
  {
    "model": "TM-504",
    "material": "木頭",
    "productType": "精品筆",
    "position": null,
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/2023/07/20/7c2247a01ed9308742fec72d02b75d7a.png",
    "url": "https://www.skb.com.tw/product/product&product_id=495",
    "presetId": ["wooden_pen"],
    "times": null,
    "note": null
  },
  {
    "model": "TM-506",
    "material": "黃銅",
    "productType": "精品筆",
    "position": "筆蓋",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data//%E5%AE%A2%E8%A3%BD%E5%8C%96%E5%95%86%E5%93%81/%E9%9B%B7%E5%B0%84%E9%9B%95%E5%88%BB_%E3%80%90%E6%B5%B7%E8%BB%8D%E9%99%B8%E6%88%B0%E9%9A%8A%E2%94%83%E6%B0%B8%E9%81%A0%E5%BF%A0%E8%AA%A0%E3%80%91.png",
    "url": "https://www.skb.com.tw/product/product&product_id=299",
    "presetId": ["stainless_steel"],
    "times": null,
    "note": null
  },
  {
    "model": "TM-706N",
    "material": "黃銅",
    "productType": "精品筆",
    "position": "筆蓋",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/%E5%88%BB%E5%AD%97%E8%A6%8F%E7%AF%84/tm-706n__1.jpg",
    "url": "https://www.skb.com.tw/product/product&product_id=302",
    "presetId": ["stainless_steel"],
    "times": null,
    "note": null
  },
  {
    "model": "TM-908 龍柏木",
    "material": "木頭",
    "productType": "精品筆",
    "position": null,
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/2022/06/08/6ba9aed064a3fca4138151ee24a87272.jpg",
    "url": "https://www.skb.com.tw/product/product&product_id=432",
    "presetId": ["wooden_pen"],
    "times": null,
    "note": null
  },
  {
    "model": "W-0156",
    "material": "金屬",
    "productType": "精品筆",
    "position": null,
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/2025/W-0156_1000_%E9%A6%96.png",
    "url": "https://www.skb.com.tw/product/product&product_id=537",
    "presetId": ["W-0156_RS-902"],
    "times": null,
    "note": null
  },
  {
    "model": "W-784",
    "material": "塑膠",
    "productType": "精品筆",
    "position": "筆夾側面",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/2025/W-784_%E6%8C%89%E5%8B%95%E9%8B%BC%E7%AD%86_1000_%E5%B7%A5%E4%BD%9C%E5%8D%80%E5%9F%9F_1_%E8%A4%87%E6%9C%AC_8.png",
    "url": "https://www.skb.com.tw/product/product&product_id=534",
    "presetId": ["plastic"],
    "times": null,
    "note": "⚠刻完效果不優，建議印製就好"
  },
  {
    "model": "YS-668 八熊堂",
    "material": "金屬",
    "productType": "精品筆",
    "position": "筆夾側面",
    "image": "https://image-cdn-flare.qdm.cloud/q6637f277ddf22/image/data/commodity/01_19.jpg",
    "url": "https://www.skb.com.tw/product/product&product_id=278",
    "presetId": ["basic"],
    "times": null,
    "note": "⚠刻完效果不優，建議印製就好"
  }
];