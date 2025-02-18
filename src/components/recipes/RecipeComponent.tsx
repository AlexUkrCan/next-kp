import {IRecipes} from "@/models/recipes-models/IRecipes";
import React, {FC} from "react";
import {getAllRecipes} from "@/services/api.service";
import Link from "next/link";


type RecipePropsType={
    recipe:IRecipes[];
}

export const RecipesComponent:FC<RecipePropsType> = async ({recipe}:RecipePropsType) => {


    const recipes = await getAllRecipes();
    console.log(recipe);

    return (
        <div>

            {
                recipes.map((recipe) => <div key={recipe.id}><Link href={'/auth/login/recipes/'+recipe.id.toString()}>{recipe.name}  {recipe.ingredients} {recipe.mealType}</Link></div>)
            }

        </div>
    );
};

export default  RecipesComponent;