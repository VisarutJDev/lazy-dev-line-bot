export const flexPortfolio = () => {
  return {
    "type": "bubble",
    "hero": {
      "type": "image",
      "url": "https://portfolio-6b550.web.app/static/media/first_background.46f67a35.JPG",
      "size": "full",
      "aspectRatio": "20:13",
      "aspectMode": "cover",
      "action": {
        "type": "uri",
        "uri": "https://portfolio-6b550.web.app/",
      },
    },
    "body": {
      "type": "box",
      "layout": "vertical",
      "spacing": "md",
      "action": {
        "type": "uri",
        "uri": "https://portfolio-6b550.web.app/",
      },
      "contents": [
        {
          "type": "text",
          "text": "Portfolio",
          "size": "xl",
          "weight": "bold",
        },
        {
          "type": "box",
          "layout": "vertical",
          "spacing": "sm",
          "contents": [
            {
              "type": "box",
              "layout": "baseline",
              "contents": [
                {
                  "type": "text",
                  "text": "คลิกเพื่อเปิด portfolio เพื่อดูประวัติของเรา.",
                  "size": "sm",
                  "align": "start",
                  "color": "#aaaaaa",
                  "wrap": true,
                },
              ],
            },
          ],
        },
      ],
    },
    "footer": {
      "type": "box",
      "layout": "vertical",
      "contents": [
        {
          "type": "button",
          "style": "primary",
          "color": "#905c44",
          "margin": "xxl",
          "action": {
            "type": "uri",
            "label": "Open",
            "uri": "https://portfolio-6b550.web.app/",
          },
        },
      ],
    },
  };
};
