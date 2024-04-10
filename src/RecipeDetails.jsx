import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const [recipeDetails, setRecipeDetails] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${recipeId}/information?apiKey=32964f1377524269841a7c1ec0acdf61`);
        if (response.ok) {
          const data = await response.json();
          setRecipeDetails(data);
        } else {
          throw new Error('Failed to fetch recipe details');
        }
      } catch (error) {
        console.log('Error fetching recipe details:', error);
      }
    };

    fetchRecipeDetails();
  }, [recipeId]);

  if (!recipeDetails) {
    return <div>Loading...</div>;
  }

  return (
    <div className='flex items-center justify-center '>
    <div className='flex flex-col border border-b items-center justify-center p-4 w-4/5 '>
      <h2 className='text-3xl font-bold '>{recipeDetails.title}</h2>
      <img src={recipeDetails.image} alt={recipeDetails.title} />
      <p>Ingredients: {recipeDetails.extendedIngredients.map(ingredient => ingredient.original).join(', ')}</p>
      <p>Instructions: {recipeDetails.instructions}</p>
    </div>
    </div>
  );
}

export default RecipeDetails;
