const clova = require('@line/clova-cek-sdk-nodejs');
const express = require('express');
const bodyParser = require('body-parser');

const TEMPLATE_INQUIRY = '何をしたいですか？'

const clovaSkillHandler = clova.Client
  .configureSkill()
  // スキルの起動リクエスト
  .onLaunchRequest(responseHelper => {
    //responseHelper.setSessionAttributes({})
    responseHelper.setSimpleSpeech({
      lang: 'ja',
      type: 'PlainText',
      value: `「マイドクター」が起動されました。${TEMPLATE_INQUIRY}`,
    });
  })
  // カスタムインテント or ビルトインインテント
  .onIntentRequest(responseHelper => {
    const intent = responseHelper.getIntentName();
    let speech;
    switch (intent) {
      case 'ResultIntent':
        //responseHelper.setSessionAttributes({})
        let weight = 60
        let questionfirst = '具合は大丈夫ですか？'
        speech = {
          lang: 'ja',
          type: 'PlainText',
          value: `$今日の体重は${weight}キログラムです。${questionfirst}`
        }
        responseHelper.setSimpleSpeech(speech)

        speech.value = questionfirst
        responseHelper.setSimpleSpeech(speech, true)

        break;
      // 返答がYesの場合
      case 'Clova.YesIntent':
        speech = {
          lang: 'ja',
          type: 'PlainText',
          value: `元気ならよかったです。`
        }
        responseHelper.setSimpleSpeech(speech)

        break;
      // 返答がNoの場合
      case 'Clova.NoIntent':
      speech = {
        lang: 'ja',
        type: 'PlainText',
        value: `無理しないでくださいね。`
      }
      responseHelper.setSimpleSpeech(speech)

        break;
      // ビルトインインテント。ユーザーによるインプットが使い方のリクエストと判別された場合
      case 'Clova.GuideIntent':
        speech = {
          lang: 'ja',
          type: 'PlainText',
          value: TEMPLATE_INQUIRY
        }
        responseHelper.setSimpleSpeech(speech)
        responseHelper.setSimpleSpeech(speech, true)
        break;
      // ビルトインインテント。ユーザーによるインプットがキャンセルのみであった場合
      case 'Clova.CancelIntent':
        speech = {
          lang: 'ja',
          type: 'PlainText',
          value: `意図しない入力です。${TEMPLATE_INQUIRY}`
        }
        responseHelper.setSimpleSpeech(speech)
        break;
    }
  })
  // スキルの終了リクエスト
  .onSessionEndedRequest(responseHelper => {
  })
  .handle();

const app = new express();
// リクエストの検証を行う場合。環境変数APPLICATION_ID(値はClova Developer Center上で入力したExtension ID)が必須
//const clovaMiddleware = clova.Middleware({
//  applicationId: process.env.APPLICATION_ID
//});
//app.post('/clova', clovaMiddleware, clovaSkillHandler);

// リクエストの検証を行わない
app.post('/clova', bodyParser.json(), clovaSkillHandler);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
