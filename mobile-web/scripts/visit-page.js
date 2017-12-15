const puppeteer = require('puppeteer');

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
};


(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // await page.goto('https://example.com');

  // page.on('requestfinished', function (request) {
  //   console.log('request finished', arguments);
  // });

  page.on('response', async function (response) {
    // console.log('response', response.url);
  });

  await page.goto('http://localhost:8888/example/vf-article.html');

  // Visit first stag page
  await page.click('ampdoc:nth-child(3)');

  const content1 = await page.content();

  // const frames = await page.frames();

  await page.waitForNavigation();

  // // Go back and visit second stag page
  await page.goBack();
  // await page.goBack();

  // await delay(1000);

  await page.waitForNavigation();


  await page.click('ampdoc:nth-child(4)');

  // await delay(1000);

  const content2 = await page.content();
  console.log('After Second Click');
  console.log(content2);

  await browser.close();
})();
