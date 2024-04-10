import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const RecipeSection = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://api.spoonacular.com/recipes/random?number=5&apiKey=32964f1377524269841a7c1ec0acdf61');
        if (response.ok) {
          const data = await response.json();
          setRecipes(data.recipes);
        } else {
          throw new Error('Failed to fetch recipes');
        }
      } catch (error) {
        console.log('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  const extractDescription = (summary) => {
    // Extract 2-3 lines of description from HTML summary
    const tempElement = document.createElement('div');
    tempElement.innerHTML = summary;
    const description = tempElement.textContent.trim();
    return description.length > 150 ? description.slice(0, 150) + '...' : description;
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className='flex justify-center items-center mt-4 mb-4'>
      <div className='w-4/5 bg-amber-100 border border-b rounded-lg p-4'>
        <h2 className='text-xl font-bold mb-4'>Featured Recipes</h2>
        <input
          type='text'
          placeholder='Search recipes by name or ingredients'
          value={searchQuery}
          onChange={handleSearch}
          className='w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg'
        />
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
          {recipes
            .filter(recipe => {
              // Filter recipes based on search query
              return (
                recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                (recipe.ingredients && recipe.ingredients.some(ingredient =>
                  ingredient.toLowerCase().includes(searchQuery.toLowerCase())
                ))
              );
            })
            .map(recipe => (
              <div key={recipe.id} className='bg-white rounded-lg p-4 shadow-md'>
                <img src={recipe.image} alt={recipe.title} className='w-full h-48 object-cover mb-4 rounded-md' />
                <Link to={`/recipe/${recipe.id}`}>
                  <h3 className='text-lg font-semibold mb-2'>{recipe.title}</h3>
                </Link>
                <p className='text-gray-600 mb-4'>{extractDescription(recipe.summary)}</p>
                <Link to={`/recipe/${recipe.id}`} className='text-blue-500 hover:underline'>
                  View Recipe
                </Link>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default RecipeSection;
