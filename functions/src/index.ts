/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {onRequest} from "firebase-functions/v2/https";
// import * as logger from "firebase-functions/logger";
import * as request from "request-promise";
import { MessageDicision } from "./message-decision";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const LINE_MESSAGING_API = "https://api.line.me/v2/bot/message";
const LINE_HEADER = {
  "Content-Type": "application/json",
  "Authorization": `Bearer ${process.env.CHANNEL_ACCESS_TOKEN}`,
};

exports.LineBot = onRequest((req, res) => {
  // logger.info("Hello logs!", { structuredData: true });
  if (req.body.events[0].message.type !== "text") {
    return;
  }
  reply(req.body);
});

const reply = (bodyResponse: any) => {
  return request({
    method: "POST",
    uri: `${LINE_MESSAGING_API}/reply`,
    headers: LINE_HEADER,
    body: JSON.stringify({
      replyToken: bodyResponse.events[0].replyToken,
      messages: [
        MessageDicision(bodyResponse.events[0].message.text || ""),
        // {
        //   type: "text",
        //   text: bodyResponse.events[0].message.text,
        // },
      ],
    }),
  });
};
