/*jshint esversion: 8 */
import Page from './page';

export class HomePage extends Page{

    async get logo () { return await "logo"; }

    async get loggedUser () { return await "loggedUser"; }

    async get banner () { return await "banner"; }

}