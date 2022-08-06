import { rest } from "msw";

export const handlers = [
  rest.get(`https://newsdata.io/api/1/news`, (req, res, ctx) => {
    return res(
      ctx.json({
        status: "success",
        totalResults: 100,
        nextPage: 1,
        results: [
          {
            title:
              "Litecoin [LTC] buyers can deploy this strategy to remain profitable",
            pubDate: "2022-08-06 17:30:53",
            image_url: null,
            video_url: null,
            link: "https://ambcrypto.com/litecoin-ltc-buyers-can-deploy-this-strategy-to-remain-profitable/",
            description:
              "Disclaimer: The findings of the following analysis are the sole opinions of the writer and should not be considered investment advice. Bitcoin’s growth over the last month has expedited bullish recovery efforts in the crypto-market. The spillover effects of this growth in the altcoin market were quite evident, especially with double-digit monthly gains...",
            creator: ["Yash Majithia"],
          },
          {
            title:
              "Debridge Finance Suspects North Korean Hacking Syndicate Lazarus Group Attacked the Protocol’s Team",
            pubDate: "2022-08-06 17:30:29",
            image_url: null,
            video_url: null,
            link: "https://news.bitcoin.com/debridge-finance-suspects-north-korean-hacking-syndicate-lazarus-group-attacked-the-protocols-team/",
            description:
              "According to the co-founder of Debridge Finance, Alex Smirnov, the infamous North Korean hacking syndicate Lazarus Group subjected Debridge to an attempted cyberattack. Smirnov has warned Web3 teams that the campaign is likely widespread. Lazarus Group Suspected of Attacking Debridge Finance Team Members With a Malicious Group Email There’s been a great number of attacks...",
            creator: ["Jamie Redman"],
          },
        ],
      })
    );
  }),
];
