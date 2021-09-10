const express = require("express");
const app = express();

app.get("/headers", (req, res) => {
  console.log("12312", req.headers);
  res.type("text/plain");
  const headers = Object.entries(req.headers).map(
    ([key, value]) => `${key}:${value}`
  );
  res.send([headers.join("\n")]);
  console.log("12312", req.headers);
});

const port = process.env.PORT || 3000;
app.listen(port, () =>
  console.log(`\nnavigate to http://localhost:${port}/headers\n`)
);
//리퀘스트 로 헤더 요청이 들어온다
// {
//     host: 'localhost:3000',
//     connection: 'keep-alive',
//     'cache-control': 'max-age=0',
//     'sec-ch-ua': '"Google Chrome";v="93", " Not;A Brand";v="99", "Chromium";v="93"',
//     'sec-ch-ua-mobile': '?0',
//     'sec-ch-ua-platform': '"macOS"',
//     'upgrade-insecure-requests': '1',
//     'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.63 Safari/537.36',
//     accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//     'sec-fetch-site': 'none',
//     'sec-fetch-mode': 'navigate',
//     'sec-fetch-user': '?1',
//     'sec-fetch-dest': 'document',
//     'accept-encoding': 'gzip, deflate, br',
//     'accept-language': 'ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7',
//     'if-none-match': 'W/"2eb-+0je8P1pt7h1zS2PEyRIre7tAsc"'
//   }
