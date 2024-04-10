import Navbar from "./Navbar"
import { BrowserRouter as Router , Routes, Route } from "react-router-dom"
import Home from "./Home"
import RecipeDetails from "./RecipeDetails"

function App() {
  

  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/recipe/:recipeId" element={<RecipeDetails/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
