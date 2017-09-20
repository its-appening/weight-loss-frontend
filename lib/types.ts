export interface Brand {
    readonly brand: string;
    readonly country: string;
    readonly items: Item[];
}

export interface Item {
    readonly name: string;
    readonly image: string;
    readonly calories: number;
    readonly ingredients?: Ingredient[];
}

export interface Ingredient {
    readonly name: string;
    readonly image?: string;
    readonly calories: number;
}

export interface Meal {
    readonly name: string;
    readonly ingredients?: Ingredient[];
    readonly calories: number;
}

export interface Cart {
    readonly contents: Array<Meal | Item>;
    readonly calories: number;
}
