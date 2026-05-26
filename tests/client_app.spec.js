const {test}=require('@playwright/test');
test.only('Client_App_Login',async({page}) =>{

    const productName="ZARA COAT 3";
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("sjeenia22@gmail.com");
    await page.locator("#userPassword").fill("Jeenia@123");
    await page.locator("#login").click();
    await page.waitForLoadState('networkidle');
    const productTitles =await page.locator(".card-body h5 b").allTextContents();
    console.log(productTitles);
    const products=page.locator(".card-body h5 b");
    const productsParent=page.locator(".card-body");
    const count=await page.locator(".card-body h5 b").count();
    console.log(count);
    for(let i=0;i<count;i++){
            if(await products.nth(i).textContent()===productName){
                await productsParent.nth(i).locator("text= Add To Cart").click();
                break;
            }
    }
    page.pause();
});