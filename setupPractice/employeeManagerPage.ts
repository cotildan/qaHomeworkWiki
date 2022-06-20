import {
    Builder, By, 
    until, Capabilities, 
    WebDriver, WebElement
} from "selenium-webdriver"

export class employeeManagerPage {

    driver: WebDriver;
    url: string = 'https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html';
    header: By = By.xpath('//span[@class="titleText"]')
    addEmployee: By = By.xpath('//li[@name="addEmployee"]')
    newEmployee: By = By.xpath('//li[@name="employee11"]')
    nameField: By = By.xpath('//input[@name="nameEntry"]')
    phoneNumberField: By = By.xpath('//input[@name="phoneEntry"]')
    titleField: By = By.xpath('//input[@name="titleEntry"]')

    saveBtn:By= By.xpath('//button[@id="saveBtn"]')

    constructor(driver: WebDriver){
        this.driver = driver;
    }

    //This method gets the url properly loaded
    async navigate (){
        // get the url
        await this.driver.get(this.url);

        //wait until the header (the most basic element) is located
        await this.driver.wait(until.elementLocated(this.header));
    }

    async getElement (elementBy: By): Promise<WebElement>{
        await this.driver.wait(until.elementLocated(elementBy));
        let element = await this.driver.findElement(elementBy);
        await this.driver.wait(until.elementIsVisible(element));
        return element
    }

    async setInput (elementBy: By, keys: any): Promise<void>{
        let input = await this.getElement(elementBy);
        await input.clear();
        return input.sendKeys(keys);
    }

    async sendKeys(elementBy: By, keys){
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).sendKeys(keys);
    }

    async getText(elementBy: By){
        await this.driver.wait(until.elementLocated(elementBy));
        return this.driver.findElement(elementBy).getText();
    }



}
