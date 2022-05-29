import {Builder,By, Capabilities, until, WebDriver, } from "selenium-webdriver";
  const chromedriver = require("chromedriver");

  const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  class employeePage {
      driver: WebDriver;
      url: string = "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html";
        //FILL OUT LOCATORS CONSTRUCTOR AND METHODS IN ORDER TO PASS THE TEST


        //Locators
        header: By = By.xpath('//span[@class="titleText"]');
        addEmployee: By = By.xpath('//li[@name="addEmployee"]');
        newEmployee: By = By.xpath('//li[@name="employee11"]');
        nameInput: By = By.xpath('//input[@name="nameEntry"]');
        phoneInput: By = By.xpath('//input[@name="phoneEntry"]');
        titleInput: By = By.xpath('//input[@name="titleEntry"]');

        //WebDriver constructor
        constructor(driver: WebDriver){
            this.driver = driver;
        }


        async navigate(){
            await this.driver.get(this.url);
            await this.driver.wait(until.elementLocated(this.header));
        }
  }

        //Class employeePage object
        const emPage = new employeePage(driver);


  describe("Employee Manger Test", () => {
      beforeEach(async () => {
          await emPage.navigate();
         // await driver.sleep(500);
      })
      afterAll(async () => {
          await driver.quit();
      })
      test("adding an employee", async () => {
          await driver.wait(until.elementLocated(emPage.header));
          await driver.findElement(emPage.addEmployee).click();
          await driver.findElement(emPage.newEmployee).click();
          await driver.findElement(emPage.nameInput).click();
          await driver.findElement(emPage.nameInput).clear();
          await driver.findElement(emPage.nameInput).sendKeys("Cotilda Nakimuli");
          await driver.findElement(emPage.phoneInput).click();
          await driver.findElement(emPage.phoneInput).clear();
          await driver.findElement(emPage.phoneInput).sendKeys("4950607939");
          await driver.findElement(emPage.titleInput).click();
          await driver.findElement(emPage.titleInput).clear();
          await driver.findElement(emPage.titleInput).sendKeys("Awesome QA Engineer");
          await driver.sleep(100);
  })

})