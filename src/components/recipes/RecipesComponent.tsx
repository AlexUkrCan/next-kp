
import React, {FC} from "react";
import {getAllRecipes} from "@/services/api.service";
import Link from "next/link";
import {IRecipes} from "@/models/recipes-models/IRecipes";


type RecipePropsType={
    recipe:IRecipes[];
}

export const RecipesComponent:FC<RecipePropsType> = async ({recipe}:RecipePropsType) => {

    console.log(recipe)
    const recipes = await getAllRecipes();
    console.log(recipe);

    return (
        <div>

            {
                recipes.map((recipe) => <div key={recipe.id}><Link href={'/auth/login/recipes/'+recipe.id.toString()}>{recipe.name}  {recipe.tags}</Link></div>)
}

    </div>
);
};

export default  RecipesComponent;