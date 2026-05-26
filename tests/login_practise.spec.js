const {test, expect}= require('@playwright/test');

test('Login Practise', async({browser})=>{
const context= await browser.newContext();
const page= await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

const userName=page.locator("#username");
const password= page.locator("#password");
await userName.fill("rahulshettyacademy");
await password.fill("Learning@830$3mK2");
const dropDown =page.locator("select.form-control");
await dropDown.selectOption("consult");

await page.locator(".radiotextsty").last().click();
console.log(await page.locator(".radiotextsty").last().isChecked());
await expect (page.locator(".radiotextsty").last()).toBeChecked();
await page.locator("#okayBtn").click();
await page.locator("#terms").check();
await expect(page.locator("#terms")).toBeChecked();
await page.locator("#terms").uncheck();
expect(await page.locator("#terms").isChecked()).toBeFalsy();
await page.locator("#signInBtn").click();

const documentLink=page.locator("[href*='documents-request']");
await expect(documentLink).toHaveAttribute('class','blinkingText');

const [newPage]=await Promise.all([
context.waitForEvent("page"),
documentLink.click()

]);
const text=await newPage.locator(".red").textContent();
console.log(text);
const firstSplit =text.split('@')[1];
const finalSplit=firstSplit.split(' ')[0];
console.log(finalSplit);
await page.locator("#username").fill(finalSplit);
// await page.pause();
console.log(await page.locator("#username").inputValue());

});