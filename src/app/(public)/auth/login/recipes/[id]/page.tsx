import {IRecipes} from "@/models/recipes-models/IRecipes";
import React from "react";



async function getRecipeData(id: string) {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);

    return res.json();
}


const RecipePage = async ({ params }: { params: { id: string } }) => {
    const recipe:IRecipes = await getRecipeData(params.id);

    return (
        <div>
            <h1>{recipe.name}</h1>
            <p>UserId :{recipe.userId}</p>
            <p>PrepareTimeMinutes:{recipe.prepTimeMinutes}</p>
            <p>Instructions:{recipe.instructions}</p>




        </div>
    );
};

export default RecipePage;

// const RecipePage = async ({recipes}:{recipes:IRecipes[]}) => {
//     return (
//         <div>
//             Recipe page content
//             <RecipeComponent recipe={recipes}/>
//         </div>
//     );
// };
//
// export default RecipePage;