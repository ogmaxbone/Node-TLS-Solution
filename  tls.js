const tls = require("tls");
tls.DEFAULT_MAX_VERSION = "TLSv1.3";
const https = require("https");
const ciphers = tls.DEFAULT_CIPHERS.split(":");
const chromeCiphers = [
  ciphers[0],
  ciphers[2],
  ciphers[1],
  "TLS_AES_128_CCM_8_SHA256",
  "TLS_AES_128_CCM_SHA256",
  ...ciphers.slice(3),
].join(":");

const options = {
  hostname: "ja3er.com",
  path: "/json",
  ciphers: chromeCiphers,
  headers: {
    accept:
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
    "accept-language": "ti,en-US;q=0.9,en;q=0.8",
    "cache-control": "max-age=0",
    "sec-ch-ua": '" Not;A Brand";v="99", "Google Chrome";v="97", "Chromium";v="97"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
    "sec-fetch-dest": "document",
    "sec-fetch-mode": "navigate",
    "sec-fetch-site": "none",
    "sec-fetch-user": "?1",
    "upgrade-insecure-requests": "1",
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/97.0.4692.71 Safari/537.36",
  },
};

https.get(options, (response) => {
  var body = "";
  response.on("data", function (chunk) {
    body += chunk;
  });

  response.on("end", function () {
    console.log(body);
  });
});
