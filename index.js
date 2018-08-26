const clova = require('@line/clova-cek-sdk-nodejs');
const express = require('express');
const bodyParser = require('body-parser');

const TEMPLATE_INQUIRY = '何をしたいですか？'
const messageFeeling = '気分は良いですか？'
const messageSleptWell = '昨晩はよく眠れましたか？'
const messageTired = '疲れていますか？'
const messagePaiful = 'どこか痛いところはありますか？'

var defaultInfo = {
  asking: 'none',
  feeling: 'none',
  sleptwell: 'none',
  tired: 'none',
  painful: 'none',
}

const clovaSkillHandler = clova.Client
  .configureSkill()
  // スキルの起動リクエスト
  .onLaunchRequest(responseHelper => {
    responseHelper.setSessionAttributes(defaultInfo)
    responseHelper.setSimpleSpeech({
      lang: 'ja',
      type: 'PlainText',
      value: `「マイドクター」が起動されました。${TEMPLATE_INQUIRY}`,
    });
  })
  // カスタムインテント or ビルトインインテント
  .onIntentRequest(responseHelper => {
    const intent = responseHelper.getIntentName();
    let info = responseHelper.getSessionAttributes()
    let speech;
    switch (intent) {
      case 'ResultIntent':
        if (info.asking === "none") {
          let weight = 60
          speech = {
            lang: 'ja',
            type: 'PlainText',
            value: `$今日の体重は${weight}キログラムです。体調のチェックを始めます。${messageFeeling}`
          }
          responseHelper.setSimpleSpeech(speech)

          /*info.asking = "feeling"
          speech = {
            lang: 'ja',
            type: 'PlainText',
            value: messageFeeling
          }*/
        }
        else {
          let message
          if (info.asking === "feeling") {
            message = messageFeeling
          }
          else if (info.asking === "sleptwell") {
            message = messageSleptWell
          }
          else if (info.asking === "tired") {
            message = messageTired
          }
          else if (info.asking === "painful") {
            message = messagePaiful
          }

          speech = {
            lang: 'ja',
            type: 'PlainText',
            value: `体調のチェックを行っています。${message}`
          }
        }

        responseHelper.setSessionAttributes(info)

        responseHelper.setSimpleSpeech(speech)
        responseHelper.setSimpleSpeech(speech, true)
        break;
      // 返答がYesの場合
      case 'Clova.YesIntent':
        if (info.asking === "feeling") {
          info.feeling = "good"
          info.asking = "sleptwell"

          speech = {
            lang: 'ja',
            type: 'PlainText',
            value: messageSleptWell
          }
        }
        else if (info.asking === "sleptwell") {
          info.sleptwell = "yes"
          info.asking = "tired"

          speech = {
            lang: 'ja',
            type: 'PlainText',
            value: messageTired
          }
        }
        else if (info.asking === "tired") {
          info.tired = "yes"
          info.asking = "painful"

          speech = {
            lang: 'ja',
            type: 'PlainText',
            value: messagePaiful
          }
        }
        else if (info.asking === "painful") {
          info.painful = "yes"
          info = defaultInfo

          speech = {
            lang: 'ja',
            type: 'PlainText',
            value: `薬を飲むか、病院に行きましょう。`
          }
        }
        responseHelper.setSessionAttributes(info)

        responseHelper.setSimpleSpeech(speech)
        responseHelper.setSimpleSpeech(speech, true)
        break;
      // 返答がNoの場合
      case 'Clova.NoIntent':
        if (info.asking === "feeling") {
          info.feeling = "bad"
          info.asking = "sleptwell"

          speech = {
            lang: 'ja',
            type: 'PlainText',
            value: messageSleptWell
          }
        }
        else if (info.asking === "sleptwell") {
          info.sleptwell = "no"
          info.asking = "tired"

          speech = {
            lang: 'ja',
            type: 'PlainText',
            value: messageTired
          }
        }
        else if (info.asking === "tired") {
          info.tired = "no"
          info.asking = "painful"

          speech = {
            lang: 'ja',
            type: 'PlainText',
            value: messagePaiful
          }
        }
        else if (info.asking === "painful") {
          info.painful = "no"
          info = defaultInfo

          speech = {
            lang: 'ja',
            type: 'PlainText',
            value: `体に気をつけてくださいね。`
          }
        }
        responseHelper.setSessionAttributes(info)

        responseHelper.setSimpleSpeech(speech)
        responseHelper.setSimpleSpeech(speech, true)
        break;
      // ビルトインインテント。ユーザーによるインプットが使い方のリクエストと判別された場合
      case 'Clova.GuideIntent':
        speech = {
          lang: 'ja',
          type: 'PlainText',
          value: '測定結果を確認するか、体調のチェックを行いましょう。'
        }
        responseHelper.setSessionAttributes(defaultInfo)
        responseHelper.setSimpleSpeech(speech)
        break;
      // ビルトインインテント。ユーザーによるインプットがキャンセルのみであった場合
      case 'Clova.CancelIntent':
        speech = {
          lang: 'ja',
          type: 'PlainText',
          value: `意図しない入力です。${TEMPLATE_INQUIRY}`
        }
        responseHelper.setSessionAttributes(defaultInfo)
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
