import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver,
    WebElement,
    Key,
} from "selenium-webdriver";

const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
    .withCapabilities(Capabilities.chrome())
    .build();
const bernice: By = By.name("employee1");
const marnie: By = By.name("employee2");
const phillip: By = By.name("employee3");
const nameDisplay: By = By.id("employeeTitle");
const nameInput: By = By.name("nameEntry");
const phoneInput: By = By.name("phoneEntry");
const titleInput: By = By.name("titleEntry");
const saveButton: By = By.id("saveBtn");
const cancelButton: By = By.name("cancel");
const errorCard: By = By.css(".errorCard");

describe("Employee Manager 1.2", () => {

    beforeEach(async () => {
        await driver.get(
        "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"
        );
        await driver.sleep(20000);
    });
    afterAll(async () => {
        //await driver.quit();
       // await driver.sleep(8000);
    });
    describe("handles unsaved, canceled, and saved changes correctly", () => {
        test("A canceled change doesn't persist", async () => {
            /*
            2
            This test follows these steps:
            1. Open Phillip Weaver
             const phillip: By = By.name("employee3");

            2. Edit the name input
             const nameInput: By = By.name("nameEntry");
            3. Click cancel
            const cancelButton: By = By.name("cancel");
            5. Verify the name field is the original name


            */
            await driver.findElement(phillip).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(phillip))
            );

            await driver.findElement(nameInput).clear();
            await driver.findElement(nameInput).sendKeys("Cotilda Nakimuli II");
            
            await driver.findElement(cancelButton).click();
            expect(
                await (await driver.findElement(phillip)).getAttribute("Name")
            ).toBe("Phillip Weaver");
        
        });

});

});