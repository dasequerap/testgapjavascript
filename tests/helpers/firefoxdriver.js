/*jshint esversion: 8 */
const {Builder, By, Key, until} = require('selenium-webdriver');

export class FirefoxDriver {
    constructor(){
        this.driver =  new Builder().forBrowser('firefox').build();
        console.log("Driver instantiated");
    }
    
    async getDriver(){
        return await this.driver;
    }

    async getUrl(url, title){
        await this.driver.get(url);
        await this.driver.wait(until.titleIs(title), 5000);
    }

    async quit(){
        await this.driver.quit();
    }
}
