import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();

    await driver.sleep(2000);

    let x1 = await (await driver).findElement(By.id('cell-0'));
    await x1.click();
    
    let o = await (await driver).findElement(By.id('cell-1'));
    await o.isSelected();

    await driver.sleep(2000);

    let x2 = await (await driver).findElement(By.id('cell-2'));
    await x2.click();

    await driver.sleep(2000);

    let x3 = await (await driver).findElement(By.id('cell-8'));
    await x3.click();

    await driver.sleep(2000);

    let o2 = await (await driver).findElement(By.id('cell-7'));
    await o2.isSelected();

    await driver.sleep(2000);
})

