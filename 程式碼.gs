function doGet(e) {
  // 改用 Template 模式，讓後端可以直接傳資料給前端網頁
  var html = HtmlService.createTemplateFromFile('Index');
  html.scriptUrl = ScriptApp.getService().getUrl(); // 自動抓取你的專屬網址
  html.urlData = e.parameter.data || "";            // 安全地抓取網址後面的單字資料
  
  return html.evaluate()
      .setTitle('IMI 詞彙消消樂')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}