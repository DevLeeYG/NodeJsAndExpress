const express = require("express");
const app = express();

app.disabled("x-powered-by");

app.get("*", (req, res) => {
  res.send(
    `개발 도구를 열고 헤더를 검사하십시오. ` +
      `x-powered-by 헤더가 없다는 것을 알 수 있습니다!`
  );
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`\nnavigate to http://localhost:${port}\n`));
