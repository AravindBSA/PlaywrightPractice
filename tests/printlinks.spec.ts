import {Locator, test,Page, Browser } from '@playwright/test';

test("Launch Browser", async ({ page }) => {
  await page.goto("https://demoqa.com/");
  await page.locator("//div[contains(@class, 'card-body')]/h5[text()='Elements']").click();
  console.log("Clicked on Elements Link");

  const subLinks :Locator = page.locator("//div[@class ='element-list collapse show']//li");
  const countLinks:number = await subLinks.count();
  console.log(countLinks);

  await new Promise(()=>{});
});