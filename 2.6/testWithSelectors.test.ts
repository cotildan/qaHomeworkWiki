import {Builder, By, Capabilities, WebDriver} from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder().withCapabilities(Capabilities.chrome()).build();

describe("Filled in the blanks for lab 2.6.1", () => {
    beforeEach(async () => {
        await driver.get('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html');
        await driver.sleep(100);
    });
    afterAll(async () => {
        await driver.quit();
    })

    //header
    const hdrInput: By = By.css('[name="hdrInput"]'); //fill in the blank
     //passed const hdrInput: By = By.xpath('//input[@name="hdrInput"]');

    //MKE
    const mkeInput: By = By.xpath('//input[@name="mkeInput"]'); //fill in the blank
     //passed const mkInput: By = By.css('[name="mkeInput"]');

    //Originating Agency Identifier const oaiInput: By = By.css('[name = "oriInput"]'); //fill in the blank
    //passed const oaiInput: By = By.xpath('//input[@name="oriInput"]');
    // passed 
    const oaiInput: By = By.xpath('(//input[@class="inputField"])[2]');
    
    //Name 
    const nameInput: By = By.css('[name = "namInput"]'); //fill in the blank
     //passed const nameInput: By = By.xpath('//input[@name="namInput"]');
    
    //Clear Button 
    const clrBtn: By = By.xpath('//button[@id="clearBtn"]'); //fill in blank 
     //passed const clrBtn: By = By.css('#clearBtn');
    
    //Submit Button 
    const submitBtn: By = By.css('#saveBtn'); //fill in blank
     //passed const submitBtn: By = By.xpath('//button[@id="saveBtn"]');

    //error list
    //original  const errorMsg: By = By.css('[class="errorMessage"]'[4]); // fill in blank 
    //
    const errorMsg: By = By.xpath('//p[@id="validHeader"]');

    test("filling in the blanks for real", async () => {

        //header value input
        await driver.findElement(hdrInput).sendKeys("testing12");

        //MKE value input
        await driver.findElement(mkeInput).sendKeys("fn");

        //Originating Agency Identifier value input
        await driver.findElement(oaiInput).sendKeys("aaaaaaaaa");
        
        //Name Value Input
        await driver.findElement(nameInput).sendKeys("Peppa Pig");
        
        //Submit button clicking
        await driver.findElement(submitBtn).click();
    
    
        /*
        // toContain () acting weird
        expect(errorMsg).toContain("Errors Received:");
        */

        // Clear button clicking (completed);
        await driver.findElement(clrBtn).click();
        
        
        await driver.sleep(100);
    })
})