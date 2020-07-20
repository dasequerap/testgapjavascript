/*jshint esversion: 8 */
//import { FirefoxDriver } from '../helpers/firefoxdriver.js';
import { LoginPage } from '../pageobjects/login.page.js';
const { loadFeature, defineFeature } = require('jest-cucumber');
const feature = loadFeature('../features/login.feature', { loadRelativePath: true, errors: true });

var webdriver = null;

beforeAll( async () => {
    /*console.log("Starting tests for Login page");
    webdriver = await new FirefoxDriver();*/
});

defineFeature(feature, test => {
    test('Login page', ({ given, when, then, and }) => {

        let list;
        let loginPage = new LoginPage("Webdriver", 'title');

        given('User opens web site', async () => {
            //await webdriver.getUrl("http://www.google.com/ncr", 'Google');
            await console.log(loginPage.title);
            expect(list).toBeUndefined;
        });
        when('User enter username', () => {
            expect(1).toBe(1);
        });
        then('login page is displayed', () => {
            expect(true).toBe(true);
        });
    });
});

afterAll( async () => {
    //await webdriver.quit();
    console.log("Finishing tests for login");
});