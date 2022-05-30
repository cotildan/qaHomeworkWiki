// Create page called SpecPage 
// and add your methods to Navigate, doSearch and getResults.

import{
    Builder, By, 
    Capabilities, until, 
    WebDriver, WebElement
} from "selenium-webdriver"
/*
const chromedriver = require("chromedriver");
*/
const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build();

export class SpecPage{

    driver: WebDriver;
    url: string = 'https://www.google.com/'
    searchBar: By = By.name('q')
    results: By = By.id('rso')

    constructor(driver: WebDriver){
        this.driver = driver;
       // this.url = url;
    }

    async navigate(){
        await this.driver.get(this.url)
        await this.driver.wait(until.elementLocated(this.searchBar))
        //await driver.sleep(2000); 
    }

    async getElement(elementBy: By): Promise<WebElement> {
        await this.driver.wait(until.elementLocated(elementBy))
        let element = await this.driver.findElement(elementBy)
        await this.driver.wait(until.elementIsVisible(element))
        return element
    }

    async setInput(elementBy: By, keys: any): Promise<void> {
        let input = await this.getElement(elementBy)
        await input.clear()
        return input.sendKeys(keys);
    }

    async sendKeys(elementBy: By, keys){
        await this.driver.wait(until.elementLocated(elementBy))
        return driver.findElement(elementBy).sendKeys(keys)
    }

    async getText(elementBy: By){
        await this.driver.wait(until.elementLocated(elementBy))
        return this.driver.findElement(elementBy).getText()
    }

    async doSearch(search: string){
        return this.setInput(this.searchBar, `${search}\n`)
    }

    async getResults(){
        return this.getText(this.results)
    }

}