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
    <div className='flex items-center justify-center'>
      <div className='w-4/5'>
        <h2 className='text-3xl font-bold mb-4'>{recipeDetails.title}</h2>
        <img src={recipeDetails.image} alt={recipeDetails.title} className='w-4/5 h-1/5 mb-4' />
        <div>
          <h3 className='text-xl font-semibold mb-2'>Ingredients:</h3>
          <ul className='list-disc pl-6'>
            {recipeDetails.extendedIngredients.map(ingredient => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        </div>
        <div className='p-2 border border-b flex flex-col rounded-lg mb-4 '>
          <h3 className='text-xl font-semibold mb-2'>Instructions:</h3>
          <p className='p-2'>{recipeDetails.instructions}</p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
