
import {IUsersObjects} from "@/models/users-model/IUsersObjects";
import {IUsers} from "@/models/users-model/IUsers";
import {IRecipes} from "@/models/recipes-models/IRecipes";
import {IRecipesObject} from "@/models/recipes-models/IRecipesObjects";




export const getAllUsers = async ():Promise<IUsers[]> =>{
    const usersAll = await fetch('https://dummyjson.com/users')
        .then(value => value.json())
        .then(({users}:IUsersObjects)=>{
            return users;

    });
    return usersAll;

}

export const getAllRecipes = async ():Promise<IRecipes[]> =>{
    const recipeAll = await fetch('https://dummyjson.com/recipes')
        .then(value => value.json())
        .then(({recipes}:IRecipesObject)=>{
            return recipes;

        });
    return recipeAll;

}