export interface Brand {
    readonly brand: string;
    readonly country: string;
    readonly meals: Meal[];
}

export interface Meal {
    readonly name: string;
    readonly mage: string;
    readonly calories: number;
    readonly ingredients?: Ingredient[];
}

export interface Ingredient {
    readonly name: string;
    readonly image?: string;
    readonly calories: number;
}

export interface SetMeal {
    readonly name: string;
    readonly meal: Meal;
    readonly ingredients?: Ingredient[];
    readonly calories: number;
}

export interface Cart {
    readonly contents: SetMeal[];
    readonly calories: number;
}
