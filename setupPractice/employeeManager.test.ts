import {Builder, By, Capabilities, until, WebDriver, WebElement} from "selenium-webdriver"

import { employeeManagerPage } from "./employeeManagerPage";

const chromedriver = require("chromedriver")
const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome())
.build()

const contact = new employeeManagerPage(driver)

describe("Employee Manager App", () => {

    beforeEach(async () => {
        await contact.navigate()
    })

    afterAll(async () => {
        await driver.quit()
    })


test(" create a new employee and edit of that employee", async () =>{
   await driver.wait(until.elementLocated(contact.header))
   //click on +Add Employee
   await driver.findElement(contact.addEmployee).click()
   //click on New Employee element
   await driver.findElement(contact.newEmployee).click()
   // Click on the name field of New Employee
   await driver.findElement(contact.nameField).click()
   //Clear on the name field of New Employee
   await driver.findElement(contact.nameField).clear()
   // Enter Pearl Jam in the name field
   await driver.findElement(contact.nameField).sendKeys("Pearl Jam")
   // Click on the phone number field of New Employee
   await driver.findElement(contact.phoneNumberField).click()
   //Clear on the phone number field of New Employee
   await driver.findElement(contact.phoneNumberField).clear()
   // Enter 8088675309 in the phone number field
   await driver.findElement(contact.phoneNumberField).sendKeys("8088675309")
   // Click on the title field of New Employee
   await driver.findElement(contact.titleField).click()
   //Clear on the title field of New Employee
   await driver.findElement(contact.titleField).clear()
   // Enter Music Director in the title field
   await driver.findElement(contact.titleField).sendKeys("Music Director")
   // Click on the save button
   await driver.findElement(contact.saveBtn).click()
})

})