import {IRecipes} from "@/models/recipes-models/IRecipes";

export interface  IRecipesObject{
    recipes: IRecipes[];
    total: number;
    skip: number;
    limit: number;
}