
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

test('See All Bots shows up when page loads', async () => {
    const seeAllBots = await driver.findElement(By.id('see-all'))
    const displayed = await seeAllBots.isDisplayed()
    expect(displayed).toBe(true)
})

test('Wins and Losses show up when page loads', async () => {
    const wins = await driver.findElement(By.id('wins'))
    const losses = await driver.findElement(By.id('losses'))
    const winsDisplayed = await wins.isDisplayed()
    const lossesDisplayed = await losses.isDisplayed()
    expect(winsDisplayed && lossesDisplayed).toBe(true)
})