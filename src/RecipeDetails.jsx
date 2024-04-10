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
    return <div className='flex justify-center items-center align-middle'>Loading...</div>;
  }

  // Function to convert HTML string to plain text
  const decodeHtml = (html) => {
    const txt = document.createElement('textarea');
    txt.innerHTML = html;
    return txt.value;
  };

  return (
    <div className='flex items-center justify-center'>
      <div className='w-full max-w-4xl px-4'>
        <h2 className='text-3xl font-bold mb-4'>{recipeDetails.title}</h2>
        <div className='flex justify-center mb-4'>
          <img src={recipeDetails.image} alt={recipeDetails.title} className='max-w-full h-auto rounded-lg ' style={{ maxHeight: '300px' }} />
        </div>
        <div className='mb-4'>
          <h3 className='text-xl font-semibold mb-2'>Ingredients:</h3>
          <ul className='list-disc pl-6'>
            {recipeDetails.extendedIngredients.map(ingredient => (
              <li key={ingredient.id}>{ingredient.original}</li>
            ))}
          </ul>
        </div>
        <div className='p-4 border border-gray-300 rounded-lg mb-4'>
          <h3 className='text-xl font-semibold mb-2'>Instructions:</h3>
          <p className='p-2' dangerouslySetInnerHTML={{ __html: decodeHtml(recipeDetails.instructions) }}></p>
        </div>
      </div>
    </div>
  );
}

export default RecipeDetails;
