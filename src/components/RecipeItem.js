import { Button, Card, Col } from "react-bootstrap";

function RecipeItem({ recipe }) {
  return (
    <div className="one-recipe">
      <img className="one-recipe-img" src={recipe.image} />
      <div className="recipe-name">{recipe.name}</div>
      {/* <div className="recipe-desc">{recipe.description}</div> */}
    </div>
  );
}

export default RecipeItem;
