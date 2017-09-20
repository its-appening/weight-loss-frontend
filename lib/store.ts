import { Brand, Cart } from "./types";

export class Store {
    public brands: Brand[] = [];
    public cart: Cart = {
        calories: 0,
        contents: [],
    };

    constructor() {
        this.getAppData();
        this.getWebData();
    }

    /*
     * React Native
     * If on web, this will be using localstorage instead
     */
    private getAppData = () => {

    }

    /*
     * Google Sheets
     */
    private getWebData = () => {

    }
}

const singleton = new Store();
export default singleton;
