import * as _ from 'lodash';
import { Item } from "./types";
import Store from "./store";

export const getAvailableItems = (brand: string, country: string): Item[] => {
    return _.find(Store.brands, { brand, country }).items;
};
