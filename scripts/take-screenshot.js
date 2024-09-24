const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto("https://cyanone.art/portfolio", {
    waitUntil: "networkidle2",
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));
  await page.screenshot({ path: "screenshot.png", fullPage: true });

  await browser.close();
})();
