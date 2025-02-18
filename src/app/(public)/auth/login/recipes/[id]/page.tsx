import {IRecipes} from "@/models/recipes-models/IRecipes";


async function getRecipeData(id: string) {
    const res = await fetch(`https://dummyjson.com/recipes/${id}`);
    if (!res.ok) {
        throw new Error('Failed to fetch recipe data');
    }
    return res.json();
}

const RecipePage = async ({ params }: { params: { id: string } }) => {
    const recipe:IRecipes = await getRecipeData(params.id);

    return (
        <div>
            <h1>{recipe.name}</h1>
            <p>{recipe.userId}</p>
            <p>{recipe.prepTimeMinutes}</p>
            <p>{recipe.instructions}</p>

            {/* Вивести інші деталі рецепта */}
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