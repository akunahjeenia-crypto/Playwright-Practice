const {test}=require('@playwright/test');
test.only('Client_App_Login',async({page}) =>{

    const productName="ZARA COAT 3";
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("sjeenia22@gmail.com");
    await page.locator("#userPassword").fill("Jeenia@123");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');

    const products=page.locator(".card-body");
    const productTitles=await page.locator(".card-body b").allTextContents();
    console.log(productTitles);
    const productCount=await products.count();
    console.log(productCount);
    for(let i=0;i<productCount;i++){
        if(await products.nth(i).locator("b").textContent()===productName){
                await products.nth(i).locator("text= Add To Cart").click();
                break;
        }
    }
    await page.pause();
});