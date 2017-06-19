import { Brand, Cart } from "./types";

export class Store {
    public brands: Brand[] = [];
    public cart: Cart = {
        calories: 0,
        contents: [],
    };
}

const singleton = new Store();
export default singleton;
