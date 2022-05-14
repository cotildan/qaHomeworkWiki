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
        // Open the Employee Manager v1.2 URL
        await driver.get(
        "https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html"
        );
        await driver.sleep(200);
    });
    afterAll(async () => {
        // Closes the chrome window
       await driver.quit();
    });
    describe("handles unsaved, canceled, and saved changes correctly", () => {
        test("An unsaved change doesn't persist", async () => {
        /*
        1
        This test follows these steps:
        1. Open Bernice Ortiz
           const bernice: By = By.name("employee1");

        2. Edit the name input
         const nameInput: By = By.name("nameEntry");

        3. Open Phillip Weaver
         const phillip: By = By.name("employee3");

        4. Open Bernice Ortiz
        const bernice: By = By.name("employee1");

        5. Verify the name field is the original name


        */
        // Click on Bernice Ortiz' name on the left-hand side
        await driver.findElement(bernice).click();
        await driver.wait(
            until.elementIsVisible(await driver.findElement(bernice))
        );

        // empty the name textbox
        await driver.findElement(nameInput).clear();

        //write Cotilda Nakimuli I in the name textbox
        await driver.findElement(nameInput).sendKeys("Cotilda Nakimuli I");
        
        //Click on Phillip Weaver's name on the left-hand side
        await driver.findElement(phillip).click();
        await driver.wait(
            until.elementTextContains(
            await driver.findElement(phillip),
            "Phillip"
            )
        );

        //go back and click on Bernice's name on the left-hand side
        await driver.findElement(bernice).click();
        await driver.wait(
            until.elementTextContains(
            await driver.findElement(bernice),
            "Bernice"
            )
        );

        // Checking/Testing if the name matches Bernice Ortiz
        expect(
            await (await driver.findElement(nameInput)).getAttribute("value")
        ).toBe("Bernice Ortiz");
        });

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

            // Click on Phillip Weaver's name on the left-hand side
            await driver.findElement(phillip).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(phillip))
            );

            // empty the name textbox
            await driver.findElement(nameInput).clear();

            //write Cotilda Nakimuli II in the name textbox
            await driver.findElement(nameInput).sendKeys("Cotilda Nakimuli II");

            // Click the cancel button
            await driver.findElement(cancelButton).click();

             // Checking/Testing if the name matches Phillip Weaver
            expect(
                await (await driver.findElement(nameInput)).getAttribute("value")
            ).toBe("Phillip Weaver");
        });

        test("A saved change persists", async () => {
            /*
            3
            This test follows these steps:
            1. Open Bernice Ortiz
            const bernice: By = By.name("employee1");

            2. Edit the name input
            const nameInput: By = By.name("nameEntry");

            3. Save the change
            const saveButton: By = By.id("saveBtn");

            4. Open Phillip Weaver
            const phillip: By = By.name("employee3");

            5. Open Bernice Ortiz's old record

            5. Verify the name field is the edited name


            */
           // Click on Bernice Ortiz' name on the left-hand side
            await driver.findElement(bernice).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(bernice))
            );

            // empty the name textbox
            await driver.findElement(nameInput).clear();

            //write Cotilda Nakimuli III in the name textbox
            await driver.findElement(nameInput).sendKeys("Cotilda Nakimuli III");

            //click on the save button
            await driver.findElement(saveButton).click();

            // Click on Phillip Weaver's name on the left-hand side
            await driver.findElement(phillip).click();
            await driver.wait(
                until.elementTextContains(
                await driver.findElement(phillip),
                "Phillip"
                )
            );

            // go back and click on Bernice Ortiz' name on the left-hand side
            await driver.findElement(bernice).click();

            // Checking/Testing that the name field should be Cotilda Nakimuli III
            expect(
                await (await driver.findElement(nameInput)).getAttribute("value")
            ).toBe("Cotilda Nakimuli III");
    }); 
});

    describe("handles error messages correctly", () => {
        test("shows an error message for an empty name field", async () => {
            /*
            4
            This test follows these steps:
            1. Open Bernice Ortiz
            const bernice: By = By.name("employee1");

            2. Clear the name input
            const nameInput: By = By.name("nameEntry");

            3. Save the change
            const saveButton: By = By.id("saveBtn");
            
            4. Verify the error is present
            const errorCard: By = By.css(".errorCard");

            */
           // Click on Bernice Ortiz' name on the left-hand side
            await driver.findElement(bernice).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(bernice))
            );

            // empty the name textbox
            await driver.findElement(nameInput).clear();

            //write a space then backspace (it's a blank textbox) in the name textbox
            await driver.findElement(nameInput).sendKeys(Key.SPACE, Key.BACK_SPACE);

            // click the save button
            await driver.findElement(saveButton).click();

            // wait to see if there is an error message
            await driver.wait(until.elementLocated(errorCard));

            //Checking/Testing that there is an error message displayed about the name field
            expect(await (await driver.findElement(errorCard)).getText()).toBe(
                "The name field must be between 1 and 30 characters long."
            );
        });
        test("lets you cancel out of an error message", async () => {
            /*
            5
            This test follows these steps:
            1. Open Bernice Ortiz
            const bernice: By = By.name("employee1");

            2. Clear the name input
            const nameInput: By = By.name("nameEntry");

            3. Save the change
            const saveButton: By = By.id("saveBtn");

            4. Verify the error is present
            const errorCard: By = By.css(".errorCard");

            5. Cancel the change
            const cancelButton: By = By.name("cancel");
            6. Verify the error is gone

            */
           // Click on Bernice Ortiz' name on the left-hand side
            await driver.findElement(bernice).click();
            await driver.wait(
                until.elementIsVisible(await driver.findElement(bernice))
            );

            // empty the name textbox
            await driver.findElement(nameInput).clear();

            //write a space then backspace (it's a blank textbox) in the name textbox
            await driver.findElement(nameInput).sendKeys(Key.SPACE, Key.BACK_SPACE);

            //click the save button
            await driver.findElement(saveButton).click();

            // wait to see if there is an error message
            await driver.wait(until.elementLocated(errorCard));

            //Checking/Testing that there is an error message displayed about the name field
            expect(await (await driver.findElement(errorCard)).getText()).toBe(
                "The name field must be between 1 and 30 characters long."
            );

            //write a space in the name textbox
            await driver.findElement(nameInput).sendKeys(Key.SPACE);

            //click cancel button
            await driver.findElement(cancelButton).click();

            // giving chrome some time
            driver.wait(() => true, 500);

            //Checking/Testing that there is no error message
            expect(await driver.findElements(errorCard)).toHaveLength(0);
        });
    }); 
});