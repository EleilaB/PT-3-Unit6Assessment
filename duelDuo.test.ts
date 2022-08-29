
import { Builder, Capabilities, By, RelativeBy, locateWith } from "selenium-webdriver"

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeEach(async () => {
    driver.get('http://localhost:3000/')
})

afterAll(async () => {
    driver.quit()
})

test('Title shows up when page loads', async () => {
    const title = await driver.findElement(By.id('title'))
    const displayed = await title.isDisplayed()
    expect(displayed).toBe(true)
})

test('Choices header shows up after clicking "draw" button', async () => {
    const choiceHead = await driver.findElement(By.id('choose-header'))
    const displayed = await choiceHead.isDisplayed()
    await driver.findElement(By.id('draw')).click()
    expect(displayed).toBe(true)
})

test('When Add to Duo button is clicked the "Your Duo" h2 shows up', async () => {
    const yourDuo = await driver.findElement(By.id('your-duo-header'))
    const displayed = await yourDuo.isDisplayed()
    await driver.findElement(By.id('draw')).click()
    await driver.findElement(By.className('bot-btn')).click()
    expect(displayed).toBe(true)
})