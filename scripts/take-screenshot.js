const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewport({ width: 640, height: 360 });

  await page.goto("https://cyanone.art/portfolio", {
    waitUntil: "networkidle2",
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));
  await page.screenshot({
    path: "screenshot.png",
    clip: { x: 0, y: 0, width: 640, height: 360 },
  });

  await browser.close();
})();
