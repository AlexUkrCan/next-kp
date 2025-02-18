import React from 'react';
import RecipesComponent from "@/components/recipes/RecipesComponent";
import {IRecipes} from "@/models/recipes-models/IRecipes";

const RecipesPage = async ({recipes}:{recipes:IRecipes[]}) => {

    return (
        <div>
            <RecipesComponent recipe={recipes}/>
        </div>
    );

};

export default RecipesPage;