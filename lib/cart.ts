import Store from "./store";
import { Item, Meal } from "./types";

export const calculateTotal = (): number => {
    return Store.cart.calories;
};

export const addItem = (item: Item | Meal): void => {
    Store.cart = {
        ...Store.cart,
        contents: [
            ...Store.cart.contents,
            item,
        ],
    };
};

export const addItem = (item: Item | Meal): void => {
    Store.cart = {
        ...Store.cart,
        contents: [
            ...Store.cart.contents,
            item,
        ],
    };
};
